(function() {
		var xmlhttp;
		var data;
		var isPost=false;
		var isDevMode=false;
		
		var devStatus;
		var devData;
		
		this.Ajax = function() {

		}
  
	// Private Methods
	function load(method,url,async) {
		var async = typeof async !== 'undefined' ?  async : true;
		if (window.XMLHttpRequest) {
			// ie7+, firefox, chrome, opera & safari
			xmlhttp = new XMLHttpRequest();
		} else {
			// ie6, ie5
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlhttp.open(method, url, async);
		xmlhttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
	}
	
	function serialize(data, prefix) {
		  var result = [];
		  for(var item in data) {
			if (data.hasOwnProperty(item)) {
			  var key = prefix ? prefix + "[" + item + "]" : item, value = data[item];
			  result.push(typeof value == "object" ?
				serialize(value, key) :
				encodeURIComponent(key) + "=" + encodeURIComponent(value));
			}
		  }
		  return result.join("&");
	}


	
  // Public Methods 
  Ajax.prototype.get=function(url,async){
	var async = typeof async !== 'undefined' ?  async : true;
	load('GET',url)
	return this;
  }
  
   Ajax.prototype.post=function(url,async){
	var async = typeof async !== 'undefined' ?  async : true;
	isPost=true;
	load('POST',url);
	xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	return this;
  }
  Ajax.prototype.put=function(url,async){
	var async = typeof async !== 'undefined' ?  async : true;
	load('PUT',url)
	return this;
  }
  
   Ajax.prototype.delete=function(url,async){
	var async = typeof async !== 'undefined' ?  async : true;
	load('DELETE',url);
	return this;
  }
  

  
  Ajax.prototype.addHeader=function(key,value){
		xmlhttp.setRequestHeader(key,value);
		return this;
  }
  
  Ajax.prototype.setData=function(data){
		this.data=serialize(data);
		return this;
  }
  
  Ajax.prototype.setDev=function(data,status){
		var status = typeof status !== 'undefined' ?  status : 200;
		this.isDevMode=true;
		this.devData=data;
		this.devStatus=status;
		return this;
  }
  
  Ajax.prototype.send=function(callback){
  
		//check for development mode
		if(this.isDevMode){
			callback(this.devStatus,this.devData);
			return;
		}
  		xmlhttp.onreadystatechange = function() {	
			if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
				callback(xmlhttp.status,xmlhttp.responseText);
			}
		};		
		if(isPost){
			xmlhttp.send(data);
		}else{
			xmlhttp.send();
		}	
  }
  
}());

window.ajax=new Ajax();


