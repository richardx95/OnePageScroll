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

````html 
<script type="text/javascript" src="scroll.js"></script>
```` 


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


````html 
//Initialize the first object without params so the default values are used
<script>

    var scroll = Scroll();
    scroll.init();

</script>
````

How To Customise The Scrollspeed?
---

If you want however you can change the speed using a settings object

````html 
//Initialize the second object with a different speed so it goes...much...slower
<script>

    var scroll = Scroll();
    scroll.init({speed: 1});

</script>
````

---