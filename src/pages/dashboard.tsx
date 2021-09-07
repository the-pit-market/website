import { DashboardNavbar } from '@app/components/pages/dashboard/DashboardNavbar';
import { DashboardOverviewCard } from '@app/components/pages/dashboard/DashboardOverviewCard';
import { DashboardSidebar } from '@app/components/pages/dashboard/DashboardSidebar';

function Dashboard() {
  return (
    <div className="h-screen">
      <main className="flex flex-row bg-gray-50">
        <DashboardSidebar />

        <div className="flex flex-col w-full">
          <DashboardNavbar />

          <div className="p-6">
            <h2 className="text-sm text-gray-500 uppercase">Overview</h2>
            <h1 className="font-semibold text-3xl">Dashboard</h1>

            <div className="mt-4 flex flex-row space-x-10">
              <DashboardOverviewCard name="Trades today" value="69" />
              <DashboardOverviewCard name="Pending trades" value="0" />
              <DashboardOverviewCard name="Net value" value="0 FSH, 0 GEM" />
              <DashboardOverviewCard name="Reputation" value="0" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
