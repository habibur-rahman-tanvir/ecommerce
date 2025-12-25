import { redirect } from "react-router";
import { baseUrl } from "../../config/config";
import fetchData from "../../utils/appClient.js";

const profileLoader = async () => {
  try {
    const res = await fetchData(`${baseUrl}/api/seller/profile`, {
      credentials: "include",
    });
    const user = await res.json();
    if (res.status !== 200 && !user) return redirect("/login");
    return user;
  } catch (err) {
    console.log(err);
    return redirect("/login");
  }
};

export default profileLoader;
