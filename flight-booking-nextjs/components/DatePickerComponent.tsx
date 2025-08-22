import React, { useEffect, useRef, useCallback } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CalendarDaysIcon } from '@heroicons/react/20/solid';
import { UseFormRegisterReturn, useFormContext } from 'react-hook-form';

const DatePickerComponent = ({
  selectedDate,
  handleDateChange,
  isOpen,
  toggleOpen,
  placeholderText,
  name,
  register,
  setValue,
  trigger,
}: {
  selectedDate: Date | null;
  handleDateChange: (date: Date | null) => void;
  isOpen: boolean;
  toggleOpen: () => void;
  placeholderText: string;
  name: string;
  register: UseFormRegisterReturn;
  setValue: (name: string, value: any) => void;
  trigger: (name: string) => void;
}) => {
  const datePickerRef = useRef<any>(null);

  useEffect(() => {
    if (isOpen && datePickerRef.current) {
      datePickerRef.current.setFocus();
    }
  }, [isOpen]);

  const handleDateChangeWithValidation = useCallback(
    (date: Date | null) => {
      handleDateChange(date);
      setValue(name, date ? date.toISOString() : '');
      trigger(name);
    },
    [handleDateChange, setValue, trigger, name],
  );

  return (
    <div className="relative box-border flex h-[50px] w-full items-start justify-start rounded-3xs border-[1px] border-solid border-grey-6">
      <CalendarDaysIcon
        className="w-8 cursor-pointer pl-2 pt-1"
        onClick={toggleOpen}
      />
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChangeWithValidation}
          onClickOutside={toggleOpen}
          onSelect={toggleOpen}
          placeholderText={placeholderText}
          ref={datePickerRef}
          // minDate={new Date()}
          showMonthDropdown={true}
          showYearDropdown={true}
          dropdownMode="select"
          dateFormat="dd/MM/yyyy"
          className="ml-3 box-border flex h-[35px] w-full flex-col items-start justify-start bg-[transparent] p-1 px-0 pb-0 text-left font-kanit text-base text-grey-4 [border:none] [outline:none]"
        />
      <input
        type="hidden"
        {...register}
        value={selectedDate ? selectedDate.toISOString() : ''}
      />
    </div>
  );
};

export default DatePickerComponent;
