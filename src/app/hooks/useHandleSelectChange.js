import { useState } from 'react';

export default function useHandleSelectChange(makes) {
  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const handleMakeChange = (e) => {
    setSelectedMake(e.target.value);

    const selectedMakeObj = makes.find(
      (make) => make.MakeName === e.target.value
    );
    setId(selectedMakeObj.MakeId);
  };
  const [selectedMake, setSelectedMake] = useState('');
  const [id, setId] = useState(0);
  const [selectedYear, setSelectedYear] = useState(0);
  const isDisabled = selectedMake === '' || selectedYear === 0;

  return {
    isDisabled,
    handleYearChange,
    handleMakeChange,
    selectedMake,
    selectedYear,
    id,
  };
}
