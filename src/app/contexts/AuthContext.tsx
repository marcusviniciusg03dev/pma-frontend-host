import { createContext, useState, useContext } from "react";

interface User {
    name: string
}

interface IAuthContext {
    loggedIn: boolean
    user: User | null
    setUser: React.Dispatch<React.SetStateAction<User | null>>
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    return (
        <AuthContext.Provider value={{
            loggedIn: Boolean(user),
            user,
            setUser
        }}>
            {children}
        </AuthContext.Provider>
    );
}

const useAuth = () => {
    return useContext(AuthContext);
}

export { AuthProvider, useAuth }