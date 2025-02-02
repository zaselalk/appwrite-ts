import { ID } from "appwrite";
import { createContext, useContext, useEffect, useState } from "react";
import { User, UserContextType, UserProviderProps } from "./types";

import { account } from "../appwrite";

const UserContext = createContext<UserContextType | undefined>(undefined);

export function useUser(): UserContextType {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
}


export function UserProvider({ children }: UserProviderProps) {
    const [user, setUser] = useState<User | null>(null);

    async function login(email: string, password: string) {
        await account.createEmailPasswordSession(email, password);
        const loggedIn = await account.get();
        setUser(loggedIn);
        window.location.replace("/");
    }

    async function logout() {
        await account.deleteSession("current");
        setUser(null);
    }

    async function register(email: string, password: string) {
        await account.create(ID.unique(), email, password);
        await login(email, password);
    }

    async function init() {
        try {
            const loggedIn = await account.get();
            setUser(loggedIn);
        } catch (err) {
            setUser(null);
        }
    }

    useEffect(() => {
        init();
    }, []);

    return (
        <UserContext.Provider value={{ user, login, logout, register }}>
            {children}
        </UserContext.Provider>
    );
};
