const { app,BrowserWindow } = require('electron');


function createFakeWindow() {
    const win = new BrowserWindow ({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });


    win.loadFile('index.html');
}


app.whenReady().then(createFakeWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});


app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createFakeWindow();
    }
});
