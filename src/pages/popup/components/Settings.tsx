import React from "react";

const Settings = () => {
  const [preferences, setPreferences] = React.useState({
    topic: "",
    depth: "Beginner",
    emojis: "enabled",
    communicationStyle: "Formal",
    learningStyle: "Visual",
    toneStyle: "Encouraging",
    reasoningFramework: "Deductive",
  });

  const handleChange = (e) => {
    setPreferences({
      ...preferences,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    const query =
      `
You are a teaching wizard, experienced at helping students understand the content they are learning in a personalized manner. Your knowledge is both wide and deep. 

Here are the preferences of your student -
    ` +
      getPreferencesText(preferences) +
      `
    
Now, let's create a personalized lesson plan for your student.
    `;

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id as number, { query });
    });
  };

  const {
    topic,
    depth,
    emojis,
    communicationStyle,
    learningStyle,
    toneStyle,
    reasoningFramework,
  } = preferences;

  return (
    <>
      <p className="font-bold text-2xl mb-3">
        Let's create a personalized lesson plan for you!
      </p>
      <div className="">
        <div className="mb-4">
          <label htmlFor="topic">What do you want to learn?</label>
          <input
            name="topic"
            id="topic"
            className="border-2 mt-2 px-2"
            value={topic}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="depth">What is your level in the topic above?</label>
          <select
            name="depth"
            id="depth"
            className="mt-2 px-2 py-1"
            value={depth}
            onChange={handleChange}
          >
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="mr-2">Would like to use Emojis in the plan?</label>
          <div className="flex">
            <div className="mr-3">
              <input
                type="radio"
                name="emojis"
                value="enabled"
                id="enabledEmoji"
                className="mt-2 mr-2"
                onChange={handleChange}
                checked={emojis === "enabled"}
              />
              <label htmlFor="enabledEmoji">Enabled</label>
            </div>
            <div>
              <input
                type="radio"
                name="emojis"
                value="disabled"
                id="disabledEmoji"
                className="mt-2 mr-2"
                onChange={handleChange}
                checked={emojis === "disabled"}
              />
              <label htmlFor="DisabledEmoji">Disabled</label>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="communicationStyle" className="block">
            What communication style do you prefer?
          </label>

          <select
            name="communicationStyle"
            id="communicationStyle"
            className="mt-2 px-2 py-1"
            onChange={handleChange}
            value={communicationStyle}
          >
            <option value="Formal">Formal</option>
            <option value="Textbook">Textbook</option>
            <option value="Layman">Layman</option>
            <option value="Story Telling">Story Telling</option>
            <option value="Socratic">Socratic</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="learningStyle" className="block">
            What learning style do you prefer?
          </label>

          <select
            name="learningStyle"
            id="learningStyle"
            className="mt-2 px-2 py-1"
            onChange={handleChange}
            value={learningStyle}
          >
            <option value="Visual">Visual</option>
            <option value="Verbal">Verbal</option>
            <option value="Active">Active</option>
            <option value="Intuitive">Intuitive</option>
            <option value="Reflective">Reflective</option>
            <option value="Global">Global</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="toneStyle" className="block">
            What tone style do you prefer?
          </label>

          <select
            name="toneStyle"
            id="toneStyle"
            className="mt-2 px-2 py-1"
            onChange={handleChange}
            value={toneStyle}
          >
            <option value="Encouraging">Encouraging</option>
            <option value="Neutral">Neutral</option>
            <option value="Informative">Informative</option>
            <option value="Friendly">Friendly</option>
            <option value="Humorous">Humorous</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="reasoningFramework" className="block">
            What reasoning framework do you prefer?
          </label>

          <select
            name="reasoningFramework"
            id="reasoningFramework"
            className="mt-2 px-2 py-1"
            onChange={handleChange}
            value={reasoningFramework}
          >
            <option value="Deductive">Deductive</option>
            <option value="Inductive">Inductive</option>
            <option value="Abductive">Abductive</option>
            <option value="Analogical">Analogical</option>
            <option value="Causal">Causal</option>
          </select>
        </div>
      </div>

      <button
        className="border-2 border-solid border-black rounded-full mx-auto block px-5 py-2 bg-black text-white w-full"
        onClick={handleSubmit}
      >
        Start Learning
      </button>
    </>
  );
};

const getPreferencesText = (preferences) => {
  const {
    topic,
    depth,
    emojis,
    communicationStyle,
    learningStyle,
    toneStyle,
    reasoningFramework,
  } = preferences;

  return `
Topic: ${topic}
Depth: ${depth}
Emojis: ${emojis}
Communication Style: ${communicationStyle}
Learning Style: ${learningStyle}
Tone Style: ${toneStyle}
Reasoning Framework: ${reasoningFramework}
  `;
};

export default Settings;
