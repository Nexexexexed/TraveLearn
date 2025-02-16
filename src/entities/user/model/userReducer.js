const initialState = {
    isAuth : false,
    user: null,
}

function userReducer(state =initialState,action){
    switch(action.type){
        case 'user/login':
            return {
                ...state,
                isAuth: true,
                user: {
                id: action.payload.id,
                name: action.payload.name,
                email: action.payload.email,
                password: action.payload.password,
                }
            };
        case 'user/registration':
            return {
                ...state,
                isAuth: true,
                user: {
                id: action.payload.id,
                name: action.payload.name,
                email: action.payload.email,
                password: action.payload.password,
                }
            };
        case 'user/logout':
            return{
                ...state,
                isAuth: false,
                user: null,
            }
        default:
            return state;
    }
}


export default userReducer;