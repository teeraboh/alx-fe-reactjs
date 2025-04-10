import { Children, createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({Children}) => {
    const [user, setUser] = useState(null);
    return (
        <UserContext.Provider value = {{user, setUser}}>
            {Children}
        </UserContext.Provider>
    );
};

export default UserContext