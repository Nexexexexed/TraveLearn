import axios from 'axios'
import { setRefreshToken,setAccessToken, removeAccessToken,removeRefreshToken } from './tokenService';


const API_URL = 'https://fakestoreapi.com/users';


/*
Пароли и почты fakeAPI:

0 john@gmail.com - m38rmF$  
1 morrison@gmail.com - 83r5^_
2 kevin@gmail.com - kev02937@
3 don@gmail.com - ewedon
4 derek@gmail.com - jklg*_56

*/



export const registerUser= async()=>  {
    try{
        const responce = await axios.get(API_URL);
        const user = responce.data[0];
        setRefreshToken(user.id);
        setAccessToken(user.email);
        return {
            id:user.id,
            name: `${user.name.firstname} ${user.name.lastname}`,
            email: user.email,
            password:user.password,
        };
    }
    catch(e){
        console.error('Ошибка при регистрации пользователя:', e);
        throw e;
    }
};


export const loginUser= async(email,password)=>  {
    try{
        const responce = await axios.get(API_URL);
        const user = responce.data[0];
        setRefreshToken(user.id);
        setAccessToken(user.email);
        if(email ==user.email && password ==user.password){
            return {
                id:user.id,
                name: `${user.name.firstname} ${user.name.lastname}`,
                email: user.email,
                password:user.password,
            };
        }
        else{
            throw new Error ('Пользователь не найден');
        }

    }
    catch(e){
        console.error('Ошибка при входе пользователя:', e);
        throw e;
    }
};


export const logoutUser=()=>{
 return new Promise((resolve)=>{
    removeAccessToken();
    removeRefreshToken();
    setTimeout(()=>{
        resolve('Выход произошел успешно');
    },500);
 })
};