var c = document.getElementByid('mainview');
var ctx = c.getContext("2d");

function Snake() {
	// body...
	this.postion = "";
	this.parts = new Array();
	this.direction = "";
}

Snake.prototype.move = function(direction) {
	// body...
};

Snake.prototype.grow = function() {
	// body...
};


function Food(){

}

