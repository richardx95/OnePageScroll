ONE PAGE SCROLL FRAMEWORK
===

Made By Richard
---

---

Intro
---

With this framework you're able to scroll automatically to a selected section from the navbar.

What is customisable?
* The scrollspeed


Demo
---
<a href="http://richardcoopmans.com/school/scroll.html">View demo</a>

---

How To Implement?
---

Simply add the content you want to show on your page on the index.html page.

Put your content between the section tags.

````<section id="section1" class="ud_scroll">
<h2>Scroll</h2>
<p>Content you want to show on your page.</p>
</section>````

How To Customise Teh Scrollspeed?
---

Open the javascript file.

```<script src="script.js"></script>```

At the bottom of the page you are able to edit the scroll speed, behind the colon.

```$( "div" ).greenify({speed:1000});```

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