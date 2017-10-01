const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let win;

function createWindow(){
  win = new BrowserWindow({width: 1280, height: 720, icon: __dirname+'/img/icon.png', frame: false});
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'main.html'),
    protocol: 'file:',
    slashes: true
  }));
  win.on('closed', () => {
    win = null;
  });
  //win.openDevTools();
  //win.maximize();
}

app.on('ready', createWindow);

app.on('window-all-closed', () =>{
  if(process.platform !== 'win'){
    app.quit();
  }
});
