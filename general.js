var DiscountPercentage = false; //折扣成數百分比狀態

//手續費折扣成數變動
function FeeDiscountChange()
{
	document.getElementById("inputFeeDiscountPercentage").value = (document.getElementById("inputFeeDiscount").value)*100; //同步百分比數值
	Calculate();
}

function FeeDiscountPercentageChange()
{
	document.getElementById("inputFeeDiscount").value = (document.getElementById("inputFeeDiscountPercentage").value)/100;
	Calculate();
}

//開關設定選單
function CheckboxChange()
{
	var checkboxSetting = document.getElementById("checkboxSetting").checked
	
	if (checkboxSetting == true)
	{
		document.getElementById("divSetting").style.visibility = "visible";
		document.getElementById("divSetting").style.height = "auto";
		
		document.getElementById("spanDiscountPercentage").style.visibility = "visible";
		
		document.getElementById("inputFeeDiscount").style.display = "none";
		document.getElementById("inputFeeDiscountPercentage").style.display = "inline";
		
		document.getElementById("labelDiscount").htmlFor = "inputFeeDiscountPercentage"
		
		document.getElementById("spanSettingButton").innerHTML = "[－]";
		
		DiscountPercentage = true;
	}
	else
	{
		document.getElementById("divSetting").style.visibility = "hidden";
		document.getElementById("divSetting").style.height = "0px";
		
		document.getElementById("spanDiscountPercentage").style.visibility = "hidden";
		
		document.getElementById("inputFeeDiscount").style.display = "inline";
		document.getElementById("inputFeeDiscountPercentage").style.display = "none";
		
		document.getElementById("labelDiscount").htmlFor = "inputFeeDiscount"
		
		document.getElementById("spanSettingButton").innerHTML = "[＋]";
		
		DiscountPercentage = false;
	}
}

//計算
function Calculate()
{
	//讀取證交稅稅率及手續費費率
	var Tax = Number(document.getElementById("inputTax").value)/100; //預設為0.0015
	var Fee = Number(document.getElementById("inputFee").value)/100;  //預設為0.001425;
	
	//讀取手續費折扣成數
	if (DiscountPercentage == true)
	{
		var FeeDiscount = Number(document.getElementById("inputFeeDiscountPercentage").value)/100;
	}
	else
	{
		var FeeDiscount = Number(document.getElementById("inputFeeDiscount").value);
	}
	
	//讀取買入成交價
	var BuyPrice = Number(document.getElementById("inputBuyPrice").value);
	
	//計算買入手續費
	var BuyFee = (BuyPrice*(Fee*FeeDiscount))*1000;
	
	document.getElementById("inputBuyFee").value = BuyFee.toFixed(1);
	
	//讀取賣出成交價
	var SellPrice = Number(document.getElementById("inputSellPrice").value);
	
	//計算賣出手續費及交易稅
	var SellFee = (SellPrice*(Fee*FeeDiscount))*1000;
	var SellTax = (SellPrice*Tax)*1000;
	
	document.getElementById("inputSellFee").value = SellFee.toFixed(1);
	document.getElementById("inputSellTax").value = SellTax.toFixed(1);
	
	//計算總費用
	var Total = (BuyFee + SellFee + SellTax).toFixed(0);
	
	document.getElementById("inputTotal").value = Total;
	
	//計算收益
	if (BuyPrice && SellPrice > 0)
	{
		var Gain = ((SellPrice-BuyPrice)*1000)-Total;
		document.getElementById("inputGain").value = Gain.toFixed(0);
	}
	else
	{
		document.getElementById("inputGain").value = "";
	}
}