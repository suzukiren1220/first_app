var req;
function getFile(path){
  req = new XMLHttpRequest();
  req.onreadystatechange = showData();
  req.open("GET", path, true);
  req.send(null);
}

function showData() {
  if(req.readyState == 4 && req.status == 200){
	  document.getElementById("myArea").innerHTML = req.responseText;
  }
}


