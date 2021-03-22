const applyComments = () => {
    chrome.storage.local.get("hidden", function (value) {
        comments = document.getElementsByClassName('comment');
        d = 0;
        for (i = 0; i < comments.length; i++) {
            const imgs = comments[i].getElementsByTagName('img');
            if (imgs.length == 0) {
                comments[i].hidden = value.hidden;
                d++;
            }
        }

        console.log(`hidden comments: ${d}`);
    });
}

applyComments();

chrome.runtime.onMessage.addListener((request, send, sendResponse) => {
    if (request.update == true) {
        applyComments();
        sendResponse({ "res": true });
    }
});
