$(document).ready(function() {
	$('#Tic-Tac-Toe').on('click',function(){
		$(this).css('background-color','#555d66'); 
		$('#Flip-cards').css('background-color','#343a40'); 
		$('#Flames').css('background-color','#343a40') ;
		$('.cls_Tic-Tac-Toe').show() ;
		$('.cls_Flames').hide() ;
		$('.cls_Flip-cards').hide() ;
		$('.cls_hand-cricket').hide() ;
		$('.cls_stone-paper-scissor').hide() ;



	});
	$('#Flames').on('click',function(){
		$(this).css('background-color','#555d66'); 
		$('#Flip-cards').css('background-color','#343a40'); 
		$('#Tic-Tac-Toe').css('background-color','#343a40') ;
		$('.cls_Flames').show() ;
		$('.cls_Tic-Tac-Toe').hide() ;
		$('.cls_Flip-cards').hide() ;
		$('.cls_hand-cricket').hide() ;
		$('.cls_stone-paper-scissor').hide() ;


	});
	$('#Flip-cards').on('click',function(){
		$(this).css('background-color','#555d66'); 
		$('#Tic-Tac-Toe').css('background-color','#343a40'); 
		$('#Flames').css('background-color','#343a40') ;
		$('.cls_Tic-Tac-Toe').hide() ;
		$('.cls_Flames').hide() ;
		$('.cls_Flip-cards').show() ;
		$('.cls_hand-cricket').hide() ;
		$('.cls_stone-paper-scissor').hide() ;
	});
	
	$('#hand-cricket').on('click',function(){
		$(this).css('background-color','#555d66'); 
		$('#hand-cricket').css('background-color','#343a40'); 
		$('#Flames').css('background-color','#343a40') ;
		$('.cls_Tic-Tac-Toe').hide() ;
		$('.cls_Flames').hide() ;
		$('.cls_Flip-cards').hide() ;
		$('.cls_stone-paper-scissor').hide() ;
		$('.cls_hand-cricket').show() ;
	});
	$('#stone-paper-scissor').on('click',function(){
		$(this).css('background-color','#555d66'); 
		$('#stone-paper-scissor').css('background-color','#343a40'); 
		$('#Flames').css('background-color','#343a40') ;
		$('.cls_Tic-Tac-Toe').hide() ;
		$('.cls_Flames').hide() ;
		$('.cls_Flip-cards').hide() ;
				$('.cls_hand-cricket').hide() ;
				$('.cls_stone-paper-scissor').show() ;


	});


});