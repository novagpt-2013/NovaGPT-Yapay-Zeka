// main.js
const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 920,
    height: 640,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  // index.html dosyasını yükle
  win.loadFile(path.join(__dirname, 'index.html'));

  // İsteğe bağlı: Geliştirici araçlarını açmak için
  // win.webContents.openDevTools();
}

// Uygulama hazır olduğunda pencereyi aç
app.whenReady().then(createWindow);

// Tüm pencereler kapandığında uygulamayı kapat
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// MacOS için pencereyi yeniden açma
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
