import React from "react";

export const Pagination = ({
  totalPage,
  currentPage,
  setCurrentPage,
}: {
  totalPage: any;
  currentPage: any;
  setCurrentPage: any;
}) => {
  const pageNumbers = [...Array(totalPage + 1).keys()].slice(1);

  const handleNext = () => {
    if (currentPage !== totalPage) setCurrentPage(currentPage + 1);
  };
  const handleePrev = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  return (
    <div className="w-full mt-6">
      <div className="flex items-center justify-center">
        <div className="flex items-center space-x-3">
          <div onClick={handleePrev} className="cursor-pointer">
            Prev
          </div>
          <div className="flex items-center space-x-3">
            {pageNumbers.map((page: number, index: number) => (
              <div
                onClick={() => setCurrentPage(page)}
                key={index}
                className={`h-8 w-8 border border-[#FF971D] flex items-center justify-center rounded-md cursor-pointer ${
                  page === currentPage ? "bg-[#FF971D]" : "inherit"
                }`}
              >
                {page}
              </div>
            ))}
          </div>
          <div onClick={handleNext} className="cursor-pointer">
            Next
          </div>
        </div>
      </div>
    </div>
  );
};
