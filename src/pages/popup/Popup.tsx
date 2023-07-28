import React from "react";
import Learn from "./components/Learn";
import Header from "./components/Header";

const Popup = () => {
  const [tab, setTab] = React.useState("main");

  const handleClick = () => {
    setTab("learn");
  };

  if (tab === "learn") {
    return (
      <div className="bg-black h-[100vh] px-[10px]">
        <Header />
        <Learn />
      </div>
    );
  }

  return (
    <div className="bg-black h-[100vh] px-[10px]">
      <Header />

      <button
        className="border-solid border-cyan-950 border-[0.1px] h-10 text-lg text-center w-full"
        onClick={handleClick}
      >
        Start Learning
      </button>
    </div>
  );
};

export default Popup;
