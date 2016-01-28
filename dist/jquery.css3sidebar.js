/*
 *  css3sidebar - v1.0.1
 *  Start building creative sidebars!
 *  http://roywulms.nl
 *
 *  Made by Roy Wulms
 *  Under MIT License
 */
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
   
        $.css3sidebar = function(el, action, options){
            // To avoid scope issues, use "base" instead of "this"
            // to reference this class from internal events and functions.
            var base = this;

            // Access to jQuery and DOM versions of element
            base.$el = $(el);
            base.el = el;
            base.$targetEl = $(base.$el.attr("data-target"));
            base.targetEl = base.$el.attr("data-target");

            // Add a reverse reference to the DOM object
            base.$el.data("css3sidebar", base);

            base.init = function(){  
                base.action = action;
                base.options = $.extend({},$.fn.css3sidebar.defaultOptions, options);

                if(base.action === "open"){
                    this.openSidemenu();
                }

                if(base.action === "close"){
                    this.closeSidemenu();
                }

                if(base.action === "toggle"){
                    this.toggleSidemenu();
                }

                base.$el.on("click", $.proxy(function(){
                    this.toggleSidemenu();
                },this));
                base.$targetEl.on("touchstart, click", $.proxy(function (event) {
                    if(base.$targetEl.hasClass("activeCss3Sidebar") && $(event.target).is("a[href]") || !$(event.target).closest(".menu-wrapper").length){
                        this.closeSidemenu();
                    }
                },this));
            };

            base.openSidemenu = function(){
               base.$targetEl.addClass("activeCss3Sidebar");
               var startEvent = $.Event("css3sidebar.open");
               base.$el.trigger(startEvent);
            };

            base.closeSidemenu = function(){
               base.$targetEl.removeClass("activeCss3Sidebar");
               var startEvent = $.Event("css3sidebar.close");
               base.$el.trigger(startEvent);
            };

            base.toggleSidemenu = function(){
               this[base.$targetEl.hasClass("activeCss3Sidebar") ? "closeSidemenu" : "openSidemenu"]();
            };

           // Run initializer
            base.init();
        };

         $.css3sidebar.defaultOptions = {

        };


        $.fn.css3sidebar = function(action, options){
            return this.each(function(){
                (new $.css3sidebar(this, action, options));
            });
        };

        // This function breaks the chain, but returns
        // the css3sidebar if it has been attached to the object.
        $.fn.getcss3sidebar = function(){
            this.data("css3sidebar");
        };

         
        $(document).ready(function(){
            $("[data-toggle='css3sidebar']").css3sidebar();
        });
}));