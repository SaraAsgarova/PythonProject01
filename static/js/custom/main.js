$(function() {
// recognizing loadingpage height
	var w_h=$(window).height();
	$(".loading").css('margin-top', w_h/2-125 + 'px');
	$( window ).resize(function() {
		console.log(1);
	 	 w_h=$(window).height();
		$(".loading").css('margin-top', w_h/2-125 + 'px');
	});
	
//leftside  navbar
	$(".collapsedNavbar").on("click", function() {
		$("body").css({
            "overflow-y": "hidden"
        });
		$(".background").show();
		$('.background').width($( window ).width());
	    $('.background').height($( window ).height());
		$("#navbar").animate({left: '0'},400);
	});

//leftside navbar close
	$("#navbar .back").on("click", function() {
		$("#navbar").animate({left: '-300px'},400);
		$(".background").hide();
		$("body").css({
            "overflow-y": "scroll"
        });
	});
	$(".background").on("click", function() {
		$("#navbar").animate({left: '-280px'},400);
		$(".background").hide();
		$("body").css({
            "overflow-y": "scroll"
        });
	});

// attachment image open
	function imgShow(t){
		var img_src=t;
		 $("body").css({
            "overflow-y": "hidden"
            });
		var window_h=$(window).height();
		$(".selected-img").fadeIn(400);
		$('.selected-img').width($( window ).width());
	    $('.selected-img').height(window_h);

		$(".selected-img img").attr('src', img_src).css('width', '100%');
		var img_h=$(".selected-img img").height();

		if(img_h>window_h-120){
			$(".selected-img img").css({
				height: window_h-125 + 'px',
				width: 'auto'
			});
		}
	}
	$(".question-wrap .attachment img").click(function(event) {
		imgShow($(this).attr('src'));
	});
	$("#chat-wrap .chat-frame img").click(function(event) {
		imgShow($(this).attr('src'));
	});

//attachment image close
	$('.close-img').click(function(event) {
		$(".selected-img").hide();
		$("body").css({
            "overflow-y": "scroll",
            "position": "relative"
        });
        $(".selected-img img").css({
				height: 'initial',
				width: 'initial'
		});
	});
// correct answer 
$(".question-wrap .answer .correct-ans").click(function(event) {
		 $("body").css({
            "overflow-y": "hidden"
            });
		$(".correct-ans-background").fadeIn(400);
		$('.correct-ans-background').width($( window ).width());
	    $('.correct-ans-background').height($( window ).height());
	     $(".correct-ans-panel").fadeIn(400);
	});
$(".correct-ans-background").click(function(event) {
	$(".correct-ans-background").fadeOut(400);
	$(".correct-ans-panel").fadeOut(400);
	$("body").css({
            "overflow-y": "scroll",
            "position": "relative"
    });
});
// best answer 
$(".question-wrap .answer .best-ans").click(function(event) {
		 $("body").css({
            "overflow-y": "hidden"
            });
		$(".best-ans-background").fadeIn(400);
		$('.best-ans-background').width($( window ).width());
	    $('.best-ans-background').height($( window ).height());
	    $(".best-ans-panel").fadeIn(400);
	});
$(".best-ans-background").click(function(event) {
	$(".best-ans-background").fadeOut(400);
	$(".best-ans-panel").fadeOut(400);
	$("body").css({
            "overflow-y": "scroll",
            "position": "relative"
    });
});
$(".best-ans-panel .submit-btn").click(function(event) {
	$(".best-ans-background").fadeOut(400);
	$(".best-ans-panel").fadeOut(400);
	$("body").css({
            "overflow-y": "scroll",
            "position": "relative"
    });
});

// star-background 
$(".question-wrap .rank .star").click(function(event) {
		 $("body").css({
            "overflow-y": "hidden"
            });
		$(".star-background").fadeIn(400);
		$('.star-background').width($( window ).width());
	    $('.star-background').height($( window ).height());
	    $(".star-panel").fadeIn(400);
	});

$(".star-background").click(function(event) {
	$(".star-background").fadeOut(400);
	$(".star-panel").fadeOut(400);
	$("body").css({
            "overflow-y": "scroll",
            "position": "relative"
    });
});
//star checking
	$(".star-panel input").click(function(event) {
		var starId = $(this).attr('id');
		$(".star-panel input").prop('checked',false);
		for(var i=1;i<=starId;i++){
			$(".star-panel #"+i).prop('checked',true);
		}
	});
//close searching
var k=0;
	$("header .nav-header input").keyup(function(event) {
		if(k==0){
			$(this).addClass('width-in');
			k++;
		}
		$(this).siblings('.close-icon').css('display', 'block');
		$('.content-wrap .searchResult').css('display', 'block');
	});

	$("header .nav-header .close-icon").click(function(event) {
		k=0;
		$(this).css('display', 'none');
		$("header .nav-header input").removeClass('width-in');
		$('.content-wrap .searchResult').css('display', 'none');
	});

//create question
	function ChangeText(element, openTag, closeTag) {
	    var textArea =$(element);
	    var len = textArea.val().length;
	    var start = textArea[0].selectionStart;
	    var end = textArea[0].selectionEnd;
	    var selectedText = textArea.val().substring(start, end);
	    var replacement = openTag + selectedText + closeTag;
	    textArea.val(textArea.val().substring(0, start) + replacement + textArea.val().substring(end, len));
	    textArea.focus();
	}
	$(".createQuestion .property .leftSide .bold").click(function() {
	    ChangeText(".createQuestion .qu-area", "<b>", "</b>");
	});
	$(".createQuestion .property .leftSide .underline").click(function(event) {
		 ChangeText(".createQuestion .qu-area", "<u>", "</u>");
	});
    var symbolIcon = 0;
    var mathIcon = 0;
	$(".createQuestion .property .rightSide .symbolIcon").click(function(event) {
		if(symbolIcon%2==0){
			$(this).addClass('slect');
		}else{
			$(this).removeClass('slect');
		}
		symbolIcon++;
	});
	$(".createQuestion .property .rightSide .mathIcon").click(function(event) {
		if(mathIcon%2==0){
			$(this).addClass('slect');
		}else{
			$(this).removeClass('slect');
		}
		mathIcon++;
	});

//enter symbols
	$(".createQuestion .symbolList li a").click(function(event) {
		$(".createQuestion .qu-area").val($(".createQuestion .qu-area").val()+$(this).text());
		$(".createQuestion .qu-area").focus();
	});
	$(".createQuestion .mathList li a").click(function(event) {
		$(".createQuestion .formula-area").val($(".createQuestion .formula-area").val()+$(this).data('formula'));
		$(".createQuestion .formula-area").focus();
	});

// question page icon change 
	$(".question-wrap .leftBtn").click(function() {
		var id = $(this).data('id');
		$('.ans-comments').not('#open_'+id).slideUp('400');
		$(".question-wrap .leftBtn").not(this).removeClass('active-left').children("i").removeClass('fa-chevron-up').addClass('fa-chevron-down');
		$('#open_'+id).slideToggle();
		$('.writeComment').slideUp('200');
		$(".question-wrap .rightBtn").removeClass('active-right');
		var t=$(this).children("i");
		if(t.attr('class')=="fa fa-chevron-down"){
			t.removeClass('fa-chevron-down').addClass('fa-chevron-up');
			$(this).addClass('active-left');
		}
		else{
			t.removeClass('fa-chevron-up').addClass('fa-chevron-down');
			$(this).removeClass('active-left');
		}
	});
//comment answer 
	$(" .question-wrap .rightBtn").click(function() {
		var id = $(this).data('id');
		$(".question-wrap .rightBtn").removeClass('active-right');
		$(this).addClass('active-right');
		$('.ans-comments').not('#open_'+id).slideUp('400');
		$(".question-wrap .leftBtn").not($(this).parent('.buttons').children('.leftBtn')).removeClass('active-left').children("i").removeClass('fa-chevron-up').addClass('fa-chevron-down');
		$('.writeComment').slideUp('200');
		if($('#open_'+id).css('display')==='none'){
			var t=$(this).parent('.buttons').children('.leftBtn');
			t.children("i").removeClass('fa-chevron-down').addClass('fa-chevron-up');
			t.addClass('active-left');
			$('#open_'+id).slideDown();
		}
		$('#open_'+id+' .writeComment').slideDown();
		$('#open_'+id+' .writeComment textarea').focus();
	});
//question answer 
	$("footer .ansQu").click(function(event) {
		$(".writeAnswer").slideDown();
		$(".writeAnswer textarea").focus();
	});
// chat wrap message time
	$("#chat-wrap .chat-frame .li-left p").click(function(event) {
		$("#chat-wrap .chat-frame .left-time").hide('fast');
		$("#chat-wrap .chat-frame .right-time").hide('fast');
		if($(this).siblings('.left-time').css('display')==='none'){
			$(this).siblings('.left-time').show('fast');
		}
	});

	$("#chat-wrap .chat-frame .li-right p").click(function(event) {
		$("#chat-wrap .chat-frame .left-time").hide('fast');
		$("#chat-wrap .chat-frame .right-time").hide('fast');
		if($(this).siblings('.right-time').css('display')==='none'){
			$(this).siblings('.right-time').show('fast');
		}
	});

	//notificcation popup
	$("#myNotification .acceptinginvitation").click(function(event) {
		 $("body").css({
            "overflow-y": "hidden"
            });
		$(".invitation-background").fadeIn(400);
		$('.invitation-background').width($( window ).width());
	    $('.invitation-background').height($( window ).height());
	    $(".invitation-panel").fadeIn(400);
	});
	$(".invitation-background").click(function(event) {
		$(".invitation-background").fadeOut(400);
		$(".invitation-panel").fadeOut(400);
		$("body").css({
	            "overflow-y": "scroll",
	            "position": "relative"
	    });
	});
	$(".invitation-panel .reject").click(function(event) {
		$(".invitation-background").fadeOut(400);
		$(".invitation-panel").fadeOut(400);
		$("body").css({
	            "overflow-y": "scroll",
	            "position": "relative"
	    });
	});
	$(".invitation-panel .accept").click(function(event) {
		$(".invitation-background").fadeOut(400);
		$(".invitation-panel").fadeOut(400);
		$("body").css({
	            "overflow-y": "scroll",
	            "position": "relative"
	    });
	});

});






