import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router';
import { logout } from '../../../entities/user/model/userActions';

const LogoutButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
    dispatch(logout());

  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
