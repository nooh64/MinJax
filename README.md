# MinJax
----------------------
Minimal Ajax 

call Ajax without jquery

example 1
```js
ajax.post("/index.html")
	.addHeader('header1','value') //you can set headers
	.addHeader('header2','value')
	.setData({'key':'value','key2':'value2'}) //set data if post request
	.setDev("Development Responsen",200) // temporary response and satus code
	.send(function(status,data){  // send request and callback
		alert(data);
});
```

example 2
```js
ajax.get("/index.html")
	.send(function(status,data){
		alert(data);
});
```
