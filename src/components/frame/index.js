import React from "react"
import TopBar from "./topbar"
import SideBar from "./sidebar"
import Content from "./content"

import "./index.scss"

export default function Frame() {
	return (
		<div className="main-container">
			<div className="topbar-container"><TopBar /></div>
			<div className="content-container-wrapper">
				<div className="sider-container"><SideBar /></div>
				<div className="content-container"><Content /></div>
			</div>
		</div>
	)
}