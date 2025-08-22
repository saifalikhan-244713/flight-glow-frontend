import { useState } from 'react';
import type { NextPage } from 'next';
import UpcomingCancelledCompleted from '@/components/MyTrip/UpcomingCancelledCompleted';
import ButtonMyTrip from '@/components/MyTrip/ButtonMyTrip';

const DealSection: NextPage = () => {
  const [activeTab, setActiveTab] = useState('UPCOMING');
  return (
    <section className="box-border flex max-w-full flex-col items-center justify-start gap-[60px] self-stretch bg-white px-5 py-[60px] text-left font-kanit text-xl text-blue-2 mq750:box-border mq750:gap-[30px_60px] mq750:pb-[39px] mq750:pt-[39px]">
      <div className="flex w-[1240px] max-w-full flex-row flex-wrap items-start justify-start [row-gap:20px]">
        <ButtonMyTrip
          text="BOOKED"
          customClasses={`border-b-[1px] border-grey-6 hover:bg-lightslategray-200 text-grey-3 ${
            activeTab === 'UPCOMING'
              ? 'border-solid whitespace-nowrap text-sky-600 border-sky-600 bg-slate-100 border-b-[3px]'
              : ''
          }`}
          minWidth="min-w-[132px]"
          onClick={() => setActiveTab('UPCOMING')}
        />
        <ButtonMyTrip
          text="CANCELLED"
          customClasses={`border-b-[1px] border-grey-6 hover:bg-lightslategray-200 text-grey-3 ${
            activeTab === 'CANCELLED'
              ? 'border-solid whitespace-nowrap text-sky-600 border-sky-600 bg-slate-100 border-b-[3px]'
              : ''
          }`}
          minWidth="min-w-[128px]"
          onClick={() => setActiveTab('CANCELLED')}
        />
        <ButtonMyTrip
          text="COMPLETED"
          customClasses={`border-b-[1px] border-grey-6 hover:bg-lightslategray-200 text-grey-3 ${
            activeTab === 'COMPLETED'
              ? 'border-solid whitespace-nowrap text-sky-600 border-sky-600 bg-slate-100 border-b-[3px]'
              : ''
          }`}
          minWidth="min-w-[132px]"
          onClick={() => setActiveTab('COMPLETED')}
        />
      </div>

      {activeTab === 'UPCOMING' && (
        <UpcomingCancelledCompleted tab="UPCOMING" />
      )}
      {activeTab === 'CANCELLED' && (
        <UpcomingCancelledCompleted tab="CANCELLED" />
      )}
      {activeTab === 'COMPLETED' && (
        <UpcomingCancelledCompleted tab="COMPLETED" />
      )}
    </section>
  );
};

export default DealSection;
