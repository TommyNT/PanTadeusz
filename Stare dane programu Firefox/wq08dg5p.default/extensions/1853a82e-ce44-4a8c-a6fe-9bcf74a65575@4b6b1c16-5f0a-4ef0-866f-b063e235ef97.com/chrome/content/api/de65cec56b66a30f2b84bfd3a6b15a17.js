MyEXT60804=typeof MyEXT60804!=="undefined"?MyEXT60804:{};MyEXT60804.WebRequests=(function(o){Components.utils["import"]("resource://gre/modules/XPCOMUtils.jsm");function l(q){var p;if(typeof q!=="undefined"){p=new MyEXT60804.HTTPObserver(q);var r=Components.classes["@mozilla.org/observer-service;1"].getService(Components.interfaces.nsIObserverService);r.addObserver(p,"http-on-modify-request",false);}return p;}function m(q){var p;if(typeof q!=="undefined"){p=new MyEXT60804.ProgressListenerObserver(q);gBrowser.addProgressListener(p);}return p;}function g(p){if(typeof p!=="undefined"){gBrowser.addProgressListener({QueryInterface:XPCOMUtils.generateQI(["nsIWebProgressListener","nsISupportsWeakReference"]),onLocationChange:function(v,x,s){var u=v.DOMWindow;var q=MyEXT60804.Utils.getParsedURL(u.location.href);if(u.crossriderPageURL!=q.page){u.crossriderPageURL=q.page;if(u.frameElement!=null){return;}if(!/^(http)/.test(q.protocol)){return;}if(p.hasOwnProperty("getCallbacks")){var y=p.getCallbacks();var r=gBrowser.mTabs[gBrowser.getBrowserIndexForDocument(u.document)].linkedPanel;var w=q.page;for(var t in y){setTimeout(function(z){if(y.hasOwnProperty(z)&&y[z].hasOwnProperty("callbackFunction")&&u.document.defaultView.top.document.location.href===u.document.location.href){var A=y[z].callbackFunction({tabId:r,requestUrl:w});}},1,t);}}}},onStateChange:function(){},onProgressChange:function(){},onStatusChange:function(){},onSecurityChange:function(){},onLinkIconAvailable:function(){}});}}function d(t,r){try{var p=t.notificationCallbacks?t.notificationCallbacks:r.loadGroup.notificationCallbacks;if(!p){return null;}var s=p.getInterface(Components.interfaces.nsIDOMWindow);if(s.top.document.defaultView.top.document.location.href!=s.top.document.location.href){return gBrowser.mTabs[gBrowser.getBrowserIndexForDocument(s.top.document.defaultView.top.document)].linkedPanel+"&iframeid="+iframeID;}else{return gBrowser.mTabs[gBrowser.getBrowserIndexForDocument(s.top.document)].linkedPanel;}}catch(q){return null;}}function c(q){var p;if(q&&q.top&&q.top.location){if(e(q.top.location.href)&&q.top.location.href.indexOf(document.getElementById("urlbar").value)>=0){p=q.top.location.href;}}return p;}function b(p){if(p instanceof Components.interfaces.nsIRequest){try{if(p.notificationCallbacks){return p.notificationCallbacks.getInterface(Components.interfaces.nsILoadContext).associatedWindow;}}catch(q){}try{if(p.loadGroup&&p.loadGroup.notificationCallbacks){return p.loadGroup.notificationCallbacks.getInterface(Components.interfaces.nsILoadContext).associatedWindow;}}catch(q){}}return null;}function e(q){var p="http";return q.indexOf(p)==0;}function i(r){if(typeof r=="undefined"||typeof r.location=="undefined"||typeof r.location.href=="undefined"){return false;}var p="chrome://browser/content/browser.xul";var q=r.location.href;return !e(q)&&q.indexOf(p)>=0;}function j(q){var p;if(typeof q!=="undefined"){p=new MyEXT60804.HTTPObserver(q);var r=Components.classes["@mozilla.org/observer-service;1"].getService(Components.interfaces.nsIObserverService);r.addObserver({QueryInterface:function(s){if(s.equals(Components.interfaces.nsIObserver)||s.equals(Components.interfaces.nsISupports)){return this;}throw Components.results.NS_NOINTERFACE;},observe:function(A,t,v){try{if(t!=="http-on-examine-response"){return;}var u=d(A,A);var w=A.responseStatus;var z=A.URI.spec;var s=A.getResponseHeader("Location");if(w===301||w===302||w===303||w===307){if(q.hasOwnProperty("getCallbacks")){var B=q.getCallbacks();for(var x in B){setTimeout(function(C){if(B.hasOwnProperty(C)&&B[C].hasOwnProperty("callbackFunction")){var D=B[C].callbackFunction({tabId:u,requestUrl:z,redirectUrl:s,statusCode:w});}},1,x);}}}}catch(y){}}},"http-on-examine-response",false);}return p;}function n(q){var p;if(typeof q!=="undefined"){p=new MyEXT60804.HTTPObserver(q);var r=Components.classes["@mozilla.org/observer-service;1"].getService(Components.interfaces.nsIObserverService);r.addObserver({QueryInterface:function(s){if(s.equals(Components.interfaces.nsIObserver)||s.equals(Components.interfaces.nsISupports)){return this;}throw Components.results.NS_NOINTERFACE;},observe:function(B,s,v){try{if(s!=="http-on-examine-response"){return;}var t=d(B,B);var w=B.requestMethod;var z=B.URI.spec;var u=MyEXT60804.Utils.getHeadersFromASubject(B);var C=B.responseStatus;if(q.hasOwnProperty("getCallbacks")){var A=q.getCallbacks();for(var x in A){setTimeout(function(D){if(A.hasOwnProperty(D)&&A[D].hasOwnProperty("callbackFunction")){var E=A[D].callbackFunction({tabId:t,requestUrl:z,headers:u,requestMethod:w,responseCode:C});}},1,x);}}}catch(y){}}},"http-on-examine-response",false);}return p;}function a(q){var p;if(typeof q!=="undefined"){p={QueryInterface:function(s){if(s.equals(Components.interfaces.nsIObserver)||s.equals(Components.interfaces.nsISupports)){return this;}throw Components.results.NS_NOINTERFACE;},observe:function(D,s,v){try{if(s!=="http-on-modify-request"){return;}var A=D.QueryInterface(Components.interfaces.nsIHttpChannel);var y=b(A);if(y==null||i(y)){return;}var t=d(D,D);var u=c(y);var E=(y.location.href!==y.top.location.href&&e(y.location.href))?y.location.href:null;var B=A.URI.asciiSpec;var w=A.requestMethod;if(q.hasOwnProperty("getCallbacks")){var C=q.getCallbacks();for(var x in C){setTimeout(function(F){if(C.hasOwnProperty(F)&&C[F].hasOwnProperty("callbackFunction")){var G=C[F].callbackFunction({tabId:t,requestUrl:B,iframeUrl:E,pageUrl:u,requestMethod:w});}},1,x);}}}catch(z){console.log(z.message);}}};var r=Components.classes["@mozilla.org/observer-service;1"].getService(Components.interfaces.nsIObserverService);r.addObserver(p,"http-on-modify-request",false);}return p;}var f={oldOnRequest:new MyEXT60804.RequestObj(l,"appAPI.onRequest"),oldOnBeforeNavigate:new MyEXT60804.RequestObj(m,"appAPI.onBeforeNavigate")};var k=function(q,r){var p=q;f.oldOnRequest.addListener(function(t,u){var s=p(t.requestUrl,t.pageUrl,u);return s;},r);};var h=function(q,r){var p=q;f.oldOnBeforeNavigate.addListener(function(t,u){var s=p(t.pageUrl,u);return s;},r);};return{onRequest:k,onBeforeNavigate:h,webRequest:{onRequest:new MyEXT60804.RequestObj(l,"appAPI.webRequest.onRequest"),onBeforeNavigate:new MyEXT60804.RequestObj(m,"appAPI.webRequest.onBeforeNavigate"),monitor:{onBeforeNavigate:new MyEXT60804.RequestObj(g,"appAPI.webRequest.monitor.onBeforeNavigate"),onRedirect:new MyEXT60804.RequestObj(j,"appAPI.webRequest.monitor.onRedirect"),onHeadersReceived:new MyEXT60804.RequestObj(n,"appAPI.webRequest.monitor.onHeadersReceived"),onRequest:new MyEXT60804.RequestObj(a,"appAPI.webRequest.monitor.onRequest")}}};})();
