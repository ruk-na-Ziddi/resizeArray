var r = {};
exports.r = r;

r.resizeArray = function(list, size, element){
	size && (list.length = size)
	element && (list[0] = JSON.parse(JSON.stringify(element)))
	return list
}