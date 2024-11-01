'use client';

import fetchVehicleMakes from './hooks/useFetchVehicleMakes';
import Loading from './components/loading';
import Select from './components/Select';

export default function Home() {
  const { makes, loading } = fetchVehicleMakes();
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Select options={makes} title="Please select a vehicle Make" />
      </main>
    </div>
  );
}
