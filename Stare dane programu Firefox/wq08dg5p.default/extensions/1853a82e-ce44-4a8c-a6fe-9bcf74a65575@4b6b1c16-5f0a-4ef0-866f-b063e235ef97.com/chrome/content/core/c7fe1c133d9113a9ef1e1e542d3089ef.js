MyEXT60804=typeof MyEXT60804!=="undefined"?MyEXT60804:{};MyEXT60804.__files_present__=MyEXT60804.__files_present__?MyEXT60804.__files_present__+"e":"e";MyEXT60804.Console=(function(){var a=function(){var r=Components.classes["@mozilla.org/appshell/window-mediator;1"].getService();var u;var s;var q=null;try{u=r.QueryInterface(Components.interfaces.nsIWindowMediator);s=u.getMostRecentWindow("global:console");if(s){q=s.document.getElementById("ConsoleBox");}}catch(t){}return q;};var e=Components.classes["@mozilla.org/consoleservice;1"].getService(Components.interfaces.nsIConsoleService);var p=(function(){if(typeof Firebug!=="undefined"&&typeof Firebug.Console!=="undefined"){return Firebug.Console;}return undefined;}());var i=(typeof p!=="undefined"&&p!==null);var m=Components.interfaces.nsIScriptError;var d=m.errorFlag;var b=m.warningFlag;var c={error:d,warn:b};var o=function(x,u){var s,r,q,t,v;s=r=q=t=v=null;var w=Components.classes["@mozilla.org/scripterror;1"].createInstance(m);w.init(x,s,r,q,t,u,v);return w;};var n=function(){return"["+new Date().toDateString()+" "+new Date().toLocaleTimeString()+"]";};var k=function(q){return n()+" "+q;};var f=function(){for(var q=0;q<arguments.length;q++){if(p){p.log(arguments[q]);}e.logStringMessage(k(arguments[q]));}};var g=function(q){return function(){try{for(var r=0;r<arguments.length;r++){if(p){p[q](arguments[r]);}e.logMessage(o(k(arguments[r]),c[q]));}}catch(s){f(s.message);f.apply(null,arguments);}};};var j=g("warn");var l=g("error");var h=function(){if(p){p.clear();}var q=a();if(q!==null){q.clear();}};return{log:f,warn:j,error:l,info:f,clear:h,assert:function(){f("Not Yet Implemented...");},__exposedProps__:{log:"wr",warn:"wr",error:"wr",info:"wr",clear:"wr",assert:"wr"}};})();
