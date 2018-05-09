chrome.tabs.onCreated.addListener(
    function(tab) {
        if(tab.url.indexOf('30nama') > -1){
           console.log("30nama here");
           newUrl = tab.url.replace(/30nama.*?\// , '30nama.io/');
           chrome.tabs.update(tab.id, {url: newUrl});
        }
    });
