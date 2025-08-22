import { useState, useRef, useEffect } from 'react';
import Datepicker from 'tailwind-datepicker-react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

interface DatePickerComponentProps {
  onDateChange: (date: Date | null) => void;
  placeholderProp: string;
  minDate?: Date;
  name: string;
  onInputClick: () => void;
  defaultDate?: Date | null;
  inputClass?: string;
}

const DatePickerComponent: React.FC<DatePickerComponentProps> = ({
  onDateChange,
  placeholderProp,
  minDate,
  name,
  onInputClick,
  defaultDate,
  inputClass,
}) => {
  const [show, setShow] = useState(false);
  const datepickerRef = useRef<HTMLDivElement | null>(null);

  const options = {
    autoHide: true,
    todayBtn: false,
    clearBtn: true,
    clearBtnText: 'Clear',
    maxDate: new Date('2030-01-01'),
    minDate: minDate || new Date('1950-01-01'),
    theme: {
      background: 'bg-lightblue',
      todayBtn: 'bg-blue-500 text-white cursor-pointer',
      clearBtn:
        'bg-blue-200 text-gray-800 hover:bg-blue-2 hover:text-white cursor-pointer clear-btn',
      icons: 'bg-transparent hover:bg-blue-2 hover:text-white cursor-pointer',
      text: 'hover:bg-white hover:text-lightblue cursor-pointer',
      disabledText: 'text-grey-3 hover:bg-lightblue hover:text-grey-3',
      input:
        inputClass ||
        'cursor-pointer bg-white font-light font-kanit text-base bg-[transparent] h-6 flex-1 text-grey-75 w-[calc(100%_-_45px)] border-0',
      selected: 'rounded-lg bg-blue-2 text-white ',
      inputIcon: 'hidden',
    },
    icons: {
      prev: () => (
        <span>
          <ChevronLeftIcon className="h-4 w-4" />
        </span>
      ),
      next: () => (
        <span>
          <ChevronRightIcon className="h-4 w-4" />
        </span>
      ),
    },
    defaultDate: defaultDate,
    datepickerClassNames:
      'pt-0 top-15 border-[1px] border-solid rounded-3xs border-grey-7',
    language: 'en',
    disabledDates: [],
    weekDays: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
    inputNameProp: name,
    inputIdProp: name,
    inputPlaceholderProp: placeholderProp,
    // Change the format to show only the first three letters of the month and hide the year
    inputDateFormatProp: {
      day: 'numeric' as 'numeric',
      month: 'short' as 'short', // Use "short" to display abbreviated month
      year: undefined, // Set to undefined to hide the year
    },
  };

  const handleChange = (selectedDate: Date | null) => {
    if (selectedDate === null) {
      setShow(false);
    }
    onDateChange(selectedDate);
  };

  const handleClick = () => {
    onInputClick();
  };

  const handleClose = (state: boolean) => {
    setShow(state);
  };
  // useEffect(() => {
  // 	const elements = document.querySelectorAll(".pointer-events-none");
  // 	elements.forEach((element) => {
  // 		element.style.display = "show";
  // 	});
  // }, []);
  return (
    <div className="relative w-full">
      {/* Datepicker */}
      <Datepicker
        options={options}
        onChange={handleChange}
        show={show}
        setShow={handleClose}
      />

      {/* Text Box Positioned on Top */}
      {/* <input
				className="absolute top-0 left-0 w-full h-full bg-transparent border-none outline-none text-grey-75 text-left pl-2 pr-8"
				type="text"
				readOnly
				onClick={handleClick}
				placeholder={placeholderProp}
				name={name}
				style={{ zIndex: 10 }} // Ensure the text box is above the Datepicker
				
			/> */}
    </div>
  );
};

export default DatePickerComponent;
