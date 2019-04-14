import React from "react"
import { Typography, Tag, Icon } from "antd"

import "./index.scss"

const { Title } = Typography

export default function RoomSource() {
	return (
		<div className="page-container">
			<Title level={ 4 }><span className="normal-text">房源管理</span></Title>
			<div className="tool-button-bar">
				<Icon type="plus" title="新增" style={ { marginRight: "10px" } } />
				<Icon type="delete" theme="twoTone" title="删除" style={ { marginRight: "10px" } } />
				<Icon type="check" theme="twoTone" title="签约成交" style={ { marginRight: "10px" } } />
				<Icon type="edit" theme="twoTone" title="修改签约" style={ { marginRight: "10px" } } />
				<Icon type="search" theme="twoTone" title="签约查询" style={ { marginRight: "10px" } } />
				<Icon type="file" theme="twoTone" title="合同文件" style={ { marginRight: "10px" } } />
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