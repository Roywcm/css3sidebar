(function ($, QUnit) {
	"use strict";

	var $testCanvas = $("#testCanvas");
	var $fixture = null;

	QUnit.module("jQuery css3sidebar", {
		beforeEach: function () {
			// fixture is the element where your jQuery plugin will act
			$fixture = $("<div/>");

			$testCanvas.append($fixture);
		},
		afterEach: function () {
			// we remove the element to reset our plugin job :)
			$fixture.remove();
		}
	});

	

}(jQuery, QUnit));
