import { useEffect, useState } from 'react';

const useFetchVehicleMakes = () => {
  const [makes, setMakes] = useState([]);
  useEffect(() => {
    const fetchMakes = async () => {
      try {
        const response = await fetch(process.env.NEXT_PUBLIC_VEHICLE_API);
        const data = await response.json();
        const { Results } = data;
        setMakes(Results);
        console.log('data', Results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMakes();
  }, []);
  return makes;
};

export default useFetchVehicleMakes;
