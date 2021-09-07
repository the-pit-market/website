import { GiHamburgerMenu } from '@react-icons/all-files/gi/GiHamburgerMenu';
import { GoSearch } from '@react-icons/all-files/go/GoSearch';
import { IoMdAdd } from '@react-icons/all-files/io/IoMdAdd';
import { DashboardNavbarPrimaryButton } from './DashboardNavbarPrimaryButton';
import Image from 'next/image';

const UUID = '38b17f23-8d7e-485f-8b6d-3cc92f8cc489';

export function DashboardNavbar() {
  return (
    <nav className="h-16 border-b bg-white w-full px-4 py-4 flex flex-row justify-between">
      <div className="h-full flex flex-row items-center space-x-6">
        <GiHamburgerMenu className="text-2xl cursor-pointer" />

        <DashboardNavbarPrimaryButton
          name="Make a trade"
          Icon={IoMdAdd}
          gradientTwColors={['from-indigo-600', 'to-blue-400']}
        />
        <DashboardNavbarPrimaryButton
          name="Search the market"
          Icon={GoSearch}
          gradientTwColors={['from-sky-600', 'to-cyan-400']}
        />
      </div>

      <div>
        <div className="overflow-hidden h-8 w-8 rounded-full border-2 border-blue-500 relative">
          <Image
            src={`https://crafatar.com/avatars/${UUID}`}
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </nav>
  );
}
