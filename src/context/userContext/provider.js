import { useReducer } from "react";
import {UserContext, initialState} from "./context";
import userReducer from "./reducer";

const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, initialState);

    return (
        // state, Modify
        <UserContext.Provider  value={{state, dispatch}}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;