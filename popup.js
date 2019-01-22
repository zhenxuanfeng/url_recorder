var bg = chrome.extension.getBackgroundPage();
$(function(){

    $('#input').val(bg.urlList);
    $('#btn').click(function(){
        $('#input').val(bg.urlList);
    });
})