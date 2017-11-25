
$(function(){

	// fading out loader icon
	$("#preloader").fadeOut(3000);

	// displaying the division
	$("#myDiv").css("display","block");


	// displaying the content dynamically using jQuery
	$("#jumbotroncontent").html("<h1>Bootstrap Jumbotron</h1>" +
								"<p>HTML5 CSS3 JavaScript</p>"+
								"<p>jQuery Bootstrap</p>");

	// showing paragraph content inside jumbotron on button click
	$("#btnShow").click(function(){

		$("div#jumbotroncontent p").show();
	});

	// hiding paragraph content inside jumbotron on button click
	$("#btnHide").click(function(){

		$("div#jumbotroncontent p").hide();
	});

	// changing font-size and color of paragraph content inside jumbotron on button click
	$("#btnChangeFont").click(function(){

		$("div#jumbotroncontent p").css("font-size","30px");

		$("div#jumbotroncontent p").css("color","blue");
	});
});