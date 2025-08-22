// CityCard.tsx
import React from 'react';
import { ConvertCapitalFirstLetterWithSpace, ConvertCapitalFirstLetter } from "@/utils/stringUtils";
interface City {
  id: string;
  cityName: string;
  iataCode: string;
  address: string;
  logo: string;
}

interface CityCardProps {
  city: City;
  onSelect: (city: City) => void;
}

const CityCard: React.FC<CityCardProps> = ({ city, onSelect }) => {
  const handleClick = () => {
    onSelect(city);
  };

  return (
    <div
      key={city.id}
      onClick={handleClick}
      className="flex items-start cursor-pointer hover:bg-aliceblue-200 p-3 w-11/12 rounded-md"
    >
      <div className="flex items-start gap-4">
        <img className="w-6 h-6 rounded-full object-cover" alt={city.cityName} src={city.logo} />
        <div className="flex flex-col">
          <div className="text-sm font-semibold"> {city.cityName}
            <strong className="text-sm text-gray-500"> {city.iataCode}</strong>
          </div>
          {city.address &&
            <div className="text-sm text-gray-600 w-full"> {ConvertCapitalFirstLetter(city.address)} </div>
          }
        </div>
      </div>
    </div>
  );
};

export default CityCard;
