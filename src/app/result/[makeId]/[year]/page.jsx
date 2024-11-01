import Vehicle from '@/app/components/Vehicle';
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
    `${process.env.NEXT_PUBLIC_MODEL_API}/makeId/${makeId}/modelyear/${year}?format=json`
  ).then((res) => res.json());
  return result;
}

export default async function ResultPage({ params }) {
  const { makeId, year } = params;
  const response = await fetchDetails(makeId, year);
  const { Results } = response;
  console.log('data', Results);
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {Results.map((vehicle) => {
        return (
          <Vehicle
            key={vehicle.Make_ID}
            name={vehicle.Make_Name}
            model={vehicle.Model_Name}
          />
        );
      })}
    </div>
  );
}
