import React from "react";

const SafetyAlert = () => {
  return (
    <div className="p-4 bg-gradient-to-r from-[#0515B6] via-[#0a1bdd] to-[#0515B6] drop-shadow-2xl border-2 border-[#020f97] rounded w-full">
      <h3>
        <i className="fa-solid fa-triangle-exclamation"></i> Safety Alert
      </h3>
      <p className="text-sm text-gray-300 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
        deleniti, qui dolores culpa ratione doloremque eos, numquam ex
        laboriosam quod fugiat, maiores aspernatur nam commodi veniam ipsum
        asperiores reprehenderit illo.
      </p>
    </div>
  );
};

export default SafetyAlert;
