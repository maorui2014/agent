import React from "react"
import { Typography, Button, Tag } from "antd"

import "./index.scss"

const { Title } = Typography
const { Group: ButtonGroup } = Button

export default function RoomSource() {
	return (
		<div className="page-container">
			<Title level={ 4 }><span className="normal-text">房源管理</span></Title>
			<div className="tool-button-bar">
				<Button type="primary" icon="plus">新增</Button>
				<Button type="danger" style={ { marginLeft: "10px" } } icon="delete">删除</Button>
				<ButtonGroup style={ { marginLeft: "10px" } }>
					<Button icon="check">签约成交</Button>
					<Button icon="edit">修改签约</Button>
					<Button icon="search">签约查询</Button>
					<Button icon="file">合同文件</Button>
				</ButtonGroup>
			</div>
			<div className="search-bar">
				<Tag><a href="/">跟进房源</a></Tag>
				<Tag><a href="/">出租</a></Tag>
				<Tag><a href="/">出售</a></Tag>
				<Tag><a href="/">成交</a></Tag>
				<Tag><a href="/">失效</a></Tag>
				<Tag><a href="/">全部</a></Tag>
			</div>
			<div className="main-data-area">

			</div>
		</div>
	)
}