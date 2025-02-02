import { Models } from "appwrite";
import { ReactNode } from "react";

export interface User extends Models.User<Models.Preferences> { }

export interface UserContextType {
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    register: (email: string, password: string) => Promise<void>;
}

export interface UserProviderProps {
    children: ReactNode;
}