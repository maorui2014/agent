import React from "react"
import { Menu, Dropdown, Icon, Avatar } from "antd"

const { Item, Divider } = Menu

export default function UserInfoButton(props) {
	const menus = (
		<Menu>
			<li className="user-profile">
				<Avatar size="large" icon="user" />
				<div className="user-name">
					<header>李刚</header>
					<span>销售员</span>
				</div>
			</li>
			<Divider />
			<Item key="profile"><Icon type="user" />个人中心</Item>
			<Item key="buy"><Icon type="dollar" />购买软件</Item>
			<Divider />
			<Item key="logout" className="logout-button"><Icon type="logout" />退出登录</Item>
		</Menu>
	)

	return (
		<Dropdown overlay={ menus }>
			<div className="control-button use-information" />
		</Dropdown>
	)
}