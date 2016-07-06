// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.

// Uses AMD or browser globals to create a jQuery plugin.
;(function (factory) {
    if (typeof define === "function" && define.amd) {
// AMD. Register as an anonymous module.
define(["jquery"], factory);
} else {
// Browser globals
factory(jQuery);
}
}(function ( $ ) {

    "use strict";
    var pluginName = "css3sidebar",
    defaults = {
        target: "#css3sidebar-wrapper"
    };

    function Plugin ( element, options ) {
        this.element = element;
        this.settings = $.extend( {}, defaults, options, $(this.element).data());
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    $.extend( Plugin.prototype, {
        init: function() {
            $(this.element).on("click", $.proxy(function(){
                this.toggleSidemenu();
            },this));

            $(this.settings.target).on("touchstart, click", $.proxy(function (event) {
                if($(this.settings.target).hasClass("activeCss3Sidebar") && $(event.target).is("a[href]") || !$(event.target).closest(".menu-wrapper").length){
                    this.closeSidemenu();
                }
            },this));
        },
        openSidemenu: function(){
            $(this.settings.target).addClass("activeCss3Sidebar");
            var startEvent = $.Event("css3sidebar.open");
            $(this.element).trigger(startEvent);
        },

        closeSidemenu: function(){
            $(this.settings.target).removeClass("activeCss3Sidebar");
            var startEvent = $.Event("css3sidebar.close");
            $(this.element).trigger(startEvent);
        },

        toggleSidemenu: function(){
            this[$(this.settings.target).hasClass("activeCss3Sidebar") ? "closeSidemenu" : "openSidemenu"]();
        }
    } );

    $.fn[pluginName] = function ( options ) {
        var args = arguments;

        if (options === undefined || typeof options === "object") {
            return this.each(function () {

                if (!$.data(this, "plugin_" + pluginName)) {
                    $.data(this, "plugin_" + pluginName, new Plugin( this, options ));
                }
            });

        } else if (typeof options === "string" && options[0] !== "_" && options !== "init") {

            var returns;

            this.each(function () {
                var instance = $.data(this, "plugin_" + pluginName);

                if (instance instanceof Plugin && typeof instance[options] === "function") {

                    returns = instance[options].apply( instance, Array.prototype.slice.call( args, 1 ) );
                }

                if (options === "destroy") {
                  $.data(this, "plugin_" + pluginName, null);
              }
          });

            return returns !== undefined ? returns : this;
        }
    };
}));

$(document).ready(function(){
    $("[data-toggle='css3sidebar']").css3sidebar();
});