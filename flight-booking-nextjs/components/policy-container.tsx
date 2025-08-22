import type { NextPage } from "next";

export type PolicyContainerType = {
  className?: string;
  title: string;
  policies: Array<{
    startDate: string;
    endDate: string;
    amount: string;
    color: string;
  }>;
  arrowUp: boolean;
  toggleUpDown: () => void;
};

const PolicyContainer: NextPage<PolicyContainerType> = ({ className = "", title, policies, arrowUp,toggleUpDown }) => {
  return (
    <div className={`self-stretch flex flex-col p-5 bg-white rounded-3xs border border-solid border-zinc-200 leading-[110.3%] max-w-[869px] ${className}`}>
      <div className="flex gap-5 text-xl font-medium text-sky-950 max-md:flex-wrap max-md:max-w-full">
        <div className="flex-auto">{title}</div>
        <img
          loading="lazy"
          src={arrowUp ? "arrowdown-grey.svg" : "rightArrowdown.png"}
          className="shrink-0 w-6 aspect-square max-md:w-5 cursor-pointer"
          onClick={toggleUpDown}
        />
      </div>

      {arrowUp && (<>
        <div className="flex mq450:gap-2 mq750:gap-5 gap-20 mt-6 text-base text-gray-500 max-md:flex-wrap">
          <div className="flex flex-col py-1 gradient-text max-md:w-full">
            <div>Cancel between</div>
            <div className="mt-10 max-md:mt-3">Amount refundable</div>
          </div>
          {policies.map((policy, index) => (
            <div key={index} className="flex flex-col max-md:w-full">
              <div className="flex gap-5 justify-between max-md:gap-2">
                <div>{policy.startDate}</div>
                <div>{policy.endDate}</div>
              </div>
              <div className={`shrink-0 mt-3.5 h-2 rounded-xl max-md:mt-2 bg-${policy.color}`} />
              <div className="self-center mt-3.5 max-md:mt-2">{policy.amount}</div>
            </div>
          ))}
        </div>
      </>)}

    </div>
  );
};

export default PolicyContainer;
