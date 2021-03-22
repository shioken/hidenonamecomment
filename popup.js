const cb = document.getElementById("hiddencomments");
chrome.storage.local.get("hidden", function (value) {
    cb.checked = value.hidden;
});

cb.onchange = event => {
    chrome.storage.local.set({ "hidden": cb.checked }, () => {
        chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
            chrome.tabs.sendMessage(tabs[0].id, { update: true }, item => {
                console.log(response);
            });
        });
    });
}
