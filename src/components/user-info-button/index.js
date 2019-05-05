import React from "react"
import { Menu, Button, Dropdown, Icon, Avatar } from "antd"

const { Item, Divider } = Menu

export default function UserInfoButton(props) {
	const menus = (
		<Menu>
			<li className="user-profile">
				<Avatar size={ 64 } icon="user" />
				<div className="user-name">
					<header>李刚</header> <span>(销售员)</span>
					<div class="buy"><Button type="primary" icon="dollar">购买/续费软件</Button></div>
				</div>
			</li>
			<Divider />
			<Item key="profile"><Icon type="user" />个人中心</Item>
			<Item key="logout" className="logout-button"><Icon type="logout" />退出登录</Item>
		</Menu>
	)

	return (
		<Dropdown overlay={ menus }>
			<div className="control-button use-information" />
		</Dropdown>
	)
}