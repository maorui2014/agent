import React from "react"
import { Tabs, Icon, Table } from "antd"

import "./index.scss"

const { TabPane } = Tabs

function AdditionalOperation() {
	return (
		<div className="extra-contents">
			<span className="flat-button"><Icon type="plus" /> <span>新增房源</span></span>
			<span className="flat-button"><Icon type="plus-square" /> <span>批量新增</span></span>
		</div>
	)
}

export default function RoomSource() {
	const tabs = [
		{ key: "follow-up", name: "房源跟进" },
		{ key: "sell", name: "出售" },
		{ key: "rent-out", name: "出租" },
		{ key: "deal", name: "成交" },
		{ key: "disabled", name: "失效" },
		{ key: "all", name: "全部" }
	]

	const columns = [
		{ dataIndex: "flag", key: "flag", title: "标记", width: 50 },
		{ dataIndex: "no", key: "no", title: "房源编号", width: 100 },
		{ dataIndex: "signDate", key: "signDate", title: "登记日期", width: 100 },
		{ dataIndex: "status", key: "status", title: "当前状态", width: 100 },
		{ dataIndex: "rentalType", key: "rentalType", title: "租售类型", width: 100 },
		{ dataIndex: "counselor", key: "counselor", title: "置业顾问", width: 100 },
		{ dataIndex: "houseType", key: "houseType", title: "房屋类型", width: 100 },
		{ dataIndex: "unitType", key: "unitType", title: "户型", width: 100 },
		{ dataIndex: "area", key: "area", title: "房本面积", width: 100 },
		{ dataIndex: "interiorFinish", key: "interiorFinish", title: "装修情况", width: 100 },
		{ dataIndex: "orientation", key: "orientation", title: "朝向", width: 100 },
		{ dataIndex: "floor", key: "floor", title: "楼层", width: 100 },
		{ dataIndex: "district", key: "district", title: "所在小区", width: 100 },
		{ dataIndex: "buildingAge", key: "buildingAge", title: "建筑年代", width: 100 },
		{ dataIndex: "propertyManagement", key: "propertyManagement", title: "物业公司", width: 100 },
		{ dataIndex: "propertyFee", key: "propertyFee", title: "物业费", width: 100 },
		{ dataIndex: "location", key: "location", title: "所在区域", width: 100 },
		{ dataIndex: "business", key: "business", title: "所属商圈", width: 100 },
		{ dataIndex: "address", key: "address", title: "详细地址", width: 200 },
	]

	const pager = {
	    className: "pageination-wrapper",
		showSizeChanger: true,
		showQuickJumper: true,
		defaultCurrent: 1,
		total: 500,
		size: "middle"
	}

	return (
		<div className="page-container room-source-page">
			<Tabs className="filter-tabs" defaultActiveKey={ tabs[0].key } tabBarExtraContent={ <AdditionalOperation /> }>
				{ tabs.map(tab => <TabPane key={ tab.key } tab={ tab.name } />) }
			</Tabs>
			<Table className="main-data-table" size="middle" scroll={ { x: 1900, height: "100%" } } pagination={ pager } bordered />
		</div>
	)
}