var AV = require('leanengine');
var uuid = require('uuid');
exports.checkDaySame = function checkDaySame(date, now)
{
	return date.getFullYear() == now.getFullYear() && date.getMonth() == now.getMonth() && date.getDate() == now.getDate();
}

exports.initGiftInfo = function initGiftInfo()
{
	new AV.Query('GiftInfo').find().then(function(results)
	{
		for (var i = results.length - 1; i >= 0; i--) {
			var data = results[i];
			global.giftInfo[data.get('GiftID')] = JSON.stringify(data);
		}
	});
};

exports.getVipType =function getVipType(points)
{
	if(points <= 0)
	{	
        return 0;
    }
    else if(points < 100)
   	{
        return 1;
    }
    else if(points < 500)
    {
        return 2;
     }else if(points < 1500)
     {
        return 3;
     }
    else if(points < 5000)
    {
        return 4;
    }
    else if(points < 10000)
    {
       	return 5;
    }
    else if(points < 20000)
    {
        return 6;
    }
    else if(points < 40000)
    {
        return 7;
    }
    else if(points < 70000)
    {
        return 8;
    }
    else if(points < 120000)
    {
        return 9;
    }
    else 
    	return 10;
}
exports.createToken = function createToken()
{
	var token = uuid.v4();
	token = token.split('-').join('');
	return token;
}
exports.getGoodReview = function(var)
{
    if(var == 0)
    {
        return {goldNum:80};
    }
    else if(var == 10)
    {
        return {goldNum:130};
    }
    else if(var == 30)
    {
        return {goldNum:230};
    }
    else if(var == 50)
    {
        return {goldNum:330};
    }
    else if(var < 100)
    {
        return {goldNum:30};
    }
    else if(var == 100)
    {
        return {goldNum:530};
    }
    else if(var < 300)
    {
        return {goldNum:50};
    }
    else if(var < 500)
    {
        return {goldNum:100};
    }
    else if(var < 1000)
    {
        return {goldNum:150, goldMax:50};
    }
    else if(var < 2000)
    {
        return {goldNum:200, goldMax:100};
    }
    else if(var < 5000)
    {
        return {goldNum:400, goldMax:200};
    }
    else if(var < 10000)
    {
        return {goldNum:500, goldMax:500};
    }
    else if(var < 20000)
    {
        return {goldNum:700, goldMax:700};
    }
    else if(var < 50000)
    {
        return {goldNum:1000, goldMax:1000};
    }
};

exports.getBadReview = function(var)
{
    if(var < 10)
    {
        return {goldNum:-50};
    }
    else if(var < 50)
    {
        return {goldNum:-100};
    }
    else if(var < 100)
    {
        return {goldNum:-200};
    }
    else if(var < 200)
    {
        return {goldNum:-400};
    }
    else if(var < 500)
    {
        return {goldNum:-500}
    }
    else if(var < 1000)
    {
        return {goldNum:-1000};
    }
    else if(var < 10000)
    {
        return {goldNum:-2000};
    }
    else
    {
        return {goldNum: -5000};
    }
}