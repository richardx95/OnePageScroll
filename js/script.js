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
       // event.preventDefault();
        console.log('banaan');
        console.log(event.target.hash)
        var element = document.querySelector(event.target.hash)
        var destination = element.offsetTop;
        console.log('offset:',element.offsetTop);

        defaultSettings.scroller = setInterval(function () {
             defaultSettings.marginY = defaultSettings.marginY + defaultSettings.speed;
            
            window.scrollTo(0, defaultSettings.marginY);

            if (defaultSettings.marginY >= destination) {
            clearInterval(defaultSettings.scroller);
            defaultSettings.marginY = 0;
            }

            
        }, 1);

       

        console.log('dest:', destination);
    }

    window.onscroll = function () {
        marginY = this.pageYOffset;
    };

    function toTop() {
        scroller = setTimeout(function () {
            toTop();
        }, 1);

        marginY = marginY - speed;

        if (marginY <= 0) {
            clearTimeout(scroller);
        }

        //window.scroll(0, marginY);
        
    }

    var init = function (settings) {
        mergeObjects(defaultSettings, settings || {});
        console.log(defaultSettings.speed);
       
        var elements = document.querySelectorAll(defaultSettings.selector),
            i;
        //Loop door elements
        for (i = 0; i < elements.length; i++) {
           
            //check de code van queryselector for is al goed gebruik console log.
            elements[i].addEventListener("click", function () {
                console.log("Hello World");
            });
            
            elements[i].addEventListener(defaultSettings.event, initScroll);
        
            //elements[i].addEventListener(defaultSettings.event,         initScroll(elements[i])) {
                
            };
        

    };

    return {
        init: init
    };

};
