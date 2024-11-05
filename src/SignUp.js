import React, { useState /*useRef, useEffect*/ } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { area } from "./Area";

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [selectedSubArea, setSelectedSubArea] = useState("");
  // const [isAreaOpen, setIsAreaOpen] = useState(false);
  // const [isSubAreaOpen, setIsSubAreaOpen] = useState(false);
  // const dropdownRef = useRef(null);

  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log(
      "email: ",
      email,
      "password: ",
      password,
      "selectedArea: ",
      selectedArea,
      "selectedSubArea: ",
      selectedSubArea
    );
  };

  console.log("selectedArea ", selectedArea);

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex justify-between p-6">
            <h2 className="text-xl font-semibold">회원가입</h2>
            <button
              onClick={() => navigate(-1)}
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              돌아가기
            </button>
          </div>
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form onSubmit={handleSignUp} className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  아이디
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 mb-8"
                  placeholder="name@sesac.kr"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  비밀번호
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 mb-5"
                  required
                />
              </div>

              {/* <div
                className="relative inline-block text-left"
                ref={dropdownRef}
              >
                <label
                  htmlFor="area"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  거주 지역
                </label>
                <button
                  id="areaDropdownButton"
                  onClick={() => setIsAreaOpen(!isAreaOpen)}
                  className="text-gray-900 bg-gray-50 border border-gray-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mb-5 w-44" // 고정 너비
                  type="button"
                >
                  {selectedArea || "지역"}
                  <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                {isAreaOpen && (
                  <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute mt-2">
                    {" "}
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                      {area.map((item) => (
                        <li key={item.name}>
                          <button
                            onClick={() => {
                              setSelectedArea(item.name);
                              setIsAreaOpen(false);
                              setSelectedSubArea("");
                              setIsSubAreaOpen(false);
                            }}
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            {item.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div
                className="relative inline-block text-left ml-8"
                ref={dropdownRef}
              >
                <label
                  htmlFor="subArea"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                ></label>
                <button
                  id="subAreaDropdownButton"
                  onClick={() => setIsSubAreaOpen(!isSubAreaOpen)}
                  className="text-gray-900 bg-gray-50 border border-gray-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mb-5 w-44" // 고정 너비
                  type="button"
                >
                  {selectedSubArea || "시 / 군 / 구"}
                  <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                {isSubAreaOpen && selectedArea && (
                  <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute mt-2">
                    {" "}
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                      {area
                        .find((item) => item.name === selectedArea)
                        .subArea.map((subArea) => (
                          <li key={subArea}>
                            <button
                              onClick={() => {
                                setSelectedSubArea(subArea);
                                setIsSubAreaOpen(false);
                              }}
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              {subArea}
                            </button>
                          </li>
                        ))}
                    </ul>
                  </div>
                )}
              </div> */}

              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                회원가입
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
