import { Icon } from '@app/utils/commonTypes';
import Link from 'next/link';

export interface DashboardSidebarCardProps extends Icon {
  name: string;
  href: string;
  isActive?: boolean;
}

export function DashboardSidebarCard({
  name,
  href,
  Icon,
  isActive
}: DashboardSidebarCardProps) {
  return (
    <li
      className={`w-max py-1.5 cursor-pointer flex flex-row items-center border-l-4 mb-3 ${
        isActive ? 'border-blue-500' : 'border-transparent'
      }`}
    >
      <div className="ml-6 mr-4 text-xl">
        <Icon className={isActive ? 'text-blue-500' : ''} />
      </div>
      <Link href={href}>
        <a className={`font-semibold ${isActive ? 'text-blue-500' : ''}`}>
          {name}
        </a>
      </Link>
    </li>
  );
}
