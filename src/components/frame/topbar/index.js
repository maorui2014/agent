import React, { useEffect, useContext } from "react"
import { AppContext } from "../../AppContext"
import "./index.scss"

const { remote, ipcRenderer } = window.require("electron")
const win = remote.getCurrentWindow()

export default function TopBar() {
	const [config, setConfig] = useContext(AppContext)

	useEffect(() => {
		function onMaximize(event, isMaximize) {
			win.setResizable(!isMaximize)
			setConfig({ ...config, isMaximize: isMaximize })
		}

		ipcRenderer.on("maximize", onMaximize)

		return () => ipcRenderer.removeListener("maximize", onMaximize)
	}, [])

	function doMaximize() {
		if (config.isMaximize) {
			win.unmaximize()
		} else {
			win.maximize()
		}

		win.setResizable(config.isMaximize)
		setConfig({ ...config, isMaximize: !config.isMaximize })
	}

	return (
		<div className="window-controls-container">
			<div className="window-icon-bg" onClick={ () => win.minimize() }>
				<div className="window-icon window-minimize"></div>
			</div>
			<div className="window-icon-bg" onClick={ doMaximize }>
				<div className={ `window-icon window-${config.isMaximize ? "restore" : "maximize"}` }></div>
			</div>
			<div className="window-icon-bg window-close-bg" onClick={ () => win.close() }>
				<div className="window-icon window-close"></div>
			</div>
		</div>
	)
}