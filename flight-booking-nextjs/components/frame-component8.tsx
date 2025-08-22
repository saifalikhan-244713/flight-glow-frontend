import { useEffect, useState } from 'react';
import FrameComponent9 from './frame-component9';
import axios from 'axios';

const FrameComponent8 = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullname: '',
    birthday: '',
    gender: '',
    maritalStatus: '',
  });

  const saveProfile = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('formadata-contact-bottom', formData);
    console.log('saveProfile');

    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/profile`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log('response.data', response.data);
      // Move setIsEditing here after API call succeeds
      console.log('isediting-before', isEditing);
      setIsEditing(false);
      console.log('isediting-after', isEditing);

      setIsEditing(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/profile`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        console.log('get-profile', response.data);
        setFormData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  interface FormData {
    fullname: string;
    birthday: string;
    gender: string;
    maritalStatus: string;
  }

  return (
    <section className="box-border flex w-[1440px] flex-row items-start justify-center px-5 py-0 text-left font-kanit text-17xl text-blue-2">
      <div className="box-border flex w-[1240px] max-w-full flex-col items-start justify-start overflow-hidden rounded-3xs bg-aliceblue-100 px-0 pb-5 pt-0">
        <FrameComponent9
          // setIsEditing={setIsEditing}
          profile="Profile"
          basicInfoForAFasterBookin="Basic info, for a faster booking experience"
        />
        <div className="box-border flex max-w-full flex-row items-start justify-start self-stretch px-5 py-0 text-base text-grey-3">
          <div className="flex max-w-full flex-1 flex-row flex-wrap items-start justify-start gap-[40px]">
            <div className="box-border flex min-w-[435px] max-w-full flex-1 flex-col items-start justify-start gap-[10px] rounded-3xs border-b-[1px] border-solid border-grey-6 bg-aliceblue-100">
              <div className="flex flex-row items-center justify-between self-stretch border-b border-solid border-grey-6 px-[25px] py-2.5">
                <div className="flex h-9 w-[200px] items-center">NAME</div>
                {isEditing ? (
                  <input
                    type="text"
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleChange}
                    className="w-[330px] rounded border border-gray-300 p-2"
                  />
                ) : (
                  <h3 className="m-0 w-[330px] text-5xl font-normal text-blue-2">
                    {formData.fullname}
                  </h3>
                )}
              </div>

              <div className="flex flex-row items-center justify-between self-stretch border-b border-solid border-grey-6 px-[25px] py-2.5">
                <div className="flex h-9 w-[200px] items-center">BIRTHDAY</div>
                {isEditing ? (
                  <input
                    type="text"
                    name="birthday"
                    value={formData.birthday}
                    onChange={handleChange}
                    className="w-[330px] rounded border border-gray-300 p-2"
                  />
                ) : (
                  <div className="w-[330px] text-5xl text-blue-2">
                    {formData.birthday}
                  </div>
                )}
              </div>
            </div>

            <div className="box-border flex min-w-[435px] max-w-full flex-1 flex-col items-start justify-start gap-[10px] rounded-3xs border-b-[1px] border-solid border-grey-6 bg-aliceblue-100">
              <div className="flex flex-row items-center justify-between self-stretch border-b border-solid border-grey-6 px-[25px] py-2.5">
                <div className="flex h-9 w-[200px] items-center">GENDER</div>
                {isEditing ? (
                  <input
                    type="text"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-[330px] rounded border border-gray-300 p-2"
                  />
                ) : (
                  <h3 className="m-0 w-[330px] text-5xl font-normal text-blue-2">
                    {formData.gender}
                  </h3>
                )}
              </div>

              {/* Marital Status */}
              <div className="flex flex-row items-center justify-between self-stretch border-b border-solid border-grey-6 px-[25px] py-2.5">
                <div className="flex h-9 w-[200px] items-center">
                  MARITAL STATUS
                </div>
                {isEditing ? (
                  <input
                    type="text"
                    name="maritalStatus"
                    value={formData.maritalStatus}
                    onChange={handleChange}
                    className="w-[330px] rounded border border-gray-300 p-2"
                  />
                ) : (
                  <h3 className="m-0 w-[330px] text-5xl font-normal text-blue-2">
                    {formData.maritalStatus}
                  </h3>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center px-5 py-3">
          <button
            onClick={(e) =>
              isEditing ? saveProfile(e) : setIsEditing(!isEditing)
            }
            className="bg-blue-500 hover:bg-blue-700 rounded-md bg-blue-2 px-6 py-2 text-lg text-white transition"
          >
            {isEditing ? 'Save' : 'Edit'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent8;
