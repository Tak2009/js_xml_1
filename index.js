function getData1() {
    // 下記のコードにより、XMLHttpRequestを利用して、sample.xmlファイルを取得
    var xmlhttp = new XMLHttpRequest();
    // XMLHttpRequestが読み込みを完了すると、onreadystatechange イベントが発生します。XMLHttpRequestオブジェクトのreadyState の値を確認し、4であれば読み込み完了と判断します。さらにステータスコードが200であることを確認し、ドキュメントが正常に読み込まれたことを判定します。
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4) {
        if (xmlhttp.status == 200) {

          // XMLが正常に取得できると、下記のコードを実行します。
          var elem = document.getElementById("output");　
　　　　　　elem.innerHTML += "----- getElementsByTagName -----<br/>";
          var docelem = xmlhttp.responseXML.documentElement;　// 左のコードにより、読み込んだXMLのルートノードを取得できます。今回のXMLの場合は"items"ノードになります。
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
    // 下記のコードにより、XMLHttpRequestを利用して、sample.xmlファイルを取得
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
        var nodes = docelem.getElementsByTagName("item");
        for (i = 0; i < nodes.length; i++) {
          var namenodes = nodes[i].getElementsByTagName("name");
          elem.innerHTML += namenodes[0].tagName + ":" + namenodes[0].textContent + "<br/>";
          var heightnodes = nodes[i].getElementsByTagName("height");
          elem.innerHTML += heightnodes[0].tagName + ":" + heightnodes[0].textContent + "<br/>";
          var weightnodes = nodes[i].getElementsByTagName("weight");
          elem.innerHTML += weightnodes[0].tagName + ":" + weightnodes[0].textContent + "<br/>";

          elem.innerHTML += "======<br/>";
        }
        elem.innerHTML += "----------<br/>";
      } else {
        alert("status = " + xmlhttp.status);
      }
    }
  }
  xmlhttp.open("GET", "sample.xml");
  //xmlhttp.responseType = "document";
  xmlhttp.send();
}