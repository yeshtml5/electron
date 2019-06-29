const {app,BrowserWindow} = require('electron');

let mainWindow;

function onClosed(){
    mainWindow=null;
}

app.on('window-all-closed',()=>{
    app.quit()
})

app.on('ready',()=>{
    mainWindow=new BrowserWindow({
        width:640,
        height:480
    })

    mainWindow.loadURL(`file://${__dirname}/index.html`);
    mainWindow.on('closed',onClosed)
})