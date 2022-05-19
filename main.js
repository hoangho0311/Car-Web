const sr = ScrollReveal({
	origin:'left',
	distance:'60px',
	duration: 2500,
	delay:200,
})

sr.reveal('.home_title')
sr.reveal('.home_sub', {delay:300})
sr.reveal('.home-content-h3')
sr.reveal('.home-content-h2',{delay:400, origin:"bottom"})
sr.reveal('.home-content-a',{delay:500})
sr.reveal('.col-services',{delay:800, distance:'0', origin:'top'})
sr.reveal('.row-overview',{delay:300, origin:'top'})
window.addEventListener('scroll',reveal);

		function reveal(){
			var reveals = document.querySelectorAll('.reveal');

			for(var i=0 ; i<reveals.length;i++){
				var windowheight = window.innerHeight;
				var revealtop = reveals[i].getBoundingClientRect().top;
				var revealpoint = 150;

				if(revealtop < windowheight - revealpoint){
					reveals[i].classList.add('active');
				}else{
					reveals[i].classList.remove('active');
				}
			}
		}