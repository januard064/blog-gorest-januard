export const Button = ({ icon, label }: { icon?: any, label: string }) => {
  return <div className="p-2 cursor-pointer bg-[#FFE8D6] rounded-md">
    <div className="flex items-center space-x-2">
        <div>{icon}</div>
        <div>{label}</div>
    </div>
    </div>;
};
