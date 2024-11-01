'use client';

import { useEffect, useState } from 'react';

const useFetchVehicleMakes = () => {
  const [makes, setMakes] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchMakes = async () => {
      setLoading(true);
      try {
        const response = await fetch(process.env.NEXT_PUBLIC_VEHICLE_API);
        const data = await response.json();
        const { Results } = data;
        setMakes(Results);
      } catch (error) {
        console.error(error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    fetchMakes();
  }, []);
  return { makes, loading };
};

export default useFetchVehicleMakes;
