import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedTravelers } from '../store/slices/selectedTravelersSlice'; // Ensure correct import
import axios from 'axios';
import profilePic from './profile_circle_1.png';
import { RootState } from '@/store/slices/store';

interface TravellerProps {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  emailAddress: string;
  dateOfBirth: string;
  gender: string;
  nationality: string;
  documentType: string;
  number: string;
  issuanceDate: string;
  expiryDate: string;
  issuanceLocation: string;
  companyName: string;
  gstNumber: string;
  birthPlace: string;
  address: string;
}

const TravellerCard: React.FC<TravellerProps> = (props) => {
  const dispatch = useDispatch();

  const addToSelectedTravelers = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (event.target.checked) {
      dispatch(setSelectedTravelers([props]));
    }
  };

  const deleteTraveller = async () => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this traveler?',
    );
    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem('token');
      await axios.delete(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/traveller/${props.id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );

      alert('Traveller deleted successfully!');
    } catch (error) {
      console.error('Error deleting traveller:', error);
      alert('Failed to delete traveller.');
    }
  };

  return (
    <div className="flex items-center justify-between rounded-lg bg-[#F6FAFE] p-4 shadow-md">
      <div className="flex flex-1 items-center gap-3">
        <input
          type="checkbox"
          className="mr-3 h-5 w-5"
          onChange={addToSelectedTravelers}
        />
        <img src={profilePic.src} alt="profile" className="h-8 w-8" />
        <p className="font-semibold text-black">
          {props.firstName} {props.lastName}
        </p>
      </div>

      <div className="flex-1">
        <p className="text-gray-600">+ {props.phone}</p>
      </div>

      <div className="flex items-center gap-4">
        <button className="bg-transparent text-lg text-blue hover:text-blue-2">
          Edit Detail
        </button>
        <div
          className="text-red-500 cursor-pointer hover:text-gray-300"
          onClick={deleteTraveller}
        >
          <button>delete</button>
        </div>
      </div>
    </div>
  );
};

export default TravellerCard;
