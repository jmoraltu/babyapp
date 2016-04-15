// place our admob ad unit id here
var admobid = {};
if( /(android)/i.test(navigator.userAgent) ) {
  admobid = { // for Android
    banner: 'ca-app-pub-6869992474017983/9375997553',
    interstitial: 'ca-app-pub-6869992474017983/1657046752'
  };
} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
  admobid = { // for iOS
    banner: 'ca-app-pub-6869992474017983/4806197152',
    interstitial: 'ca-app-pub-6869992474017983/7563979554'
  };
} else {
  admobid = { // for Windows Phone
    banner: 'ca-app-pub-6869992474017983/8878394753',
    interstitial: 'ca-app-pub-6869992474017983/1355127956'
  };
}

if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) {
  document.addEventListener('deviceready', onDeviceReady, false);
} else {
  //initAdMob();
  initPushNotification();
}

function initPushNotification(){
  var notificationOpenedCallback = function(jsonData) {
    console.log('didReceiveRemoteNotificationCallBack: ' + JSON.stringify(jsonData));
  };

  window.plugins.OneSignal.init("078b1984-7ecb-4e4e-8e03-9030c15a874a",
    {googleProjectNumber: "824214647219"},
    notificationOpenedCallback);

  // Show an alert box if a notification comes in when the user is in your app.
  window.plugins.OneSignal.enableInAppAlertNotification(true);
}

function initAdMob() {
  if (! AdMob ) { alert( 'admob plugin not ready' ); return; }

  AdMob.createBanner( {
    adId: admobid.banner,
    isTesting: true,
    overlap: false,
    offsetTopBar: false,
    position: AdMob.AD_POSITION.BOTTOM_CENTER,
    bgColor: 'black'
  } );

  AdMob.prepareInterstitial({
    adId: admobid.interstitial,
    autoShow: true
  });
}

function onDeviceReady() {
  if (!AdMob) {
    alert('admob plugin not ready');
    return;
  }
  console.log('onDeviceReady......');
  //initAdMob();
  initPushNotification();
  //AdMob.showInterstitial();
}

function domReadyLoaded(){
  //document.addEventListener("deviceready", onDeviceReady, false);
}


/*
function initAd(){
  AdMob.setOptions({
    adSize: 'SMART_BANNER',
    // width: integer, // valid when set adSize 'CUSTOM'
    // height: integer, // valid when set adSize 'CUSTOM'
    position: admobid.AD_POSITION.BOTTOM_CENTER,
    // offsetTopBar: false, // avoid overlapped by status bar, for iOS7+
    bgColor: 'black', // color name, or '#RRGGBB'
    // x: integer,    // valid when set position to 0 / POS_XY
    // y: integer,    // valid when set position to 0 / POS_XY
    isTesting: true, // set to true, to receiving test ad for testing purpose
    autoShow: false // auto show interstitial ad when loaded, set to false if prepare/show
  })
};*/


/*
 function createSelectedBanner(){
 AdMob.createBanner({
 adId: admobid.banner,
 adSize: admobid.AD_SIZE.SMART_BANNER,
 autoShow: false,
 position: admobid.AD_POSITION.BOTTOM_CENTER
 });
 }*/
