import React, { useEffect, useState } from "react"
import "./index.scss"

const { remote, ipcRenderer } = window.require("electron")
const win = remote.getCurrentWindow()

export default function TopBar() {
	const [isMaximize, setIsMaximize] = useState(false)

	useEffect(() => {
		const onMaximize = (event, isMaximize) => setIsMaximize(isMaximize)
		ipcRenderer.on("maximize", onMaximize)
		return () => ipcRenderer.removeListener("maximize", onMaximize)
	}, [])

	function doMaximize() {
		isMaximize ? win.unmaximize() : win.maximize()
		setIsMaximize(!isMaximize)
	}

	return (
		<div className="topbar-container">
			<div class="titlebar-drag-region" />
			<div class="window-appicon" />
			<div class="window-title">君诚地产</div>
			<div className="window-controls-container">
				<div className="window-icon-bg" onClick={ () => win.minimize() }>
					<div className="window-icon window-minimize" />
				</div>
				<div className="window-icon-bg" onClick={ doMaximize }>
					<div className={ `window-icon window-${isMaximize ? "restore" : "maximize"}` } />
				</div>
				<div className="window-icon-bg window-close-bg" onClick={ () => win.close() }>
					<div className="window-icon window-close" />
				</div>
			</div>
		</div>
	)
}