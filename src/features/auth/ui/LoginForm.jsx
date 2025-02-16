import { useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { login } from '../../../entities/user/model/userActions';
import { selectIsAuth } from '../../../entities/user/model/userSelector';
import { useNavigate } from 'react-router';
import { getAccessToken } from '../../../entities/user/model/tokenService';

const LoginForm = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const navigate = useNavigate();




  useEffect(()=>{
    const token = getAccessToken()
    if(isAuth === true || token){
      navigate('/');
    }
  },[isAuth,navigate]);




  const handleLogin = async()=>{
    if(!email.trim() ){
      setError('Введите почту')
      return;
    }
    else if(!password.trim()){
      setError('Введите пароль')
      return;
    }

    try{
      await dispatch(login(email,password));
      navigate('/');
    }
    catch{
      setError("Ошибка логина. Попробуйте снова");
    }
  }

  return (
    <div>
      <h2>Вход</h2>
      <input
        type="email"
        placeholder="Почта"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder='Пароли'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Вход</button>
      {error && <p style={{color:'red'}}>{error}</p>}
    </div>
  );
};

export default LoginForm;
