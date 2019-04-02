import React, { useState } from "react"
import { config, AppContext } from "./AppContext"
import Frame from "./frame"

export default function App() {
	const state = useState(config)

	return (
		<AppContext.Provider value={ state }>
			<Frame />
		</AppContext.Provider>
	)
}