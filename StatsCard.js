// Reusable stat component
export default function StatsCard({ title, value }) {
  return <div className="p-4 border rounded-lg shadow">{title}: {value}</div>;
}