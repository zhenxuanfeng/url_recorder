var records = [];
var count = 0
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if(changeInfo.url) {
        var record = {};
        record['url'] = tab.url;
        record['time'] = new Date().getTime();
        records.push(record);
        data = JSON.stringify(records)
        alert(records.length);
        // urlList.push(tab.url);
        // var timestamp=new Date().getTime();
        // urlList.push(timestamp)
        // chrome.storage.sync.set({'urlList': urlList}, function() {
        //     // callback body
        //     alert(urlList)
        // });

        // chrome.storage.sync.get('urlList', function(items) {
        //     alert(items.urlList);
        // });
    };
});



// {"records":{
//     {"url":"www.baidu.com", "time":"123567890"}
// }}

// {"sites":[
//     {"name":"Runoob", "url":"www.runoob.com"}, 
//     {"name":"Google", "url":"www.google.com"},
//     {"name":"Taobao", "url":"www.taobao.com"}
// ]}