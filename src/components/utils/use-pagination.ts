import React, { useState } from "react";

export const usePagination = (data: any[]) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const recordsPerPage = 5;
  let currentData;
  let totalPage;
  const lastDataIndex = currentPage * recordsPerPage;
  const firstDataIndex = lastDataIndex - recordsPerPage;
  currentData = data?.slice(firstDataIndex, lastDataIndex);
  totalPage = Math.ceil(data?.length / recordsPerPage);

  return {
    currentPage,
    setCurrentPage,
    currentData,
    totalPage,
  };
};
