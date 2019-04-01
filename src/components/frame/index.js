import React, { useContext } from "react"
import classNames from "classnames"
import TopBar from "./topbar"
import SideBar from "./sidebar"
import Content from "./content"
import FrameContext from "./context"
import "./index.scss"

export default function Frame() {
	const { isMaximize } = useContext(FrameContext)

	return (
		<div className={ classNames("main-container", { "maximize": isMaximize }) }>
			<div className="topbar-container"><TopBar /></div>
			<div className="content-container-wrapper">
				<div className="sider-container"><SideBar /></div>
				<div className="content-container"><Content /></div>
			</div>
		</div>
	)
}