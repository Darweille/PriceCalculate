function Calculate()
{
	var Fee = 0.001425;
	var Tax = 0.0015
	
	var Discount = Number(document.getElementById("Discount").value);
	
	var BuyPrice = Number(document.getElementById("BuyPrice").value);
	var BuyFee = (BuyPrice * (Fee * Discount))*1000;
	
	document.getElementById("BuyFee").value = BuyFee.toFixed(1);
	
	var SellPrice = Number(document.getElementById("SellPrice").value);
	var SellFee = (SellPrice * (Fee * Discount))*1000;
	var SellTax = (SellPrice * Tax)*1000;
	
	document.getElementById("SellFee").value = SellFee.toFixed(1);
	document.getElementById("SellTax").value = SellTax.toFixed(1);
	
	var Total = (BuyFee + SellFee + SellTax).toFixed(1);
	
	document.getElementById("Total").value = Total;
}