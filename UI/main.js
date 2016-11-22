var _a = require("electron"), app = _a.app, BrowserWindow = _a.BrowserWindow;
var win;
var createWindow = function () {
    win = new BrowserWindow({ width: 800, height: 900 });
    win.loadURL("file://" + __dirname + "/index.html");
    win.on("closed", function () {
        win = null;
    });
};
app.on("ready", createWindow);
app.on("window-all-closed", function () {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
app.on("activate", function () {
    if (win === null)
        createWindow();
});
//# sourceMappingURL=main.js.map