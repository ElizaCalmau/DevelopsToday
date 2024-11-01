import getModelYears from '@/app/utils/getModelYears';

export async function generateStaticParams() {
  const years = getModelYears();
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_VEHICLE_API);
    const vehicles = await response.json();

    return vehicles.map((vehicle) =>
      years.map((year) => ({
        makeId: vehicle.makeId.toString(),
        year: year.toString(),
      }))
    );
  } catch (error) {
    console.error('Error in generateStaticParams:', error);
    return [];
  }
}

export async function fetchDetails(makeId, year) {
  const result = await fetch(
    `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
  ).then((res) => res.json());
  console.log('res', result);
  return result;
}

export default function ResultPage({ params }) {
  const { makeId, year } = params;
  fetchDetails(makeId, year);
  console.log(makeId, year);
}
