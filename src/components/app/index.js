import React, { useState } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { config, AppContext } from "./AppContext"
import Frame from "../frame"

export default function App() {
	const state = useState(config)

	return (
		<AppContext.Provider value={ state }>
			<Router>
				<Frame />
			</Router>
		</AppContext.Provider>
	)
}