chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
  // send message to chrome tab
  let msg = {
    txt: "hello"
  };
  chrome.tabs.sendMessage(tab.id, msg);
}
