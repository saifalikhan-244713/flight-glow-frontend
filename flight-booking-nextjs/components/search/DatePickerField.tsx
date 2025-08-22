import { FC, useRef, useEffect, useCallback } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface DatePickerFieldProps {
    date: Date | null;
    onDateChange: (date: Date | null) => void;
    onClear: () => void;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    placeholder: string;
    errorClass?: string;
}

const DatePickerField: FC<DatePickerFieldProps> = ({
    date,
    onDateChange,
    onClear,
    isOpen,
    setIsOpen,
    placeholder,
    errorClass
}) => {
    const datePickerRef = useRef<HTMLDivElement>(null);

    // Handle clicks outside of the DatePicker
    const handleClickOutside = useCallback((event: MouseEvent) => {
        if (datePickerRef.current && !datePickerRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    }, [setIsOpen]);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [handleClickOutside]);

    // Toggle DatePicker visibility on input or icon click
    const handleInputClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div
            ref={datePickerRef}
            className={`h-[60px] flex-1 rounded-3xs box-border overflow-hidden flex flex-col items-start justify-start py-[3px] px-[7px] border-[1px] border-solid ${errorClass === "DepartureDate" && !date ? "border-red" : "border-grey-7"}`}
        >
            <div className="self-stretch flex-1 overflow-hidden flex flex-row items-center justify-start py-[15px] px-0 gap-[8px]">
                <img
                    className="h-6 w-6 relative min-h-[24px] cursor-pointer"
                    alt="Calendar icon"
                    src="/vuesaxlinearcalendar.svg"
                    onClick={handleInputClick}
                />
                <div className="flex-1 relative text-base font-light font-kanit text-grey-4 text-left">
                    <input
                        className="w-[calc(100%_-_24px)] [border:none] [outline:none] font-light font-kanit text-base bg-[transparent] h-6 flex-1 relative text-grey-4 text-left  items-center min-w-[124px] p-0"
                        placeholder={placeholder}
                        type="text"
                        value={date ? date.toLocaleDateString() : ""}
                        readOnly
                        onClick={handleInputClick}
                    />
                    {date && (
                        <button
                            type="button"
                            onClick={onClear}
                            className="text-xs text-blue-500 text-right hover:text-blue-700 cursor-pointer"
                        >
                            Clear
                        </button>
                    )}
                </div>
                {isOpen && (
                    <div className="absolute z-10">
                        <DatePicker
                            selected={date}
                            onChange={onDateChange}
                            minDate={new Date()} // Disable dates before today
                            inline
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default DatePickerField;
