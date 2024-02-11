import { AiOutlineLoading3Quarters } from "react-icons/ai";

export const LoadingBar = () => {
  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden bg-transparent py-16">
      <div className="flex h-full flex-col items-center justify-center overflow-hidden">
        <AiOutlineLoading3Quarters className="m-auto animate-spin text-4xl text-primary" />
      </div>
    </div>
  );
};
