import type { NextPage } from 'next';
import React, { useState, useRef, useEffect } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { fetchCityLocations } from '@/Common/common-function';
import { useForm, FieldValues } from 'react-hook-form';
import TravellerModel from '@/models/traveller.model';
import ErrorComponent from '@/components/Errors/ErrorComponent';
import SavedTravellers from '@/components/SavedTravellers';
import { useSession } from 'next-auth/react';
import DatePickerComponent from '@/components/DatePickerComponent';
import { useDispatch, useSelector } from 'react-redux';
import { ConvertCapitalFirstLetter } from '@/utils/stringUtils';
import { RootState } from '@/store/slices/store';
import {
  fetchTravellerResults,
  fetchContactResults,
} from '@/utils/travellerUtils';
import {
  setTravellers,
  setContactDetails,
} from '@/store/slices/travellerSlice';
import CustomAlert from '@/components/CustomAlert';
import { setEditTraveller } from '@/store/slices/travellerSlice';
import TravellerController from '@/controllers/traveller.controller';
import { toast } from 'react-toastify';

const AddTravelerDetails: NextPage = () => {
  const { data: session } = useSession();
  const formRef = useRef<HTMLFormElement>(null); // Define formRef here at the component level

  const dispatch = useDispatch();
  const { resultRow } = useSelector((state: RootState) => state.search);
  const { TravellerResults, ContactResults, EditTraveller } = useSelector(
    (state: RootState) => state.traveller,
  );

  const [error, setError] = useState('');
  const [gender, setGender] = useState<string>('');
  const [passengerType, setPassengerType] = useState<string>('');
  const [dobDate, setDobDate] = useState<Date | null>(null);
  const [issuanceDate, setIssuanceDate] = useState<Date | null>(null);
  const [expiryDate, setExpiryDate] = useState<Date | null>(null);
  const [openDatePicker, setOpenDatePicker] = useState<string>('');
  const [reviewAdultArrow, setReviewAdultArrow] = useState(false);
  const adultDivRef = useRef<HTMLDivElement>(null);
  const toggleReviewAdultArrowUp = () => {
    setReviewAdultArrow((prevState) => !prevState);
  };

  const toggleAddAdultOpen = () => {
    //scroll to Adult popup
    if (adultDivRef.current) {
      adultDivRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    setReviewAdultArrow(true);
  };

  const toggleOpenDatePicker = (picker: string) => {
    setOpenDatePicker(openDatePicker === picker ? '' : picker);
  };

  const handleDobDateChange = (date: Date | null) => {
    setDobDate(date);
    setValue('dob_date', date ? date.toISOString() : '');
    toggleOpenDatePicker('');
  };

  const handleIssuanceDateChange = (date: Date | null) => {
    setIssuanceDate(date);
    setValue('issuance_date', date ? date.toISOString() : '');
    toggleOpenDatePicker('');
  };

  const handleExpiryDateChange = (date: Date | null) => {
    setExpiryDate(date);
    setValue('expiry_date', date ? date.toISOString() : '');
    toggleOpenDatePicker('');
  };

  const onGenderChangeHandler = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setGender(event.target.value);
  };
  const onPassengerTypeChangeHandler = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setPassengerType(event.target.value);
  };
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedLocationId, setSelectedLocationId] = useState(0);
  const [cityLocations, setCityLocations] = useState([]);
  const [travelerDetailsArrowUp, setTravelerDetailsArrowUp] = useState(true);

  const togglesetTravelerDetailsArrowUp = () => {
    setTravelerDetailsArrowUp((prevState) => !prevState);
  };

  //Handle from city onChange of input call api from here
  const handleCityInputChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const query = event.target.value;

    setSelectedLocation(query);
    if (query.length > 1) {
      // Fetch city locations if query is longer than 1 character
      try {
        const response = await fetchCityLocations(query);
        setCityLocations(response);
      } catch (error) {
        console.error('Error fetching city locations:', error);
        // Handle error if needed
      }
    } else {
      setCityLocations([]);
    }
  };

  const handleFromCitySelection = (cityName: any) => {
    setSelectedLocation(cityName.name);
    setSelectedLocationId(cityName.id);
    setCityLocations([]);
  };

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    if (session?.user && 'id' in session.user) {
      // Add user_id to the data object
      data.user_id = (session.user as { id: string }).id;
    }

    data.issuance_location = selectedLocationId;

    // Create an instance of SignUpModel with form data
    const travellerModelData = new TravellerModel(data);

    try {
      // Call saveTraveller API
      const response =
        await TravellerController.saveTraveller(travellerModelData);
      toast.success('Save the traveler successfully.');
      // setAlertOpen(true);
      if (formRef.current) {
        formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }

      if (response.code === 200 && response.errors.length === 0) {
        fetchTravellerResults(session).then((response) => {
          dispatch(setTravellers(response));
        });

        fetchContactResults(session).then((result) => {
          dispatch(setContactDetails(result));
        });

        // Registration success
        reset(); // This will clear all input fields
        toggleReviewAdultArrowUp();
      } else {
        // Registration failed
        // setError(response.data.detail);
        toast.error(response.data.detail);
      }
    } catch (err: any) {
      // Handle error if API call fails
      // setError(err.title);
      toast.error(err.title);
    }
  };

  useEffect(() => {
    dispatch(setEditTraveller(0));

    const travelerId = EditTraveller; // Assuming EditTraveller contains the ID you want to match
    const traveler = TravellerResults.find(
      (traveler: any) => traveler.id === travelerId,
    );
    dispatch(setEditTraveller(0));

    if (traveler) {
      setValue('passenger_type', traveler.passenger_type);
      setValue('company_name', traveler.company_name);
      setValue('first_name', traveler.name.firstName);
      setValue('last_name', traveler.name.lastName);
      setValue('email', traveler.contact.emailAddress);
      setValue('phone_code', traveler.contact.phones[0]?.countryCallingCode);
      setValue('phone', traveler.contact.phones[0]?.number);
      setValue('dob_date', new Date(traveler.dateOfBirth));
      setValue('birth_place', traveler.documents[0]?.birthPlace);
      setValue('gender', traveler.gender);
      setValue('postal_code', traveler.address.postalCode);
      setValue('address', traveler.address.lines);
      setValue('document_type', traveler.documents[0]?.documentType);
      setValue('document_number', traveler.documents[0]?.number);
      setValue('issuance_location1', traveler.documents[0]?.issuanceLocation);
      setSelectedLocation(traveler.documents[0]?.issuanceLocation);
      setSelectedLocationId(traveler.documents[0]?.issuanceLocationId);
      setValue('issuance_date', new Date(traveler.documents[0]?.issuanceDate));
      setValue('gender', traveler.gender);
      setValue('traveller_id', traveler.id);

      setValue('dob_date', new Date(traveler.dateOfBirth).toISOString());
      setDobDate(new Date(traveler.dateOfBirth));

      setValue(
        'issuance_date',
        new Date(traveler.documents[0]?.issuanceDate).toISOString(),
      );
      setIssuanceDate(new Date(traveler.documents[0]?.issuanceDate));

      setValue(
        'expiry_date',
        new Date(traveler.documents[0].expiryDate).toISOString(),
      );
      setExpiryDate(new Date(traveler.documents[0].expiryDate));
    }
  }, [EditTraveller, TravellerResults, setValue]);

  const travelerId = EditTraveller; // Assuming EditTraveller contains the ID you want to match
  const traveler = TravellerResults.find(
    (traveler: any) => traveler.id === travelerId,
  );

  if (traveler) {
    console.log('Traveler found:', traveler);
  } else {
    console.log('Traveler not found');
  }

  const [alertOpen, setAlertOpen] = useState(false);

  const handleClose = () => {
    setAlertOpen(false);
  };

  return (
    <>
      {/* <div className="flex-1 flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border gap-[64px] max-w-[calc(100%_-_319px)] shrink-0 text-left text-5xl text-blue-2 font-kanit mq1050:gap-[32px_64px] mq1050:max-w-full mq450:gap-[16px_64px]"> */}

      <div
        className="flex max-w-full flex-col items-start justify-start gap-10 self-stretch mq450:gap-[26px_52px]"
        id="addTrvellerDiv"
      >
        <div className="flex w-[910px] max-w-full flex-row flex-wrap items-start justify-start gap-[4px]">
          <div className="box-border flex min-w-[573px] max-w-full flex-1 flex-col items-start justify-start px-0 pb-0 pt-1.5 mq750:min-w-full">
            <h2 className="relative m-0 inline-block h-[15px] self-stretch font-inherit text-inherit font-medium leading-[110.3%] mq450:text-lgi mq450:leading-[21px]">
              3. Add traveler details
            </h2>
          </div>
          <img
            className="relative h-6 w-6 cursor-pointer"
            alt=""
            src={
              travelerDetailsArrowUp
                ? 'arrowdown-grey.svg'
                : 'rightArrowdown.png'
            }
            onClick={togglesetTravelerDetailsArrowUp}
          />
        </div>

        {travelerDetailsArrowUp && (
          <>
            <SavedTravellers onClickToggleHandle={toggleAddAdultOpen} />
            <div className="mb-2.5 mt-[-25px] flex items-center rounded border border-[#f0ce92] bg-[#ffedd1] p-3 font-kanit text-sm">
              <span className="alert-text">
                <b>Important: </b>Enter name as mentioned on your passport or
                Government approved IDs.
                <br />
                Please ensure that the Frequent Flyer No entered here is against
                the same passenger name otherwise the points will not be updated
                by the airline.
              </span>
            </div>
            <div
              className={`flex max-w-[869px] flex-col self-stretch rounded-3xs border border-solid border-zinc-200 bg-white p-5 leading-[110.3%]`}
              id="adultDiv"
              ref={adultDivRef}
            >
              <div className="max-md:flex-wrap max-md:max-w-full flex gap-5 text-xl font-medium text-sky-950">
                <div className="flex-auto">Passenger Details</div>

                <img
                  loading="lazy"
                  className="max-md:w-5 aspect-square w-6 shrink-0 cursor-pointer"
                  src={
                    reviewAdultArrow ? 'ararrow_up.svg' : 'arrowdown-grey.svg'
                  }
                  onClick={toggleReviewAdultArrowUp}
                />
              </div>
              {reviewAdultArrow && (
                <div className="max-md:flex-wrap mt-6 flex gap-20 text-base text-gray-500 mq750:gap-5 mq450:gap-2">
                  <form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
                    {alertOpen && (
                      <div className="p-4">
                        <CustomAlert
                          title="Success"
                          message={
                            error ? error : 'Traveler Added Sucessfully.'
                          }
                          onClose={handleClose}
                          severity={error ? 'error' : 'success'}
                        />
                        <br />
                      </div>
                    )}

                    <div className="flex max-w-full flex-col items-start justify-start gap-[39.7px] self-stretch text-xl text-grey-3 mq450:gap-[20px_39.7px]">
                      <div className="flex max-w-full flex-col items-start justify-start gap-[14px] self-stretch">
                        <div className="flex max-w-full flex-row flex-wrap items-start justify-start gap-[53px] self-stretch mq450:gap-[26px]"></div>
                        <div className="flex min-w-[283px] max-w-full flex-1 flex-col items-start justify-start gap-[14px] text-left font-kanit text-xl text-grey-3"></div>
                        <h3 className="relative m-0 inline-block min-w-[64px] font-inherit text-inherit font-light leading-[110.3%] mq450:text-base mq450:leading-[18px]"></h3>
                        Passenger Type *
                        <select
                          id="select-passenger-type"
                          className="focus:ring-blue-500 flex h-[40px] w-full items-center rounded-lg border-[1px] border-solid border-grey-6 bg-[transparent] pl-5 text-left font-kanit text-base text-grey-4"
                          {...register('passenger_type', {
                            required: true,
                          })}
                        >
                          <option value="Adult">Adult</option>
                          <option value="Child">Child</option>
                          <option value="Infant">Infant</option>
                        </select>
                        {errors.gender && errors.gender.type === 'required' && (
                          <ErrorComponent
                            errorMessage={'Gender field is required'}
                          />
                        )}
                      </div>
                      <div className="flex min-w-[283px] max-w-full flex-1 flex-col items-start justify-start gap-[14px]">
                        <div className="relative z-[1] inline-block min-w-[94px] font-light leading-[110.3%] mq450:text-base mq450:leading-[18px]">
                          Company Name
                        </div>
                        <input
                          id="company-name"
                          className="relative z-[0] box-border flex h-[40px] min-w-[250px] items-center self-stretch rounded-3xs border-[1px] border-solid border-grey-6 bg-[transparent] p-5 text-left font-kanit text-base text-grey-4 [outline:none]"
                          type="text"
                          {...register('company_name')}
                        />
                        <input
                          type="hidden"
                          {...register('traveller_id')}
                          id="traveller_id"
                        />
                      </div>
                      <div className="box-border flex max-w-full flex-row items-start justify-start self-stretch px-0 pb-1.5 pt-0">
                        <div className="flex max-w-full flex-1 flex-row flex-wrap items-start justify-start gap-[53px] mq450:gap-[26px]">
                          <div className="flex min-w-[283px] max-w-full flex-1 flex-col items-start justify-start gap-[14px]">
                            <h3 className="relative z-0 m-0 inline-block min-w-[95px] font-inherit text-inherit font-light leading-[110.3%] mq450:text-base mq450:leading-[18px]">
                              First Name *
                            </h3>
                            <input
                              id="first-name"
                              className="relative z-[0] box-border flex h-[40px] min-w-[250px] items-center self-stretch rounded-3xs border-[1px] border-solid border-grey-6 bg-[transparent] p-5 text-left font-kanit text-base text-grey-4 [outline:none]"
                              type="text"
                              {...register('first_name', { required: true })}
                            />

                            {errors.first_name &&
                              errors.first_name.type === 'required' && (
                                <ErrorComponent
                                  errorMessage={'Full Name field is required'}
                                />
                              )}
                          </div>
                          <div className="flex min-w-[283px] max-w-full flex-1 flex-col items-start justify-start gap-[14px]">
                            <div className="relative z-[1] inline-block min-w-[94px] font-light leading-[110.3%] mq450:text-base mq450:leading-[18px]">
                              Last Name *
                            </div>
                            <input
                              id="last-name"
                              className="relative z-[0] box-border flex h-[40px] min-w-[250px] items-center self-stretch rounded-3xs border-[1px] border-solid border-grey-6 bg-[transparent] p-5 text-left font-kanit text-base text-grey-4 [outline:none]"
                              type="text"
                              {...register('last_name', { required: true })}
                            />
                            {errors.last_name &&
                              errors.last_name.type === 'required' && (
                                <ErrorComponent
                                  errorMessage={'Last Name field is required'}
                                />
                              )}
                          </div>
                        </div>
                      </div>
                      <div className="box-border flex max-w-full flex-row items-start justify-start self-stretch px-0 pb-1.5 pt-0">
                        <div className="flex max-w-full flex-1 flex-row flex-wrap items-start justify-start gap-[53px] mq450:gap-[26px]">
                          <div className="flex min-w-[283px] max-w-full flex-1 flex-col items-start justify-start gap-[14px]">
                            <h3 className="relative z-0 m-0 inline-block min-w-[95px] font-inherit text-inherit font-light leading-[110.3%] mq450:text-base mq450:leading-[18px]">
                              Email *
                            </h3>
                            <input
                              id="email"
                              className="relative z-[0] box-border flex h-[40px] min-w-[250px] items-center self-stretch rounded-3xs border-[1px] border-solid border-grey-6 bg-[transparent] p-5 text-left font-kanit text-base text-grey-4 [outline:none]"
                              type="text"
                              {...register('email', {
                                required: true,
                                pattern:
                                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                              })}
                            />
                            {errors.email &&
                              errors.email.type === 'required' && (
                                <ErrorComponent
                                  errorMessage={'Email field is required'}
                                />
                              )}
                            {errors.email &&
                              errors.email.type === 'pattern' && (
                                <ErrorComponent
                                  errorMessage={'Please write a valid email'}
                                />
                              )}
                          </div>
                          <div className="flex min-w-[283px] max-w-full flex-1 flex-col items-start justify-start gap-[14px]">
                            <h3 className="relative z-0 m-0 inline-block min-w-[95px] font-inherit text-inherit font-light leading-[110.3%] mq450:text-base mq450:leading-[18px]">
                              Mobile Number
                            </h3>
                            <div className="box-border flex h-[46px] w-[530px] max-w-full flex-row items-start justify-start px-0 pb-1.5 pt-0">
                              <div className="box-border flex max-w-full flex-1 flex-row items-start justify-start gap-[1px] self-stretch rounded-3xs border-[1px] border-solid border-grey-6 py-0 pr-[34px]">
                                <div className="relative box-border hidden w-[530px] max-w-full self-stretch rounded-3xs border-[1px] border-solid border-grey-6" />

                                <select
                                  {...register('phone_code', {
                                    required: true,
                                  })}
                                  className="w-15 my-1 items-center border-none bg-[transparent] pl-2 text-left font-kanit text-base text-grey-4 focus:outline-none"
                                >
                                  <option value="91">+91</option>
                                  <option value="1">+1</option>
                                  <option value="2">+2</option>
                                  <option value="3">+3</option>
                                </select>
                                <input
                                  id="mobile-number"
                                  className="box-border flex h-[35px] w-full flex-col items-start justify-start bg-[transparent] p-2 text-left font-kanit text-base text-grey-4 [border:none] [outline:none]"
                                  type="text"
                                  {...register('phone', { required: true })}
                                />
                              </div>
                            </div>
                            {errors.phone &&
                              errors.phone.type === 'required' && (
                                <ErrorComponent
                                  errorMessage={
                                    'Phone number field is required'
                                  }
                                />
                              )}
                          </div>
                        </div>
                      </div>
                      <div className="flex max-w-full flex-row flex-wrap items-start justify-start gap-[53px] self-stretch mq450:gap-[26px]">
                        <div
                          id="date-picking"
                          className="flex min-w-[283px] max-w-full flex-1 flex-col items-start justify-start gap-[14px]"
                        >
                          <h3 className="relative z-0 m-0 inline-block min-w-[95px] font-inherit text-inherit font-light leading-[110.3%] mq450:text-base mq450:leading-[18px]">
                            Date of Birth *
                          </h3>
                          <DatePickerComponent
                            selectedDate={dobDate}
                            handleDateChange={handleDobDateChange}
                            isOpen={openDatePicker === 'dob_date'}
                            toggleOpen={() => toggleOpenDatePicker('dob_date')}
                            placeholderText="Select Date of Birth"
                            register={register('dob_date', {
                              required: 'Date of Birth is required',
                            })}
                            setValue={setValue}
                            trigger={trigger}
                            name="dob_date"
                          />
                          {errors.dob_date && (
                            <ErrorComponent
                              errorMessage={'Date of Birth field is required'}
                            />
                          )}
                        </div>
                        <div className="flex min-w-[283px] max-w-full flex-1 flex-col items-start justify-start gap-[14px]">
                          <div className="relative z-[1] inline-block min-w-[94px] font-light leading-[110.3%] mq450:text-base mq450:leading-[18px]">
                            Place of Birth *
                          </div>
                          <input
                            id="place-of-birth"
                            className="relative z-[0] box-border flex h-[40px] min-w-[250px] items-center self-stretch rounded-3xs border-[1px] border-solid border-grey-6 bg-[transparent] p-5 text-left font-kanit text-base text-grey-4 [outline:none]"
                            type="text"
                            {...register('birth_place', { required: true })}
                          />
                          {errors.birth_place &&
                            errors.birth_place.type === 'required' && (
                              <ErrorComponent
                                errorMessage={
                                  'Place of Birth field is required'
                                }
                              />
                            )}
                        </div>
                      </div>
                      <div className="box-border flex max-w-full flex-row items-start justify-start self-stretch px-0 pb-1.5 pt-0">
                        <div className="flex max-w-full flex-1 flex-row flex-wrap items-start justify-start gap-[53px] mq450:gap-[26px]">
                          <div className="flex min-w-[283px] max-w-full flex-1 flex-col items-start justify-start gap-[14px] text-left font-kanit text-xl text-grey-3">
                            <h3 className="relative m-0 inline-block min-w-[64px] font-inherit text-inherit font-light leading-[110.3%] mq450:text-base mq450:leading-[18px]">
                              Gender *
                            </h3>

                            <select
                              id="genderSelect"
                              value={gender}
                              className="focus:ring-blue-500 flex h-[40px] w-full items-center rounded-lg border-[1px] border-solid border-grey-6 bg-[transparent] pl-5 text-left font-kanit text-base text-grey-4"
                              {...register('gender', {
                                required: true,
                                onChange: onGenderChangeHandler,
                              })}
                            >
                              <option value="MALE">Male</option>
                              <option value="FEMALE">Fmale</option>
                              <option value="UNSPECIFIED">Unspecified</option>
                              <option value="UNDISCLOSED">Undisclosed</option>
                            </select>
                            {errors.gender &&
                              errors.gender.type === 'required' && (
                                <ErrorComponent
                                  errorMessage={'Gender field is required'}
                                />
                              )}
                          </div>
                          <div className="flex min-w-[283px] max-w-full flex-1 flex-col items-start justify-start gap-[14px]">
                            <div className="relative z-[1] inline-block min-w-[94px] font-light leading-[110.3%] mq450:text-base mq450:leading-[18px]">
                              Postal code *
                            </div>
                            <input
                              id="postal-code"
                              className="relative z-[0] box-border flex h-[40px] min-w-[250px] items-center self-stretch rounded-3xs border-[1px] border-solid border-grey-6 bg-[transparent] p-5 text-left font-kanit text-base text-grey-4 [outline:none]"
                              type="text"
                              {...register('postal_code', { required: true })}
                            />
                            {errors.postal_code &&
                              errors.postal_code.type === 'required' && (
                                <ErrorComponent
                                  errorMessage={'Postal code field is required'}
                                />
                              )}
                          </div>
                        </div>
                      </div>
                      <div className="box-border flex max-w-full flex-row items-start justify-start self-stretch px-0 pb-1.5 pt-0">
                        <div className="flex max-w-full flex-1 flex-row flex-wrap items-start justify-start gap-[53px] mq450:gap-[26px]">
                          <div className="flex min-w-[283px] max-w-full flex-1 flex-col items-start justify-start gap-[14px]">
                            <h3 className="relative z-0 m-0 inline-block min-w-[95px] font-inherit text-inherit font-light leading-[110.3%] mq450:text-base mq450:leading-[18px]">
                              Address *
                            </h3>
                            <input
                              id="address"
                              className="relative z-[0] box-border flex h-[40px] min-w-[250px] items-center self-stretch rounded-3xs border-[1px] border-solid border-grey-6 bg-[transparent] p-5 text-left font-kanit text-base text-grey-4 [outline:none]"
                              type="text"
                              {...register('address', { required: true })}
                            />

                            {errors.address &&
                              errors.address.type === 'required' && (
                                <ErrorComponent
                                  errorMessage={'Address field is required'}
                                />
                              )}
                          </div>
                        </div>
                      </div>
                      <div className="relative box-border h-px self-stretch border-t-[1px] border-solid border-grey-6" />
                      <div className="flex max-w-full flex-col items-start justify-start gap-[14px] self-stretch">
                        <h3 className="relative m-0 inline-block min-w-[54px] font-inherit text-inherit font-medium leading-[110.3%] text-blue-2 mq450:text-base mq450:leading-[18px]">
                          Document
                        </h3>

                        <div className="flex max-w-full flex-row flex-wrap items-start justify-start gap-[53px] self-stretch mq450:gap-[26px]">
                          <div className="flex min-w-[283px] max-w-full flex-1 flex-col items-start justify-start gap-[14px]">
                            <div className="box-border flex max-w-full flex-row items-start justify-start self-stretch px-0 pb-1.5 pt-0">
                              <div className="flex max-w-full flex-1 flex-row flex-wrap items-start justify-start gap-[53px] mq450:gap-[26px]">
                                <div className="flex min-w-[283px] max-w-full flex-1 flex-col items-start justify-start gap-[14px]">
                                  <h3 className="relative z-0 m-0 inline-block min-w-[95px] font-inherit text-inherit font-light leading-[110.3%] mq450:text-base mq450:leading-[18px]">
                                    Document Type *
                                  </h3>
                                  <select
                                    id="document-type"
                                    className="focus:ring-blue-500 mb-6 flex h-[40px] w-full items-center rounded-lg border-[1px] border-solid border-grey-6 bg-[transparent] pl-2 text-left font-kanit text-base text-grey-4"
                                    {...register('document_type', {
                                      required: true,
                                    })}
                                  >
                                    <option value="VISA">VISA</option>
                                    <option value="PASSPORT">Passport</option>
                                    <option value="IDENTITY_CARD">
                                      Identity card
                                    </option>
                                    <option value="KNOWN_TRAVELER">
                                      Known Traveler
                                    </option>
                                    <option value="REDRESS">Redress</option>
                                  </select>
                                  {errors.document_type &&
                                    errors.document_type.type ===
                                      'required' && (
                                      <ErrorComponent
                                        errorMessage={
                                          'Document type field is required'
                                        }
                                      />
                                    )}
                                </div>

                                <div className="flex min-w-[283px] max-w-full flex-1 flex-col items-start justify-start gap-[14px]">
                                  <h3 className="relative z-0 m-0 inline-block min-w-[95px] font-inherit text-inherit font-light leading-[110.3%] mq450:text-base mq450:leading-[18px]">
                                    Number *
                                  </h3>

                                  <input
                                    id="document-number"
                                    className="relative z-[0] box-border flex h-[40px] min-w-[250px] items-center self-stretch rounded-3xs border-[1px] border-solid border-grey-6 bg-[transparent] p-5 text-left font-kanit text-base text-grey-4 [outline:none]"
                                    type="text"
                                    {...register('document_number', {
                                      required: true,
                                    })}
                                  />
                                  {errors.document_number &&
                                    errors.document_number.type ===
                                      'required' && (
                                      <ErrorComponent
                                        errorMessage={
                                          'Document number field is required'
                                        }
                                      />
                                    )}
                                </div>
                              </div>
                            </div>

                            <div className="box-border flex max-w-full flex-row items-start justify-start self-stretch px-0 pb-1.5 pt-0">
                              <div className="flex max-w-full flex-1 flex-row flex-wrap items-start justify-start gap-[53px] mq450:gap-[26px]">
                                <div className="flex min-w-[283px] max-w-full flex-1 flex-col items-start justify-start gap-[14px]">
                                  <h3 className="relative z-0 m-0 inline-block min-w-[95px] font-inherit text-inherit font-light leading-[110.3%] mq450:text-base mq450:leading-[18px]">
                                    Issuance Location *
                                  </h3>

                                  <input
                                    id="issuance-location"
                                    className="relative m-0 block h-7 w-full flex-auto rounded-3xs border-[1px] border-solid border-grey-6 bg-clip-padding px-0 py-1 text-lg font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200"
                                    type="text"
                                    value={ConvertCapitalFirstLetter(
                                      selectedLocation,
                                    )}
                                    {...register('issuance_location1', {
                                      required: true,
                                      onChange: handleCityInputChange, // Pass your handler to register
                                    })}
                                  />
                                  {errors.issuance_location1 &&
                                    errors.issuance_location1.type ===
                                      'required' && (
                                      <ErrorComponent
                                        errorMessage={
                                          'Document issuance location field is required'
                                        }
                                      />
                                    )}
                                  {cityLocations.length > 0 && (
                                    <div
                                      id="fromCityId"
                                      className="relative box-border flex w-full flex-row items-start justify-start text-start font-kanit text-3xs text-blue-2"
                                    >
                                      <div className="absolute z-[1] flex flex-1 flex-col items-start justify-start gap-1 overflow-auto rounded-3xs bg-lightblue px-3 py-2 shadow-[0px_0px_4px_rgba(0,_0,_0,_0.15)]">
                                        {cityLocations.map((city: any) => (
                                          <div
                                            key={city.id}
                                            onClick={() =>
                                              handleFromCitySelection(city)
                                            }
                                            className="flex cursor-pointer flex-row items-start justify-start gap-[4px] self-stretch"
                                          >
                                            <div className="box-border flex w-[31px] shrink-0 flex-row items-start justify-start overflow-hidden rounded border-[0.3px] border-solid border-black bg-navajowhite px-1.5 py-px">
                                              <div className="flex flex-row items-start justify-start gap-[8px]">
                                                <img
                                                  className="relative hidden h-[18px] w-[18px]"
                                                  alt=""
                                                  src="/vuesaxlinearsearchnormal.svg"
                                                />
                                                <div className="relative flex w-[18px] min-w-[18px] items-center justify-center font-light leading-[20px]">
                                                  {city.id}
                                                </div>
                                                <img
                                                  className="relative hidden h-[18px] w-[18px] shrink-0 overflow-hidden"
                                                  alt=""
                                                  src="/heroiconsoutlinearrowright.svg"
                                                />
                                              </div>
                                            </div>
                                            <div className="flex flex-row items-start justify-start overflow-hidden rounded-3xs py-px pl-0 pr-0.5 text-sm">
                                              <div className="flex flex-row items-start justify-start gap-[8px]">
                                                <img
                                                  className="relative hidden h-[18px] w-[18px]"
                                                  alt=""
                                                  src="/vuesaxlinearsearchnormal.svg"
                                                />
                                                <div className="relative flex w-[125px] items-center justify-start leading-[20px]">
                                                  {city.cityName}
                                                </div>
                                                <img
                                                  className="relative hidden h-[18px] w-[18px] shrink-0 overflow-hidden"
                                                  alt=""
                                                  src="/heroiconsoutlinearrowright.svg"
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>

                            <div className="box-border flex max-w-full flex-row items-start justify-start self-stretch px-0 pb-1.5 pt-0">
                              <div className="flex max-w-full flex-1 flex-row flex-wrap items-start justify-start gap-[53px] mq450:gap-[26px]">
                                <div className="flex min-w-[283px] max-w-full flex-1 flex-col items-start justify-start gap-[14px]">
                                  <h3 className="relative z-0 m-0 inline-block min-w-[95px] font-inherit text-inherit font-light leading-[110.3%] mq450:text-base mq450:leading-[18px]">
                                    Issuance Date *
                                  </h3>
                                  <DatePickerComponent
                                    selectedDate={issuanceDate}
                                    handleDateChange={handleIssuanceDateChange}
                                    isOpen={openDatePicker === 'issuance_date'}
                                    toggleOpen={() =>
                                      toggleOpenDatePicker('issuance_date')
                                    }
                                    placeholderText="Select Issuance Date"
                                    register={register('issuance_date', {
                                      required: true,
                                    })}
                                    setValue={setValue}
                                    trigger={trigger}
                                    name="issuance_date"
                                  />
                                  {errors.issuance_date && (
                                    <ErrorComponent
                                      errorMessage={
                                        'Issuance Date field is required'
                                      }
                                    />
                                  )}
                                </div>
                                <div className="flex min-w-[283px] max-w-full flex-1 flex-col items-start justify-start gap-[14px]">
                                  <h3 className="relative z-0 m-0 inline-block min-w-[95px] font-inherit text-inherit font-light leading-[110.3%] mq450:text-base mq450:leading-[18px]">
                                    Expiry Date *
                                  </h3>
                                  <DatePickerComponent
                                    selectedDate={expiryDate}
                                    handleDateChange={handleExpiryDateChange}
                                    isOpen={openDatePicker === 'expiry_date'}
                                    toggleOpen={() =>
                                      toggleOpenDatePicker('expiry_date')
                                    }
                                    placeholderText="Select Expiry Date"
                                    register={register('expiry_date', {
                                      required: true,
                                    })}
                                    setValue={setValue}
                                    trigger={trigger}
                                    name="expiry_date"
                                  />
                                  {errors.expiry_date && (
                                    <ErrorComponent
                                      errorMessage={
                                        'Expiry Date field is required'
                                      }
                                    />
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex max-w-full flex-col items-end justify-end gap-[14px] self-stretch">
                        <div className="flex justify-end">
                          <button
                            id="save-passenger"
                            type="submit"
                            className="cursor-pointer overflow-hidden rounded-3xs bg-blue-2 px-[55px] py-2.5 text-center font-kanit text-sm font-semibold text-white [border:none]"
                          >
                            {' '}
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </>
        )}
      </div>
      {/* </div> */}
    </>
  );
};

export default AddTravelerDetails;
