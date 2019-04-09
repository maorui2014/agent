import React, { useEffect, useState } from "react"
import { Route, Switch, Link } from "react-router-dom"
import classNames from "classnames"

import RoomSource from "../room-source"
import Client from "../client"
import "./index.scss"

const { remote, ipcRenderer } = window.require("electron")
const win = remote.getCurrentWindow()

export default function Frame() {
	const [isMaximize, setIsMaximize] = useState(false)
	const [curSelection, setCurSelection] = useState("room-source")

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
		<div className="main-container">
			<div className="topbar-container">
				<div className="titlebar-drag-region" />
				<div className="window-appicon" onDoubleClick={ () => win.close() } />
				<div className="window-title">中原地产 [服务端]</div>
				<div className="control-button use-information" />
				<div className="control-button settings" />
				<div className="control-button window-minimize" onClick={ () => win.minimize() } />
				<div className={ `control-button window-${isMaximize ? "restore" : "maximize"}` } onClick={ doMaximize } />
				<div className="control-button window-close" onClick={ () => win.close() } />
			</div>
			<div className="content-container-wrapper">
				<div className="sider-container">
					<Link className={ classNames("main-menu room-source-management", { selection: curSelection == "room-source" }) }
						  onClick={ () => setCurSelection("room-source") }
						  to="/room-source"
					>
						<div className="mgt-icon" />
						<span>房源管理</span>
					</Link>
					<Link className={ classNames("main-menu client-management", { selection: curSelection == "client" }) }
					      onClick={ () => setCurSelection("client") }
					      to="/client"
					>
						<div className="mgt-icon" />
						<span>客户管理</span>
					</Link>
				</div>
				<div className="content-container">
					<Switch>
						<Route path="/client" component={ Client } />
						<Route path={ ["/", "/room-source"] } component={ RoomSource } />
					</Switch>
				</div>
			</div>
		</div>
	)
}