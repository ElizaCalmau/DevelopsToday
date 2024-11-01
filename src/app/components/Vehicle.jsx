export default function Vehicle({ name, model }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 w-fit border border-transparent transition duration-200 hover:border-violet-500">
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      <p className="text-gray-600">{model}</p>
    </div>
  );
}
