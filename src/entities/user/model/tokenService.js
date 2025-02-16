export const setRefreshToken =(token)=>{
    localStorage.setItem('refreshToken',token);
};

export const getRefreshToken =()=>{
    return localStorage.getItem('refreshToken');
};

export const removeRefreshToken = ()=>{
    localStorage.removeItem('refreshToken');
};

export const setAccessToken =(token)=>{
    localStorage.setItem('accessToken',token);
};

export const getAccessToken =()=>{
    return localStorage.getItem('accessToken');
};

export const removeAccessToken = ()=>{
    localStorage.removeItem('accessToken');
};