import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import TravellerController from '@/controllers/traveller.controller';
// import OrderController from '@/controllers/order.controller';
import SavedTravellerDeatails from '@/components/SavedTravellerDeatails';
import { useDispatch, useSelector } from 'react-redux';
import AddTravellerForm from './AddTravellerForm';
import {
  setTravellers,
  setContactDetails,
  setTravellerSelectedResults,
} from '@/store/slices/travellerSlice';
import { RootState } from '@/store/slices/store';
import { useSession } from 'next-auth/react';
import {
  fetchTravellerResults,
  fetchContactResults,
} from '@/utils/travellerUtils';
import Image from 'next/image';
import OrderModel from '@/models/order.model';
import { PlusIcon, ArrowRightCircleIcon } from '@heroicons/react/20/solid';
import CustomAlert from '@/components/CustomAlert';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
// import 'sweetalert2/src/sweetalert2.scss'
import 'sweetalert2/dist/sweetalert2.min.css';
import { handleCreateOrder } from '@/utils/orderUtils'; // Import the utility function
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { addTraveller } from '@/store/slices/travellersSlice';
import TravellerList from './TravellerList';
import { Router } from 'next/router';
import orderController from '@/controllers/order.controller';
// import { error } from 'console';

interface SavedTravellersComponentProps {
  onClickToggleHandle: () => void;
}
const handleOrder = (travelers:any) => {
  orderController.createOrder(travelers);
};

const SaveTravellers: NextPage<SavedTravellersComponentProps> = ({
  onClickToggleHandle,
}) => {
  const dispatch = useDispatch();
  const { data: session } = useSession();
  const { resultRow, adult, children, infants } = useSelector(
    (state: RootState) => state.search,
  );
  const [alertOpen, setAlertOpen] = useState(false);

  const { TravellerResults, ContactResults, TravellerSelectedResults } =
    useSelector((state: RootState) => state.traveller);

  const [orderId, SetorderId] = useState('');

  // const travellers = useSelector(
  //   (state: RootState) => state.travellers.travellers,
  // );
  const travelers = useSelector(
    (state: RootState) => state.selectedTravelers.selectedTravelers,
  );
  // function handleOrder() {
  //   const response = await axios.post("")
  // }
  const fetchData = async () => {
    try {
      console.log('Fetching travellers and contacts');

      // Fetch travellers from session-based function
      const travellers = await fetchTravellerResults(session);
      dispatch(setTravellers(travellers));

      // Fetch contact details
      const contacts = await fetchContactResults(session);
      dispatch(setContactDetails(contacts));

      // Fetch travellers from API
    } catch {
      throw Error;
    }
  };

  // }, [dispatch, session]);

  // const handleClose = () => {
  //   setAlertOpen(false);
  // };

  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    console.log('token');
    const token = localStorage.getItem('token');
    setUserLoggedIn(!!token);
    console.log('value of userLoggedIn is', !!token);
  }, []);

  const deleteTraveller = async (id: number) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to delete this item?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    });

    if (result.isConfirmed) {
      try {
        // Call deleteTraveller API
        const response = await TravellerController.deleteTraveller(id);

        if (response.data.code === 200 && response.data.errors.length === 0) {
          toast.success(response.data.message);
          await fetchTravellerResults(session).then((response) => {
            dispatch(setTravellers(response));
          });
        } else {
          // Deletion failed
          toast.error(response.data.detail);
        }
      } catch (err: any) {
        // Handle error if API call fails
        toast.error(err.title);
      }
    }
  };

  return (
    <>
      <div className="box-border flex max-w-full shrink-0 flex-col items-start justify-start gap-[40px] self-stretch rounded-3xs border-[1px] border-solid border-grey-6 bg-aliceblue-100 mq750:gap-[20px]">
        <div className="box-border flex max-w-full shrink-0 flex-col items-start justify-start gap-2 self-stretch rounded-3xs border-[1px] border-solid border-grey-6 bg-aliceblue-100 px-0 pb-1 pt-0">
          <div className="box-border flex max-w-full flex-row flex-wrap items-start justify-start gap-12 self-stretch overflow-hidden rounded-b-none rounded-t-3xs px-2 py-2 [background:linear-gradient(rgba(255,_255,_255,_0.95),_rgba(255,_255,_255,_0.95)),_#0065ca]">
            {userLoggedIn ? (
              <div className="relative inline-block min-w-[211px] max-w-full flex-1 mq450:text-lgi">
                <p className="m-0 font-medium">Save Traveler(s)</p>
                <p className="m-0 text-5xl font-light text-chocolate">
                  {TravellerResults &&
                  Array.isArray(TravellerResults) &&
                  TravellerResults.length > 0 ? (
                    <div>You have {TravellerResults.length} Traveler(s) </div>
                  ) : (
                    'You have not added any adults to the list'
                  )}
                </p>
              </div>
            ) : (
              <div className="travellerLoginSection bg-ecf5fa flex gap-5 rounded-md p-2.5">
                <div className="makeFlex perfectCenter flex items-center justify-between">
                  <div className="mr-2.5 flex items-center">
                    {/* <UserPlusIcon className="h-5 w-5"/> */}

                    <img
                      src="/UserPlusIcon.png"
                      alt="Login User"
                      className="loginUserImg bgProperties h-6 w-6"
                    />
                  </div>
                  <p className="text-sm">
                    Log in to view your{' '}
                    <b>saved traveller list, unlock amazing deals</b> &amp; much
                    more!
                  </p>
                </div>
                <div>
                  <a
                    href="/login"
                    target="_blank"
                    className="loginBtn text-rt-page cursor-pointer border-0 bg-transparent text-base font-bold uppercase text-blue outline-0"
                  >
                    LOGIN NOW
                  </a>
                </div>
              </div>
            )}

            <button
              onClick={onClickToggleHandle}
              className="mt-5 box-border flex w-32 shrink-0 cursor-pointer flex-row items-start justify-start overflow-hidden rounded-3xs bg-blue-2 px-[44.5px] py-3 text-center [border:none]"
            >
              <div className="relative inline-block min-w-[27px] flex-1 text-center font-kanit text-sm font-semibold leading-[20px] text-white">
                Add
              </div>
              <div className="box-border flex h-[19px] flex-col items-start justify-start px-0 pb-0 pt-px">
                <PlusIcon className="h-5 w-5 text-white" />
              </div>
            </button>
          </div>
        </div>
      </div>
      {userLoggedIn ? <TravellerList /> : null}
      {userLoggedIn ? <AddTravellerForm /> : ''}
      <button onClick={() => handleOrder(travelers)}>continut to booking</button>
    </>
  );
};

export default SaveTravellers;
