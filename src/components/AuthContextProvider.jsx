/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

// const apiUrl = import.meta.env.VITE_API_URL

export function AuthContextProvider({ children }) {
    const [user, setUser] = useState(null);


    async function checkAuth() {
        try {
            throw new Error("Not implemented")

            // const res = await fetch(`${apiUrl}/api/v1/perfil`, {
            //     credentials: "include",
            // })
            // if (res.ok) {
            //     const data = await res.json()
            //     setUser(data.user)

            // } else {
            //     setUser(null)
            // }

        } catch (error) {
            setUser(null)
            console.error(error)
        }
    }
    useEffect(() => {
        checkAuth()
    }
    )

    return (
        <AuthContext.Provider value={{ user, checkAuth }}>
            {children}
        </AuthContext.Provider>
    );
}