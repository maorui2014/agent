const electron = require("electron")
const { app, BrowserWindow } = electron

const path = require("path")
const url = require("url")
const packageJson = require("./package.json")

let mainWindow = null

function createWindow() {
	mainWindow = new BrowserWindow({
		frame: false,
		minWidth: 400,
		show: false,
		minHeight: 300,
		transparent: true,
		webPreferences: {
			nodeIntegration: true
		}
	})

	mainWindow.setMenu(null)

	mainWindow.on("closed", () => mainWindow = null)
	mainWindow.on("ready-to-show", () => mainWindow.show())
	mainWindow.on("maximize", () => mainWindow.webContents.send("maximize", true))
	mainWindow.on("unmaximize", () => mainWindow.webContents.send("maximize", false))

	if (packageJson.env !== "DEV") {
		mainWindow.loadURL(url.format({
			pathname: path.join(__dirname, "./build/index.html"),
			protocol: "file:",
			slashes: true
		}))
	} else {
		mainWindow.loadURL("http://localhost:3000/")
		mainWindow.webContents.openDevTools()
	}
}

app.on("ready", createWindow)

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit()
	}
})

app.on("activate", () => {
	if (mainWindow === null) {
		createWindow()
	}
})