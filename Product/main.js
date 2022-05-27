// overlay
		function openNav() {
		  document.getElementById("myDiv").style.width = "100%";
		}

		function closeNav() {
		  document.getElementById("myDiv").style.width = "0%";
		}

		// onclick
		const icons = document.querySelector('.icon-search');
		const search=document.querySelector('.search');
		icons.onclick = function(){
			search.classList.toggle('active')
		}

		// const financedrop = document.querySelector('.financedrop');
		// financedrop.onclick = function(){
		// 	financedrop.classList.toggle('dropactive');
		// }

		const selectImg1 = document.querySelector('.color-select1')
		const selectImg2 = document.querySelector('.color-select2')
		const selectImg3 = document.querySelector('.color-select3')
		const ImgActive1 = document.querySelector('.img1');
		const ImgActive2 = document.querySelector('.img2');
		const ImgActive3 = document.querySelector('.img3');

		selectImg1.onclick = function(){
			$(this).addClass('active-choose').siblings().removeClass('active-choose')

			$(ImgActive1).addClass('active-img').siblings().removeClass('active-img')
		}

		selectImg2.onclick = function(){
			$(this).addClass('active-choose').siblings().removeClass('active-choose')

			$(ImgActive2).addClass('active-img').siblings().removeClass('active-img')
		}

		selectImg3.onclick = function(){
			$(this).addClass('active-choose').siblings().removeClass('active-choose')

			$(ImgActive3).addClass('active-img').siblings().removeClass('active-img')
		}

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

		 // scroll to top
		 ButtonScrollTop = document.getElementById("myBtn");
		 function topFunction() {
		  document.body.scrollTop = 0; // For Safari
		  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
		}


	// =======chat========
	function getBotResponse(input) {

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}

var chatTask = document.getElementById("full-chat-block");
var open = document.getElementById("chat-button");
open.onclick=function() {
    chatTask.classList.toggle('active-chat');
}

// Gets the first message
function firstBotMessage() {
    let firstMessage = "Hello, you are talking to DINGUCAR. How can I help you today?"
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';
    document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

// Retrieves the response
function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//Gets the text 
function getResponse() {
    let userText = $("#textInput").val();

    if (userText == "") {
        userText = "I love Code Palace!";
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)

}

// Handles sending text
function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function sendButton() {
    getResponse();
}

// Press enter to send a message
$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});