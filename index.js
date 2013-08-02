require('node-touch')();

function SiouxGlobal (selector, parentElement) {
	var self = this;

	if (!parentElement) parentElement = document;
	var elems = parentElement.querySelectorAll(selector);

	for (var i = 0; i < elems.length; i++) {
		var elem = elems[i];
		if (!elem.classList.contains('touch')) elem.classList.add('touch');
	}

	self._elems = elems;
	self.element = elems.length === 1 ? elems[0] : elems;

	return self;
}

SiouxGlobal.prototype.on = function(eventName, handler) {
	var self = this;
	for (var i = 0; i < self._elems.length; i++) {
		self._elems[i].addEventListener(eventName, handler, false);
	}
	return self;
};

SiouxGlobal.prototype.off = function(eventName, handler) {
	var self = this;
	for (var i = 0; i < self._elems.length; i++) {
		self._elems[i].removeEventListener(eventName, handler, false);
	}
	return self;
};

SiouxGlobal.prototype.css = function(prop, val) {
	var self = this;
	if (val) {
		for (var i = 0; i < self._elems.length; i++)
			self._elems[i].style[prop] = val;
		return self;
	}

	for (var ix in prop) {
		for (var i = 0; i < self._elems.length; i++)
			self._elems[i].style[ix] = prop[ix];
	}

	return self;
};


function helper (selector, parentElement) { 
	return (new SiouxGlobal(selector, parentElement));
}

helper.isTouchDevice = !!('ontouchstart' in window);

module.exports = helper;