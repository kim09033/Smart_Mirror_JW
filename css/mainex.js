'use strict';
const electron = require('electron');
// Module to control application life.
const app = electron.app;
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow () {
  // Create the browser window.
  var browserWindowOptions = {width: 800, height: 600, icon: 'favicon.ico' , kiosk:true, autoHideMenuBar:true, darkTheme:true};
  mainWindow = new BrowserWindow(browserWindowOptions); //{width: 800, height: 600}

  // and load the index.html of the app.
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  // Open the DevTools.
  //mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});

/* WEB SERVER */
var http = require('http');
var express = require('express');
var smartmirror = express();
smartmirror.use(express.static(__dirname+"/public"));

http.createServer(smartmirror).listen(9090,function() {
	console.log('server on 9090...');
});
var exec_video = require('child process').exec;
 var exec_photo = require('child process').exec;
 var video_path = __dirname+"/public/video/" + Date.now() + '.h264';
var phote_path = __dirname+"/public/phote/" + Date.now() + '.jpg';
 var cmd_video = 'raspivid -o' + video_path + '-t 4000';
 var cmd_phote = 'raspistill -o' + phote_path;
 exec_video(cmd_video, function(errror, stdout, stderr) {
        		console.log('Video Saved : ', video.path);
 				require('./mailer').sendEmail(video_path);

});
 /*
exec_photo(cmd_photo, function(errror, stdout, stderr) {
        		console.log('Phote Saved : ', photo.path);
 				require('./mailer').sendEmail(photo_path);

});
*/

function exit(){
			process.exit();
}


/* GET 통신을 위한  */
var url = require('url');
var querystring = require('querystring');


/* Electron을 위한 전역 객체 */
var events = require('events');
global.sender = new events.EventEmitter();

/* 스마트 미러 <-> Android APP 음성 명령 통신 */
smartmirror.get('/android.do',function(req,res){
	console.log(req.url);
	var query = url.parse(req.url, true).query;
	console.log(query);
	global.sender.emit('android',query);
	res.send("<h1>Android Command OK</h1>");
});

/* 스마트 미러 <-> Android APP Notification 통신 */
smartmirror.get('/noti.do',function(req,res){
	console.log(req.url);
	var query = url.parse(req.url, true).query;
	console.log(query);
	global.sender.emit('data',query);
	res.send("<h1>Noti OK</h1>");
});


