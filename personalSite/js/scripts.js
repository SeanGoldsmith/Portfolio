window.sr = ScrollReveal();
var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
console.log(w);
if (w > 1000) {
	sr.reveal('.col1', { duration: 1500});
	sr.reveal('.item', { duration: 1500});
	sr.reveal('.contactContain', { duration: 1500});
}
