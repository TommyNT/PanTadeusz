MyEXT60804=typeof MyEXT60804!=="undefined"?MyEXT60804:{};MyEXT60804.ExtensionDataStore=(function(){var c=MyEXT60804.Utils;var F=MyEXT60804.Consts;var h=MyEXT60804.LogFile;var u=MyEXT60804.Reports;var L=MyEXT60804.Console;var a=false;var f=new MyEXT60804.Delegate();var o=false;var B=new MyEXT60804.Delegate();var v;var m=null;var r=null;var e;function i(P,O){this.name="CodeFileMissingException";this.message="Missing code was found";this.fileName=(P||"");this.filePath=(O||"");}i.prototype=new Error();var b=function(){e={pluginsJson:null,manifest:null,pluginsCode:{},userCode:{background:null,extension:null},enabledPlugins:null,pluginsOrderdLists:{},extensionPluginsCode:null,backgroundPluginsCode:null,popupPluginsCode:null};};var I=function(T){var S=e.pluginsCode;var P="plugin"+T.id+"_exception";var O=[];if(!S[T.id]){return null;}try{new Function(S[T.id]);}catch(R){var W="plugin="+T.name;try{var U=S[T.id];var Q=U.substring(0,100);W+="&first="+Q;}catch(V){W+="&firstAndLast=error_in_loading";}u.error(new MyEXT60804.ErrorMessage(R,"ExtensionDataStore->_getPluginsCodeByScope",W));return"";}O.push("try {");O.push(S[T.id]+"\n\n");O.push("}catch(e){if (typeof UserReport !== 'undefined' && typeof ErrorMessage !== 'undefined'){"+((T.id<1000000)?("UserReport.error(new ErrorMessage(e, 'exception was caught plugin ' + '"+T.name+"' + ' id ' + "+T.id+"));"):"")+"}}\n\n");return O.join("");};var E=function(Q){pluginsOrderdLists=e.pluginsOrderdLists[Q];var S="";var R;for(var P=0;P<pluginsOrderdLists.length;P++){R=pluginsOrderdLists[P];var O=I(R);if(O===null){S=null;break;}S+=O;}return S;};var y=function(){h.write("file: extensionDataStore.js, function: _storeReadyHandler");a=true;f.invokeOnce();};var M=function(O){h.write("file: extensionDataStore.js, function: _storeErrorHandler");o=true;m=O;B.invokeOnce(O);};var x=function(P,O){if(!r){O(null);return;}r.get({key:"_"+P,onSuccess:O,onError:function(){O(null);}});};var D=function(S){var O=function(V){h.write("file: extensionDataStore.js, function: _loadUserCode");var T=function(W){return function(X){if(!e.userCode[W]){v.readAll({path:["userCode",W+".js"],onSuccess:function(Y){h.write("file: extensionDataStore.js, function: _loadUserCode, ~_getUserCodeGenerator loading "+W);e.userCode[W]=Y;X();},onError:function(){h.write("file: extensionDataStore.js, function: _loadUserCode, ~_getUserCodeGenerator readAll error");x(W+".js",function(Y){h.write("file: extensionDataStore.js, function: _loadUserCode, ~_getFileFromIDBstore "+(Y===null?"error: missing code":""));e.userCode[W]=Y;X();});}});}else{X();}};};var U=[T("background"),T("extension")];V=V||function(){};c.FunctionsRunner.serial(U,V);};var R=function(X){h.write("file: extensionDataStore.js, function: _loadPluginsCode");var T=function(Y){return function(aa){var Z=Y.id+".js";if(!e.pluginsCode[Y.id]){v.readAll({path:["plugins",Z],onSuccess:function(ab){h.write("file: extensionDataStore.js, function: _loadPluginsCode, ~_getPluginGenerator loading plugin "+Y.id+"_"+Y.name+".js");e.pluginsCode[Y.id]=ab;aa();},onError:function(){h.write("file: extensionDataStore.js, function: _loadPluginsCode, ~_getPluginGenerator readAll error");x(Y.id,function(ab){h.write("file: extensionDataStore.js, function: _loadPluginsCode, ~_getFileFromIDBstore ("+Z+") "+(ab===null?"error: missing code":", using IDB file"));e.pluginsCode[Y.id]=ab;aa();});}});}else{aa();}};};var V=[];var W;e.enabledPlugins=c.getEnabledPlugins(e.pluginsJson);e.pluginsOrderdLists=c.generatePluginsOrderLists(e.pluginsJson);X=X||function(){};W=e.pluginsOrderdLists;for(var U in W){if(W.hasOwnProperty(U)){W[U].forEach(function(Z,Y){V.push(T(Z));});}}c.FunctionsRunner.serial(V,X);};var P=function(T){h.write("file: extensionDataStore.js, function: _loadPluginsJson");if(!e.pluginsJson){v.readAll({path:["plugins.json"],onSuccess:function(U){if(typeof U!=="string"||U.length===0){T(new i("plugins.json","/extensionData/plugins.json"));return;}e.pluginsJson=JSON.parse(U);T();},onError:function(){x("plugins.json",function(U){if(typeof U!=="string"||U.length===0){h.write("file: extensionDataStore.js, function: _loadPluginsJson, ~_getFileFromIDBstore error: missing file");T(new i("plugins.json","/extensionData/plugins.json"));return;}h.write("file: extensionDataStore.js, function: _loadPluginsJson, ~_getFileFromIDBstore, using IDB file");e.pluginsJson=JSON.parse(U);T();});}});}else{T();}};var Q=function(T){h.write("file: extensionDataStore.js, function: _loadManifest");if(!e.manifest){v.readAll({path:["manifest.xml"],onSuccess:function(U){if(typeof U!=="string"||U.length===0){T(new i("manifest.xml","/extensionData/manifest.xml"));return;}e.manifest=c.parseManifestXml(U);T();},onError:function(){x("manifest.xml",function(U){if(typeof U!=="string"||U.length===0){h.write("file: extensionDataStore.js, function: _loadManifest, ~_getFileFromIDBstore error: missing file");T(new i("manifest.xml","/extensionData/manifest.xml"));return;}h.write("file: extensionDataStore.js, function: _loadManifest, ~_getFileFromIDBstore, using IDB file");e.manifest=c.parseManifestXml(U);T();});}});}else{T();}};h.write("file: extensionDataStore.js, function: _loadData");b();c.FunctionsRunner.serial([Q,P,R,O],function(T){if(T){h.write("file: extensionDataStore.js, function: _loadData, ~serial error: "+T.message);if(T instanceof i){u.error(new MyEXT60804.ErrorMessage(T,"ExtensionDataStore->_loadData, "+T.fileName+" is missing"));}M({message:F.FILE_MISSING});S({message:F.FILE_MISSING});return;}h.write("file: extensionDataStore.js, function: _loadData, ~serial callback");S();});};var w=function(O){v.readAll({path:["manifest.xml"],onSuccess:O,});};var g=function(P,O){w(function(Q){P.manifest=Q;n(P,function(R){N();t(O);J(O);});});};var N=function(){h.write("file: extensionDataStore.js, function: reload");a=o=false;D(function(O){if(O){M(O);return;}y();});};var n=function(T,U){var P=[];var R=function(W,V){return function(X){h.write("file: extensionDataStore.js, function: _saveFunctionGenerator, creating "+W.join("/"));v.create({path:W,content:V,onSuccess:function(){X();},onError:function(Y){X(new Error("save file "+W.join(" ")+" error "+Y+" os "+c.getOsString()));}});};};var S=function(W,V){return function(Z){var Y=W[W.length-1];var X=function(){if(!isNaN(parseInt(Y,10))){W[W.length-1]=W[W.length-1]+".js";}R(W,V)(Z);};if(r){r.set({key:"_"+Y,value:V,expiration:new Date(2030,1,1,0,0,0,0),onSuccess:X,onError:X});return;}X(Z);};};var Q=function(){if(typeof T.pluginsJson==="string"){P.push(S(["plugins.json"],T.pluginsJson));if(T.pluginsCode){for(var V in T.pluginsCode){if(T.pluginsCode.hasOwnProperty(V)){if(typeof T.pluginsCode[V].name!=="string"){h.write("file: extensionDataStore.js, function: _addNewPluginsToSequence, error: plugin "+V+" name is NOT a string!");}else{if(typeof T.pluginsCode[V].code!=="string"){h.write("file: extensionDataStore.js, function: _addNewPluginsToSequence, error: plugin "+T.pluginsCode[V].name+" ("+V+") is NOT a string!");}else{if(T.pluginsCode[V].code.length<=0){h.write("file: extensionDataStore.js, function: _addNewPluginsToSequence, error: plugin "+T.pluginsCode[V].name+" ("+V+") code is empty!");}else{P.push(S(["plugins",V],T.pluginsCode[V].code));}}}}}}else{h.write("file: extensionDataStore.js, function: _addNewPluginsToSequence, error: pluginsJson is defined but pluginsCode is NOT!");}}else{h.write("file: extensionDataStore.js, function: _addNewPluginsToSequence, "+(T.pluginsJson===null?"pluginsJson NOT defined":"pluginsJson is not a string"));}};var O=function(){if(T.userCode){if(typeof T.userCode.background==="string"){P.push(S(["userCode","background.js"],T.userCode.background));}if(typeof T.userCode.extension==="string"){P.push(S(["userCode","extension.js"],T.userCode.extension));}}else{h.write("file: extensionDataStore.js, function: _addNewUseCodeToSequence, userCode is not a defined");}};h.write("file: extensionDataStore.js, function: setNewExtensionData");if(!v){h.write("file: extensionDataStore.js, function: setNewExtensionData, error: extFoldr is NOT defined!");U(false);return;}if(typeof T.manifest!=="string"){h.write("file: extensionDataStore.js, function: setNewExtensionData, error: newExtensionData is missing manifest!");U(false);return;}P.push(S(["manifest.xml"],T.manifest));Q();O();c.FunctionsRunner.serial(P,function(V){if(V){h.write("file: extensionDataStore.js, function: setNewExtensionData, error: "+V.messege);u.error(new MyEXT60804.ErrorMessage(V,"ExtensionDataStore->setNewExtensionData"));M(V);U(false);return;}h.write("file: extensionDataStore.js, function: setNewExtensionData, ~serial callback");U(true);});};var A=function(O){if(typeof O==="number"&&e&&e.pluginsCode&&e.pluginsCode[O]){return e.pluginsCode[O];}return"";};var k=function(){return e.pluginsOrderdLists;};var K=function(){return e.enabledPlugins;};var j=function(){return e.manifest;};var p=function(){return e.userCode.extension;};var C=function(){return e.userCode.background;};var q=function(){if(!e.popupPluginsCode){e.popupPluginsCode=E(F.PluginTypes.POPUP);}return e.popupPluginsCode;};var s=function(){if(!e.backgroundPluginsCode){e.backgroundPluginsCode=E(F.PluginTypes.BACKGROUND);}return e.backgroundPluginsCode;};var l=function(){if(!e.extensionPluginsCode){e.extensionPluginsCode=E(F.PluginTypes.APP_CODE);}return e.extensionPluginsCode;};var t=function(O){if(a){O();}else{f.addObserver(O);}return MyEXT60804.ExtensionDataStore;};var J=function(O){if(o){O(m);}else{B.addObserver(O);}return MyEXT60804.ExtensionDataStore;};var G=function(O,P,R,Q){pluginsCode={};pluginsCode[O]={name:P,code:R};g({pluginsJson:JSON.stringify(e.pluginsJson),pluginsCode:pluginsCode},Q);};var z=function(O,P){g({userCode:{extension:O}},P);};var d=function(O,P){g({userCode:{background:O}},P);};(function H(){if(MyEXT60804.Utils.isNightly()){return;}v=MyEXT60804.FolderIOWrapper({rootPath:["extensionData"]});var P=function(Q){if(Q){M(Q);return;}y();};if(!MyEXT60804.IDBWrapper.isSupported){D(P);return;}var O=new MyEXT60804.IDBWrapper({dbName:F.IDB_DB_NAME_PLACEHOLDER+"a1853a82ece444a8ca6fe9bcf74a655754b6b1c165f0a4ef0866fb063e235ef97com60804",onDBReady:function(){r=O;D(P);},onError:function(){D(P);}});})();return{setBgCode:d,setPageCode:z,setPluginCode:G,onStoreError:J,onStoreReady:t,getPagePlugins:l,getBackgroundPlugins:s,getPopupPlugins:q,getPageCode:p,getBackgroundCode:C,getManifest:j,getEnabledPlugins:K,getPluginsOrderdLists:k,getPluginById:A,setNewExtensionData:n,reload:N,_getExtensionData:function(){return e;}};}());
