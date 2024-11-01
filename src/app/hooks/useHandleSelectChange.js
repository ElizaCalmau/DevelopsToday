import { useState } from 'react';

export default function useHandleSelectChange() {
  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const handleMakeChange = (e) => {
    setSelectedMake(e.target.value);
  };
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedYear, setSelectedYear] = useState(0);
  const isDisabled = selectedMake === '' || selectedYear === 0;
  return { isDisabled, handleYearChange, handleMakeChange };
}
