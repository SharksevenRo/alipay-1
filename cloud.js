var AV = require('leanengine');

/**
 * 一个简单的云代码方法
 */
//获取服务器时间
AV.Cloud.define('getServerTime', function(request, response) 
{
  response.success(new Date());
});
//支付二次检测
AV.Cloud.define('payCheck', function(request, response)
{
  AV.Cloud.httpRequest({
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  url: request.params.url,
  body: request.params.receiptdata,
  success: function(httpResponse) {
    console.log('Request succ ' + httpResponse.text);
    response.success(httpResponse.text);
  },
  error: function(httpResponse) {
    console.error('Request failed with response code ' + httpResponse.status);
  }
});
});


AV.Cloud.define('clearQD', function(request, response) {
// 知道 objectId，创建 AVObject
 var post = AV.Object.createWithoutData('qianDaoInfo', '556347fde4b0fa5c84ebae71');
// 更改属性
 post.set('qdIDs', '');
 post.set('goldGet', '');
 post.set('goldmaxGet', '');
 post.set('likeGet', '');
 post.set('qdTotal', 0);
// 保存
 post.save();

// 知道 objectId，创建 AVObject
 var post = AV.Object.createWithoutData('chatUsers', '563daf0560b25b79e633239b');
// 更改属性
 post.set('dailylike', 0);
// 保存
 post.save();
});


AV.Cloud.define('closeSoc', function(request, response) 
{
  // 知道 objectId，创建 AVObject
	var post1 = AV.Object.createWithoutData('groupInfo','55e6f7c060b2fe714836657b');
// 更改属性
post1.set('bshow', 0);
// 保存
post1.save();

// 知道 objectId，创建 AVObject
var post2 = AV.Object.createWithoutData('groupInfo', '55e6f7a5ddb255ed2dfa6566');
// 更改属性
post2.set('bshow', 0);
// 保存
post2.save();

// 知道 objectId，创建 AVObject
var post3 = AV.Object.createWithoutData('groupInfo', '55e6fab660b2fe714836c969');
// 更改属性
post3.set('bshow', 0);
// 保存
post3.save();


// 知道 objectId，创建 AVObject
var post4 = AV.Object.createWithoutData('groupInfo', '55e6f7b160b291d78509b667');
// 更改属性
post4.set('bshow', 0);
// 保存
post4.save();

// 知道 objectId，创建 AVObject
var post4 = AV.Object.createWithoutData('groupInfo', '5660ea4560b2febe2f786bdd');
// 更改属性
post4.set('bshow', 0);
// 保存
post4.save();
});

AV.Cloud.define('openSo', function(request, response) 
{
// 知道 objectId，创建 AVObject
var post1 = AV.Object.createWithoutData('groupInfo', '55e6f7c060b2fe714836657b');
// 更改属性
post1.set('bshow', 1);
// 保存
post1.save();

// 知道 objectId，创建 AVObject
var post2 = AV.Object.createWithoutData('groupInfo', '55e6f7a5ddb255ed2dfa6566');
// 更改属性
post2.set('bshow', 1);
// 保存
post2.save();

// 知道 objectId，创建 AVObject
var post3 = AV.Object.createWithoutData('groupInfo', '55e6fab660b2fe714836c969');
// 更改属性
post3.set('bshow', 1);
// 保存
post3.save();


// 知道 objectId，创建 AVObject
var post4 = AV.Object.createWithoutData('groupInfo', '55e6f7b160b291d78509b667');
// 更改属性
post4.set('bshow', 1);
// 保存
post4.save();

// 知道 objectId，创建 AVObject
var post4 = AV.Object.createWithoutData('groupInfo', '5660ea4560b2febe2f786bdd');
// 更改属性
post4.set('bshow', 1);
// 保存
post4.save();
});

AV.Cloud.define('destroyAnonymous', function(request, response) {
console.log('start close anonymous ');
// 知道 objectId，创建 AVObject
var post1 = AV.Object.createWithoutData('groupInfo', '5677698460b2260ee44a6ae8');
// 更改属性
post1.set('bCanCreate', 0);
// 保存
post1.save();
});

AV.Cloud.define('openAnonymous', function(request, response) {
// 知道 objectId，创建 AVObject
var post1 = AV.Object.createWithoutData('groupInfo', '5677698460b2260ee44a6ae8');
// 更改属性
post1.set('bCanCreate',1);
// 保存
post1.save();
});


module.exports = AV.Cloud;
