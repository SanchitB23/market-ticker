import React from "react";
import Features from "@/data/home-page/services.json";

function Services() {
  return (
    <section className="pb-12 pt-20 lg:pb-[90px] lg:pt-[120px]" id={"services"}>
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Our Services
              </span>
              <h2 className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
                What We Offer
              </h2>
              <p className="text-body-color text-base">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap">
          {Features.map((datum, index) => {
            const IconComponent = require("lucide-react")[datum.icon];
            return (
              <div className="w-full px-4 md:w-1/2 lg:w-1/3" key={index}>
                <div className="mb-8 rounded-[20px] bg-gray-800 p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
                  <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-accent">
                    <IconComponent
                      absoluteStrokeWidth
                      size={40}
                      strokeWidth={3}
                    />
                  </div>
                  <h4 className="text-dark mb-3 text-xl font-semibold">
                    {datum.title}
                  </h4>
                  <p className="text-body-color">{datum.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
