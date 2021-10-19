import { createContext } from "react";

const initialState = {
    users: [],
};

const UserContext = createContext(initialState);

export {
    UserContext,
    initialState
};
