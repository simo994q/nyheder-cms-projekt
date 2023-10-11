import { createContext, useState } from "react";

export const User = createContext(null)

export const UserContextProvider = ({ children }) => {

    const [user, setUser] = useState(false)

    return (
        <>
            <User.Provider value={{ user, setUser }}>
                {children}
            </User.Provider>
        </>
    )
}