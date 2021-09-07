import { GoGraph } from '@react-icons/all-files/go/GoGraph';
import Image from 'next/image';
import { DashboardSidebarCard } from './DashboardSidebarCard';

export function DashboardSidebar() {
  return (
    <div className="p-4 w-96 h-screen bg-white border-r">
      <div className="relative w-52 h-12">
        <Image src="/tpe_logo.svg" objectFit="contain" layout="fill" />
      </div>
      <div className="mt-8">
        <h2 className="text-sm text-gray-500 uppercase font-semibold">
          General
        </h2>

        <ul className="flex flex-col pt-3">
          <DashboardSidebarCard
            name="Trade Overview"
            Icon={GoGraph}
            href="/"
            isActive
          />
          <DashboardSidebarCard
            name="Applications"
            Icon={GoGraph}
            href="/"
            isActive={false}
          />
        </ul>
      </div>
    </div>
  );
}
