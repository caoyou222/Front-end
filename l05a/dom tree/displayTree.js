function displayTree(node,depth) {
    var displayStr = "";
	for (var i = 0; i < depth; i++) {
	  displayStr += "   ";
	}
	displayStr += node.nodeName + ": " + node.nodeValue + "\n";
	if (node.childNodes)
        for (var i = 0; i < node.childNodes.length; i++)
		    displayStr += displayTree(node.childNodes[i],depth+1);
    return displayStr;
}

alert(displayTree(document.documentElement,0));