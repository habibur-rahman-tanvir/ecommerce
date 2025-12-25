import { useLoaderData } from "react-router";

const DashboardLayout = () => {
  const data = useLoaderData();

  return (
    <div className="flex w-full h-screen overflow-hidden bg-linear-45 from-[#5fd7df] to-[#bd9aec]">
      {JSON.stringify(data, null, 4)}
    </div>
  );
};

export default DashboardLayout;
