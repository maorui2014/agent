import React from "react"
import { Typography, Button } from "antd"

import "./index.scss"

const { Title } = Typography

export default function RoomSource() {
	return (
		<div className="page-container">
			<Title level={ 4 }><span className="normal-text">房源管理</span></Title>
			<ul className="tool-button-bar">
				<li><Button type="ghost" icon="plus">新增房源</Button></li>
				<li><Button type="danger" icon="delete">删除</Button></li>
			</ul>
			{/* <div className="search-bar">
				<Tag><a href="/">跟进房源</a></Tag>
				<Tag><a href="/">出租</a></Tag>
				<Tag><a href="/">出售</a></Tag>
				<Tag><a href="/">成交</a></Tag>
				<Tag><a href="/">失效</a></Tag>
				<Tag><a href="/">全部</a></Tag>
			</div> */}
			<div className="main-data-area">
				
			</div>
		</div>
	)
}