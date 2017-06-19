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
 ...
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
var scroll = Scroll();
scroll.init();
```

How To Customise Teh Scrollspeed?
---

If you want however you can use a custom selector and change the gravity and the update speed using a settings object
```javascript
//Initialize the second object with a different speed so it goes...much...slower
var scroll = Scroll();
scroll.init({speed: 1});
```

Complete js Code
---

```
(function ( $ ) {
 
    $.fn.greenify = function( options ) {
        $('a[href*=\\#]').stop().click(function()
        {
            var settings = $.extend({
            // This is the default setting.
            speed: 1000
        }, options );
            
            if(location.pathname.replace(/^\//,'') == this.pathname.replace (/^\//,'') && location.hostname === this.hostname)
            {
                var UD_HASH = this.hash;
                var UD_TARGET = $(this.hash);
                if (UD_TARGET.length)
                {
                    var UD_AFSTAND_TOP = UD_TARGET.offset().top;
                    $('html,body').animate({scrollTop: UD_AFSTAND_TOP},settings.speed,function(){
                        window.location.hahs = UD_HASH;
                    });
                    return false;
                }      
            }   
        });
    };
 
}( jQuery ));

// Here you can change the scrolling speed
$( "div" ).greenify({speed:1000});
```

---