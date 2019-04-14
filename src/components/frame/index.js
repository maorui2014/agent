import React, { useEffect, useState } from "react"
import { Route, Switch, Link } from "react-router-dom"
import classNames from "classnames"

import RoomSource from "../room-source"
import Client from "../client"
import Deal from "../deal"

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

	function routeLinkProps(linkType) {
		return {
			className: classNames(`main-menu ${linkType}-management`, { selection: curSelection === linkType }),
			onClick: () => setCurSelection(linkType),
			to: `/${linkType}`
		}
	}

	return (
		<div className="main-container">
			<div className="topbar-container">
				<div className="titlebar-drag-region" />
				<div className="window-appicon" onDoubleClick={ () => win.close() } />
				<div className="window-title">中原地产 [服务端]</div>
				<div className="control-button use-information" />
				<div className="control-button settings" />
				<div className="control-button help" />
				<div className="control-button window-minimize" onClick={ () => win.minimize() } />
				<div className={ `control-button window-${isMaximize ? "restore" : "maximize"}` } onClick={ doMaximize } />
				<div className="control-button window-close" onClick={ () => win.close() } />
			</div>
			<div className="content-container-wrapper">
				<div className="sider-container">
					<Link { ...routeLinkProps("room-source") }>
						<div className="mgt-icon" />
						<span>房源管理</span>
					</Link>
					<Link { ...routeLinkProps("client") }>
						<div className="mgt-icon" />
						<span>客户管理</span>
					</Link>
					<Link { ...routeLinkProps("deal") }>
						<div className="mgt-icon" />
						<span>交易管理</span>
					</Link>
				</div>
				<div className="content-container">
					<Switch>
						<Route path="/client" component={ Client } />
						<Route path="/deal" component={ Deal } />
						<Route path={ ["/", "/room-source"] } exact component={ RoomSource } />
					</Switch>
				</div>
			</div>
		</div>
	)
}