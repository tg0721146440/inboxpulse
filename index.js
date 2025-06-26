import StatsCard from '../components/StatsCard';

export default function Home() {
  return (
    <div className="p-10 space-y-6">
      <h1 className="text-3xl font-bold text-blue-700">InboxPulse Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <StatsCard title="Emails Deleted" value="135" />
        <StatsCard title="Inbox Health" value="Clean" />
        <StatsCard title="Promotions Cleared" value="58" />
        <StatsCard title="Social Tab Cleared" value="22" />
      </div>
    </div>
  );
}
