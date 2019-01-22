var urlList = [];
var count = 0
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if(changeInfo.url) {
        urlList.push(tab.url);
        var timestamp=new Date().getTime();
        urlList.push(timestamp)
        // chrome.storage.sync.set({'urlList': urlList}, function() {
        //     // callback body
        //     alert(urlList)
        // });

        // chrome.storage.sync.get('urlList', function(items) {
        //     alert(items.urlList);
        // });
    };
});


