
var Scroll = function () {



    var defaultSettings = {
        selector: 'nav a',
        event: 'click',
        marginY: 0,
        speed: 5,
        scroller: null
    }

    var element;
    
    var destination;

    var mergeObjects = function (object1, object2) {
        for (var attrname in object1) {
            if (object2.hasOwnProperty(attrname)) {
                object1[attrname] = object2[attrname];
            }
        }
    };

    function initScroll(event) {
        var element = document.querySelector(event.target.hash)
        var destination = element.offsetTop;
        defaultSettings.scroller = setInterval(function () {
            defaultSettings.marginY = defaultSettings.marginY + defaultSettings.speed;
            window.scrollTo(0, defaultSettings.marginY);
            
            if (defaultSettings.marginY >= destination) {
            clearInterval(defaultSettings.scroller);
            defaultSettings.marginY = 0;
            }
        }, 1);
    }

    window.onscroll = function () {
        marginY = this.pageYOffset;
    };

    var init = function (settings) {
        mergeObjects(defaultSettings, settings || {});
       
        var elements = document.querySelectorAll(defaultSettings.selector),
            i;
        //Loop door elements
        for (i = 0; i < elements.length; i++) {
            elements[i].addEventListener("click", function () { 
            });
            elements[i].addEventListener(defaultSettings.event, initScroll);    
        };
    };
    return {
        init: init
    };
};
