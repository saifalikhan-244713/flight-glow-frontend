import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addTraveller } from '@/store/slices/travellersSlice';

const AddTravellerForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const token = localStorage.getItem('token');

  const onSubmit = async (data: any) => {
    try {
      console.log('sending data', data);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/traveller`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log(response.data);
      dispatch(addTraveller(response.data));
    } catch (error) {
      console.error('There was an error saving the data!', error);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto w-full max-w-full rounded-md bg-white p-6 shadow-md"
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* First Name */}
          <div className="mx-auto flex flex-col">
            <label className="font-medium">First Name*</label>
            <input
              {...register('firstName', {
                required: 'First name is required',
              })}
              className="w-[350px] max-w-full rounded border p-2"
            />
            {errors.firstName && (
              <p className="text-red-500">
                {errors.firstName?.message as string}
              </p>
            )}
          </div>

          {/* Last Name */}
          <div className="mx-auto flex flex-col">
            <label className="font-medium">Last Name*</label>
            <input
              {...register('lastName', { required: 'Last name is required' })}
              className="w-[350px] max-w-full rounded border p-2"
            />
            {errors.lastName && (
              <p className="text-red-500">
                {errors.lastName?.message as string}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="mx-auto flex flex-col">
            <label className="font-medium">Email*</label>
            <input
              {...register('emailAddress', {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: 'Invalid email address',
                },
              })}
              className="w-[350px] max-w-full rounded border p-2"
            />
            {errors.emailAddress && (
              <p className="text-red-500">
                {errors.emailAddress?.message as string}
              </p>
            )}
          </div>

          {/* Mobile Number with Country Code */}
          <div className="mx-auto flex flex-col">
            <label className="font-medium">Mobile Number*</label>
            <div className="flex">
              <select
                {...register('countryCode', {
                  required: 'Country code is required',
                })}
                className="w-[80px] rounded border p-2"
              >
                <option value="+91">+91 (India)</option>
                <option value="+1">+1 (USA)</option>
                <option value="+44">+44 (UK)</option>
                <option value="+49">+49 (Germany)</option>
              </select>
              <input
                {...register('phone', {
                  required: 'Mobile number is required',
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: 'Invalid mobile number',
                  },
                })}
                className="ml-2 w-[270px] max-w-full rounded border p-2"
              />
            </div>
            {errors.phone && (
              <p className="text-red-500">{errors.phone.message as string}</p>
            )}
          </div>

          {/* Company Name */}
          <div className="mx-auto flex flex-col">
            <label className="font-medium">Company Name</label>
            <input
              type="text"
              {...register('companyName')}
              className="w-[350px] max-w-full rounded border p-2"
            />
          </div>

          {/* GST Number */}
          <div className="mx-auto flex flex-col">
            <label className="font-medium">GST Number*</label>
            <input
              type="number"
              {...register('gstNumber', {
                required: 'GST number is required',
              })}
              className="w-[350px] max-w-full rounded border p-2"
            />
            {errors.gstNumber && (
              <p className="text-red-500">
                {errors.gstNumber.message as string}
              </p>
            )}
          </div>

          {/* Date of Birth */}
          <div className="mx-auto flex flex-col">
            <label className="font-medium">Date of Birth*</label>
            <input
              type="date"
              {...register('dateOfBirth', {
                required: 'Date of birth is required',
              })}
              className="w-[350px] max-w-full rounded border p-2"
            />
            {errors.dateOfBirth && (
              <p className="text-red-500">
                {errors.dateOfBirth.message as string}
              </p>
            )}
          </div>

          <div className="mx-auto flex flex-col">
            <label className="font-medium">Birth place*</label>
            <input
              type="string"
              {...register('birthPlace', {
                required: 'Birth place is required',
              })}
              className="w-[350px] max-w-full rounded border p-2"
            />
            {errors.birthPlace && (
              <p className="text-red-500">
                {errors.birthPlace.message as string}
              </p>
            )}
          </div>

          <div className="mx-auto flex flex-col">
            <label className="font-medium">nationality*</label>
            <input
              type="string"
              {...register('nationality', {
                required: 'nationality is required',
              })}
              className="w-[350px] max-w-full rounded border p-2"
            />
            {errors.nationality && (
              <p className="text-red-500">
                {errors.nationality.message as string}
              </p>
            )}
          </div>

          {/* Gender */}
          <div className="mx-auto flex flex-col">
            <label className="font-medium">Gender*</label>
            <select
              {...register('gender', { required: 'Gender is required' })}
              className="w-[370px] max-w-full rounded border p-2"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && (
              <p className="text-red-500">{errors.gender.message as string}</p>
            )}
          </div>

          {/* Document Type */}
          <div className="mx-auto flex flex-col">
            <label className="font-medium">Document Type*</label>
            <select
              {...register('documentType', {
                required: 'Document type is required',
              })}
              className="w-[370px] max-w-full rounded border p-2"
            >
              <option value="">Select Document</option>
              <option value="passport">Passport</option>
              <option value="visa">Visa</option>
              <option value="identity_card">Identity Card</option>
              <option value="known_traveler">Known Traveler</option>
            </select>
            {errors.documentType && (
              <p className="text-red-500">
                {errors.documentType.message as string}
              </p>
            )}
          </div>

          {/* Document Number */}
          <div className="mx-auto flex flex-col">
            <label className="font-medium">Document Number*</label>
            <input
              type="text"
              {...register('number', {
                required: 'Document number is required',
              })}
              className="w-[350px] max-w-full rounded border p-2"
            />
            {errors.number && (
              <p className="text-red-500">{errors.number.message as string}</p>
            )}
          </div>
          {/* Issuance Location */}
          <div className="mx-auto flex flex-col">
            <label className="font-medium">Issuance Location*</label>
            <input
              {...register('issuanceLocation', {
                required: 'Issuance location is required',
              })}
              className="w-[350px] max-w-full rounded border p-2"
            />
            {errors.issuanceLocation && (
              <p className="text-red-500">
                {errors.issuanceLocation.message as string}
              </p>
            )}
          </div>

          {/* Issuance Date */}
          <div className="mx-auto flex flex-col">
            <label className="font-medium">Issuance Date*</label>
            <input
              type="date"
              {...register('issuanceDate', {
                required: 'Issuance date is required',
              })}
              className="w-[350px] max-w-full rounded border p-2"
            />
            {errors.issuanceDate && (
              <p className="text-red-500">
                {errors.issuanceDate.message as string}
              </p>
            )}
          </div>

          {/* Expiry Date */}
          <div className="mx-auto flex flex-col">
            <label className="font-medium">Expiry Date*</label>
            <input
              type="date"
              {...register('expiryDate', {
                required: 'Expiry date is required',
              })}
              className="w-[350px] max-w-full rounded border p-2"
            />
            {errors.expiryDate && (
              <p className="text-red-500">
                {errors.expiryDate.message as string}{' '}
              </p>
            )}
          </div>

          {/* Address */}
          <div className="mx-auto flex flex-col">
            <label className="font-medium">Address*</label>
            <textarea
              {...register('address', { required: 'Address is required' })}
              className="w-[350px] max-w-full rounded border p-2"
            />
            {errors.address && (
              <p className="text-red-500">{errors.address.message as string}</p>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-500 mt-6 w-full rounded bg-blue p-2 text-white hover:bg-sky-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTravellerForm;
