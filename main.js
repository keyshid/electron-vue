// const { app, BrowserWindow, Menu } = require('electron');
// const fs = require('fs')

// const url = require("url");
// const path = require("path");

// let pathname = path.join(__dirname, "files");







// let mainWindow


// function createWindow() {
//     mainWindow = new BrowserWindow({
//         width: 800,
//         height: 600,
//         webPreferences: {
//             nodeIntegration: true
//         }

//     })


//     // var menu = Menu.buildFromTemplate([
//     //     {
//     //         label: 'edit',
//     //         submenu: [
//     //             {
//     //                 label: 'refresh'
//     //             }
//     //         ],

//     //         label: 'Menu',
//     //         submenu: [
//     //             // {
//     //             //     label: 'Home',
//     //             //     click() {
//     //             //         console.log("Navigate to Home");
//     //             //         mainWindow.webContents.send('goToHome');

//     //             //     }

//     //             // },

//     //             {
//     //                 label: 'About',

//     //                 click() {

//     //                     mainWindow.webContents.send('goToAbout');
//     //                 }
//     //             },
//     //         ]
//     //     }
//     // ])
//     // Menu.setApplicationMenu(menu);


//     mainWindow.loadURL(
//         url.format({
//             pathname: path.join(__dirname, `./dist/index.html`),
//             protocol: "file:",
//             slashes: true
//         })
//     );
//     mainWindow.on('closed', function () {
//         mainWindow = null
//     })
// }
// console.log(app);
// app.on('ready', createWindow)

// app.on('window-all-closed', function () {
//     if (process.platform !== 'darwin') app.quit()
// })

// app.on('activate', function () {
//     if (mainWindow === null) createWindow()
// })