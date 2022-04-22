function Calculate()
{
	var Fee = 0.001425;
	var Tax = 0.0015
	
	var Discount = Number(document.getElementById("Discount").value);
	
	var BuyPrice = Number(document.getElementById("BuyPrice").value);
	var BuyFee = BuyPrice * (Fee * Discount );
	
	document.getElementById("BuyFee").value = BuyFee.toFixed(4);
	
	var SellPrice = Number(document.getElementById("SellPrice").value);
	var SellFee = SellPrice * (Fee * Discount );
	var SellTax = SellPrice * Tax;
	
	document.getElementById("SellFee").value = SellFee.toFixed(4);
	document.getElementById("SellTax").value = SellTax.toFixed(4);
}