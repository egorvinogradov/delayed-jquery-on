/*
 * jQuery onDelay
 * http://github.com/evinogradov/jquery-on-delay
 *
 * @usage:
 * element.onDelay(<delay>, <events>, <handler>, <context>);
 * element.offDelay(<events>, <handler>);
 * 
 * @example:
 * $('.block').onDelay(500, 'mouseover', openMenu, this); // runs openMenu in 500ms after 'mouseover' event fires
 *
 * @example:
 * $('.block').offDelay('mouseover', openMenu); // unbinds openMenu from 'mouseover' event
 * $('.block').offDelay('mouseover'); // unbinds all handlers bound to 'mouseover' event via jQuery.onDelay
 *
 */

$.fn.extend({

    onDelay: function(delay, events, callback, context){

        var eventsArr = events.split(/\s+/);
        var isDelay = false;
        var timer;

        function handler(){
            if ( isDelay ) {
                clearTimeout(timer);
            }
            timer = setTimeout(function(){
                isDelay = false;
                callback && callback.call(context || this);
            }, delay);
        };

        if ( !window.jQueryDelay ) {
            window.jQueryDelay = {};
        }

        for ( var i = 0, l = eventsArr; i < l; i++ ) {
            var eventName = eventsArr[i];
            if ( !window.jQueryDelay[eventName] ) {
                window.jQueryDelay[eventName] = [];
            }
            window.jQueryDelay[eventName].push({
                handler: handler,
                originalHandler: callback
            });
        }

        this.on(events, handler);

    },
    offDelay: function(events, callback){

        if ( !window.jQueryDelay ) {
            return;
        }

        var eventsArr = events.split(/\s+/);

        for ( var i = 0, l = eventsArr.length; i < l; i++ ) {
            var eventName = eventsArr[i];
            if ( callback ) {
                var callbacks = window.jQueryDelay[eventName];
                for ( var j = 0, cl = callbacks.length; j < cl; j++ ) {
                    if ( callbacks[j].originalHandler === callback ) {
                        this.off(eventName, callbacks[j].handler);
                        callbacks[j] = null; // just null, not real deletion from array because of performance
                    }
                }
            }
            else {
                for ( var j = 0, cl = callbacks.length; j < cl; j++ ) {
                    this.off(eventName, callbacks[j].handler);
                }
            }
        }
    },
});

