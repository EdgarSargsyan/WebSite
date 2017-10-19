var li = $("#outer > li");
var ul = $("#outer > li + ul");
var liI = $("#outer > li > i");


$(li[0]).on("click", function(){
	$(ul[0]).slideToggle("slow");
	if($(liI[0]).hasClass("fa-angle-down")){
		$(liI[0]).removeClass("fa-angle-down");
		$(liI[0]).addClass("fa-angle-up");
	}else{
		$(liI[0]).addClass("fa-angle-down");
		$(liI[0]).removeClass("fa-angle-up");
	};
});

$(li[1]).on("click", function(){
	$(ul[1]).slideToggle("slow");
	if($(liI[1]).hasClass("fa-angle-down")){
		$(liI[1]).removeClass("fa-angle-down");
		$(liI[1]).addClass("fa-angle-up");
	}else{
		$(liI[1]).addClass("fa-angle-down");
		$(liI[1]).removeClass("fa-angle-up");
	};
});

$(li[2]).on("click", function(){
	$(ul[2]).slideToggle("slow");
	if($(liI[2]).hasClass("fa-angle-down")){
		$(liI[2]).removeClass("fa-angle-down");
		$(liI[2]).addClass("fa-angle-up");
	}else{
		$(liI[2]).addClass("fa-angle-down");
		$(liI[2]).removeClass("fa-angle-up");
	};
});

$(li[3]).on("click", function(){
	$(ul[3]).slideToggle("slow");
	if($(liI[3]).hasClass("fa-angle-down")){
		$(liI[3]).removeClass("fa-angle-down");
		$(liI[3]).addClass("fa-angle-up");
	}else{
		$(liI[3]).addClass("fa-angle-down");
		$(liI[3]).removeClass("fa-angle-up");
	};
});

$(li[4]).on("click", function(){
	$(ul[4]).slideToggle("slow");
	if($(liI[4]).hasClass("fa-angle-down")){
		$(liI[4]).removeClass("fa-angle-down");
		$(liI[4]).addClass("fa-angle-up");
	}else{
		$(liI[4]).addClass("fa-angle-down");
		$(liI[4]).removeClass("fa-angle-up");
	};
});

var $btnTop = $(".btnTop");


$(window).on("scroll", function(){
	if($(window).scrollTop() >= 20){
		$btnTop.fadeIn();
	}else{
		$btnTop.fadeOut();
	}
});

$($btnTop).on("click", function(){
	$("html,body").animate({scrollTop:0}, 900);
});

var showMore = $(".showMore");
var showP = $(".showP");

$(showMore[0]).on("click", function(){
	$(showP[0]).slideToggle("slow");

});






/*
//MODEL BOX

function some(){
	modal.style.display = "block";
};
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}*/