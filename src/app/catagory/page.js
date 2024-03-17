import React from "react";

const page = () => {
  return (
    <section className="bg-gray-900">
      <div className="py-2 sm:py-8 block lg:py-10 relative bg-opacity-50 z-40">
        <div className="px-4 mx-auto max-w-4xl sm:px-2 lg:px-4 relative">
          <div className="max-w-xl mx-auto text-center text-white">
            <p className="text-4xl font-semibold tracking-widest text-g uppercase">
              Categories:
            </p>
          </div>
          <div className="grid grid-cols-1 gap-2 mt-12 sm:grid-cols-3 lg:mt-10 justify-items-center">
            <a
              href="#"
              className="w-fit h-fit transition-all duration-1000 bg-white rounded-xl hover:bg-blue-500 hover:shadow-xl m-1 p-2 relative z-40 group"
            >
              <div className="bg-white p-2 flex flex-col items-center justify-center h-fit w-fit transition-all duration-1000 hover:bg-gray-200 rounded-md shadow-md hover:shadow-xl ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="hover:-translate-y-3 w-[150px] h-[150px]"
                >
                  <path
                    d="M12 18H12.01M11 6H13M9.2 21H14.8C15.9201 21 16.4802 21 16.908 20.782C17.2843 20.5903 17.5903 20.2843 17.782 19.908C18 19.4802 18 18.9201 18 17.8V6.2C18 5.0799 18 4.51984 17.782 4.09202C17.5903 3.71569 17.2843 3.40973 16.908 3.21799C16.4802 3 15.9201 3 14.8 3H9.2C8.0799 3 7.51984 3 7.09202 3.21799C6.71569 3.40973 6.40973 3.71569 6.21799 4.09202C6 4.51984 6 5.07989 6 6.2V17.8C6 18.9201 6 19.4802 6.21799 19.908C6.40973 20.2843 6.71569 20.5903 7.09202 20.782C7.51984 21 8.07989 21 9.2 21Z"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="text-2xl mt-4">Mobile</div>
              </div>
            </a>

            <a
              href="#"
              className="w-fit h-fit transition-all duration-1000 bg-white rounded-xl hover:bg-blue-500 hover:shadow-xl m-1 p-2 relative z-40 group"
            >
              <div className="bg-white p-2 flex flex-col items-center justify-center h-fit w-fit transition-all duration-1000 hover:bg-gray-200 rounded-md shadow-md hover:shadow-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="hover:-translate-y-3 w-[150px] h-[150px]"
                >
                  <path
                    d="M3.45699 14.8382C3.75333 14.3724 4.18164 13.9828 4.7191 13.7322C5.72014 13.2654 6.91004 13.6985 7.37683 14.6995L9.06738 18.3249C9.53417 19.326 9.10108 20.5159 8.10005 20.9827C6.5985 21.6829 4.81365 21.0332 4.11347 19.5317L3.26811 17.7188C2.81855 16.7547 2.92544 15.6738 3.45699 14.8382ZM3.45699 14.8382C3.16072 13.946 3.00031 12.9917 3.00031 12C3.00031 7.02944 7.02975 3 12.0003 3C16.9709 3 21.0003 7.02944 21.0003 12C21.0003 13.026 20.8286 14.012 20.5124 14.9307M20.5124 14.9307C20.2152 14.424 19.7664 13.9992 19.1938 13.7322C18.1928 13.2654 17.0029 13.6985 16.5361 14.6995L14.8455 18.3249C14.3787 19.326 14.8118 20.5159 15.8129 20.9827C17.3144 21.6829 19.0993 21.0332 19.7994 19.5317L20.6448 17.7188C21.078 16.7899 20.9945 15.7525 20.5124 14.9307ZM17.5629 4.92407L16.0011 6.99937C14.9714 6.38709 13.2767 5.99994 12.0021 5.99994C10.7018 5.99994 9.04536 6.36461 8.00207 6.99994L6.43604 4.92593"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="text-2xl mt-4">Audio</div>
              </div>
            </a>

            <a
              href="#"
              className="w-fit h-fit transition-all duration-1000 bg-white rounded-xl hover:bg-blue-500 hover:shadow-xl m-1 p-2 relative z-40 group"
            >
              <div className="bg-white p-2 flex flex-col items-center justify-center transition-all duration-1000 hover:bg-gray-200 rounded-md shadow-md hover:shadow-xl text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="hover:-translate-y-3 w-[150px] h-[150px]"
                >
                  <path
                    d="M21 16V7.2C21 6.0799 21 5.51984 20.782 5.09202C20.5903 4.71569 20.2843 4.40973 19.908 4.21799C19.4802 4 18.9201 4 17.8 4H6.2C5.07989 4 4.51984 4 4.09202 4.21799C3.71569 4.40973 3.40973 4.71569 3.21799 5.09202C3 5.51984 3 6.0799 3 7.2V16M22 16V16.8C22 17.9201 22 18.4802 21.782 18.908C21.5903 19.2843 21.2843 19.5903 20.908 19.782C20.4802 20 19.9201 20 18.8 20H5.2C4.0799 20 3.51984 20 3.09202 19.782C2.71569 19.5903 2.40973 19.2843 2.21799 18.908C2 18.4802 2 17.9201 2 16.8V16H8.33726C8.58185 16 8.70414 16 8.81923 16.0276C8.92127 16.0521 9.01881 16.0925 9.10828 16.1474C9.2092 16.2092 9.29568 16.2957 9.46863 16.4686L9.53137 16.5314C9.70432 16.7043 9.7908 16.7908 9.89172 16.8526C9.98119 16.9075 10.0787 16.9479 10.1808 16.9724C10.2959 17 10.4182 17 10.6627 17H13.3373C13.5818 17 13.7041 17 13.8192 16.9724C13.9213 16.9479 14.0188 16.9075 14.1083 16.8526C14.2092 16.7908 14.2957 16.7043 14.4686 16.5314L14.5314 16.4686C14.7043 16.2957 14.7908 16.2092 14.8917 16.1474C14.9812 16.0925 15.0787 16.0521 15.1808 16.0276C15.2959 16 15.4182 16 15.6627 16H22Z"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="text-2xl mt-4">Laptop</div>
              </div>
            </a>

            <a
              href="#"
              className="w-fit h-fit transition-all duration-1000 bg-white rounded-xl hover:bg-blue-500 hover:shadow-xl m-1 p-2 relative z-40 group"
            >
              <div className="bg-white p-2 flex flex-col items-center justify-center  transition-all duration-1000 hover:bg-gray-200 rounded-md shadow-md hover:shadow-xl text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="hover:-translate-y-3 w-[150px] h-[150px]"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.7067 4.45778L16.3922 3.51415C16.2545 3.0999 16.1292 2.72278 15.8316 2.32848C15.7013 2.15578 15.529 1.98999 15.3812 1.86358C15.2335 1.73717 15.0431 1.59256 14.8523 1.49049C14.4187 1.25849 14.1138 1.20729 13.7658 1.14885L13.7464 1.14559C13.2521 1.06252 12.661 1 12 1C11.339 1 10.7479 1.06252 10.2536 1.14559L10.2342 1.14885C9.88624 1.20729 9.58131 1.25849 9.14769 1.49049C8.95692 1.59256 8.76649 1.73717 8.61875 1.86358C8.47102 1.98999 8.29872 2.15578 8.16838 2.32848C7.8708 2.72278 7.74548 3.0999 7.60781 3.51416L7.29332 4.45778C7.2835 4.46275 7.2737 4.46778 7.26391 4.47286C6.49681 4.87134 5.87134 5.49681 5.47286 6.26391C5.20622 6.77722 5.09873 7.32713 5.04847 7.93238C4.99998 8.51625 4.99999 9.23444 5 10.1096V13.8904C4.99999 14.7655 4.99998 15.4838 5.04847 16.0676C5.09873 16.6729 5.20622 17.2228 5.47286 17.7361C5.87134 18.5032 6.49681 19.1287 7.26391 19.5271L7.29331 19.5422L7.60781 20.4858C7.74548 20.9001 7.8708 21.2772 8.16838 21.6715C8.29872 21.8442 8.47102 22.01 8.61875 22.1364C8.76649 22.2628 8.95692 22.4074 9.14769 22.5095C9.58131 22.7415 9.88624 22.7927 10.2342 22.8511L10.2536 22.8544C10.7479 22.9375 11.339 23 12 23C12.661 23 13.2521 22.9375 13.7464 22.8544L13.7658 22.8511C14.1138 22.7927 14.4187 22.7415 14.8523 22.5095C15.0431 22.4074 15.2335 22.2628 15.3812 22.1364C15.529 22.01 15.7013 21.8442 15.8316 21.6715C16.1292 21.2772 16.2545 20.9001 16.3922 20.4858L16.7067 19.5422L16.7361 19.5271C17.5032 19.1287 18.1287 18.5032 18.5271 17.7361C18.7938 17.2228 18.9013 16.6729 18.9515 16.0676C19 15.4838 19 14.7656 19 13.8905V11.5C19.5523 11.5 20 11.0523 20 10.5V8.5C20 7.94771 19.5523 7.5 19 7.5C18.9676 7.5 18.9355 7.50154 18.9039 7.50456C18.8403 7.06445 18.7296 6.65363 18.5271 6.26391C18.1287 5.49681 17.5032 4.87134 16.7361 4.47286C16.7263 4.46778 16.7165 4.46275 16.7067 4.45778ZM13.4149 3.11793C13.0151 3.05073 12.5356 3 12 3C11.4644 3 10.9849 3.05073 10.5851 3.11793C10.2599 3.1726 10.2273 3.18112 10.0912 3.25395C10.0912 3.25394 10.0913 3.2539 10.0912 3.25395C10.0896 3.25489 10.0707 3.26575 10.0356 3.29105C10.0008 3.31612 9.96045 3.34777 9.91906 3.38319C9.87767 3.4186 9.84017 3.45354 9.81002 3.48407C9.77954 3.51493 9.76599 3.53177 9.76484 3.53319C9.76477 3.53327 9.76482 3.53321 9.76484 3.53319C9.695 3.62573 9.66038 3.69187 9.54989 4.01473C10.0034 3.99998 10.521 3.99999 11.1096 4H12.8904C13.479 3.99999 13.9966 3.99998 14.4501 4.01473C14.3396 3.69187 14.3051 3.62582 14.2352 3.53328C14.2353 3.5333 14.2353 3.53336 14.2352 3.53328C14.2341 3.53185 14.2204 3.51491 14.19 3.48407C14.1598 3.45354 14.1223 3.4186 14.0809 3.38319C14.0396 3.34777 13.9992 3.31612 13.9644 3.29105C13.9292 3.26572 13.9105 3.25493 13.9089 3.25401C13.9088 3.25396 13.9089 3.254 13.9089 3.25401C13.7728 3.18118 13.7401 3.1726 13.4149 3.11793ZM9.76477 20.4667C9.69493 20.3742 9.66039 20.3081 9.5499 19.9853C10.0033 20 10.5209 20 11.1094 20H12.8904C13.4789 20 13.9967 20 14.4501 19.9853C14.3396 20.3081 14.3051 20.3742 14.2352 20.4667C14.2341 20.4682 14.2204 20.4851 14.19 20.5159C14.1598 20.5465 14.1223 20.5814 14.0809 20.6168C14.0396 20.6522 13.9992 20.6839 13.9644 20.7089C13.9292 20.7343 13.9105 20.7451 13.9089 20.746C13.7728 20.8188 13.7401 20.8274 13.4149 20.8821C13.0151 20.9493 12.5356 21 12 21C11.4644 21 10.9849 20.9493 10.5851 20.8821C10.2599 20.8274 10.2273 20.8189 10.0912 20.746C10.0896 20.7451 10.0708 20.7343 10.0356 20.7089C10.0008 20.6839 9.96045 20.6522 9.91906 20.6168C9.87767 20.5814 9.84017 20.5465 9.81002 20.5159C9.77956 20.4851 9.76592 20.4682 9.76477 20.4667ZM8.18586 6.24769C8.36611 6.15406 8.61857 6.08141 9.0979 6.0416C9.5892 6.0008 10.224 6 11.152 6H12.848C13.776 6 14.4108 6.0008 14.9021 6.0416C15.3814 6.08141 15.6339 6.15406 15.8141 6.24769C16.216 6.45642 16.5436 6.78404 16.7523 7.18586C16.8459 7.36611 16.9186 7.61857 16.9584 8.0979C16.9992 8.5892 17 9.22403 17 10.152V13.848C17 14.776 16.9992 15.4108 16.9584 15.9021C16.9186 16.3814 16.8459 16.6339 16.7523 16.8141C16.5436 17.216 16.216 17.5436 15.8141 17.7523C15.6339 17.8459 15.3814 17.9186 14.9021 17.9584C14.4108 17.9992 13.776 18 12.848 18H11.152C10.224 18 9.5892 17.9992 9.0979 17.9584C8.61857 17.9186 8.36611 17.8459 8.18586 17.7523C7.78404 17.5436 7.45642 17.216 7.24769 16.8141C7.15406 16.6339 7.08141 16.3814 7.04161 15.9021C7.0008 15.4108 7 14.776 7 13.848V10.152C7 9.22403 7.0008 8.5892 7.04161 8.0979C7.08141 7.61857 7.15406 7.36611 7.24769 7.18586C7.45642 6.78404 7.78404 6.45642 8.18586 6.24769Z"
                    fill="#0F1729"
                  />
                </svg>
                <div className="text-2xl mt-4">Smartwatch</div>
              </div>
            </a>

            <a
              href="#"
              className="w-fit h-fit transition-all duration-1000 bg-white rounded-xl hover:bg-blue-500 hover:shadow-xl m-1 p-2 relative z-40 group"
            >
              <div className="bg-white p-2 flex flex-col items-center justify-center  transition-all duration-1000 hover:bg-gray-200 rounded-md shadow-md hover:shadow-xl text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                  viewBox="0 0 32 32"
                  className="hover:-translate-y-3 w-[150px] h-[150px]"
                >
                  <title />

                  <g data-name="Layer 9" id="Layer_9">
                    <path d="M29,1H3A1,1,0,0,0,2,2V22a1,1,0,0,0,1,1H29a1,1,0,0,0,1-1V2A1,1,0,0,0,29,1ZM28,3V15H4V3ZM4,21V17H28v4Z" />

                    <path d="M19,18H13a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z" />

                    <path d="M20.76,24.23a1,1,0,0,0-.63-.23H11.88a1,1,0,0,0-.64.23l-4.87,4a1,1,0,0,0-.31,1.11A1,1,0,0,0,7,30H25a1,1,0,0,0,.94-.66,1,1,0,0,0-.31-1.11ZM9.79,28l2.44-2h7.54l2.44,2Z" />
                  </g>
                </svg>
                <div className="text-2xl mt-4">Computer <br/> Peripherals</div>
              </div>
            </a>

            <a
              href="#"
              className="w-fit h-fit transition-all duration-1000 bg-white rounded-xl hover:bg-blue-500 hover:shadow-xl m-1 p-2 relative z-40 group"
            >
              <div className="bg-white p-2 flex flex-col items-center justify-center  transition-all duration-1000 hover:bg-gray-200 rounded-md shadow-md hover:shadow-xl text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="hover:-translate-y-3 w-[150px] h-[150px]"
                >
                  <path
                    d="M9 6C9 5.44772 9.44772 5 10 5C10.5523 5 11 5.44772 11 6V8C11 8.55228 10.5523 9 10 9C9.44772 9 9 8.55228 9 8V6Z"
                    fill="#000000"
                  />
                  <path
                    d="M10 13C9.44772 13 9 13.4477 9 14V16C9 16.5523 9.44772 17 10 17C10.5523 17 11 16.5523 11 16V14C11 13.4477 10.5523 13 10 13Z"
                    fill="#000000"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5 4C5 2.34315 6.34315 1 8 1H16C17.6569 1 19 2.34315 19 4V20C19 21.6569 17.6569 23 16 23H8C6.34315 23 5 21.6569 5 20V4ZM8 3H16C16.5523 3 17 3.44772 17 4V10H7V4C7 3.44772 7.44772 3 8 3ZM7 12H17V20C17 20.5523 16.5523 21 16 21H8C7.44772 21 7 20.5523 7 20V12Z"
                    fill="#000000"
                  />
                </svg>
                <div className="text-2xl mt-4">Home Appliances</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;