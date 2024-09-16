import React from "react";

function Feature({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.JSX.Element;
}) {
  return (
    <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
      <div className="rounded-lg h-64 overflow-hidden">
        <img
          alt="content"
          className="object-cover object-center h-full w-full"
          src="https://fakeimg.pl/1205x505"
        />
      </div>
      <h2 className="mb-4 text-2xl font-semibold- title-font text-slate-900 mt-5">
        {title}
      </h2>
      <p className="text-base font-light leading-relaxed mt-2 text-slate-700 opacity-90 ">
        {description}
      </p>
    </div>
  );
}

export default Feature;
