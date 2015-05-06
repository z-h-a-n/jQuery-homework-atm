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
	amtEntered1 = Number($('#amount1').val());
	console.log(amtEntered1);
	balanceCurrent();
};

var subtractCurrent = function(){
	amtBalance1 = Number(amtBalance1) - Number($('#amount1').val());
	amtEntered1 = Number($('#amount1').val());
	console.log(amtEntered1);
	balanceCurrent();
};


var balanceCurrent = function(){
	$('#balance1').html("$" + amtBalance1);
};


// saving account

var amtEntered2 = "0";
var amtBalance2 = "0";

var addSave = function() {
	amtBalance2 = Number($('#amount2').val()) + Number(amtBalance2);
	amtEntered2 = Number($('#amount2').val());
	console.log(amtEntered2);
	balanceSave();
};

var subtractSave = function(){
	amtBalance2 = Number(amtBalance2) - Number($('#amount2').val());
	amtEntered2 = Number($('#amount2').val());
	console.log(amtEntered2);
	balanceSave();
};

var balanceSave = function(){
	$('#balance2').html("$" + amtBalance2);
};

//transfer between 2 account


var balanceTol = function () {
 return Number(amtBalance1) + Number(amtBalance2);

};


// if amtEntered1 < balanceTol => amtBalance1 = balanceTol - amtEntered1 AND amtBalance2 = amtBalance1 - amtEntered1 + amtBalance2
if (amtEntered1 < balanceTol()) {
	amtBalance1 = balanceTol() - amtBalance1;
	amtBalance2 = amtBalance1 - amtBalance1 + amtBalance2;
};


// event listener
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

