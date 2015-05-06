//.val() get value for text box
//.text() get value from display
//.html() get html value


// var deposit1 =  $('#deposit1').attr('value')

// var withdraw1 = $('#withdraw1').attr('value')

// var amount1 = $('#amount1').val();




// current account

var amtEntered1 = "0";
var amtBalance1 = "0";

var addCurrent = function(){
	amtBalance1 = Number($('#amount1').val()) + Number(amtBalance1);
	
	console.log(amtBalance1);
	balanceCurrent();
};

var subtractCurrent = function(){
	amtBalance1 = Number(amtBalance1) - Number($('#amount1').val());
	
	console.log(amtBalance1);
	balanceCurrent();
};


var balanceCurrent = function(){
	$('#balance1').html("$" + amtBalance1);
};

// CurrentAcct if click deposit => balance1 + amount1 | else if click withdraw =>balance1 - amount1

$(document).ready(function(){
  $('#deposit1').on('click', addCurrent)
  $('#withdraw1').on('click', subtractCurrent)
  $('#amount1').on('change')
 	$('#balance1').on('change', balanceCurrent)  

 	 $('#deposit2').on('click', addSave)
  $('#withdraw2').on('click', subtractSave)
  $('#amount2').on('change')
 	$('#balance2').on('change', balanceSave)  
})

