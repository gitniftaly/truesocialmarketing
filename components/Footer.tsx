import React from "react";

const Footer = () => {
  const someInfo = ["About us", "Support", "Quick Links", "Some other"];
  return (
    <div className="h-auto bg-black text-white sm:w-200 flex flex-col items-center p-2">
      <section className="h-40">
        <header>
          <h1 className="text-center p-2"> Electronic Information Services </h1>
        </header>
        <article className="sm:grid sm:grid-cols-2 gap-4 flex flex-col">
          <p>
            <span className="font-bold">Cloud Storage/Computing</span> :{" "}
            <p>
              Services that store data or offer computing power over the
              internet.
            </p>
          </p>
          <p>
            <span className="font-bold">Financial Market Reports:</span> :{" "}
            <p>Real-time stock, bond, or investment reports.</p>
          </p>
          <p>
            <span className="font-bold">Email/Collaboration Tools:</span> :{" "}
            <p>Communication platforms for sharing information.</p>
          </p>
        </article>
      </section>
      <section className="h-40 w-full mt-10">
        <header>
          <h1 className="text-center w-full text-lg mt-10 sm:mt-0">
            Compani information
          </h1>
          <section className="flex justify-center py-3">
            <ul className="flex flex-col sm:flex-row gap-5 space-x-4 sm:gap-10">
              {someInfo.map((inf, ind) => (
                <li key={ind} className="text-xl text-blue-500">
                  {inf}
                </li>
              ))}
            </ul>
          </section>
        </header>
      </section>
      <section className="flex justify-center mt-20">
        <span className="text-white">&copy; 2026 All Rights Reserved </span>
      </section>
    </div>
  );
};

export default Footer;
