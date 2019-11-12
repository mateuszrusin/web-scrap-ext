console.log ('WEB SCRAP BACKGROUND');

////////////// LISTENERS //////////////////  

//  ON CLICKED PAGE ACTION
//chrome.pageAction.onClicked.addListener(doIconClick);   

//  ON UPDATED TABS
//chrome.tabs.onUpdated.addListener(doTabUpdatedAction);

// ON REMOVED TABS
//chrome.tabs.onRemoved.addListener(console.log('remove tab'));

// ON EXTENSION REQUEST
//chrome.extension.onRequest.addListener(console.log('on request tab'));

function doIconClick(tab) // examine current page when icon clicked
{
    console.log('Icon Clicked in Window '+tab.windowId+' Tab '+tab.id+' on '+tab.url);
    mainWindowId=tab.windowId;
    timeOfFirstRequest=new Date().getTime();
    console.log(tab.url);
}
function doTabUpdatedAction(tab_id, data, tab)
{
    console.log('Tab updated in '+tab.windowId+' Tab '+tab.id+'data: '+data);
    console.log(tab.url);
    console.log(data);  
}
console.log('BACKGROUND.JS waiting'); console.log(' ');
