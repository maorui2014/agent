import React, { useState, useContext } from "react"
import AppContext from "../../AppContext"
import "./index.scss"

const { remote, ipcRenderer } = window.require("electron")
const win = remote.getCurrentWindow()

export default function TopBar() {
	const [isMaximize, setIsMaximize] = useState(false)
	const [state, setState] = useContext(AppContext)

	ipcRenderer.on("maximize", (event, _isMaximize) => {
		win.setResizable(!_isMaximize)
		setIsMaximize(_isMaximize)
		// dispatch({ isMaximize: _isMaximize })
	})

	function doMaximize() {
		if (isMaximize) {
			win.unmaximize()
		} else {
			win.maximize()
		}

		win.setResizable(isMaximize)
		// dispatch({ isMaximize: isMaximize })
		setIsMaximize(!isMaximize)
	}

	return (
		<div className="window-controls-container">
			<button onClick={ () => setState({ name: "bbbb" }) }>click</button>
			<div className="window-icon-bg" onClick={ () => win.minimize() }>
				<div className="window-icon window-minimize"></div>
			</div>
			<div className="window-icon-bg" onClick={ doMaximize }>
				<div className={ `window-icon window-${ isMaximize ? "restore" : "maximize" }` }></div>
			</div>
			<div className="window-icon-bg window-close-bg" onClick={ () => win.close() }>
				<div className="window-icon window-close"></div>
			</div>
		</div>
	)
}