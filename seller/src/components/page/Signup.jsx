import { useState } from "react";
import Input from "../atom/Input";
import { baseUrl } from "../../config/config";
import toast from "react-hot-toast";
import { NavLink, useNavigate } from "react-router";

const Signup = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  let navigate = useNavigate();

  const [data, setData] = useState({
    shopName: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;
    setLoading(true);

    try {
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
      toast.success(data2.message);
      navigate("/login", { replace: true });
    } catch (err) {
      console.log(err);

      toast.error("Some went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen justify-center items-center bg-linear-45 from-[#5fd7df] to-[#e839f6] flex">
      <form
        className={`p-6 space-y-4 bg-white rounded-md shadow-xl ${
          loading ? "opacity-60" : "opacity-100"
        }`}
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
          disabled={loading}
        />
        <Input
          onChange={handleInput}
          value={data.email}
          name="email"
          type="email"
          placeholder="Email"
          disabled={loading}
        />
        <Input
          onChange={handleInput}
          value={data.phone}
          name="phone"
          type="phone"
          placeholder="Phone"
          disabled={loading}
        />
        <Input
          onChange={handleInput}
          value={data.password}
          name="password"
          type={show ? "text" : "password"}
          placeholder="New password"
          disabled={loading}
        />

        <input
          type="checkbox"
          id="show"
          checked={show}
          onChange={(e) => setShow(e.target.checked)}
          disabled={loading}
        />
        <label className="ml-1 text-gray-400" htmlFor="show">
          Show Password
        </label>

        <input
          className="bg-[#e44df5] active:bg-green-800 py-1 w-full rounded-xl text-white font-bold"
          type="submit"
          value="SIGNUP"
          disabled={loading}
        />
        <p className="text-sm mt-2.5 text-center text-gray-500">
          Already have an store.{" "}
          <NavLink className="font-bold text-blue-600" to="/login">
            Login
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default Signup;
