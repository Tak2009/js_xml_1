function getData1() {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4) {
        if (xmlhttp.status == 200) {
          var elem = document.getElementById("output");

          elem.innerHTML += "----- getElementsByTagName -----<br/>";
          var docelem = xmlhttp.responseXML.documentElement;
          var nodes = docelem.getElementsByTagName("name");
          for (i = 0; i < nodes.length; i++) {
            elem.innerHTML += nodes[i].tagName + ":" + nodes[i].textContent + "<br/>";
          }

          var nodes = docelem.getElementsByTagName("height");
          for (i = 0; i < nodes.length; i++) {
            elem.innerHTML += nodes[i].tagName + ":" + nodes[i].textContent + "<br/>";
          }

          var nodes = docelem.getElementsByTagName("weight");
          for (i = 0; i < nodes.length; i++) {
            elem.innerHTML += nodes[i].tagName + ":" + nodes[i].textContent + "<br/>";
          }
          elem.innerHTML += "----------<br/>";
        } else {
          alert("status = " + xmlhttp.status);
        }
      }
    }
    xmlhttp.open("GET", "sample.xml");
    xmlhttp.send();
}

function getData2() {
  var xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4) {
      if (xmlhttp.status == 200) {
        var elem = document.getElementById("output");

        elem.innerHTML += "----- getElementsByTagName -----<br/>";
        var docelem = xmlhttp.responseXML.documentElement;
        var nodes = docelem.getElementsByTagName("name");
        for (i = 0; i < nodes.length; i++) {
          elem.innerHTML += nodes[i].tagName + ":" + nodes[i].textContent + "<br/>";
        }

        var nodes = docelem.getElementsByTagName("height");
        for (i = 0; i < nodes.length; i++) {
          elem.innerHTML += nodes[i].tagName + ":" + nodes[i].textContent + "<br/>";
        }

        var nodes = docelem.getElementsByTagName("weight");
        for (i = 0; i < nodes.length; i++) {
          elem.innerHTML += nodes[i].tagName + ":" + nodes[i].textContent + "<br/>";
        }
        elem.innerHTML += "----------<br/>";
      } else {
        alert("status = " + xmlhttp.status);
      }
    }
  }
  xmlhttp.open("GET", "sample.xml");
  xmlhttp.send();
}