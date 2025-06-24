"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import type { SingleValue, GroupBase } from "react-select";
import type { CreatableProps } from "react-select/creatable";

type OptionType = {
  value: string;
  label: string;
};

const CreatableSelect = dynamic<
  CreatableProps<OptionType, false, GroupBase<OptionType>>
>(() => import("react-select/creatable"), { ssr: false });

const options: OptionType[] = [
  { value: "", label: "Quantity" },
  { value: "1", label: "01" },
  { value: "2", label: "02" },
  { value: "3", label: "03" },
  { value: "4", label: "04" },
  { value: "5", label: "05" },
];

const QuantitySelect = () => {
  const [selectedOption, setSelectedOption] = useState<SingleValue<OptionType>>(
    options[0]
  );

  const handleChange = (newValue: SingleValue<OptionType>) => {
    setSelectedOption(newValue);
  };

  return (
    <CreatableSelect
      value={selectedOption}
      onChange={handleChange}
      options={options}
      id="match-t"
      instanceId="match-t"
      className="single-select single-select-custom w-100"
      classNamePrefix="cs-select"
    />
  );
};

export default QuantitySelect;
