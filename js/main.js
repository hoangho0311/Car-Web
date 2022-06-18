// overlay
function openNav() {
  document.getElementById("myDiv").style.width = "100%";
}

function closeNav() {
  document.getElementById("myDiv").style.width = "0%";
}

// animation
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



	
		$(document).on('click','.deal-link',function(){
			$(this).addClass('imgactive').siblings().removeClass('imgactive')
		})

// click js
		const icons = document.querySelector('.icon-search');
		const search=document.querySelector('.search');
		const dealer = document.querySelector('.deal-link');
		const furniture = document.querySelector('.furniture-btn');
		const furnitureimg = document.querySelector('.furniture-img');
		const frontbtn =document.querySelector('.front-btn');
		const frontimg = document.querySelector('.front-img');
		const backbtn =document.querySelector('.back-btn');
		const backimg = document.querySelector('.back-img');
		const leftbtn =document.querySelector('.left-btn');
		const leftimg = document.querySelector('.left-img');

		// list-car
		const listcars01 = document.querySelector('.list-cars-01')
		const listcars02 = document.querySelector('.list-cars-02')
		const listcars03 = document.querySelector('.list-cars-03')
		const listcars04 = document.querySelector('.list-cars-04')
		const listcars05 = document.querySelector('.list-cars-05')
		const listcarsimg01 = document.querySelector('.list-cars-img-01')
		const listcarsimg02 = document.querySelector('.list-cars-img-02')
		const listcarsimg03 = document.querySelector('.list-cars-img-03')
		const listcarsimg04 = document.querySelector('.list-cars-img-04')
		const listcarsimg05 = document.querySelector('.list-cars-img-05')


		listcars01.onclick=function(){
			$(this).addClass('active-choose').siblings().removeClass('active-choose')
			// listcars01.classList.toggle('active-choose')
			$(listcarsimg01).addClass('active-list-img').siblings().removeClass('active-list-img')
			// listcarsimg01.classList.toggle('active-list-img')
		}
		listcars02.onclick=function(){
			$(this).addClass('active-choose').siblings().removeClass('active-choose')
			// listcars01.classList.toggle('active-choose')
			$(listcarsimg02).addClass('active-list-img').siblings().removeClass('active-list-img')
		}
		listcars03.onclick=function(){
			$(this).addClass('active-choose').siblings().removeClass('active-choose')
			// listcars01.classList.toggle('active-choose')
			$(listcarsimg03).addClass('active-list-img').siblings().removeClass('active-list-img')
		}
		listcars04.onclick=function(){
			$(this).addClass('active-choose').siblings().removeClass('active-choose')
			// listcars01.classList.toggle('active-choose')
			$(listcarsimg04).addClass('active-list-img').siblings().removeClass('active-list-img')
		}
		listcars05.onclick=function(){
			$(this).addClass('active-choose').siblings().removeClass('active-choose')
			// listcars01.classList.toggle('active-choose')
			$(listcarsimg05).addClass('active-list-img').siblings().removeClass('active-list-img')
		}

		// overview
		furniture.onclick=function(){
			furnitureimg.classList.toggle('active-furniture-img')
		}
		frontbtn.onclick=function(){
			frontimg.classList.toggle('active-furniture-img')
		}
		backbtn.onclick=function(){
			backimg.classList.toggle('active-furniture-img')
		}
		leftbtn.onclick=function(){
			leftimg.classList.toggle('active-furniture-img')
		}	

		icons.onclick = function(){
			search.classList.toggle('active')
		}

		// const financedrop = document.querySelector('.financedrop');
		// financedrop.onclick = function(){
		// 	financedrop.classList.toggle('dropactive');
		// }


// search car
const searchcar = ()=>{
	const searchbox = document.getElementById("search-item").value.toUpperCase();
	const storeitems = document.getElementById("row-car")
	const product  = document.querySelectorAll(".col-cars")
	const pname = storeitems.getElementsByTagName("h4")

	for (var i = 0; i < pname.length; i++) {
		let match = product[i].getElementsByTagName('h4')[0];

		if (match) {
			let textValue = match.textContent || match.innerHTML

			if (textValue.toUpperCase().indexOf(searchbox) > -1) {
				product[i].style.display = "";
			}else{
				product[i].style.display = "none";
			}
		}
	}
}	

const searchcartypeFerrari = ()=>{
	const searchType = document.querySelectorAll(".type1");
	$(searchType).addClass('active-choose-type').siblings().removeClass('active-choose-type');
	const searchbox = document.getElementById("btn-type-ferra").value.toUpperCase() ;
	const storeitems = document.getElementById("row-car")
	const product  = document.querySelectorAll(".col-cars")
	const pname = storeitems.getElementsByTagName("h4")

	for (var i = 0; i < pname.length; i++) {
		let match = product[i].getElementsByTagName('h4')[0];

		if (match) {
			let textValue = match.textContent 

			if (textValue.toUpperCase().indexOf(searchbox) > -1) {
				product[i].style.display = "";
			}else{
				product[i].style.display = "none";
			}
		}
	}
}
const searchcartypeRollRoyce = ()=>{
	const searchType = document.querySelectorAll(".type2");
	$(searchType).addClass('active-choose-type').siblings().removeClass('active-choose-type');
	const searchbox = document.getElementById("btn-type-rollRoyce").value.toUpperCase() ;
	const storeitems = document.getElementById("row-car")
	const product  = document.querySelectorAll(".col-cars")
	const pname = storeitems.getElementsByTagName("h4")

	for (var i = 0; i < pname.length; i++) {
		let match = product[i].getElementsByTagName('h4')[0];

		if (match) {
			let textValue = match.textContent || match.innerHTML

			if (textValue.toUpperCase().indexOf(searchbox) > -1) {
				product[i].style.display = "";
			}else{
				product[i].style.display = "none";
			}
		}
	}
}
const searchcartypeMercedes = ()=>{
	const searchType = document.querySelectorAll(".type3");
	$(searchType).addClass('active-choose-type').siblings().removeClass('active-choose-type');
	const searchbox = document.getElementById("btn-type-Mercedes").value.toUpperCase() ;
	const storeitems = document.getElementById("row-car")
	const product  = document.querySelectorAll(".col-cars")
	const pname = storeitems.getElementsByTagName("h4")

	for (var i = 0; i < pname.length; i++) {
		let match = product[i].getElementsByTagName('h4')[0];

		if (match) {
			let textValue = match.textContent || match.innerHTML

			if (textValue.toUpperCase().indexOf(searchbox) > -1) {
				product[i].style.display = "";
			}else{
				product[i].style.display = "none";
			}
		}
	}
}
const searchcartypeLambor = ()=>{
	const searchType = document.querySelectorAll(".type4");
	$(searchType).addClass('active-choose-type').siblings().removeClass('active-choose-type');
	const searchbox = document.getElementById("btn-type-Lambor").value.toUpperCase() ;
	const storeitems = document.getElementById("row-car")
	const product  = document.querySelectorAll(".col-cars")
	const pname = storeitems.getElementsByTagName("h4")

	for (var i = 0; i < pname.length; i++) {
		let match = product[i].getElementsByTagName('h4')[0];

		if (match) {
			let textValue = match.textContent || match.innerHTML

			if (textValue.toUpperCase().indexOf(searchbox) > -1) {
				product[i].style.display = "";
			}else{
				product[i].style.display = "none";
			}
		}
	}
}
const searchcartypeTesla = ()=>{
	const searchType = document.querySelectorAll(".type6");
	$(searchType).addClass('active-choose-type').siblings().removeClass('active-choose-type');
	const searchbox = document.getElementById("btn-type-Tesla").value.toUpperCase() ;
	const storeitems = document.getElementById("row-car")
	const product  = document.querySelectorAll(".col-cars")
	const pname = storeitems.getElementsByTagName("h4")

	for (var i = 0; i < pname.length; i++) {
		let match = product[i].getElementsByTagName('h4')[0];

		if (match) {
			let textValue = match.textContent || match.innerHTML

			if (textValue.toUpperCase().indexOf(searchbox) > -1) {
				product[i].style.display = "";
			}else{
				product[i].style.display = "none";
			}
		}
	}
}
const searchcartypeVin = ()=>{
	const searchType = document.querySelectorAll(".type5");
	$(searchType).addClass('active-choose-type').siblings().removeClass('active-choose-type');
	const searchbox = document.getElementById("btn-type-Vin").value.toUpperCase() ;
	const storeitems = document.getElementById("row-car")
	const product  = document.querySelectorAll(".col-cars")
	const pname = storeitems.getElementsByTagName("h4")

	for (var i = 0; i < pname.length; i++) {
		let match = product[i].getElementsByTagName('h4')[0];

		if (match) {
			let textValue = match.textContent || match.innerHTML

			if (textValue.toUpperCase().indexOf(searchbox) > -1) {
				product[i].style.display = "";
			}else{
				product[i].style.display = "none";
			}
		}
	}
}

const alltype = ()=>{
	const searchType = document.querySelectorAll(".type7");
	$(searchType).addClass('active-choose-type').siblings().removeClass('active-choose-type');
	const searchbox = document.getElementById("btn-all-type").value.toUpperCase() ;
	const storeitems = document.getElementById("row-car")
	const product  = document.querySelectorAll(".col-cars")
	const pname = storeitems.getElementsByTagName("h4")

	for (var i = 0; i < pname.length; i++) {
		let match = product[i].getElementsByTagName('h4')[0];

		if (match) {
			let textValue = match.textContent || match.innerHTML

			if (textValue.toUpperCase().indexOf(searchbox) > -1) {
				product[i].style.display = "";
			}else{
				product[i].style.display = "";
			}
		}
	}
}

// drop responsive

var dropdown = document.getElementsByClassName("dropdown-btn");

for (var i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active-drop");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
 function dropProductCar() {
 	var element = document.getElementById("product-car");
	element.classList.toggle("active-drop-list");
 }

 // send email
 

 // cart
let cartIcon = document.querySelector('#cart-icon')
let cartIcon2 = document.querySelector('.cart-icon-2')
let cartIconAlert = document.querySelector('.see-more')
let cart = document.querySelector('.cart')
let cartClose = document.querySelector('#close-cart')


cartIcon2.onclick = () =>{
	cart.classList.add("active");
}
cartIcon.onclick = () =>{
	cart.classList.add("active");
}
cartClose.onclick = () =>{
	cart.classList.remove("active");
}

// cart working
if(document.readyState == 'loading'){
	document.addEventListener('DOMContentLoaded', ready);
}else{
	ready();
}

function ready(){
	var removeCartButtons = document.getElementsByClassName("cart-remove");
	console.log(removeCartButtons);
	for(var i=0;i<removeCartButtons.length;i++){
		var button = removeCartButtons[i];
		button.addEventListener('click', removeCartItem);
	}
}

function removeCartItem(event){
	var btnClicked = event.target 
	btnClicked.parentElement.remove();
}

// add
var addCart = document.getElementsByClassName('add-cart');
for(var i = 0;i<addCart.length;i++){
	var button = addCart[i];
	button.addEventListener("click", addCartClicked);
}

function addCartClicked(event){
	var button = event.target
	var shopProducts = button.parentElement.parentElement.parentElement.parentElement;
	var title = shopProducts.getElementsByClassName('h4-tagName')[0].innerHTML;
	var price = shopProducts.getElementsByClassName('price-car')[0].innerHTML;
	var productImg = shopProducts.getElementsByClassName('product-img')[0].src;

	addProductCart(title, price, productImg);
}
var alertBtn = document.querySelector('.alert');
var close_alert = document.querySelector('.close-alert-btn')
close_alert.onclick = () =>{
	alertBtn.classList.remove("show");
};

cartIconAlert.onclick = () =>{
	cart.classList.add("active");
	alertBtn.classList.remove("show");
}

function addProductCart(title, price, productImg){
	var cartShopBox = document.createElement('div')
	cartShopBox.classList.add('cart-box')
	var cartItems = document.getElementsByClassName('cart-content')[0];
	var seeMore = document.querySelector('.see-more')
	var haohan = document.querySelector('.alert-title')

	const storeitems = document.getElementById("cart-content")
	const product  = document.querySelectorAll(".cart-box")
	const pname = storeitems.getElementsByTagName("h4")

	for (var i = 0; i < pname.length; i++) {
		let match = product[i].getElementsByClassName('h4-tagName')[0];
		if(match.innerHTML == title){	
			alertBtn.classList.add('show')
			haohan.innerHTML = "This item is already in your cart"
			setTimeout(function(){alertBtn.classList.remove('show')}, 8000)		
			$(window).resize(function(){
		     var width = $(window).width();
		    console.log(width);
		    if (width >= 768 && width<=820){
		        alertBtn.style.width="25%"
		    }else if (width <= 768){
		    		alertBtn.style.width="100%"
		    }})
		
			return;
		}else{
			alertBtn.classList.add('show')
			setTimeout(function(){alertBtn.classList.remove('show')}, 8000)
			
			haohan.innerHTML = "You have add this car on your cart"
			haohan.style.color = "white"
			$(window).resize(function(){
		     var width = $(window).width();
		    console.log(width);
		    if (width >= 768 && width<=820){
		        alertBtn.style.width="27%"
		    }else if (width <= 768){
		    		alertBtn.style.width="100%"
		    }})
		}
	}
	
	var cartBoxContent='<div class="cart-box-detail"><h4 class="h4-tagName">'+title+'</h4><h3 class="price-car">'+price+'</h3></div><img class="cart-img" src="'+productImg+'"><i class="ri-delete-bin-line cart-remove"></i>';
	cartShopBox.innerHTML = cartBoxContent;
	cartItems.append(cartShopBox)
	cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click',removeCartItem);


}
	

   
