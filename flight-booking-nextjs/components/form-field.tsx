import type { NextPage } from "next";
import DealCard1 from "./deal-card1";

const FormField: NextPage = () => {
  return (
    <div className="w-[925px] flex-1 overflow-x-auto flex flex-row flex-wrap items-start justify-start max-w-full text-left text-lg text-blue-2 font-kanit">
      <DealCard1 image="/image1@2x.png" />
      <DealCard1 image="/rectangle-46381@2x.png" propMarginLeft="-2px" />
      <DealCard1 image="/rectangle-46371@2x.png" propMarginLeft="-2px" />
      <DealCard1 image="/image1@2x.png" propMarginLeft="-2px" />
      <DealCard1 image="/rectangle-46381@2x.png" propMarginLeft="-2px" />
      <DealCard1 image="/rectangle-46371@2x.png" propMarginLeft="-2px" />
    </div>
  );
};

export default FormField;
