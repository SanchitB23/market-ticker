import React from "react";
import Image from "next/image";

function Testimonials() {
  return (
    <section id={"testimonials"} className="mb-32 text-center">
      <h2 className="mb-12 pb-4 text-center text-3xl font-bold">
        Testimonials
      </h2>

      <div className="grid gap-6 md:grid-cols-3 xl:gap-x-12">
        {[0, 1, 2].map((value) => (
          <div className="mb-6 lg:mb-0" key={value}>
            <div className="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-card">
              <div className="flex">
                <div
                  className="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <Image
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/8.jpg"
                    className="w-full"
                    alt={""}
                  />
                  <a href="#!">
                    <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h5 className="mb-2 text-lg font-bold">John Doe</h5>
                <h6 className="dark:text-primary-400 mb-4 font-medium text-accent-2">
                  Web Developer
                </h6>
                <ul className="mb-6 flex justify-center">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 96 960 960"
                      className="text-warning w-5"
                    >
                      <path
                        fill="currentColor"
                        d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 96 960 960"
                      className="text-warning w-5"
                    >
                      <path
                        fill="currentColor"
                        d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 96 960 960"
                      className="text-warning w-5"
                    >
                      <path
                        fill="currentColor"
                        d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 96 960 960"
                      className="text-warning w-5"
                    >
                      <path
                        fill="currentColor"
                        d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 96 960 960"
                      className="text-warning w-5"
                    >
                      <path
                        fill="currentColor"
                        d="m480 757 157 95-42-178 138-120-182-16-71-168v387ZM233 976l65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                      />
                    </svg>
                  </li>
                </ul>
                <p>
                  Ut pretium ultricies dignissim. Sed sit amet mi eget urna
                  placerat vulputate. Ut vulputate est non quam dignissim
                  elementum. Donec a ullamcorper diam.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
