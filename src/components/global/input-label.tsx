import React from "react";

export const InputLabel = ({ label, ...props }: any) => {
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-1">{label}</div>
      <div className="col-span-4">
        <input
          className="border border-emerald-500 rounded-md px-2 w-full"
          {...props}
        />
      </div>
    </div>
  );
};

export const SelectLabel = ({ label, option, ...props }: any) => {
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-1">{label}</div>
      <div className="col-span-4">
        <select
          className="border border-emerald-500 rounded-md px-1 w-full"
          {...props}
        >
          <option disabled value={"default"}>
            select
          </option>
          {option?.map((opt: any, index: number) => (
            <option key={index} value={opt?.value}>
              {opt?.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
