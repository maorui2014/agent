import React, { useEffect, useState } from "react"
import { Tabs, Icon, Table, Pagination, Tooltip } from "antd"

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
		{
			id: 19, flag: "重要",
			no: "ICN8821832", signDate: "2019-12-31", status: "跟进中",
			rentalType: "出售", counselor: "黎李鸿章", houseType: "商住两用",
			district: "满京华喜悦里华庭", orientation: "西南", floor: "25/32",
			unitType: "三房两厅两卫", area: "124平方", interiorFinish: "毛坯",
			address: "别墅区125栋A", buildingAge: 2019, propertyManagement: "深圳市万科物业有限公司",
			propertyFee: "2.85元/平方", location: "深圳-龙岗", business: "龙岗-南联"
		},
		{
			id: 159, flag: "重要",
			no: "ICN8821832", signDate: "2019-12-31", status: "跟进中",
			rentalType: "出售", counselor: "黎李鸿章", houseType: "商住两用",
			district: "满京华喜悦里华庭", orientation: "西南", floor: "25/32",
			unitType: "三房两厅两卫", area: "124平方", interiorFinish: "毛坯",
			address: "别墅区125栋A", buildingAge: 2019, propertyManagement: "深圳市万科物业有限公司",
			propertyFee: "2.85元/平方", location: "深圳-龙岗", business: "龙岗-南联"
		},
		{
			id: 319, flag: "重要",
			no: "ICN8821832", signDate: "2019-12-31", status: "跟进中",
			rentalType: "出售", counselor: "黎李鸿章", houseType: "商住两用",
			district: "满京华喜悦里华庭", orientation: "西南", floor: "25/32",
			unitType: "三房两厅两卫", area: "124平方", interiorFinish: "毛坯",
			address: "别墅区125栋A", buildingAge: 2019, propertyManagement: "深圳市万科物业有限公司",
			propertyFee: "2.85元/平方", location: "深圳-龙岗", business: "龙岗-南联"
		},
		{
			id: 149, flag: "重要",
			no: "ICN8821832", signDate: "2019-12-31", status: "跟进中",
			rentalType: "出售", counselor: "黎李鸿章", houseType: "商住两用",
			district: "满京华喜悦里华庭", orientation: "西南", floor: "25/32",
			unitType: "三房两厅两卫", area: "124平方", interiorFinish: "毛坯",
			address: "别墅区125栋A", buildingAge: 2019, propertyManagement: "深圳市万科物业有限公司",
			propertyFee: "2.85元/平方", location: "深圳-龙岗", business: "龙岗-南联"
		},
		{
			id: 191, flag: "重要",
			no: "ICN8821832", signDate: "2019-12-31", status: "跟进中",
			rentalType: "出售", counselor: "黎李鸿章", houseType: "商住两用",
			district: "满京华喜悦里华庭", orientation: "西南", floor: "25/32",
			unitType: "三房两厅两卫", area: "124平方", interiorFinish: "毛坯",
			address: "别墅区125栋A", buildingAge: 2019, propertyManagement: "深圳市万科物业有限公司",
			propertyFee: "2.85元/平方", location: "深圳-龙岗", business: "龙岗-南联"
		},
		{
			id: 1592, flag: "重要",
			no: "ICN8821832", signDate: "2019-12-31", status: "跟进中",
			rentalType: "出售", counselor: "黎李鸿章", houseType: "商住两用",
			district: "满京华喜悦里华庭", orientation: "西南", floor: "25/32",
			unitType: "三房两厅两卫", area: "124平方", interiorFinish: "毛坯",
			address: "别墅区125栋A", buildingAge: 2019, propertyManagement: "深圳市万科物业有限公司",
			propertyFee: "2.85元/平方", location: "深圳-龙岗", business: "龙岗-南联"
		},
		{
			id: 3193, flag: "重要",
			no: "ICN8821832", signDate: "2019-12-31", status: "跟进中",
			rentalType: "出售", counselor: "黎李鸿章", houseType: "商住两用",
			district: "满京华喜悦里华庭", orientation: "西南", floor: "25/32",
			unitType: "三房两厅两卫", area: "124平方", interiorFinish: "毛坯",
			address: "别墅区125栋A", buildingAge: 2019, propertyManagement: "深圳市万科物业有限公司",
			propertyFee: "2.85元/平方", location: "深圳-龙岗", business: "龙岗-南联"
		},
		{
			id: 1494, flag: "重要",
			no: "ICN8821832", signDate: "2019-12-31", status: "跟进中",
			rentalType: "出售", counselor: "黎李鸿章", houseType: "商住两用",
			district: "满京华喜悦里华庭", orientation: "西南", floor: "25/32",
			unitType: "三房两厅两卫", area: "124平方", interiorFinish: "毛坯",
			address: "别墅区125栋A", buildingAge: 2019, propertyManagement: "深圳市万科物业有限公司",
			propertyFee: "2.85元/平方", location: "深圳-龙岗", business: "龙岗-南联"
		},
		{
			id: 17779, flag: "重要",
			no: "ICN8821832", signDate: "2019-12-31", status: "跟进中",
			rentalType: "出售", counselor: "黎李鸿章", houseType: "商住两用",
			district: "满京华喜悦里华庭", orientation: "西南", floor: "25/32",
			unitType: "三房两厅两卫", area: "124平方", interiorFinish: "毛坯",
			address: "别墅区125栋A", buildingAge: 2019, propertyManagement: "深圳市万科物业有限公司",
			propertyFee: "2.85元/平方", location: "深圳-龙岗", business: "龙岗-南联"
		},
		{
			id: 5159, flag: "重要",
			no: "ICN8821832", signDate: "2019-12-31", status: "跟进中",
			rentalType: "出售", counselor: "黎李鸿章", houseType: "商住两用",
			district: "满京华喜悦里华庭", orientation: "西南", floor: "25/32",
			unitType: "三房两厅两卫", area: "124平方", interiorFinish: "毛坯",
			address: "别墅区125栋A", buildingAge: 2019, propertyManagement: "深圳市万科物业有限公司",
			propertyFee: "2.85元/平方", location: "深圳-龙岗", business: "龙岗-南联"
		},
		{
			id: 5319, flag: "重要",
			no: "ICN8821832", signDate: "2019-12-31", status: "跟进中",
			rentalType: "出售", counselor: "黎李鸿章", houseType: "商住两用",
			district: "满京华喜悦里华庭", orientation: "西南", floor: "25/32",
			unitType: "三房两厅两卫", area: "124平方", interiorFinish: "毛坯",
			address: "别墅区125栋A", buildingAge: 2019, propertyManagement: "深圳市万科物业有限公司",
			propertyFee: "2.85元/平方", location: "深圳-龙岗", business: "龙岗-南联"
		},
		{
			id: 5149, flag: "重要",
			no: "ICN8821832", signDate: "2019-12-31", status: "跟进中",
			rentalType: "出售", counselor: "黎李鸿章", houseType: "商住两用",
			district: "满京华喜悦里华庭", orientation: "西南", floor: "25/32",
			unitType: "三房两厅两卫", area: "124平方", interiorFinish: "毛坯",
			address: "别墅区125栋A", buildingAge: 2019, propertyManagement: "深圳市万科物业有限公司",
			propertyFee: "2.85元/平方", location: "深圳-龙岗", business: "龙岗-南联"
		},
		{
			id: 5191, flag: "重要",
			no: "ICN8821832", signDate: "2019-12-31", status: "跟进中",
			rentalType: "出售", counselor: "黎李鸿章", houseType: "商住两用",
			district: "满京华喜悦里华庭", orientation: "西南", floor: "25/32",
			unitType: "三房两厅两卫", area: "124平方", interiorFinish: "毛坯",
			address: "别墅区125栋A", buildingAge: 2019, propertyManagement: "深圳市万科物业有限公司",
			propertyFee: "2.85元/平方", location: "深圳-龙岗", business: "龙岗-南联"
		},
		{
			id: 51592, flag: "重要",
			no: "ICN8821832", signDate: "2019-12-31", status: "跟进中",
			rentalType: "出售", counselor: "黎李鸿章", houseType: "商住两用",
			district: "满京华喜悦里华庭", orientation: "西南", floor: "25/32",
			unitType: "三房两厅两卫", area: "124平方", interiorFinish: "毛坯",
			address: "别墅区125栋A", buildingAge: 2019, propertyManagement: "深圳市万科物业有限公司",
			propertyFee: "2.85元/平方", location: "深圳-龙岗", business: "龙岗-南联"
		},
		{
			id: 53193, flag: "重要",
			no: "ICN8821832", signDate: "2019-12-31", status: "跟进中",
			rentalType: "出售", counselor: "黎李鸿章", houseType: "商住两用",
			district: "满京华喜悦里华庭", orientation: "西南", floor: "25/32",
			unitType: "三房两厅两卫", area: "124平方", interiorFinish: "毛坯",
			address: "别墅区125栋A", buildingAge: 2019, propertyManagement: "深圳市万科物业有限公司",
			propertyFee: "2.85元/平方", location: "深圳-龙岗", business: "龙岗-南联"
		},
		{
			id: 51494, flag: "重要",
			no: "ICN8821832", signDate: "2019-12-31", status: "跟进中",
			rentalType: "出售", counselor: "黎李鸿章", houseType: "商住两用",
			district: "满京华喜悦里华庭", orientation: "西南", floor: "25/32",
			unitType: "三房两厅两卫", area: "124平方", interiorFinish: "毛坯",
			address: "别墅区125栋A", buildingAge: 2019, propertyManagement: "深圳市万科物业有限公司",
			propertyFee: "2.85元/平方", location: "深圳-龙岗", business: "龙岗-南联"
		},
	]

	// 1. 每列都有【冻结】按钮，鼠标移动到列后悬浮出现 [向左冻结 | 向右冻结]
	// 2. 更换 [筛选] 按钮的图标为常规漏斗
	// 3. 完善顶部菜单栏
	//		1) 用户
	//				[头像]
	//				个人中心
	//				购买软件许可证
	//		2) 设置
	//				弹出对话框
	//		3) 帮助
	//				问题反馈
	//				使用文档
	//				官方网站
	//				--------
	//				定制开发
	//				--------
	//				检查更新
	//				--------
	//				关于...

	const render = text => <Tooltip title={ text }>{ text }</Tooltip>

	const columns = [
		{ dataIndex: "flag", key: "flag", title: "标记", filters: [{ text: "a", value: "a" }], width: 65 },
		{ dataIndex: "no", key: "no", title: "房源编号", width: 100, render },
		{ dataIndex: "signDate", key: "signDate", title: "登记日期", sorter: () => { }, filters: [{ text: "a", value: "a" }], width: 110 },
		{ dataIndex: "status", key: "status", title: "当前状态", filters: [{ text: "a", value: "a" }], width: 90 },
		{ dataIndex: "rentalType", key: "rentalType", title: "租售类型", filters: [{ text: "a", value: "a" }], width: 90 },
		{ dataIndex: "counselor", key: "counselor", title: "置业顾问", filters: [{ text: "a", value: "a" }], width: 90 },
		{ dataIndex: "houseType", key: "houseType", title: "房屋类型", filters: [{ text: "a", value: "a" }], width: 90 },
		{ dataIndex: "unitType", key: "unitType", title: "户型", filters: [{ text: "a", value: "a" }], width: 90 },
		{ dataIndex: "area", key: "area", title: "房本面积", filters: [{ text: "a", value: "a" }], width: 90 },
		{ dataIndex: "interiorFinish", key: "interiorFinish", title: "装修情况", filters: [{ text: "a", value: "a" }], width: 90 },
		{ dataIndex: "orientation", key: "orientation", title: "朝向", filters: [{ text: "a", value: "a" }], width: 65 },
		{ dataIndex: "floor", key: "floor", title: "楼层", sorter: () => { }, width: 60 },
		{ dataIndex: "district", key: "district", title: "所在小区", filters: [{ text: "a", value: "a" }], width: 120, render },
		{ dataIndex: "buildingAge", key: "buildingAge", title: "建筑年代", sorter: () => { }, width: 85 },
		{ dataIndex: "propertyManagement", key: "propertyManagement", title: "物业公司", width: 150, render },
		{ dataIndex: "propertyFee", key: "propertyFee", title: "物业费", sorter: () => { }, width: 80 },
		{ dataIndex: "location", key: "location", title: "所在区域", filters: [{ text: "a", value: "a" }], width: 90, render },
		{ dataIndex: "business", key: "business", title: "所属商圈", filters: [{ text: "a", value: "a" }], width: 90, render },
		{ dataIndex: "address", key: "address", title: "详细地址", width: 100, render }
	]

	const [tableHeight, setTableHeight] = useState(window.innerHeight - 196)

	useEffect(() => {
		const resizeHandler = () => setTableHeight(window.innerHeight - 196)

		window.addEventListener("resize", resizeHandler)
		return () => window.removeEventListener("reisze", resizeHandler)
	})

	return (
		<div className="page-container room-source-page">
			<Tabs className="filter-tabs" defaultActiveKey={ tabs[0].key } tabBarExtraContent={ <AdditionalOperation /> } >
				{ tabs.map(tab => <TabPane key={ tab.key } tab={ tab.name } />) }
			</Tabs>
			<div className="main-data-table">
				<Table bordered scroll={ { x: "max-content", y: tableHeight } } showHeader={ Boolean(data.length) } rowKey="id"
					rowClassName="row-selection" pagination={ false } dataSource={ data } columns={ columns } size="middle" />
			</div>
			<Pagination hideOnSinglePage showSizeChanger showQuickJumper pageSizeOptions={ ["15", "30", "45", "60"] }
				showTotal={ total => `共 ${total} 条记录` } className="pageination-wrapper" total={ data.length }
				pageSize={ 15 } defaultCurrent={ 1 } />
		</div>
	)
}