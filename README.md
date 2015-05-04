# FancyBoxes

FancyBoxes is a jquery based Html5 Fancy Animated Boxes.

default includes
  - js/fancyboxes.js
  - css/default.css
  - And Latest jquery 

#[Demo](http://www.u-code.net/Fancybox)


#How To Use

First you need to add css and js files in to html file like (same order):

	<link rel="stylesheet" href="css/default.css" />

	<script src="http://code.jquery.com/jquery-1.11.2.min.js"></script>

	<script src="js/fancyboxes(1.1.1).js"></script> 

And for use  FancyBoxes you need to pick a parent element you want to put boxes in it class or id doesnt matter while picking element and : 

            $(element).Fancybox();
##Settings

    Use inside # $(document).ready(function(){  /* Use Here */  })
    $(parentElement).FancyBox({
			boxWidth: 50,(Default) 
			/*Width Of The Boxes*/
			boxHeight: 50,(Default) 
			/*Height Of The Boxes*/
			zIndex: 55,(Default) 
			/* z-index of Boxes */
			anims: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],(Default Empty Please Select) 
			/*Animation Types 1 to 11 */
			colorCount: 13,(Default) 
			/*[color=NUMBER] for Colors*/
			closeElement: "",(Default)
			/* Activate Click Close if empty start after page reload*/
			closeType: "0",(Default) 
			/* Both(0) / Rows(1) / Cols(2) / Random(3)*/
			delay: "300",(Default) 
			/* delay between animations Recommended 300*/
			boxClass: "Fancy",(Default) 
			/* Class for Picking , Recommended "Fancy" NO CSS !!! But Can change the name*/
			})

### Want To Use It ? 
Greaaaat !!!!

Open your favorite Terminal and run these commands.

Npm install:
```sh
$ npm install fancyboxes
```

Bower install:
```sh
$ bower install FancyBoxes
```

### Version
1.1.1


### Contact Me

You can reach me whenever you want from those links :

* [My Facebook](https://www.facebook.com/spIash07)
* [My Twitter](https://twitter.com/uur_oruc)
* [My Website](https://www.u-code.net)


License
----

MIT


**Free Software, Hell Yeah!**

