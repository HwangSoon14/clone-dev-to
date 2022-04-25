import { AppRoutes } from './AppRoutes';
import useMyHistory from './useMyHistory';

export const useAppRoutes = () => {
  const history = useMyHistory();

  const goToHome = () => {
    history.push(AppRoutes.HOME);
  };

  const goToLogin = () => {
    history.push(AppRoutes.LOGIN);
  };

  const goToSignUp = () => {
    history.push(AppRoutes.SIGN_UP);
  };

  const goToForgotPassword = () => {
    history.push(AppRoutes.FORGOT_PASSWORD);
  };

  const goToResetPassword = () => {
    history.push(AppRoutes.RESET_PASSWORD);
  };

  const goToProfile = () => {
    history.push(AppRoutes.PROFILE);
  };
 

  return {
    goToHome,
    goToLogin,
    goToForgotPassword,
    goToResetPassword,
    goToSignUp,
    goToProfile
  
  };
};