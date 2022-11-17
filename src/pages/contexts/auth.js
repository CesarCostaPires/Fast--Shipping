import React,{ createContext,useCallback,useState} from 'react';


export const AuthContext = createContext({})

function AuthProvider({children}){
    return(
        <AuthContext.Provider value={{nome:"Cesar"}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;