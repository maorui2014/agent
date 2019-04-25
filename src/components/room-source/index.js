import React, { useEffect, useState } from "react"
import { Tabs, Icon, Table, Pagination } from "antd"

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

	const data = [
		{ id: 1, flag: "毛文超" },
		{ id: 3, flag: "毛睿" },
		{ id: 2, flag: "巫芬芳" },
		{ id: 1, flag: "毛文超" },
		{ id: 3, flag: "毛睿" },
		{ id: 2, flag: "巫芬芳" },
		{ id: 1, flag: "毛文超" },
		{ id: 3, flag: "毛睿" },
		{ id: 2, flag: "巫芬芳" },
		{ id: 1, flag: "毛文超" },
		{ id: 3, flag: "毛睿" },
		{ id: 2, flag: "巫芬芳" },
		{ id: 1, flag: "毛文超" },
		{ id: 3, flag: "毛睿" },
		{ id: 2, flag: "巫芬芳" },
		{ id: 1, flag: "毛文超" },
		{ id: 3, flag: "毛睿" },
		{ id: 2, flag: "巫芬芳" },
		{ id: 1, flag: "毛文超" },
		{ id: 3, flag: "毛睿" },
		{ id: 2, flag: "巫芬芳" },
		{ id: 1, flag: "毛文超" },
		{ id: 3, flag: "毛睿" },
		{ id: 2, flag: "巫芬芳" },
		{ id: 1, flag: "毛文超" },
		{ id: 3, flag: "毛睿" },
		{ id: 2, flag: "巫芬芳" },
		{ id: 1, flag: "毛文超" },
		{ id: 3, flag: "毛睿" },
		{ id: 2, flag: "巫芬芳" },
		{ id: 1, flag: "毛文超" },
		{ id: 3, flag: "毛睿" },
		{ id: 2, flag: "巫芬芳" },
		{ id: 1, flag: "毛文超" },
		{ id: 3, flag: "毛睿" },
		{ id: 2, flag: "巫芬芳" },
		{ id: 1, flag: "毛文超" },
		{ id: 3, flag: "毛睿" },
		{ id: 2, flag: "巫芬芳" },
		{ id: 1, flag: "毛文超" },
		{ id: 3, flag: "毛睿" },
		{ id: 2, flag: "巫芬芳" },
		{ id: 1, flag: "毛文超" },
		{ id: 3, flag: "毛睿" },
		{ id: 2, flag: "巫芬芳" },
		{ id: 1, flag: "毛文超" },
		{ id: 3, flag: "毛睿nnnn" },
		{ id: 2, flag: "巫芬芳wwww" },
	]

	// 2. 设置全局精美的滚动条
	// 4. 若无数据则隐藏分页栏，并设置正确样式

	const columns = [
		{ dataIndex: "flag", key: "id", title: "标记", width: 100 },
		{ dataIndex: "no", title: "房源编号", width: 100 },
		{ dataIndex: "signDate", title: "登记日期", width: 100 },
		{ dataIndex: "status", title: "当前状态", width: 100 },
		{ dataIndex: "rentalType", title: "租售类型", width: 100 },
		{ dataIndex: "counselor", title: "置业顾问", width: 100 },
		{ dataIndex: "houseType", title: "房屋类型", width: 100 },
		{ dataIndex: "unitType", title: "户型", width: 100 },
		{ dataIndex: "area", title: "房本面积", width: 100 },
		{ dataIndex: "interiorFinish", title: "装修情况", width: 100 },
		{ dataIndex: "orientation", title: "朝向", width: 100 },
		{ dataIndex: "floor", title: "楼层", width: 100 },
		{ dataIndex: "district", title: "所在小区", width: 100 },
		{ dataIndex: "buildingAge", title: "建筑年代", width: 100 },
		{ dataIndex: "propertyManagement", title: "物业公司", width: 100 },
		{ dataIndex: "propertyFee", title: "物业费", width: 100 },
		{ dataIndex: "location", title: "所在区域", width: 100 },
		{ dataIndex: "business", title: "所属商圈", width: 100 },
		{ dataIndex: "address", title: "详细地址", width: 200 },
	]

	const [tableHeight, setTableHeight] = useState(window.innerHeight-196)

	useEffect(()=>{
		const resizeHandler = () => {
			setTableHeight(window.innerHeight-196)
		}

		window.addEventListener("resize", resizeHandler)
		return ()=>{
			window.removeEventListener("reisze", resizeHandler)
		}
	})

	return (
		<div className="page-container room-source-page">
			<Tabs className="filter-tabs" defaultActiveKey={ tabs[0].key } tabBarExtraContent={ <AdditionalOperation /> }>
				{ tabs.map(tab => <TabPane key={ tab.key } tab={ tab.name } />) }
			</Tabs>
			<div className="main-data-table">
				<Table scroll={ { x: "max-content", y: tableHeight } } size="middle" rowClassName="row-selection" showHeader={ Boolean(data.length) } pagination={ false } dataSource={ data } columns={ columns } bordered />
			</div>
			<Pagination className="pageination-wrapper" showTotal={ total => `共 ${ total } 条记录` } showSizeChanger showQuickJumper defaultCurrent={ 1 } total={ data.length } />
		</div>
	)
}