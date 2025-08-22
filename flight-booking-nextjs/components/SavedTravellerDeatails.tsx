import type { NextPage } from "next";
import { setEditTraveller } from "@/store/slices/travellerSlice";
import { useDispatch, useSelector } from "react-redux";
import { TrashIcon } from "@heroicons/react/20/solid";
import TravellerController from "@/controllers/traveller.controller";
import React from 'react';
import { RootState } from "@/store/slices/store";
import {
  setTravellers,
  setContactDetails, setTravellerSelectedResults
} from "@/store/slices/travellerSlice";

export type SavedTravellerDeatailProps = {
  fullName?: string;
  gender?: string;
  editTraveller?: string;
  phone?: string;
  traveller_id: number;
  deleteTravellerMain: any;
  onToggleEdit: () => void; // Corrected type
};

const SavedTravellerDeatails: NextPage<SavedTravellerDeatailProps> = ({
  fullName,
  gender,
  editTraveller,
  phone,
  traveller_id, deleteTravellerMain, onToggleEdit
}) => {
  const dispatch = useDispatch();
  const editTraveler = (id: number) => {
    onToggleEdit();
    dispatch(setEditTraveller(id));
  };

  const { TravellerResults, TravellerSelectedResults } = useSelector(
    (state: RootState) => state.traveller
  );

  const [isChecked, setIsChecked] = React.useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setIsChecked(isChecked);
    onCheckboxChange(traveller_id, isChecked);
  };
  const onCheckboxChange = (traveller_id: number, isChecked: boolean) => {

    if (isChecked) {
      let newTravellerSelectedResults = TravellerSelectedResults || [];

      const isAlreadySelected = newTravellerSelectedResults.some(
        (traveller) => traveller.id === traveller_id
      );

      if (!isAlreadySelected) {
        // Find the traveller object to add
        const travellerToAdd = TravellerResults.find(traveller => traveller.id === traveller_id);
        if (travellerToAdd) {
          const updatedSelectedResults = [...newTravellerSelectedResults, travellerToAdd];
          dispatch(setTravellerSelectedResults(updatedSelectedResults));
        }
      }
    } else {
      let newTravellerSelectedResults = TravellerSelectedResults || [];
      const updatedSelectedResults = newTravellerSelectedResults.filter(
        (traveller) => traveller.id !== traveller_id
      );
      // dispatch(setTravellerSelectedResults(updatedSelectedResults));
    }
  };

  console.log(TravellerSelectedResults);
  return (
    <>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[22px] pl-5 box-border max-w-full text-left text-base text-blue-2 font-kanit">
        <div className="flex-1 flex flex-row items-start justify-center py-0 px-5 box-border max-w-full mq750:gap-[40px_20px]">
          <div className="w-[1030px] rounded-3xs bg-aliceblue-100 flex flex-col items-start justify-start max-w-full">
            <div className="self-stretch box-border overflow-hidden flex flex-row items-center justify-between py-2.5 px-[25px] max-w-full gap-5 border-b-[1px] border-solid border-grey-6 mq1050:flex-wrap">
              <input
                type="checkbox"
                name="selectedTraveller"
                value={traveller_id}
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="h-5 w-5 cursor-pointer"
              />
              <img
                className="h-[38px] w-[38px] relative"
                alt=""
                src="/profile_circle_1.svg"
              />
              <h3 className="m-0 h-10 w-[380px] relative text-5xl flex items-center shrink-0 max-w-full font-inherit mq450:text-lgi">
                <span className="w-full">
                  <span>{fullName}</span>
                  <span className="font-extralight"> {gender}</span>
                </span>
              </h3>
              <div className="h-10 w-[140px] relative text-grey-2 flex items-center shrink-0">
                + {phone}
              </div>
              <div className="h-10 w-[80px] relative text-blue flex items-center shrink-0 cursor-pointer" onClick={() => editTraveler(traveller_id)} >
                {editTraveller}
              </div>
              <div className="h-10 w-[80px] relative text-blue flex items-center shrink-0 cursor-pointer" onClick={() => editTraveler(traveller_id)} >

                <TrashIcon className="w-5 h-5 text-red" onClick={() => deleteTravellerMain({ traveller_id })} />
                {/* <input type="checkbox" name="selectedTraveller" value={traveller_id} className="h-5 w-5 cursor-pointer" /> */}
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default SavedTravellerDeatails;
