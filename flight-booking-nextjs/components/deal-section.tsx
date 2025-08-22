import { useState } from 'react';
import type { NextPage } from 'next';
import UpcomingCancelledCompleted from './upcoming-cancelled-completed';
import Button from '@/components/MyAccount/ButtonMyTrip'; // Import the Button component

const DealSection: NextPage = () => {
  const [activeTab, setActiveTab] = useState('UPCOMING');

  return (
    <section className="self-stretch bg-white flex flex-col items-center justify-start py-[60px] px-5 box-border gap-[60px] max-w-full text-left text-xl text-blue-2 font-kanit mq750:gap-[30px_60px] mq750:pt-[39px] mq750:pb-[39px] mq750:box-border">
      <div className="w-[1240px] flex flex-row flex-wrap items-start justify-start max-w-full [row-gap:20px]">
        <Button
          text="UPCOMING"
          customClasses={`border-b-[1px] border-grey-6 hover:bg-lightslategray-200 text-grey-3 ${activeTab === 'UPCOMING' ? 'border-solid whitespace-nowrap text-sky-600 border-sky-600 bg-slate-100 border-b-[3px]' : ''
            }`}
          minWidth="min-w-[132px]"
          onClick={() => setActiveTab('UPCOMING')}
        />
        <Button
          text="CANCELLED"
          customClasses={`border-b-[1px] border-grey-6 hover:bg-lightslategray-200 text-grey-3 ${activeTab === 'CANCELLED' ? 'border-solid whitespace-nowrap text-sky-600 border-sky-600 bg-slate-100 border-b-[3px]' : ''
            }`}
          minWidth="min-w-[128px]"
          onClick={() => setActiveTab('CANCELLED')}
        />
        <Button
          text="COMPLETED"
          customClasses={`border-b-[1px] border-grey-6 hover:bg-lightslategray-200 text-grey-3 ${activeTab === 'COMPLETED' ? 'border-solid whitespace-nowrap text-sky-600 border-sky-600 bg-slate-100 border-b-[3px]' : ''
            }`}
          minWidth="min-w-[132px]"
          onClick={() => setActiveTab('COMPLETED')}
        />
      </div>
     

        {activeTab === 'UPCOMING' && <UpcomingCancelledCompleted tab="UPCOMING" />}
        {activeTab === 'CANCELLED' && <UpcomingCancelledCompleted tab="CANCELLED" />}
        {activeTab === 'COMPLETED' && <UpcomingCancelledCompleted tab="COMPLETED" />}
     
     
    </section>
  );
};

export default DealSection;
