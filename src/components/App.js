import React, { useState } from "react"
import AppContext from "./AppContext"
import Frame from "./frame"

export default function App() {
	const state = useState({ name: "aaaa" })

	return (
		<AppContext.Provider value={ state }><Frame /></AppContext.Provider>
	)
}