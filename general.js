var DiscountPercentage = false;

function Calculate()
{
	//讀取證交稅稅率及手續費費率
	var Tax = Number(document.getElementById("inputTax").value)/100; //預設為0.0015
	var Fee = Number(document.getElementById("inputFee").value)/100;  //預設為0.001425;
	
	//讀取折扣成數
	if (DiscountPercentage == true)
	{
		var Discount = Number(document.getElementById("inputDiscount").value) / 100;
	}
	else
	{
		var Discount = Number(document.getElementById("inputDiscount").value);
	}
	
	//讀取買入成交價
	var BuyPrice = Number(document.getElementById("inputBuyPrice").value);
	
	//計算買入手續費
	var BuyFee = (BuyPrice*(Fee*Discount))*1000;
	
	document.getElementById("inputBuyFee").value = BuyFee.toFixed(1);
	
	//讀取賣出成交價
	var SellPrice = Number(document.getElementById("inputSellPrice").value);
	
	//計算賣出手續費及交易稅
	var SellFee = (SellPrice*(Fee*Discount))*1000;
	var SellTax = (SellPrice*Tax)*1000;
	
	document.getElementById("inputSellFee").value = SellFee.toFixed(1);
	document.getElementById("inputSellTax").value = SellTax.toFixed(1);
	
	//計算總費用
	var Total = (BuyFee + SellFee + SellTax).toFixed(1);
	
	document.getElementById("inputTotal").value = Total;
	
	//計算收益
	var Gain = ((SellPrice-BuyPrice)*1000)-Total;
	
	document.getElementById("inputGain").value = Gain.toFixed(0);
}

function CheckboxChange()
{
	var checkboxSetting = document.getElementById("checkboxSetting").checked;
	
	if (checkboxSetting == true)
	{
		document.getElementById("divSetting").style.visibility = "visible";
		document.getElementById("divSetting").style.height = "auto";
		document.getElementById("inputDiscount").value = document.getElementById("inputDiscount").value * 100;
		document.getElementById("inputDiscount").step = "1";
		DiscountPercentage = true;
		document.getElementById("spanDiscount").style.visibility = "visible";
		document.getElementById("buttonSetting").innerHTML = "－";
	}
	else
	{
		document.getElementById("divSetting").style.visibility = "hidden";
		document.getElementById("divSetting").style.height = "0px";
		document.getElementById("inputDiscount").value = document.getElementById("inputDiscount").value / 100;
		document.getElementById("inputDiscount").step = "0.1";
		DiscountPercentage = false;
		document.getElementById("spanDiscount").style.visibility = "hidden";
		document.getElementById("buttonSetting").innerHTML = "＋";
	}
}