// This Calculator was created
// by Paola Garcia C. for
// ECSprofessional.com
//(c)2012 All Rights Reserved.
// If you would like to use it on your website, 
// please contact: info@ecsprofessional.com

function generalBlank(field) {
var totalResult = "";
var c = 0;

for (x=0; x < field.length; x++){

	if (field.charAt(x) != " " || c > 0){  totalResult += field.charAt(x); if (field.charAt(x) != " ") c = totalResult.length;}} 

	return totalResult.substr(0,c);}

function bal2limRatio(thisform) {

var totalBalance = 0;
var totalLimit = 0;
var totalResult = 0;
var totalB7 = 0;

	//Row 1
var bal1 = generalBlank(thisform.bal1.value);
	if (bal1 != '' && bal1 != parseFloat(bal1)) {
	alert("Your balance must be numeric");thisform.bal1.focus();return false;
	}
var lim1 = generalBlank(thisform.lim1.value);
	if (lim1 != '' && lim1 != parseFloat(lim1)) {
	alert("Your limit must be numeric");thisform.lim1.focus();return false;
	}
	
	if (Number(bal1) > Number(lim1)){
	alert("Your balance cannot be greater than your limit.");thisform.bal1.focus();return false;
	}

var btlr1 = generalBlank(thisform.btlr1.value);

		btlr1 = ((bal1/lim1)*100).toFixed(2);
		thisform.btlr1.value = btlr1;
		
var b1 = generalBlank(thisform.b1.value);

		b1 = (lim1 * 0.07).toFixed(2);
		thisform.b1.value = b1;

		
		totalResult += Number(btlr1);
		totalBalance += Number(bal1);
		totalLimit += Number(lim1);
		totalB7 += Number(b1);

		
		//End row1
		
		//Row 2
var bal2 = generalBlank(thisform.bal2.value);
	if (bal2 != '' && bal2 != parseFloat(bal2)) {
	alert("Your balance must be numeric");thisform.bal2.focus();return false;
	}
var lim2 = generalBlank(thisform.lim2.value);
	if (lim2 != '' && lim2 != parseFloat(lim2)) {
	alert("Your limit must be numeric");thisform.lim2.focus();return false;
	}
	
	if (Number(bal2) > Number(lim2)){
	alert("Your balance cannot be greater than your limit.");thisform.bal2.focus();return false;
	}
	
var btlr2 = generalBlank(thisform.btlr2.value);
		btlr2 = ((bal2/lim2)*100).toFixed(2);
		thisform.btlr2.value = btlr2;
		
var b2 = generalBlank(thisform.b2.value);

		b2 = (lim2 * 0.07).toFixed(2);
		thisform.b2.value = b2;
		
		
		totalResult += Number(btlr2);
		totalBalance += Number(bal2);
		totalLimit += Number(lim2);
		totalB7 += Number(b2);
		//End Row 2
		
		//Row 3
var bal3 = generalBlank(thisform.bal3.value);
	if (bal3 != '' && bal3 != parseFloat(bal3)) {
	alert("Your balance must be numeric");thisform.bal3.focus();return false;
	}
var lim3 = generalBlank(thisform.lim3.value);
	if (lim3 != '' && lim3 != parseFloat(lim3)) {
	alert("Your limit must be numeric");thisform.lim3.focus();return false;
	}
	
	if (Number(bal3) > Number(lim3)){
	alert("Your balance cannot be greater than your limit.");thisform.bal3.focus();return false;
	}
var btlr3 = generalBlank(thisform.btlr3.value);
		btlr3 = ((bal3/lim3)*100).toFixed(2);
		thisform.btlr3.value = btlr3;
		
var b3 = generalBlank(thisform.b3.value);

		b3 = (lim3 * 0.07).toFixed(2);
		thisform.b3.value = b3;
		
		totalResult += Number(btlr3);
		totalBalance += Number(bal3);
		totalLimit += Number(lim3);
		totalB7 += Number(b3);
		//End Row 3

		//Row 4
var bal4 = generalBlank(thisform.bal4.value);
	if (bal4 != '' && bal4 != parseFloat(bal4)) {
	alert("Your balance must be numeric");thisform.bal4.focus();return false;
	}
var lim4 = generalBlank(thisform.lim4.value);
	if (lim4 != '' && lim4 != parseFloat(lim4)) {
	alert("Your limit must be numeric");thisform.lim4.focus();return false;
	}
	
	if (Number(bal4) > Number(lim4)){
	alert("Your balance cannot be greater than your limit.");thisform.bal4.focus();return false;
	}
var btlr4 = generalBlank(thisform.btlr4.value);
		btlr4 = ((bal4/lim4)*100).toFixed(2);
		thisform.btlr4.value = btlr4;
		
var b4 = generalBlank(thisform.b4.value);
		b4 = (lim4 * 0.07).toFixed(2);
		thisform.b4.value = b4;
		
		totalResult += Number(btlr4);
		totalBalance += Number(bal4);
		totalLimit += Number(lim4);
		totalB7 += Number(b4);
		//End Row 4
		
		//Row 5
var bal5 = generalBlank(thisform.bal5.value);
	if (bal5 != '' && bal5 != parseFloat(bal5)) {
	alert("Your balance must be numeric");thisform.bal5.focus();return false;
	}
var lim5 = generalBlank(thisform.lim5.value);
	if (lim5 != '' && lim5 != parseFloat(lim5)) {
	alert("Your limit must be numeric");thisform.lim5.focus();return false;
	}
	
	if (Number(bal5) > Number(lim5)){
	alert("Your balance cannot be greater than your limit.");thisform.bal5.focus();return false;
	}
var btlr5 = generalBlank(thisform.btlr5.value);
		btlr5 = ((bal5/lim5)*100).toFixed(2);
		thisform.btlr5.value = btlr5;
		
var b5 = generalBlank(thisform.b5.value);
		b5 = (lim5 * 0.07).toFixed(2);
		thisform.b5.value = b5;
		
		totalResult += Number(btlr5);
		totalBalance += Number(bal5);
		totalLimit += Number(lim5);
		totalB7 += Number(b5);
		//End Row 5
		
		//Row 6
var bal6 = generalBlank(thisform.bal6.value);
	if (bal6 != '' && bal6 != parseFloat(bal6)) {
	alert("Your balance must be numeric");thisform.bal6.focus();return false;
	}
var lim6 = generalBlank(thisform.lim6.value);
	if (lim6 != '' && lim6 != parseFloat(lim6)) {
	alert("Your limit must be numeric");thisform.lim6.focus();return false;
	}
	
	if (Number(bal6) > Number(lim6)){
	alert("Your balance cannot be greater than your limit.");thisform.bal6.focus();return false;
	}
var btlr6 = generalBlank(thisform.btlr6.value);
		btlr6 = ((bal6/lim6)*100).toFixed(2);
		thisform.btlr6.value = btlr6;
		
var b6 = generalBlank(thisform.b6.value);
		b6 = (lim6 * 0.07).toFixed(2);
		thisform.b6.value = b6;
		
		totalResult += Number(btlr6);
		totalBalance += Number(bal6);
		totalLimit += Number(lim6);
		totalB7 += Number(b6);
		//End Row 6
		
		//Row 7
var bal7 = generalBlank(thisform.bal7.value);
	if (bal7 != '' && bal7 != parseFloat(bal7)) {
	alert("Your balance must be numeric");thisform.bal7.focus();return false;
	}
var lim7 = generalBlank(thisform.lim7.value);
	if (lim7 != '' && lim7 != parseFloat(lim7)) {
	alert("Your limit must be numeric");thisform.lim7.focus();return false;
	}
	
	if (Number(bal7) > Number(lim7)){
	alert("Your balance cannot be greater than your limit.");thisform.bal7.focus();return false;
	}
var btlr7 = generalBlank(thisform.btlr7.value);
		btlr7 = ((bal7/lim7)*100).toFixed(2);
		thisform.btlr7.value = btlr7;
		
var b7 = generalBlank(thisform.b7.value);
		b7 = (lim7 * 0.07).toFixed(2);
		thisform.b7.value = b7;
		
		totalResult += Number(btlr7);
		totalBalance += Number(bal7);
		totalLimit += Number(lim7);
		totalB7 += Number(b7);
		//End Row 7
		
		//Row 8
var bal8 = generalBlank(thisform.bal8.value);
	if (bal8 != '' && bal8 != parseFloat(bal8)) {
	alert("Your balance must be numeric");thisform.bal8.focus();return false;
	}
var lim8 = generalBlank(thisform.lim8.value);
	if (lim8 != '' && lim8 != parseFloat(lim8)) {
	alert("Your limit must be numeric");thisform.lim8.focus();return false;
	}
	
	if (Number(bal8) > Number(lim8)){
	alert("Your balance cannot be greater than your limit.");thisform.bal8.focus();return false;
	}
var btlr8 = generalBlank(thisform.btlr8.value);
		btlr8 = ((bal8/lim8)*100).toFixed(2);
		thisform.btlr8.value = btlr8;
		
var b8 = generalBlank(thisform.b8.value);
		b8 = (lim8 * 0.07).toFixed(2);
		thisform.b8.value = b8;
		
		totalResult += Number(btlr8);
		totalBalance += Number(bal8);
		totalLimit += Number(lim8);
		totalB7 += Number(b8);
		//End Row 8
		
		//Row 9
var bal9 = generalBlank(thisform.bal9.value);
	if (bal9 != '' && bal9 != parseFloat(bal9)) {
	alert("Your balance must be numeric");thisform.bal9.focus();return false;
	}
var lim9 = generalBlank(thisform.lim9.value);
	if (lim9 != '' && lim9 != parseFloat(lim9)) {
	alert("Your limit must be numeric");thisform.lim9.focus();return false;
	}
	
	if (Number(bal9) > Number(lim9)){
	alert("Your balance cannot be greater than your limit.");thisform.bal9.focus();return false;
	}
var btlr9 = generalBlank(thisform.btlr9.value);
		btlr9 = ((bal9/lim9)*100).toFixed(2);
		thisform.btlr9.value = btlr9;
		
var b9 = generalBlank(thisform.b9.value);
		b9 = (lim9 * 0.07).toFixed(2);
		thisform.b9.value = b9;
		
		totalResult += Number(btlr9);
		totalBalance += Number(bal9);
		totalLimit += Number(lim9);
		totalB7 += Number(b9);
		//End Row 9
		
		//Row 10
var bal10 = generalBlank(thisform.bal10.value);
	if (bal10 != '' && bal10 != parseFloat(bal10)) {
	alert("Your balance must be numeric");thisform.bal10.focus();return false;
	}
var lim10 = generalBlank(thisform.lim10.value);
	if (lim10 != '' && lim10 != parseFloat(lim10)) {
	alert("Your limit must be numeric");thisform.lim10.focus();return false;
	}
	
	if (Number(bal10) > Number(lim10)){
	alert("Your balance cannot be greater than your limit.");thisform.bal10.focus();return false;
	}
var btlr10 = generalBlank(thisform.btlr10.value);
		btlr10 = ((bal10/lim10)*100).toFixed(2);
		thisform.btlr10.value = btlr10;
		
var b10 = generalBlank(thisform.b10.value);
		b10 = (lim10 * 0.07).toFixed(2);
		thisform.b10.value = b10;
		
		totalResult += Number(btlr10);
		totalBalance += Number(bal10);
		totalLimit += Number(lim10);
		totalB7 += Number(b10);
		//End Row 10
		
		//Adding totals
		thisform.res.value = ((totalBalance/totalLimit)*100).toFixed(2)+"%";
		thisform.totalBal.value = totalBalance;
		thisform.totalLim.value = totalLimit;
		thisform.totalB.value = (totalLimit * 0.07).toFixed(2);
		//End of adding totals

}
