// current account
var amtEntered1 = "0";
var amtBalance1 = "0";

var addCurrent = function(){
	amtBalance1 = Number($('#amount1').val()) + Number(amtBalance1);
	amtBalance1 = Number(amtBalance1) < 0 ? 0 : Number(amtBalance1);
	amtEntered1 = Number($('#amount1').val());
	console.log(amtBalance1);
	if (amtBalance1 >= 0) {
		balanceCurrent();
	};
};

var subtractCurrent = function(){
	if (balanceTol() > Number($('#amount1').val()) && Number(amtBalance1) < Number($('#amount1').val())) {
		amtBalance1 = Number(amtBalance1) - Number($('#amount1').val()) + Number(amtBalance2);
	} else {
		amtBalance1 = Number(amtBalance1) - Number($('#amount1').val());
	};
	amtBalance1 = Number(amtBalance1) < 0 ? 0 : Number(amtBalance1);
	amtEntered1 = Number($('#amount1').val());
	console.log(amtBalance1);
	if (amtBalance1 >= 0) {
	balanceCurrent();
};
};

var balanceCurrent = function(){
$('#balance1').html("$" + amtBalance1);
};



// saving account

var amtEntered2 = "0";
var amtBalance2 = "0";

var addSave = function() {
	amtBalance2 = Number($('#amount2').val()) + Number(amtBalance2);
	amtBalance2 = Number(amtBalance2) < 0 ? 0 : Number(amtBalance2);
	amtEntered2 = Number($('#amount2').val());
	console.log(amtBalance2);
	if (amtBalance2 >= 0) {
		balanceSave();
	};
};

var subtractSave = function(){
	amtBalance2 = Number(amtBalance2) - Number($('#amount2').val());
	amtBalance2 = Number(amtBalance2) < 0 ? 0 : Number(amtBalance2);
	amtEntered2 = Number($('#amount2').val());
	console.log(amtBalance2);
	if (amtBalance2 >= 0) {
		balanceSave();
	};
};


var balanceSave = function(){
$('#balance2').html("$" + amtBalance2);
};

 



function balanceTol() {
 return Number(amtBalance1) + Number(amtBalance2);
};

//transfer between 2 account

if (balanceTol() < Number($('#amount1').val())) {
	alert("You account is overdrown!");
	console.log(balanceTol());
} else {
}


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

