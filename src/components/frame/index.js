import React, { useEffect, useState } from "react"
import { Route, Switch, Link } from "react-router-dom"
import { Icon, LocaleProvider } from "antd"
import classNames from "classnames"

import zhCN from "antd/lib/locale-provider/zh_CN"
import RoomSource from "../room-source"
import Client from "../client"
import Team from "../team"
import SearchBar from "../search-bar"
import HelpButton from "../help-button"
import UserInfoButton from "../user-info-button"

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

	useEffect(() => {
		document.title = "中原地产 [服务端]"
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
		<LocaleProvider locale={ zhCN }>
			<div className="main-container">
				<div className="topbar-container">
					<div className="titlebar-drag-region" />
					<div className="window-appicon" onDoubleClick={ () => win.close() } />
					<div className="window-title">中原地产 [服务端]</div>
					<SearchBar />
					<UserInfoButton />
					<div className="control-button settings" />
					<HelpButton />
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
						<Link { ...routeLinkProps("team") }>
							<div className="mgt-icon"><Icon type="team" /></div>
							<span>团队管理</span>
						</Link>
					</div>
					<div className="content-container">
						<Switch>
							<Route path="/client" component={ Client } />
							<Route path="/team" component={ Team } />
							<Route path={ ["/", "/room-source"] } exact component={ RoomSource } />
						</Switch>
					</div>
				</div>
			</div>
		</LocaleProvider>
	)
}