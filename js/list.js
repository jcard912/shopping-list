$(document).ready(function() {

	var itemList = 0;
	var check = '<span class="check"><i class="fa fa-check"></i></span>'
	var circle = '<span class="circle"><i class="fa fa-check-circle"></i></span>'
	var x = '<span class="x"><i class="fa fa-times"></i></span>'
	
	//this function is to allow the user to press the enter key when submitting text
	
	function getItem() {
		$('.enter-text').keydown(function (enter) {
			if (enter.keyCode === 13) {
				addItem();
			}
		});
	}
	
	getItem();
	
	//this takes the value and adds it to the list

	function addItem() {
		var item =$('.enter-text').val();
		var newItem = '<p class="input">' + check + circle + item + x + '</p>';
		$('.user-list').prepend(newItem).fadeIn(500);
		$('.enter-text').val('');
	}
		
});
	
	
	
	
	
	//reset button
	$(document).on('click', '.reset', function() {
		$('.user-list').empty()
		itemList = 0;
	});
	
	
	//check off items
	$(document).on('click', '.check', function() {
		$(this).closest('p').removeClass('input').addClass('complete');
		$(this).hide();
		$(this).siblings('.circle').show();
		
	});
	
	//uncheck
	$(document).on('click', '.circle' , function() {
		$(this).closest('p').removeClass('complete').addClass('input');
		$(this).hide();
		$(this).siblings('.check').show();
	});
	
	
	
	
	
	// delete
	$(document).on('click', '.x', function() {
		$(this).closest('p').fadeOut(500);
	});
	
	