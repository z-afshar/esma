angular.module('starter.services', [])

.factory('Esma', function() {
  // Might use a resource here that returns a JSON array
  var esma =[
{dsc: "   (پهلوي) 1- آبها؛ 2- (در گاه شماري) ماه هشتم از سال شمسي؛ 3- (در قديم) نام روز دهم از هر ماه شمسي؛ 4- (در آیین زرتشتی) نام فرشته‌ي موكل آب و تدبير امور مسائل آبان ماه.", "img": "img/girl.png", "sex": "دختر", ava: "   /ābān/", esm: "   آبان", "secs_code": 1, id: "000102"}
,
{dsc: "   (آبان + ا (پسوند نسبت))، منسوب به آبان، ، آبان.", "img": "img/girl.png", "sex": "دختر", ava: "   /ābānā/", esm: "   آبانا", "secs_code": 1, id: "000103"}
,
{dsc: "   1- دختر آبان، + 1 آبان؛ 2- (اَعلام) نام يكي از زنان داريوش سوم.", "img": "img/girl.png", "sex": "دختر", ava: "   /ābān doxt/", esm: "   آبان دخت", "secs_code": 1, id: "000104"}
,
{dsc: "   (اَعلام) (= آپتین و آتبین)، ( آتبين.", "img": "img/girl.png", "sex": "پسر", ava: "   /ābtin/", esm: "   آبتين", "secs_code": 1, id: "000105"}
,
{dsc: "   1- داراي طبيعت آب؛ 2- آينه، آيينه.", "img": "img/girl.png", "sex": "دختر", ava: "   /ābgin/", esm: "   آبگين", "secs_code": 1, id: "000106"}
,
{dsc: "   1- شيشه، زجاج، بلور، آينه؛ 2- (در قديم) ظرف شيشه‌اي يا بلوري به ويژه جام شراب.", "img": "img/girl.png", "sex": "دختر", ava: "   /ābgine/", esm: "   آبگينه", "secs_code": 1, id: "000107"}
,
{dsc: "   1- (يوناني) چوبي سياهرنگ و سخت و سنگين (گران بها)؛ 2- (در گياهي) درختي هم خانواده با خرمالو كه بيشتر در مناطق گرمسيري آسيا و آفريقا مي‌رويَد؛ شيز.", "img": "img/girl.png", "sex": "دختر", ava: "   /ābnus/", esm: "   آبنوس", "secs_code": 1, id: "000108"}
,
{dsc: "   به رنگ آب، همانند آب.", "img": "img/girl.png", "sex": "دختر", ava: "   /ābin/", esm: "   آبين", "secs_code": 1, id: "000109"}
,
{dsc: "   همانند آب، به روشني و درخشندگي آب.", "img": "img/girl.png", "sex": "دختر", ava: "   /ābine/", esm: "   آبينه", "secs_code": 1, id: "000110"}
,
{dsc: "   (اَعلام) نام دختر اردشير دوم و زن فرناباذ والی ایالت هلّس پونت (فریگیه‌ي سفلی).", "img": "img/girl.png", "sex": "دختر", ava: "   /āpām /", esm: "   آپام", "secs_code": 1, id: "000111"}
,
{dsc: "   (= آپام)، ، آپام.", "img": "img/girl.png", "sex": "دختر", ava: "   /āpāmā/", esm: "   آپاما", "secs_code": 1, id: "000112"}
,
{dsc: "   1- خوش رنگ؛ 2- (اَعلام) نام دختر «شپي تارمن» سردار ايراني كه سلكوس به فرمان اسكندر با وي (آپامه) ازدواج كرد.", "img": "img/girl.png", "sex": "دختر", ava: "   /āpāme/", esm: "   آپامه", "secs_code": 1, id: "000113"}
];

  // Some fake testing data
  var chats = [{
    id: 0,
    esm: 'Ben Sparrow',
    dsc: 'You on your way?',
    img: 'img/ben.png'
  }, {
    id: 1,
    esm: 'Max Lynx',
    dsc: 'Hey, it\'s me',
    img: 'img/max.png'
  }, {
    id: 2,
    esm: 'Adam Bradleyson',
    dsc: 'I should buy a boat',
    img: 'img/adam.jpg'
  }, {
    id: 3,
    esm: 'Perry Governor',
    dsc: 'Look at my mukluks!',
    img: 'img/perry.png'
  }, {
    id: 4,
    esm: 'Mike Harrington',
    dsc: 'This is wicked good ice cream.',
    img: 'img/mike.png'
  }];

    var __all = [chats,esma];
    var __addkeymapping = function(){
  	  for (var i = 0, len = __all.length; i < len; i++){
    		var __arr = __all[i];
    		for (var j = 0; j< __arr.length; j++){
      			var code = __arr[j];
       			code.keymap = mapper.farsi_mapper(code.name);
  		  }
  	  }
    }
    __addkeymapping();  

  return {
    all: function() {
      return esma;
    },
    remove: function(esm) {
      esma.splice(esma.indexOf(esm), 1);
    },
    get: function(esmId) {
      for (var i = 0; i < esma.length; i++) {
        if (esma[i].id === esmId) {
          return esma[i];
        }
      }
      return null;
    }
  };
});
