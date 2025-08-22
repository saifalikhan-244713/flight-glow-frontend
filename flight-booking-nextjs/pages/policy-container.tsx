import type { NextPage } from 'next';

export type PolicyContainerType = {
  className?: string;
  title: string;
  policies: {
    startDate: string;
    endDate: string;
    amount: string;
    color: string;
  }[];
  arrowUp?: boolean;
  toggleUpDown?: () => void;
};

const PolicyContainer: NextPage<PolicyContainerType> = ({
  className = '',
  title,
  policies,
}) => {
  return (
    <div
      className={`box-border flex max-w-full flex-row items-start justify-start self-stretch px-0 pb-1.5 pt-0 text-left font-kanit text-base ${className}`}
    >
      <div className="box-border flex max-w-full flex-1 flex-col items-start justify-start gap-[23px] overflow-hidden rounded-3xs border-[1px] border-solid border-grey-6 bg-white p-5">
        <div className="relative text-xl font-medium leading-[110.3%] mq450:text-base mq450:leading-[18px]">
          {title}
        </div>
        <div className="flex h-[70px] flex-row items-center justify-between gap-[20px] self-stretch mq1050:flex-wrap">
          <div className="flex h-full min-w-[141px] flex-col items-start justify-between">
            <div className="relative inline-block !bg-clip-text text-base font-normal leading-[18px] text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background:linear-gradient(rgba(0,_0,_0,_0.3),_rgba(0,_0,_0,_0.3)),_#ff8e0a]">
              Cancel between
            </div>

            <div className="relative inline-block !bg-clip-text text-base font-normal leading-[18px] text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background:linear-gradient(rgba(0,_0,_0,_0.3),_rgba(0,_0,_0,_0.3)),_#ff8e0a]">
              Amount refundable
            </div>
          </div>

          {policies && policies.length > 0
            ? policies?.map((policy, index) => (
                <div
                  key={index}
                  className="flex h-full w-[210px] flex-col items-center justify-between"
                >
                  <div className="flex w-full items-center justify-between">
                    <div className="relative inline-block min-w-[32px] text-base font-normal text-grey-3">
                      {policy.startDate}
                    </div>
                    <div className="relative inline-block min-w-[44px] text-base font-normal text-grey-3">
                      {policy.endDate}
                    </div>
                  </div>

                  <div
                    className={`h-2 w-full rounded-full ${
                      policy.color === 'green-400'
                        ? 'bg-[#7ED468]'
                        : policy.color === 'yellow-300'
                          ? 'bg-[#FFDA44]'
                          : 'bg-[#EA4462]'
                    }`}
                  ></div>

                  <div className="relative inline-block min-w-[38px] whitespace-nowrap text-base font-normal text-grey-3">
                    {policy.amount}
                  </div>
                </div>
              ))
            : ''}
        </div>
      </div>
    </div>
  );
};

export default PolicyContainer;
