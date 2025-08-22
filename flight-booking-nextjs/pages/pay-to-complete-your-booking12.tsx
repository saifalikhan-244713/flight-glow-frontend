import type { NextPage } from "next";
import GroupComponent9 from "../components/group-component9";
import TotalAmountLabel from "../components/total-amount-label";

const PayToCompleteYourBooking1: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[502px] box-border gap-[40px] tracking-[normal] mq750:gap-[20px_40px]">
      <GroupComponent9 />
      <TotalAmountLabel />
    </div>
  );
};

export default PayToCompleteYourBooking1;
