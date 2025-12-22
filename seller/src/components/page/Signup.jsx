import { useState } from "react";
import Input from "../atom/Input";
import { baseUrl } from "../../config/config";
import toast from "react-hot-toast";

const Signup = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState({
    shopName: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`${baseUrl}/api/seller/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    });
    const data2 = await res.json();

    if (data2.status === "fail" && data2.errors) {
      data2.errors.forEach((item) => {
        toast.error(item.message);
      });
      return;
    }
    toast("User created successfully");
  };

  return (
    <div className="w-full h-screen justify-center items-center bg-linear-45 from-[#5fd7df] to-[#e839f6] flex">
      <form
        className="p-6 space-y-4 bg-white rounded-md shadow-xl"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold text-center text-shadow-gray-300 text-shadow-sm">
          SIGNUP
        </h1>

        <Input
          onChange={handleInput}
          value={data.shopName}
          name="shopName"
          placeholder="Shop name"
        />
        <Input
          onChange={handleInput}
          value={data.email}
          name="email"
          type="email"
          placeholder="email"
        />
        <Input
          onChange={handleInput}
          value={data.password}
          name="password"
          type={show ? "text" : "password"}
          placeholder="New password"
        />

        <input
          type="checkbox"
          id="show"
          checked={show}
          onChange={(e) => setShow(e.target.checked)}
        />
        <label className="ml-1 text-gray-400" htmlFor="show">
          Show Password
        </label>

        <input
          className="bg-[#e44df5] active:bg-green-800 py-1 w-full rounded-xl text-white font-bold"
          type="submit"
          value="SIGNUP"
        />
        <p className="text-sm mt-2.5 text-gray-500">
          Already have an store.{" "}
          <a href="/login" className="font-bold text-blue-600">
            login
          </a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
