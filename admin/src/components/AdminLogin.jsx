import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (
      formData.email === "admin@gmail.com" &&
      formData.password === "123456"
    ) {
      localStorage.setItem("admin", "true");
      toast.success("Login Successful");
      navigate("/admin/add");
    } else {
      toast.error("Invalid Credentials");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-900">
      <form
        onSubmit={onSubmitHandler}
        className="bg-slate-800 p-6 rounded-xl w-[350px]"
      >
        <h2 className="text-white text-2xl mb-4">Admin Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={onChangeHandler}
          className="w-full p-2 mb-3 rounded"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={onChangeHandler}
          className="w-full p-2 mb-3 rounded"
        />

        <button
          type="submit"
          className="w-full bg-emerald-500 text-white p-2 rounded"
        >
          Login
        </button>
      </form>
    </section>
  );
};

export default AdminLogin;