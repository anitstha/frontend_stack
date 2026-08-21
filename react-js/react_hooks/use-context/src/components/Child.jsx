import { useContext } from "react"
import { userContext } from "../App"

const Child = () => {
    const { name, role } = useContext(userContext)

    return (
        <div>
            <h1>Welcome, {name}</h1>
            <h3>{role}</h3>
        </div>
    )
}

export default Child