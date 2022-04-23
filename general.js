var DiscountPercentage = false;

function Calculate()
{
	//讀取證交稅稅率及手續費費率
	var Tax = Number(document.getElementById("Tax").value)/100; //預設為0.0015
	var Fee = Number(document.getElementById("Fee").value)/100;  //預設為0.001425;
	
	//讀取折扣成數
	if (DiscountPercentage == true)
	{
		var Discount = Number(document.getElementById("Discount").value) / 100;
	}
	else
	{
		var Discount = Number(document.getElementById("Discount").value);
	}
	
	//讀取買入成交價
	var BuyPrice = Number(document.getElementById("BuyPrice").value);
	
	//計算買入手續費
	var BuyFee = (BuyPrice*(Fee*Discount))*1000;
	
	document.getElementById("BuyFee").value = BuyFee.toFixed(1);
	
	//讀取賣出成交價
	var SellPrice = Number(document.getElementById("SellPrice").value);
	
	//計算賣出手續費及交易稅
	var SellFee = (SellPrice*(Fee*Discount))*1000;
	var SellTax = (SellPrice*Tax)*1000;
	
	document.getElementById("SellFee").value = SellFee.toFixed(1);
	document.getElementById("SellTax").value = SellTax.toFixed(1);
	
	//計算總費用
	var Total = (BuyFee + SellFee + SellTax).toFixed(1);
	
	document.getElementById("Total").value = Total;
}

function CheckboxChange()
{
	var checkboxSetting = document.getElementById("checkboxSetting").checked;
	
	if (checkboxSetting == true)
	{
		document.getElementById("divSetting").style.display = "block";
		document.getElementById("Discount").value = document.getElementById("Discount").value * 100;
		document.getElementById("Discount").step = "1";
		DiscountPercentage = true;
		document.getElementById("spanDiscount").innerHTML = "%";
	}
	else
	{
		document.getElementById("divSetting").style.display = "none";
		document.getElementById("Discount").value = document.getElementById("Discount").value / 100;
		document.getElementById("Discount").step = "0.1";
		DiscountPercentage = false;
		document.getElementById("spanDiscount").innerHTML = "";
	}
}