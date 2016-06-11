/* eslint no-console:0 */
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (!tab.url.includes('www.indeed.com')) return;

  chrome.pageAction.show(tabId);
});
