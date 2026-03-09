export default function AzkarCard({ item }) {
  return (
    <div className="border p-4 my-2 rounded-lg hover:bg-[#004d40] cursor-pointer transition duration-200">
      <h2 className="text-xl font-bold text-[#009688]">{item.title}</h2>
      <p className="text-lg text-[#80cbc4] mt-2">{item.description}</p>
    </div>
  );
}
