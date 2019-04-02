import React, { useContext } from "react"
import classNames from "classnames"
import TopBar from "./topbar"
import SideBar from "./sidebar"
import Content from "./content"
import { AppContext } from "../AppContext"

import "./index.scss"

export default function Frame() {
	const [config] = useContext(AppContext)

	return (
		<div className={ classNames("main-container", { "maximize": config.isMaximize }) }>
			<div className="topbar-container"><TopBar /></div>
			<div className="content-container-wrapper">
				<div className="sider-container"><SideBar /></div>
				<div className="content-container"><Content /></div>
			</div>
		</div>
	)
}