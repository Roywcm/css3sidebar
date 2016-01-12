// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.

;(function ( $ ) {
   
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
                base.$targetEl.on("touchstart, click", $.proxy(function () {
                    if(base.$targetEl.hasClass("activeCss3Sidebar")){
                        this.closeSidemenu();
                    }
                },this));
                
                $(".menu-wrapper").on("click", function (event) {
                    // prevent closing on click menu-wrapper and children except an anchor (so te box is closing on link click).
                    if(!$(event.target).is("a")){
                        event.stopPropagation();
                    } else {
                        base.closeSidemenu();
                    }
                });
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
})( jQuery );