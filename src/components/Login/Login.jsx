import axios from "axios";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { TokenContext } from "../../Context/TokenContext";

function Login() {
  let { setToken } = useContext(TokenContext);
  let [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  let [err, setErr] = useState(false);
  let validationSchema = Yup.object({
    email: Yup.string().email("email is invalid").required("email is required"),
    password: Yup.string()
      .required("password is required")
      .min(5, "min length is 3 chars")
      .matches(
        /^[A-Z][0-9]{4,10}$/,
        "password is invalid start with capital letter"
      ),
  });
  function getValues(values) {
    setLoading(true);
    return axios
      .post("https://ecommerce.routemisr.com/api/v1/auth/signin", values)
      .then((res) => {
        console.log(res);
        if (res.data.message == "success") {
          console.log(res.data.token);
          localStorage.setItem("userToken", res.data.token);
          setToken(res.data.token);
          setLoading(false);
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(true);
        setErr(err.response.data.message);
        setLoading(false);
      });
  }
  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: getValues,
  });
  return (
    <>
      <form className="max-w-md mx-auto" onSubmit={formik.handleSubmit}>
        <h2 className="text-3xl  text-center my-5">Login Now</h2>
        <p className="text-red-600 my-3">{err}</p>

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
          {formik.errors.email && formik.touched.email ? (
            <p className="text-red-500 ">{formik.errors.email}</p>
          ) : (
            ""
          )}
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="password"
            name="password"
            id="floating_password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label
            htmlFor="floating_password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
          {formik.errors.password && formik.touched.password ? (
            <p className="text-red-500 ">{formik.errors.password}</p>
          ) : (
            ""
          )}
        </div>
        <button
          type="submit"
          className="text-white block ms-auto bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {loading ? <i className="fas fa-spinner fas-spin"></i> : "Submit"}
        </button>
      </form>
    </>
  );
}

export default Login;
