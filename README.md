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


DEMO
---
<a href="">View demo</a>

---

How To Implement?
---

Include this script tag at the bottom of your page, inside the body tag.

```<script src="js/script.js"></script>```

In this case the script.js is located inside the js folder. It's better if you also put your js files in a seperate folder, it creates a better overview.

How To Customise?
---

To edit the title, change this value ```var messagetitle = 'Message from The Study Sessions!';```

To edit the message, change this value ```var messagebody = 'Click here to sign up for a session.';```

To change the icon, add a png or jpg image here ```var messageicon = 'images/icon.png';```

To change the link where the notification will guide you to, change this value ```var messagelink = 'reservation.html';```

Complete js Code
---

```
// Notification will pop up after the page is loaded + x ms delay
document.addEventListener('DOMContentLoaded', function(e){
	
	//--------------------------------------------------------//
	//------------Customise the notification here-------------//
	//--------------------------------------------------------//
	
	// Notification title
	var messagetitle = 'Message from The Study Sessions!';
	
	// Notification Message
	var messagebody = 'Click here to sign up for a session.';
	
	// Notification Icon
	var messageicon = 'images/icon.png';
	
	// Notification onclick link
	var messagelink = 'reservation.html';
	
	
	
	var popup;
	e.preventDefault();

	if(Notification.permission === 'default'){
		alert('please allow notifications.');
	} else {
		popup = new Notification(messagetitle,{
			body: messagebody, icon: messageicon
		});
		
		popup.onclick = function(){
			window.open(messagelink, '_blank');
		}
	}
}, false);
```

---