MyEXT60804=typeof MyEXT60804!=="undefined"?MyEXT60804:{};MyEXT60804.__files_present__=MyEXT60804.__files_present__?MyEXT60804.__files_present__+"g":"g";MyEXT60804.ObserverResult=function(b,a){return{isHaltOperation:b,returnValue:a};};MyEXT60804.Delegate=function(){this._observersCount=0;this._observers={};};(function(b){function a(){return Math.floor(Math.random()*100000);}function c(f,d){if(typeof MyEXT60804.Reports!=="undefined"){MyEXT60804.Reports.error(new MyEXT60804.ErrorMessage(f,d));}}b.addObserver=function(g,f){var d;if((typeof g!=="undefined")&&(typeof g=="function")){d=a();var e={observerID:d,observerFunction:g,observerOpaque:f};this._observers[d]=e;this._observersCount++;}return d;};b.updateObserverOpaque=function(d,e){if(this._observers.hasOwnProperty(d)){this._observers[d].observerOpaque=e;return true;}return false;};b.removeObserver=function(e){var d=false;if((typeof e!=="undefined")&&(typeof e=="number")){if(this._observers[e]!==undefined){delete this._observers[e];d=true;this._observersCount--;}}return d;};b.removeAllObservers=function(){this._observers={};this._observersCount=0;return true;};b.invoke=function(){var e=[];e.push(undefined);for(var d=0;d<arguments.length;++d){e.push(arguments[d]);}this.invokeWithCallback.apply(this,e);};b.invokeOnce=function(){var d=Array.prototype.slice.call(arguments);this.invoke.apply(this,d);this.removeAllObservers();};b.invokeWithCallback=function(m){var g=[];var k={isHaltOperation:false,returnValues:[]};for(var h=1;h<arguments.length;++h){g.push(arguments[h]);}var e;var d;var f=false;var l=false;for(var j in this._observers){if(this._observers[j].observerOpaque&&typeof this._observers[j].observerOpaque!=="undefined"){g.push(this._observers[j].observerOpaque);}e=this._observers[j].observerFunction.apply(null,g);if(typeof m=="function"&&MyEXT60804.Utils.isDefined(e)){d=m(e);if(MyEXT60804.Utils.isDefined(d)){if(d.hasOwnProperty("returnValue")){l=true;k.returnValues.push(d.returnValue);}if(d.hasOwnProperty("isHaltOperation")&&d.isHaltOperation){f=true;k.isHaltOperation=true;break;}}}}if(l||f){return k;}};b.isEmpty=function(){return this._observersCount===0;};})(MyEXT60804.Delegate.prototype);
