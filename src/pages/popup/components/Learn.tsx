import React from "react";

const Learn = () => {
  const [query, setQuery] = React.useState("hello world4");

  const handleSubmit = () => {
    // send message to content script
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id as number, { query });
    });
  };

  return (
    <div>
      <h1>super</h1>
      <input
        placeholder="your query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="text-black"
      />
      <button
        onClick={handleSubmit}
        className="block border-solid border-2 border-black"
      >
        click
      </button>
    </div>
  );
};

export default Learn;
