import { Icon } from '@app/utils/commonTypes';
import { useState } from 'react';
import Link from 'next/link';

export interface DashboardNavbarPrimaryButtonProps extends Icon {
  name: string;
  gradientTwColors: string[];
  href?: string;
}

export function DashboardNavbarPrimaryButton({
  gradientTwColors,
  name,
  href = '/',
  Icon
}: DashboardNavbarPrimaryButtonProps) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <Link href={href}>
      <div
        className={`cursor-pointer px-3.5 text-white flex flex-row items-center w-64 bg-gradient-to-tr h-full rounded-full shadow-md ${gradientTwColors.join(
          ' '
        )}`}
      >
        <Icon className="text-sm mr-2" />
        <p className="text-sm font-semibold" onClick={() => setIsClicked(true)}>
          {name}
        </p>
      </div>
    </Link>
  );
}
