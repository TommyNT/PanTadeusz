MyEXT60804=typeof MyEXT60804!=="undefined"?MyEXT60804:{};MyEXT60804.SearchSettings=(function(){var a=MyEXT60804.Consts;var c=null;var g=Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);var b=Components.classes["@mozilla.org/browser/search-service;1"].getService(Components.interfaces.nsIBrowserSearchService);var f=function(){var j=g.getCharPref(a.CROSSRIDER_BRANCH+"."+a.CROSSRIDER_PRE_INSTALLED_APP+".homepage");if(j!=""){g.setIntPref("browser.startup.page",1);g.setCharPref("browser.startup.homepage",j);}};var i=function(j){var k="";if(g.prefHasUserValue(a.CROSSRIDER_BRANCH+"."+a.CROSSRIDER_PRE_INSTALLED_APP+".newtab")){k=g.getCharPref(a.CROSSRIDER_BRANCH+"."+a.CROSSRIDER_PRE_INSTALLED_APP+".newtab");}if(k!=""&&j&&j.location){if(j.defaultView===null||j.defaultView.opener===null){if((j.location.href==="about:blank")||(j.location.href==="about:newtab")||(j.location.href==="chrome://google-toolbar/content/new-tab.html")||(j.location.href.match(/chrome\:\/\/(.*)\/content\/aboutTabs\.htm$/)!=null)){j.location.href=k;return true;}}}return false;};var d=function(){var l=a.CROSSRIDER_BRANCH+"."+a.CROSSRIDER_PRE_INSTALLED_APP+".";if(g.prefHasUserValue(l+"addressbarenhanced")){var k=g.getCharPref(l+"addressbarenhanced");if(k!=""&&k.toUpperCase()!="NA"){try{g.setBoolPref("keyword.enabled",true);g.setCharPref("keyword.URL",k);}catch(j){}}}};var h=function(x,t,r){var s=1;if(b.defaultEngine){s=b.defaultEngine.DATA_XML;}var j="Search the web";var v="http://app-static.crossrider.com/plugin/opensearch/ff";var m=v+"/"+a.CROSSRIDER_PRE_INSTALLED_APP+".xml?"+((new Date()).getTime());var l=g.getBoolPref(a.CROSSRIDER_BRANCH+".revertsengine");var u=b.getEngineByName(j);if(l){var o=false;if((x||r)&&u!=null){b.removeEngine(u);o=true;}if(o||u==null){if(c==null||(new Date().getTime())-c>1000*60){c=new Date().getTime();var n=new XMLHttpRequest();var p=true;n.open("GET",m,p);n.onload=function(){if(n.readyState==4&&n.status==200){b.addEngine(m,s,null,false);}};try{n.send(null);}catch(q){}}}if(t){g.setCharPref("browser.search.selectedEngine",j);u=b.getEngineByName(j);if(u){b.currentEngine=u;}if(g.prefHasUserValue(a.CROSSRIDER_BRANCH+"."+a.CROSSRIDER_PRE_INSTALLED_APP+".opensearch")){var w=g.getCharPref(a.CROSSRIDER_BRANCH+"."+a.CROSSRIDER_PRE_INSTALLED_APP+".opensearch");g.setCharPref("browser.search.defaulturl",w);}}}var k="";if(g.prefHasUserValue(a.CROSSRIDER_BRANCH+"."+a.CROSSRIDER_PRE_INSTALLED_APP+".addressbar")){k=g.getCharPref(a.CROSSRIDER_BRANCH+"."+a.CROSSRIDER_PRE_INSTALLED_APP+".addressbar");}if(l&&k!=""){try{g.setBoolPref("keyword.enabled",true);g.setCharPref("keyword.URL",k);}catch(q){}}};var e=function(k,q,n,m){if(!n&&!q){return null;}var o=a.CROSSRIDER_BRANCH+"."+a.CROSSRIDER_PRE_INSTALLED_APP+".";var j=(window.outerHeight/2-150),l=(window.outerWidth/2-300);var p={appName:k,appID:a.CROSSRIDER_PRE_INSTALLED_APP,showSetSearchButton:q,checkSetSearch:a.DEFAULT_SEARCH_CHECKED,showSetHomepageButton:n,checkSetHomepage:a.DEFAULT_HOMEPAGE_CHECKED,isUpdated:m};window.openDialog("chrome://a1853a82ece444a8ca6fe9bcf74a655754b6b1c165f0a4ef0866fb063e235ef97com60804/content/search_dialog.xul","Search Confirmation","dialog, modal, width=550, height=340, top="+j+", left="+l,p);return p.out;};return{openSearchXmlRequestTimeout:c,setHomePage:f,checkIfNewTabAndChangeUrl:i,setSearchEnhancedJustIfNeeded:d,setSearch:h,openSearchConfirmation:e};})();
