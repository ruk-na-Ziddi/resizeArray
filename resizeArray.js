var r = {};
exports.r = r;

var pushElement = function(list, size, element){
	list.push(JSON.parse(JSON.stringify(element)));
	(list.length == size) ? null : pushElement(list, size, element)
}

r.resizeArray = function(list, size, element){
	if(!Array.isArray(list)) return;
	if((list.length < size) && element)
		pushElement(list, size, element)
	else if(size)
		list.length = size
}
