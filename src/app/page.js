'use client';

import fetchVehicleMakes from './hooks/useFetchVehicleMakes';
import getModelYears from './utils/getModelYears';
import Loading from './components/loading';
import Select from './components/Select';
import { useState } from 'react';
import Link from 'next/link';
import Button from './components/Button';
import useHandleSelectChange from './hooks/useHandleSelectChange';

export default function Home() {
  const { makes, loading } = fetchVehicleMakes();
  const {
    handleMakeChange,
    handleYearChange,
    selectedMake,
    selectedYear,
    isDisabled,
    id,
  } = useHandleSelectChange(makes);

  const modelYears = getModelYears();

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex justify-between w-full gap-4">
          <Select
            options={makes}
            title="Please select a vehicle Make"
            onChange={handleMakeChange}
          />
          <Select
            options={modelYears}
            title="Please select a year"
            onChange={handleYearChange}
          />
        </div>
        <Button
          text="Next"
          isDisabled={isDisabled}
          makeId={id}
          year={selectedYear}
        />
      </main>
    </div>
  );
}
