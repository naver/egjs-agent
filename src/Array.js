const Array = window.Array;

/* eshint ignore: start */

// Below is polyfill for
// Array.prototype.filter, Array.prototype.forEach, Array.prototype.some
if (!Array.prototype.filter)
	Array.prototype.filter = function(func, thisArg) {
	if ( ! ((typeof func === 'Function' || typeof func === 'function') && this) )
	throw new TypeError();

	var len = this.length >>> 0,
	res = new Array(len), // preallocate array
	t = this, c = 0, i = -1;
	if (thisArg === undefined)
	while (++i !== len)
	// checks to see if the key was set
	if (i in this)
	if (func(t[i], i, t))
	res[c++] = t[i];
	else
	while (++i !== len)
	// checks to see if the key was set
	if (i in this)
	if (func.call(thisArg, t[i], i, t))
	res[c++] = t[i];

	res.length = c; // shrink down array to proper size
	return res;
};

// Production steps of ECMA-262, Edition 5, 15.4.4.18
// Reference: http://es5.github.io/#x15.4.4.18
if (!Array.prototype.forEach) {

	Array.prototype.forEach = function(callback/*, thisArg*/) {
  
	  var T, k;
  
	  if (this == null) {
		throw new TypeError('this is null or not defined');
	  }
  
	  // 1. Let O be the result of calling toObject() passing the
	  // |this| value as the argument.
	  var O = Object(this);
  
	  // 2. Let lenValue be the result of calling the Get() internal
	  // method of O with the argument "length".
	  // 3. Let len be toUint32(lenValue).
	  var len = O.length >>> 0;
  
	  // 4. If isCallable(callback) is false, throw a TypeError exception. 
	  // See: http://es5.github.com/#x9.11
	  if (typeof callback !== 'function') {
		throw new TypeError(callback + ' is not a function');
	  }
  
	  // 5. If thisArg was supplied, let T be thisArg; else let
	  // T be undefined.
	  if (arguments.length > 1) {
		T = arguments[1];
	  }
  
	  // 6. Let k be 0.
	  k = 0;
  
	  // 7. Repeat while k < len.
	  while (k < len) {
  
		var kValue;
  
		// a. Let Pk be ToString(k).
		//    This is implicit for LHS operands of the in operator.
		// b. Let kPresent be the result of calling the HasProperty
		//    internal method of O with argument Pk.
		//    This step can be combined with c.
		// c. If kPresent is true, then
		if (k in O) {
  
		  // i. Let kValue be the result of calling the Get internal
		  // method of O with argument Pk.
		  kValue = O[k];
  
		  // ii. Call the Call internal method of callback with T as
		  // the this value and argument list containing kValue, k, and O.
		  callback.call(T, kValue, k, O);
		}
		// d. Increase k by 1.
		k++;
	  }
	  // 8. return undefined.
	};
  }

// Production steps of ECMA-262, Edition 5, 15.4.4.17
// Reference: http://es5.github.io/#x15.4.4.17
if (!Array.prototype.some) {
	Array.prototype.some = function(fun/*, thisArg*/) {
	  'use strict';
  
	  if (this == null) {
		throw new TypeError('Array.prototype.some called on null or undefined');
	  }
  
	  if (typeof fun !== 'function') {
		throw new TypeError();
	  }
  
	  var t = Object(this);
	  var len = t.length >>> 0;
  
	  var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
	  for (var i = 0; i < len; i++) {
		if (i in t && fun.call(thisArg, t[i], i, t)) {
		  return true;
		}
	  }
  
	  return false;
	};
  }

/* eshint ignore: end */

export default Array;
