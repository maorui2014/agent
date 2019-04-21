import React from "react"
import { Input, AutoComplete, Icon } from "antd"

export default function () {
	return (
		<div className="search-bar">
			<AutoComplete className="auto-complete" dataSource={["abc", "bcd"]}>
				<Input allowClear className="auto-complete-input" placeholder="搜索房源/客户" prefix={ <Icon type="search" /> } />
			</AutoComplete>
		</div>
	)
}