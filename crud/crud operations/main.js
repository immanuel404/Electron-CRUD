console.log('main process working');


const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");
let win;

function createWindow () {

    let win = new BrowserWindow({
        webPreferences: {
            nativeWindowOpen: true,
            nodeIntegration: true
        },
    });
    
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'one.html'),
        protocol: 'file:',
        slashes: true
    }));

    win.on('closed', () => {
        win = null
    });
}

app.on('ready', createWindow);