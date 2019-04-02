import { createContext } from "react"

const config = {
	isMaximize: false
}

const AppContext = createContext(config)

export { config, AppContext }