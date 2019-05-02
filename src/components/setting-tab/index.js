import React from "react"
import { Menu, Dropdown, Icon } from "antd"

const { Item } = Menu

export default function SettingTab(props) {
	const menus = (
		<Menu>
			<Item key="add" onClick={ () => console.log("what the") }><Icon type="plus-circle" />添加当前筛选条件</Item>
			<Item key="setting"><Icon type="setting" />管理标签页...</Item>
		</Menu>
	)

	return (
		<Dropdown overlay={ menus }>
			<Icon type="ellipsis" />
		</Dropdown>
	)
}