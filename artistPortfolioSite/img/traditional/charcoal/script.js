currentMargin = 0;

marginDrop = 1024;

carouselIndex = 1;


var kennyImg = ["./img/photo/portrait/kennyWeb/kenny1.jpg",
"./img/photo/portrait/kennyWeb/kenny2.jpg",
"./img/photo/portrait/kennyWeb/kenny3.jpg","./img/photo/portrait/kennyWeb/kenny4.jpg",
"./img/photo/portrait/kennyWeb/kenny5.jpg","./img/photo/portrait/kennyWeb/kenny6.jpg",
"./img/photo/portrait/kennyWeb/kenny7.jpg","./img/photo/portrait/kennyWeb/kenny8.jpg",
"./img/photo/portrait/kennyWeb/kenny9.jpg"];

var seanImg = ["./img/photo/portrait/seanWeb/sean01.jpg","./img/photo/portrait/seanWeb/sean02.jpg",
"./img/photo/portrait/seanWeb/sean03.jpg","./img/photo/portrait/seanWeb/sean04.jpg",
"./img/photo/portrait/seanWeb/sean05.jpg","./img/photo/portrait/seanWeb/sean06.jpg",
"./img/photo/portrait/seanWeb/sean07.jpg","./img/photo/portrait/seanWeb/sean08.jpg",
"./img/photo/portrait/seanWeb/sean09.jpg"];

var lysImg = ["./img/photo/portrait/lysWeb/lys1.jpg","./img/photo/portrait/lysWeb/lys2.jpg",
"./img/photo/portrait/lysWeb/lys3.jpg","./img/photo/portrait/lysWeb/lys4.jpg",
"./img/photo/portrait/lysWeb/lys5.jpg","./img/photo/portrait/lysWeb/lys6.jpg",
"./img/photo/portrait/lysWeb/lys7.jpg","./img/photo/portrait/lysWeb/lys8.jpg",
"./img/photo/portrait/lysWeb/lys9.jpg","./img/photo/portrait/lysWeb/lys10.jpg",
"./img/photo/portrait/lysWeb/lys11.jpg","./img/photo/portrait/lysWeb/lys12.jpg",
"./img/photo/portrait/lysWeb/lys13.jpg","./img/photo/portrait/lysWeb/lys14.jpg",
"./img/photo/portrait/lysWeb/lys15.jpg"];

var cartoonImg = [ "./img/digital/cartoon/aron.jpg",
"./img/digital/cartoon/blue.jpg","./img/digital/cartoon/carolina.jpg",
"./img/digital/cartoon/denaemoon.jpg","./img/digital/cartoon/boho.jpg",
"./img/digital/cartoon/tangled.jpg"
];

var landscapeImg = [ "./img/digital/landscape/mushroom.jpg",
"./img/digital/landscape/quartz.jpg"
];

var realisticImg = [ "./img/digital/realistic/eva.jpg",
"./img/digital/realistic/paulina.jpg","./img/digital/realistic/realism.jpg"
];

var gardensImg = ["./img/photo/nature/oregonGardens/flower1.jpg",
"./img/photo/nature/oregonGardens/flower02.jpg",
"./img/photo/nature/oregonGardens/flower03.jpg",
"./img/photo/nature/oregonGardens/flower04.jpg",
];

var tillamookImg = ["./img/photo/nature/tillamook/till01.jpg",
"./img/photo/nature/tillamook/till02.jpg",
"./img/photo/nature/tillamook/till03.jpg",
"./img/photo/nature/tillamook/till04.jpg",];

var hugPointImg = ["./img/photo/nature/hugPoint/hpb01.jpg",
"./img/photo/nature/hugPoint/hpb02.jpg","./img/photo/nature/hugPoint/hpb03.jpg",
"./img/photo/nature/hugPoint/hpb04.jpg","./img/photo/nature/hugPoint/hpb05.jpg",
"./img/photo/nature/hugPoint/hpb06.jpg","./img/photo/nature/hugPoint/hpb07.jpg",
"./img/photo/nature/hugPoint/hpb08.jpg","./img/photo/nature/hugPoint/hpb09.jpg",
"./img/photo/nature/hugPoint/hpb10.jpg",];

var fruitImg = ["img/photo/experimental/fruit/fruit01.jpg",
"img/photo/experimental/fruit/fruit02.jpg","img/photo/experimental/fruit/kiwi01.jpg",
"img/photo/experimental/fruit/kiwi02.jpg","img/photo/experimental/fruit/lemon01.jpg",
"img/photo/experimental/fruit/lemon02.jpg","img/photo/experimental/fruit/orange01.jpg",
"img/photo/experimental/fruit/orange03.jpg","img/photo/experimental/fruit/pine01.jpg",
"img/photo/experimental/fruit/pine02.jpg",
];

var dropImg = ["img/photo/experimental/drop/paint01.jpg",
"img/photo/experimental/drop/paint02.jpg","img/photo/experimental/drop/paint03.jpg",
"img/photo/experimental/drop/paint04.jpg","img/photo/experimental/drop/paint05.jpg",
"img/photo/experimental/drop/paint06.jpg","img/photo/experimental/drop/paint07.jpg",
"img/photo/experimental/drop/paint08.jpg","img/photo/experimental/drop/paint09.jpg",
"img/photo/experimental/drop/paint10.jpg",];

var glowImg = ["img/photo/experimental/glow/glow01.jpg",
"img/photo/experimental/glow/glow02.jpg","img/photo/experimental/glow/glow03.jpg",
"img/photo/experimental/glow/glow04.jpg","img/photo/experimental/glow/glow05.jpg",
"img/photo/experimental/glow/glow06.jpg","img/photo/experimental/glow/glow07.jpg",
"img/photo/experimental/glow/glow08.jpg","img/photo/experimental/glow/glow09.jpg",
"img/photo/experimental/glow/glow10.jpg",];

var charcoalImg = ["img/traditional/charcoal/charcoal1.jpg",
"img/traditional/charcoal/charcoal2.jpg","img/traditional/charcoal/charcoal3.jpg",
"img/traditional/charcoal/charcoal4.jpg","img/traditional/charcoal/charcoal5.jpg",
"img/traditional/charcoal/charcoal6.jpg","img/traditional/charcoal/charcoal7.jpg",
"img/traditional/charcoal/charcoal8.jpg","img/traditional/charcoal/charcoal9.jpg",
"img/traditional/charcoal/charcoal10.jpg","img/traditional/charcoal/charcoal11.jpg",
"img/traditional/charcoal/charcoal12.jpg","img/traditional/charcoal/charcoal13.jpg",];

var paintImg = ["img/traditional/paint/cake01.jpg",
"img/traditional/paint/cake02.jpg","img/traditional/paint/flower.jpg",
"img/traditional/paint/girl05.jpg","img/traditional/paint/girl06.jpg",];

var inkImg = ["img/traditional/ink/girl02.jpg",
"img/traditional/ink/girl03.jpg","img/traditional/ink/girl04.jpg",
"img/traditional/ink/ink1.jpg","img/traditional/ink/ink2.jpg",
"img/traditional/ink/ink3.jpg","img/traditional/ink/ink4.jpg",
"img/traditional/ink/pencil1.jpg","img/traditional/ink/pencil2.jpg",
"img/traditional/ink/pencil3.jpg"];

function animateIn(nextImg) {
	menuButton = document.getElementById('menu-button');
	menuButton.classList.add('visible');

	slot1.classList.add("animated-running");
	slot2.classList.add("animated-running");
	slot3.classList.add("animated-running");

	setTimeout(function changeImg() {

	if (nextImg == "photo") {
		document.getElementById('slot1').src = './img/photo/portrait/lysWeb/lys9.jpg';
		document.getElementById('slot2').src = './img/photo/nature/oregonGardens/flower03.jpg';
		document.getElementById('slot3').src = './img/photo/experimental/fruit/fruit02.jpg';

		document.getElementById('textSlot1').innerHTML = 'Portrait';
		document.getElementById('textSlot2').innerHTML = 'Nature';
		document.getElementById('textSlot3').innerHTML = 'Experimental';

		document.getElementById('imgBox1').onclick = function() {
			animateIn("portrait");
		}
		document.getElementById('imgBox2').onclick = function() {
			animateIn("nature");
		}
		document.getElementById('imgBox3').onclick = function() {
			animateIn("experimental");
		}

		document.getElementById('menu-button').onclick = function() {
			animateIn("home");
		}
		resetImgBoxMargin();

	}

	else if (nextImg == "digital") {

		slot1.src = './img/digital/cartoon/denaemoon.jpg';
		slot2.src = './img/digital/landscape/mushroom.jpg';
		slot3.src = './img/digital/realistic/eva.jpg';
		slot1.style.marginTop = "-50px";
		slot2.style.marginTop = "-50px";
		slot3.style.marginTop = "-50px";

		textSlot1.innerHTML = 'Cartoon';
		textSlot2.innerHTML = 'Landscape';
		textSlot3.innerHTML = 'Realistic';

		document.getElementById('imgBox1').onclick = function() {
			setCartoon();
		}
		document.getElementById('imgBox2').onclick = function() {
			setLandscape();
		}
		document.getElementById('imgBox3').onclick = function() {
			setRealistic();
		}

		document.getElementById('menu-button').onclick = function() {
			animateIn("home");
		}
	}

	else if (nextImg == "traditional") {

		slot1.src = './img/traditional/charcoal/charcoal9.jpg';
		slot2.src = './img/traditional/paint/flower.jpg';
		slot3.src = './img/traditional/ink/ink2.jpg';

		slot1.style.marginTop = "-50px";
		slot3.style.marginTop = "-50px";

		textSlot1.innerHTML = 'Charcoal';
		textSlot2.innerHTML = 'Paint';
		textSlot3.innerHTML = 'Pen and Ink';

		document.getElementById('imgBox1').onclick = function() {
			setCharcoal();
		}
		document.getElementById('imgBox2').onclick = function() {
			setPaint();
		}
		document.getElementById('imgBox3').onclick = function() {
			setInk();
		}

		document.getElementById('menu-button').onclick = function() {
			animateIn("home");
		}
	}

	else if(nextImg == "portrait") {
		document.getElementById('slot1').src = './img/photo/portrait/kennyWeb/kenny2.jpg';
		document.getElementById('slot2').src = './img/photo/portrait/seanWeb/sean04.jpg';
		document.getElementById('slot3').src = './img/photo/portrait/lysWeb/lys10.jpg';

		document.getElementById('textSlot1').innerHTML = 'Kenny';
		document.getElementById('textSlot2').innerHTML = 'Sean';
		document.getElementById('textSlot3').innerHTML = 'Alyssa';

		document.getElementById('imgBox1').onclick = function() {
			setKenny();
		}
		document.getElementById('imgBox2').onclick = function() {
			setSean();
		}
		document.getElementById('imgBox3').onclick = function() {
			setLys();
		}

		document.getElementById('menu-button').onclick = function() {
			animateIn("photo");
		}
	}

	else if(nextImg == "nature") {
		document.getElementById('slot1').src = './img/photo/nature/oregonGardens/flower02.jpg';
		document.getElementById('slot2').src = './img/photo/nature/tillamook/till02.jpg';
		document.getElementById('slot3').src = './img/photo/nature/hugpoint/hpb02.jpg';
		


		document.getElementById('textSlot1').innerHTML = 'Oregon Gardens';
		document.getElementById('textSlot2').innerHTML = 'Tillamook';
		document.getElementById('textSlot3').innerHTML = 'Hug Point Beach';

		document.getElementById('imgBox1').onclick = function() {
			setOregonGardens();
		}
		document.getElementById('imgBox2').onclick = function() {
			setTillamook();
		}
		document.getElementById('imgBox3').onclick = function() {
			setHugPoint();
		}

		document.getElementById('menu-button').onclick = function() {
			animateIn("photo");
		}
	}

	else if(nextImg == "experimental") {
		document.getElementById('slot1').src = './img/photo/experimental/fruit/fruit02.jpg';
		document.getElementById('slot2').src = './img/photo/experimental/drop/paint01.jpg';
		document.getElementById('slot3').src = './img/photo/experimental/glow/glow02.jpg';
		
		slot3.style.marginTop = "-38px";

		document.getElementById('textSlot1').innerHTML = 'Fruit';
		document.getElementById('textSlot2').innerHTML = 'Drop';
		document.getElementById('textSlot3').innerHTML = 'Glow';

		document.getElementById('imgBox1').onclick = function() {
			setFruit();
		}
		document.getElementById('imgBox2').onclick = function() {
			setDrop();
		}
		document.getElementById('imgBox3').onclick = function() {
			setGlow();
		}

		document.getElementById('menu-button').onclick = function() {
			animateIn("photo");
		}
	}


	

	else if (nextImg == "home") {

		document.getElementById('imgBox1').onclick = function () {
			animateIn("photo");
		}
		document.getElementById('imgBox2').onclick = function () {
			animateIn("digital");
		}
		document.getElementById('imgBox3').onclick = function () {
			animateIn("traditional");
		}
		document.getElementById('slot1').src = './img/photo/portrait/kennyWeb/kenny3.jpg';
		document.getElementById('slot2').src = './img/digital/cartoon/Aron.jpg';
		document.getElementById('slot3').src = './img/digital/cartoon/blue.jpg';
		document.getElementById('textSlot1').innerHTML = "Photography";
		document.getElementById('textSlot2').innerHTML = "Digital";
		document.getElementById('textSlot3').innerHTML = "Traditional";
		document.getElementById('menu-button').classList.remove('visible');
		resetImgBoxMargin();
	}




},1000);
	setTimeout(function animateOut () {
		slot1.classList.add("animated-back");
		slot2.classList.add("animated-back");
		slot3.classList.add("animated-back");
	
		setTimeout(function clearClasses () {
			slot1.classList.remove("animated-back", "animated-running");
			slot2.classList.remove("animated-back", "animated-running");
			slot3.classList.remove("animated-back", "animated-running");
		},1000);
	},1000)


}


function replaceImgBox () {
	document.getElementsByClassName('img-container')[0].innerHTML += '<div id="imgBox3" class="img-box" onclick="animateIn(&quot;traditional&quot;)"><img id="slot3" class="img" src="./img/photo/experimental/fruit/fruit02.jpg"/><div id="textSlot3" class="overlay">Traditional</div></div>';
}


function showCarousel () {

	var scrollTop = window.pageYOffset;

	console.log(scrollTop);

	hidden = document.getElementById('carousel-wrapper');

	hidden.classList.add('showCarousel');

	hidden.style.top = scrollTop + "px";

	lockScroll();

}

function removeCarousel () {

	hidden = document.getElementById('carousel-wrapper');
	hidden.classList.remove('showCarousel');
	document.getElementById('slide-holder1').innerHTML = '';
	document.getElementById('slide-holder1').style.marginLeft = "0px";
	currentMargin = 0;


	unlockScroll();

}







function nextImg() {

	var currentCarousel = "slide-holder" + carouselIndex;

	console.log(currentCarousel)

	holder = document.getElementById(currentCarousel);

	console.log(holder);

	nextMargin = currentMargin - marginDrop + "px";

	holder.style.marginLeft = nextMargin;

	currentMargin -= marginDrop;

}



function backImg() {

	var currentCarousel = "slide-holder" + carouselIndex;

	console.log(currentCarousel)

	holder = document.getElementById(currentCarousel);

	console.log(holder);

	nextMargin = currentMargin + marginDrop + "px";

	holder.style.marginLeft = nextMargin;

	currentMargin += marginDrop;

}



function setKenny () {

	var slideHolder = document.getElementById('slide-holder1');

	for (i=0; i < kennyImg.length; i++) {

		slideHolder.innerHTML += '<div class="slide"><img class="img-carousel" src="'+kennyImg[i]+'"/></div>';

	}

	showCarousel();

}



function setSean () {

	var slideHolder = document.getElementById('slide-holder1');

	for (i=0; i < seanImg.length; i++) {

		slideHolder.innerHTML += '<div class="slide"><img class="img-carousel" src="'+seanImg[i]+'"/></div>';

	}

	showCarousel();

}

function setLys () {

	var slideHolder = document.getElementById('slide-holder1');

	for (i=0; i < lysImg.length; i++) {

		slideHolder.innerHTML += '<div class="slide"><img class="img-carousel" src="'+lysImg[i]+'"/></div>';

	}

	showCarousel();

}



function setCartoon () {

	var slideHolder = document.getElementById('slide-holder1');

	for (i=0; i < cartoonImg.length; i++) {

		slideHolder.innerHTML += '<div class="slide"><img class="img-carousel" src="'+cartoonImg[i]+'"/></div>';

	}

	showCarousel();

}



function setLandscape () {

	var slideHolder = document.getElementById('slide-holder1');

	for (i=0; i < landscapeImg.length; i++) {

		slideHolder.innerHTML += '<div class="slide"><img class="img-carousel" src="'+landscapeImg[i]+'"/></div>';

	}

	showCarousel();

}



function setRealistic () {

	var slideHolder = document.getElementById('slide-holder1');

	for (i=0; i < realisticImg.length; i++) {

		slideHolder.innerHTML += '<div class="slide"><img class="img-carousel" src="'+realisticImg[i]+'"/></div>';

	}

	showCarousel();

}

function setOregonGardens () {

	var slideHolder = document.getElementById('slide-holder1');

	for (i=0; i < gardensImg.length; i++) {

		slideHolder.innerHTML += '<div class="slide"><img class="img-carousel" src="'+gardensImg[i]+'"/></div>';

	}

	showCarousel();

}

function setTillamook () {

	var slideHolder = document.getElementById('slide-holder1');

	for (i=0; i < tillamookImg.length; i++) {

		slideHolder.innerHTML += '<div class="slide"><img class="img-carousel" src="'+tillamookImg[i]+'"/></div>';

	}

	showCarousel();

}

function setHugPoint () {

	var slideHolder = document.getElementById('slide-holder1');

	for (i=0; i < hugPointImg.length; i++) {

		slideHolder.innerHTML += '<div class="slide"><img class="img-carousel" src="'+hugPointImg[i]+'"/></div>';

	}

	showCarousel();

}

function setFruit () {

	var slideHolder = document.getElementById('slide-holder1');

	for (i=0; i < fruitImg.length; i++) {

		slideHolder.innerHTML += '<div class="slide"><img class="img-carousel" src="'+fruitImg[i]+'"/></div>';

	}

	showCarousel();
}

function setDrop () {

	var slideHolder = document.getElementById('slide-holder1');

	for (i=0; i < dropImg.length; i++) {

		slideHolder.innerHTML += '<div class="slide"><img class="img-carousel" src="'+dropImg[i]+'"/></div>';

	}

	showCarousel();
}

function setGlow () {

	var slideHolder = document.getElementById('slide-holder1');

	for (i=0; i < glowImg.length; i++) {

		slideHolder.innerHTML += '<div class="slide"><img class="img-carousel" src="'+glowImg[i]+'"/></div>';

	}

	showCarousel();
}

function setCharcoal () {

	var slideHolder = document.getElementById('slide-holder1');

	for (i=0; i < charcoalImg.length; i++) {

		slideHolder.innerHTML += '<div class="slide"><img class="img-carousel" src="'+charcoalImg[i]+'"/></div>';

	}

	showCarousel();
}

function setPaint () {

	var slideHolder = document.getElementById('slide-holder1');

	for (i=0; i < paintImg.length; i++) {

		slideHolder.innerHTML += '<div class="slide"><img class="img-carousel" src="'+paintImg[i]+'"/></div>';

	}

	showCarousel();
}

function setInk () {

	var slideHolder = document.getElementById('slide-holder1');

	for (i=0; i < inkImg.length; i++) {

		slideHolder.innerHTML += '<div class="slide"><img class="img-carousel" src="'+inkImg[i]+'"/></div>';

	}

	showCarousel();
}




function lockScroll () {

	document.body.style.overflow = "hidden";

}

function unlockScroll() {
	document.body.style.overflow = "initial";
}



function onResize() {

	console.log("Ran");



	var x = window.matchMedia("(max-width: 1200px)")

		if (x.matches) {

		marginDrop = 800;

	}



	var y = window.matchMedia("(max-width: 915px)")

	if (y.matches) {

		marginDrop = 550;

	}





	var z = window.matchMedia("(max-width: 660px)")

	if (z.matches) {

		marginDrop = 340;

}

}

function initializePage() {
	console.log("Ran");
	var x = window.matchMedia("(max-width: 1200px)")
		if (x.matches) {
		marginDrop = 800;
	}
	var y = window.matchMedia("(max-width: 915px)")
	if (y.matches) {
		marginDrop = 550;
	}
	var z = window.matchMedia("(max-width: 660px)")
	if (z.matches) {
		marginDrop = 340;
	}

}

function resetImgBoxMargin () {
	document.getElementById('slot1').style.margin = "auto";
	document.getElementById('slot2').style.margin = "auto";
	document.getElementById('slot3').style.margin = "auto";
}


