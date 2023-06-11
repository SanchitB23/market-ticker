import React from "react";

function Faq() {
  return (
    <section className="mb-32" id="about">
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-wide">
          Everything you need to know
        </h2>
        <p>Here are the most questions people always ask about</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {[0, 1, 2, 3, 4, 5].map((i, index) => (
          <div className="mb-6 md:mb-8 lg:mb-12" key={index}>
            <p className="mb-4 font-bold">
              Anim pariatur cliche reprehenderit?
            </p>
            <p className="text-neutral-500 dark:text-neutral-300">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
              autem numquam dolore molestias aperiam culpa alias veritatis
              architecto eos, molestiae vitae ex eligendi libero eveniet
              dolorem, doloremque rem aliquid perferendis.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Faq;
