import { baseUrl } from "../config/config";
import fetchData from "../utils/appClient";

const DashboardLayout = () => {
  const handleRefresh = async () => {
    const res = await fetch(`${baseUrl}/api/seller/auth/refresh`, {
      method: "POST",
      credentials: "include",
    });
    const data = await res.json();
    console.log(JSON.stringify(data, null, 3));
  };

  const handleProfile = async () => {
    const res = await fetch(`${baseUrl}/api/seller/profile`, {
      credentials: "include",
    });
    const data = await res.json();
    console.log(JSON.stringify(data, null, 3));
  };

  const handleFetch = async () => {
    try {
      const res = await fetchData(`${baseUrl}/api/seller/profile`, {
        credentials: "include",
      });
      const data = await res.json();
      console.log(JSON.stringify(data, null, 3));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex w-full h-screen overflow-hidden bg-linear-45 from-[#5fd7df] to-[#bd9aec]">
      <div className="[&>button]:border-2 [&>button]:m-1">
        <button onClick={handleRefresh}>Refresh</button>
        <button onClick={handleProfile}>Profile</button>
        <button onClick={handleFetch}>FetchPro</button>
      </div>
    </div>
  );
};

export default DashboardLayout;
