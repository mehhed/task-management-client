import { Link } from "react-router-dom";
import AuthHook from "../../Hooks/AuthHook";

const Banner = () => {
  const { user } = AuthHook();
  const imag =
    "../../../public/task-management-concept-banner-header-vector-24529046.jpg";
  return (
    <div>
      <div
        className="py-20  md:h-[700px] dark:bg-gray-700"
        style={{
          backgroundImage:
            "url(https://raw.githubusercontent.com/mehhed/fakedata-img/main/task-management-concept-banner-header-vector-24529046.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}>
        <div className="h-full w-full flex justify-center items-center">
          <div className="flex flex-wrap justify-start items-start    px-4">
            <div className="w-full px-4 flex-1 ">
              <span className="inline-block mb-4 text-sm font-semibold leading-none text-red-600 capitalize dark:text-red-200">
                let`s manage your task effeciently
              </span>
              <h2 className="mb-6 text-3xl font-semibold leading-tight tracking-tight text-gray-900 dark:text-gray-300 md:text-5xl lg:text-5xl">
                Elevate Your Efficiency with Unique TaskHub
              </h2>
              <p className="mb-6 font-medium tracking-wide text-gray-600 dark:text-gray-400 md:text-lg">
                Experience a new era of productivity. Unique TaskHub is your
                gateway to efficiency – simplify tasks, collaborate in
                real-time, and achieve success effortlessly.
              </p>
              <Link
                to={user ? "/dashboard" : "/login"}
                className="inline-flex items-center justify-center px-8 py-3 text-gray-100 bg-blue-600 rounded-md shadow hover:text-gray-100 hover:bg-blue-500 ">
                Explore Now
              </Link>
            </div>
            <div className="flex-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
