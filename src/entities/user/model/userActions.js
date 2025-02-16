import { registerUser,loginUser,logoutUser } from "./api";

export const login =(email,password) =>async (dispatch)=>{
    try{
        const userData = await loginUser(email,password);
        dispatch({
            type:'user/login',
            payload: userData,
        });
    }
    catch(e){
        console.error(e);
    }
};

export const registration =() =>async (dispatch)=>{
    try{
        const userData = await registerUser();
        dispatch({
            type:'user/registration',
            payload: userData,
        });
    }
    catch(e){
        console.error(e);
    }
};


export const logout =() =>async (dispatch)=>{
    try{
        await logoutUser();
        dispatch({
            type:'user/logout',
        });
    }
    catch(e){
        console.error(e);
    }
};

