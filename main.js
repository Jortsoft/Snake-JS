const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
      width: 500,
      height: 500
    })
    win.setBackgroundColor('black')
    win.loadFile('./dist/index.html')
  }
  app.whenReady().then(() => {
    createWindow()
  })
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })