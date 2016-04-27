# MinJax
----------------------
Minimal Ajax 

call Ajax without jquery

## Usage
to add library to your project
```html
<script src="https://cdn.rawgit.com/nooh64/MinJax/master/build/mjax.min.js"></script>
```

## example 1
```js
ajax.post("/index.html")
	.addHeader('header1','value') //you can set headers
	.addHeader('header2','value')
	.setData({'key':'value','key2':'value2'}) //set data if post request
	.setDev("Development Response",200) // temporary response and status code
	.send(function(status,data){  // send request and callback
		alert(data);
});
```

## example 2
```js
ajax.get("/index.html")
	.send(function(status,data){
		alert(data);
});
```
