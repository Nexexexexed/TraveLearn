import { Route, Routes,Navigate } from 'react-router';
import  HomePage  from '../../pages/Home';
import  AboutPage from '../../pages/About';
import  LoginPage  from '../../pages/Login';
import RegistrationPage from '../../pages/Registration'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="" element={<Navigate to="/" />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};