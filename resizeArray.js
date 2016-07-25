var r = {};
exports.r = r;

var pushElement = function(list, size, element){
	list.push(JSON.parse(JSON.stringify(element)));
	return (list.length != size) ? pushElement(list, size, element) : list
}

r.resizeArray = function(list, size, element){
	if((list.length < size) && element)
		list = pushElement(list, size, element)
	else if(size)
		list.length = size
}