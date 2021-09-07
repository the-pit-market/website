export interface DashboardOverviewCardProps {
  name: string;
  value: string;
}

export function DashboardOverviewCard({
  name,
  value
}: DashboardOverviewCardProps) {
  return (
    <div className="w-full border rounded bg-white p-4">
      <h2 className="text-sm text-coolGray-600 uppercase">{name}</h2>
      <h3 className="font-semibold text-xl text-coolGray-900">{value}</h3>
    </div>
  );
}
