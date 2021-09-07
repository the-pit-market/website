import { GoGraph } from '@react-icons/all-files/go/GoGraph';
import Image from 'next/image';
import Link from 'next/link';

function SidebarCard({ name, href, Icon, isActive }) {
  return (
    <li
      className={`w-max py-1.5 cursor-pointer flex flex-row items-center border-l-4 mb-3 ${
        isActive ? 'border-blue-500' : 'border-transparent'
      }`}
    >
      <div className="mx-4 text-xl">
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

function Sidebar() {
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
          <SidebarCard name="Trade Overview" Icon={GoGraph} href="/" isActive />
          <SidebarCard
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

function Card({ name, value }) {
  return (
    <div className="w-full border rounded bg-white p-4">
      <h2 className="text-sm text-gray-500 uppercase">{name}</h2>
      <h1 className="font-semibold text-xl">{value}</h1>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="h-screen">
      <main className="flex flex-row bg-gray-50">
        <Sidebar />

        <div className="flex flex-col w-full">
          <nav className="h-16 border-b bg-white w-full">{/** Navbar */}</nav>
          <div className="p-6">
            <h2 className="text-sm text-gray-500 uppercase">Overview</h2>
            <h1 className="font-semibold text-3xl">Dashboard</h1>

            <div className="mt-4 flex flex-row space-x-10">
              <Card name="Users" value={'40.5%'} />
              <Card name="Users" value={'40.5%'} />
              <Card name="Users" value={'40.5%'} />
              <Card name="Users" value={'40.5%'} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
