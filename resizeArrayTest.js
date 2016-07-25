var r = require('./resizeArray.js').r;
var assert = require('assert');
var test = {};
exports.test = test;

test.resizeArray_adds_elements_of_copies_of_given_object_to_existing_array_and_makes_copy_of_references_at_multiple_levels = function(){
	var c = {a:1}, d = {c:c};
	var parent = {cycle:1,child:c,d:d};
	var a = [];
	r.resizeArray(a,1,parent);
	assert.equal(a.length,1);
	assert.deepEqual(a[0],parent);//values are same	
	assert.notEqual(a[0],parent);//not same object
	assert.notEqual(a[0].child,c);//child is also not same object
	assert.notEqual(a[0].d.c,c);
};
