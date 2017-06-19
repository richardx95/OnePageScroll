ONE PAGE SCROLL FRAMEWORK
===

Made By Richard
---

---

Intro
---

With this framework you're able to scroll smoothly to a selected section from the navbar.

What is customisable?
* The scrollspeed


Demo
---
<a href="http://richardcoopmans.com/school/scroll.html">View demo</a>

---

Installation
---

Just download scroll.js, put it in the head of your page and call it.
Add an a href tag into the nav element. Make sure you make a div with the same id name.

````html 
<nav>
 
    <a href="#first">First Page</a>
</nav>
  ... 
  
<div id="first"> First page</div>

</body> 
```` 

How To Implement?
---

The easiest way to use scroll is putting it in a variable and calling the init function on it. It will target the element with class scroll on it.

```javascript
//Initialize the first object without params so the default values are used
<script>

    var scroll = Scroll();
    scroll.init();

</script>
```

How To Customise The Scrollspeed?
---

If you want however you can change the speed using a settings object
```javascript
//Initialize the second object with a different speed so it goes...much...slower
<script>

    var scroll = Scroll();
    scroll.init({speed: 1});

</script>
```

Complete js Code
---

```

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

```

---