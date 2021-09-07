import { GoGraph } from '@react-icons/all-files/go/GoGraph';
import { RiMoneyDollarCircleLine } from '@react-icons/all-files/ri/RiMoneyDollarCircleLine';
import Image from 'next/image';
import { DashboardSidebarCard } from './DashboardSidebarCard';

export function DashboardSidebar() {
  return (
    <div className="w-96 h-screen bg-white border-r">
      <div className="m-4 relative w-52 h-12">
        <Image src="/tpe_logo.svg" objectFit="contain" layout="fill" />
      </div>
      <div className="mt-8">
        <h2 className="ml-4 text-sm text-gray-500 uppercase font-semibold">
          General
        </h2>

        <ul className="flex flex-col pt-3">
          <DashboardSidebarCard
            name="Overview"
            Icon={GoGraph}
            href="/"
            isActive
          />
          <DashboardSidebarCard
            name="Trades"
            Icon={RiMoneyDollarCircleLine}
            href="/"
            isActive={false}
          />
        </ul>
      </div>
    </div>
  );
}
