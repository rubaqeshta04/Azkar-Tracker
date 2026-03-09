import AzkarCard from "./AzkarCard";

export default function AzkarList({ azkar }) {
  return (
    <div className="p-4">
      {azkar.map((item) => (
        <AzkarCard key={item.id} item={item} />
      ))}
    </div>
  );
}
