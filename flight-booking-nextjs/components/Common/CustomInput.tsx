import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { InputHTMLAttributes } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'; // Adjust path if needed

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    placeholder?: string;
    type?: string;
    validationRules?: Record<string, any>; // Adjust this type based on your validation needs
}

const CustomInput: React.FC<CustomInputProps> = ({
    name,
    placeholder = '',
    type = 'text',
    validationRules = {},
    ...rest
}) => {
    const { register } = useFormContext(); // Use the context from react-hook-form
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handleTogglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <div className="relative w-full">
            <input
                placeholder={placeholder}
                type={isPasswordVisible ? 'text' : type}
                {...register(name, validationRules)} // Use react-hook-form's register
                {...rest}
                className="w-full pl-2 [border:none] [outline:none] bg-[transparent] h-9 overflow-hidden shrink-0 flex flex-row items-center justify-start py-1 px-0 box-border font-kanit font-light text-base text-grey-3"
            />
            {type === 'password' && (
                <button
                    type="button"
                    onClick={handleTogglePasswordVisibility}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white cursor-pointer text-gray-500 "
                >
                    {isPasswordVisible ? (
                        <EyeSlashIcon className="h-5 w-5 " />
                    ) : (
                        <EyeIcon className="h-5 w-5" />
                    )}
                </button>
            )}
        </div>
    );
};

export default CustomInput;
