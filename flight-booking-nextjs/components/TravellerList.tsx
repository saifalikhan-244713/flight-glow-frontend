import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/slices/store';
import TravellerCard from './TravellerCard';
import axios from 'axios';
import { setTravellers } from '@/store/slices/travellersSlice';

const TravellerList: React.FC = () => {
  const dispatch = useDispatch();
  const travellers = useSelector(
    (state: RootState) => state.travellers.travellers,
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) return;

        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/traveller`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        console.log('Response from backend:', response.data);
        dispatch(setTravellers(response.data));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  // let usersFetched = useSelector(
  //   (state: RootState) => state.selectedTravelers.selectedTravelers,
  // );

  return (
    <div className="w-full p-4">
      {travellers.length > 0 ? (
        <>
          <h2 className="mb-4 text-xl font-bold">Travelers List</h2>
          <div className="flex w-full flex-col">
            {travellers.map((traveller) => (
              <div className="mt-5 w-full shadow-lg" key={traveller.id}>
                <TravellerCard
                  id={traveller.id}
                  refID={traveller.refID}
                  firstName={traveller.firstName}
                  lastName={traveller.lastName}
                  phone={traveller.phone}
                  companyName={traveller.companyName}
                  gstNumber={traveller.gstNumber}
                  gender={traveller.gender}
                  nationality={traveller.nationality}
                  emailAddress={traveller.emailAddress}
                  dateOfBirth={traveller.dateOfBirth}
                  documentType={traveller.documentType}
                  number={traveller.number}
                  issueDate={traveller.issueDate}
                  expiryDate={traveller.expiryDate}
                />
              </div>
            ))}
          </div>
          {/* <button onClick={fetchtheusers}>fetch</button> */}
          {/* {usersFetched.length > 0 ? (
            <div>
              {usersFetched.map((user) => (
                <p key={user.id}>
                  {user.firstName} {user.lastName}
                </p>
              ))}
            </div>
          ) : (
            ''
          )} */}
        </>
      ) : null}
    </div>
  );
};

export default TravellerList;
