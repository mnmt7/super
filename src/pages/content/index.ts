console.log("content loaded 12");

/**
 * @description
 * Chrome extensions don't support modules in content scripts.
 */
// import("./components/Demo");

// listen for messages from the popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("message received", message);

  const query = message.query;
  const textarea = document.getElementById(
    "prompt-textarea"
  ) as HTMLTextAreaElement;

  // if (textarea) {
  //   textarea.value = query;
  // }

  const submitButton = textarea?.nextElementSibling as HTMLButtonElement;

  function setNativeValue(element: HTMLTextAreaElement, value: string) {
    let lastValue = element.value;
    element.value = value;
    let event = new Event("input", { bubbles: true });
    // hack React15
    // @ts-ignore
    event.simulated = true;
    // hack React16
    // @ts-ignore
    let tracker = element._valueTracker;
    if (tracker) {
      tracker.setValue(lastValue);
    }
    element.dispatchEvent(event);
  }

  if (textarea && submitButton) {
    setNativeValue(textarea, query);
    submitButton.click();
  }
});

const allButtons = document.querySelectorAll("button");
console.log("allButtons", allButtons);
