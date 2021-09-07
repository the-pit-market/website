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
      <h2 className="text-sm text-gray-500 uppercase">{name}</h2>
      <h1 className="font-semibold text-xl">{value}</h1>
    </div>
  );
}
