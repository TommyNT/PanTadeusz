MyEXT60804=typeof MyEXT60804!=="undefined"?MyEXT60804:{};MyEXT60804.__files_present__=MyEXT60804.__files_present__?MyEXT60804.__files_present__+"y":"y";MyEXT60804.Request=function(){var d=MyEXT60804.Reports;var e=MyEXT60804.ErrorMessage;var l=MyEXT60804.Utils;var j="appAPI.request UserCallback";function c(n,o,p){var m={url:n,method:p};if(p==="POST"){m.data=o;}return m;}function f(m,o){var n={url:m.url,method:o,additionalRequestHeaders:m.additionalRequestHeaders};if(o==="POST"){n.data=m.postData;n.contentType=m.contentType;}return n;}function k(m,n){return function(p){var o=function(s,t){if(m&&(typeof m=="function")){m(s,t);}};var q=function(s,t){if(n&&(typeof n=="function")){n(s,t);}};var r=JSON.stringify(p.additionalInfo);if(p.call==="success"){o(p.response,r);}else{q(p.response,r);}};}function g(o,q,s,p,m){try{var n=l.getFirefoxVersion();var v;if(typeof o==="object"){if(n>=32){v=f(Components.utils.waiveXrays(o),m);s=l.surroundUserCallbackWithTryCatch(Components.utils.waiveXrays(o).onSuccess,j);p=l.surroundUserCallbackWithTryCatch(Components.utils.waiveXrays(o).onFailure,j);}else{v=f(o,m);s=l.surroundUserCallbackWithTryCatch(o.onSuccess,j);p=l.surroundUserCallbackWithTryCatch(o.onFailure,j);}}else{v=c(o,q,m);s=l.surroundUserCallbackWithTryCatch(s,j);p=l.surroundUserCallbackWithTryCatch(p,j);}var t=k(s,p);v.callback=t;v.async=v.async===undefined?true:v.async;var u=new MyEXT60804.XHR(v);u.send();}catch(r){t({call:"failure",response:"Failed To Make Request: "+o});}}var a=function(m,p,n){var o=undefined;g(m,o,p,n,"GET");};var b=function(m,p,o,n){g(m,p,o,n,"POST");};var i=function(n){if(!n){return false;}n.failureCallback=n.failureCallback||function(){};n.successCallback=n.successCallback||function(){};if(typeof n.url!=="string"){return n.failureCallback(-1);}var r=new XMLHttpRequest(),p,m,q,o;if(typeof Uint8Array=="undefined"){return n.failureCallback(-2);}r.open("GET",n.url,true);r.responseType="arraybuffer";r.onload=function(s){if(this.status==200){p=new Uint8Array(this.response);o=p.length;m=new Array(o);while(o--){m[o]=String.fromCharCode(p[o]);}q=m.join("");n.successCallback(n.base64?window.btoa(q):q);}else{n.failureCallback(this.status);}};r.send();};var h={__exposedProps__:{get:"wr",post:"wr",getBinary:"wr"}};h.get=function(n){var m;try{var p=new MyEXT60804.XHR({url:n,method:"get",async:false});m=p.send();}catch(o){}return m;};h.post=function(n,q){var m;try{var p=new MyEXT60804.XHR({url:n,data:q,method:"post",async:false});m=p.send();}catch(o){}return m;};return{get:a,post:b,getBinary:i,sync:h,__exposedProps__:{get:"wr",post:"wr",getBinary:"wr",sync:"wr"}};};
