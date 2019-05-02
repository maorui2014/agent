import React from "react"
import { Menu, Dropdown, Icon } from "antd"

const { Item, Divider } = Menu

export default function HelpButton(props) {
	const menus = (
		<Menu>
			<Item key="add"><Icon type="question" />问题反馈</Item>
			<Item key="doc"><Icon type="book" />使用文档</Item>
			<Item key="official"><Icon type="link" />官方网站</Item>
			<Divider />
			<Item key="dev"><Icon type="deployment-unit" />定制开发</Item>
			<Divider />
			<Item key="sync"><Icon type="sync" />检查更新...</Item>
			<Divider />
			<Item key="about"><Icon type="nothing" />关于...</Item>
		</Menu>
	)

	return (
		<Dropdown overlay={ menus }>
			<div className="control-button help" />
		</Dropdown>
	)
}