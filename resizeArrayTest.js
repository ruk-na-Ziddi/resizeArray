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

test.resizeArray_does_nothing_when_new_size_is_not_given = function(){
	var a = [1,2];
	r.resizeArray(a);
	assert.equal(a.length,2);
	assert.equal(a[0],1);
	assert.equal(a[1],2);
};

test.resizeArray_adds_elements_to_existing_array = function(){
	var a = [1,2];
	r.resizeArray(a,3);	
	assert.equal(a.length,3)
	assert.equal(a[0],1);
	assert.equal(a[1],2);
	assert.equal(a[2],undefined);
};

test.resizeArray_removes_elements_from_existing_array = function(){
	var a = [1,2];
	r.resizeArray(a,1);	
	assert.equal(a.length,1)
	assert.equal(a[0],1);	
};

test.resizeArray_adds_elements_of_given_value_to_existing_array = function(){
	var a = [];
	r.resizeArray(a,2,25);
	assert.deepEqual(a.length,2);
	assert.equal(a[0],25);
	assert.equal(a[1],25);
};

test.resizeArray_does_not_change_elements_of_existing_array = function(){
	var a = [42,42];
	r.resizeArray(a,1,25);
	assert.deepEqual(a.length,1);
	assert.equal(a[0],42);	
};

test.resizeArray_adds_elements_of_given_object_to_existing_array = function(){
	var a = [];
	r.resizeArray(a,1,{a:1});
	assert.deepEqual(a.length,1);
	assert.deepEqual(a[0],{a:1});	
};

test.resizeArray_adds_elements_of_copies_of_given_object_to_existing_array = function(){
	var o = {a:1};
	var a = [];
	r.resizeArray(a,2,o);
	assert.deepEqual(a.length,2);
	assert.deepEqual(a[0],o);//values are same
	assert.deepEqual(a[1],o);
	assert.notEqual(a[0],o);//not same object
	assert.notEqual(a[1],o);
};

test.resizeArray_adds_elements_of_copies_of_given_object_to_existing_array_and_makes_copy_of_references_too = function(){
	var c = {a:1};
	var parent = {cycle:1,child:c};
	var a = [];
	r.resizeArray(a,1,parent);
	assert.equal(a.length,1);
	assert.deepEqual(a[0],parent);//values are same	
	assert.notEqual(a[0],parent);//not same object
	assert.notEqual(a[0].child,c);//child is also not same object	
};

