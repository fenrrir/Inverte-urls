function genericOnClick(info, tab) {

  var reversed = info.linkUrl.split("url=")[1];

  if (reversed == undefined)
    reversed = info.linkUrl

  var link="";
  for (count=reversed.length; count >= 0; count--){
    link+=reversed.substring(count,count-1);
  }

  window.open(link);


}

var title = "Abrir com url invertida";
var id = chrome.contextMenus.create({"title": title, "contexts":["link"],
                                     "onclick": genericOnClick});
