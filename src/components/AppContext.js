import { createContext } from "react"

const config = {
    isMaximize: false
}

const AppContext = createContext()

export default { config, AppContext }