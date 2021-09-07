import { DashboardOverviewCard } from '@app/components/pages/dashboard/DashboardOverviewCard';
import { DashboardSidebar } from '@app/components/pages/dashboard/DashboardSidebar';

function Dashboard() {
  return (
    <div className="h-screen">
      <main className="flex flex-row bg-gray-50">
        <DashboardSidebar />

        <div className="flex flex-col w-full">
          <nav className="h-16 border-b bg-white w-full">{/** Navbar */}</nav>
          <div className="p-6">
            <h2 className="text-sm text-gray-500 uppercase">Overview</h2>
            <h1 className="font-semibold text-3xl">Dashboard</h1>

            <div className="mt-4 flex flex-row space-x-10">
              <DashboardOverviewCard name="Users" value="40.5%" />
              <DashboardOverviewCard name="Users" value="40.5%" />
              <DashboardOverviewCard name="Users" value="40.5%" />
              <DashboardOverviewCard name="Users" value="40.5%" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
