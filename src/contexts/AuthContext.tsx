import React, { createContext, useState, useEffect } from 'react';
import { View } from 'react-native';
import {
  signIn as authSignIn,
  signUp as authSignUp,
  sendPasswordReset as authSendResetPassword,
  passwordReset as authPasswordReset,
  SignInProps,
  SignUpProps,
  SendPasswordResetProps,
  PasswordResetProps,
} from '../services/auth';
import api from '../services/api';
import { storeString, storeObject } from '../hooks/useStoreData';
import { getDataObject, getDataString, removeItem } from '../hooks/useGetData';

interface UserProps {
  id: string;
  email: string;
  fullname: string;
}
export interface AuthContextProps {
  signed: boolean;
  pending: boolean;
  user: UserProps;
  error: string | null;
  signIn(arg0: SignInProps): Promise<string | undefined>;
  signUp(arg0: SignUpProps): Promise<string | undefined>;
  sendResetPassword(arg0: SendPasswordResetProps): Promise<string | undefined>;
  resetPassword(
    arg0: PasswordResetProps,
  ): Promise<{ error: string | undefined; message: string | undefined }>;
  signOut(): Promise<boolean>;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthContextProvider: React.FC = ({ children }) => {
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<UserProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [pending, setPeding] = useState(false);

  useEffect(() => {
    async function loadData() {
      const { data: storageUser } = await getDataObject('user');
      const { data: storageToken } = await getDataString('token');

      if (!!storageUser && !!storageToken) {
        setUser(storageUser as UserProps);
        api.defaults.headers.Authorization = `Bearer ${storageToken}`;
      }

      setLoading(false);
    }
    loadData();
  }, []);

  async function signIn({ email, password, thirdPartyToken }: SignInProps) {
    const { token, user: signedUser, error: apiError } = await authSignIn({
      email,
      password,
      thirdPartyToken,
    });
    if (apiError && !token) {
      setError(apiError);
    } else {
      setUser(() => signedUser as UserProps);
      // injeta as credenciais do usuario pras proximas requests
      api.defaults.headers.Authorization = `Bearer ${token}`;

      await storeString('token', token);
      await storeObject('user', user);
    }
    return apiError;
  }

  async function signOut() {
    const isRemovedToken = await removeItem('token');
    const isRemovedUser = await removeItem('user');
    setUser(null);
    setError(null);
    api.defaults.headers.Authorization = '';
    return isRemovedToken && isRemovedUser;
  }

  async function signUp({
    fullname,
    email,
    password,
    thirdPartyToken,
  }: SignUpProps) {
    const { error: errorSignUp } = await authSignUp({
      fullname,
      email,
      password,
      thirdPartyToken,
    });
    if (errorSignUp) {
      setError(() => errorSignUp);
    } else {
      await signIn({
        email,
        password,
        thirdPartyToken,
      });
    }
    return errorSignUp;
  }

  async function sendResetPassword({ email }: SendPasswordResetProps) {
    setPeding(true);
    const { error: errorResetPassword } = await authSendResetPassword({
      email,
    });
    if (errorResetPassword) {
      setError(() => errorResetPassword);
    }
    setPeding(false);
    return errorResetPassword;
  }
  async function resetPassword({
    code,
    password,
    passwordConfirm,
  }: PasswordResetProps) {
    setPeding(true);
    const { error: errorResetPassword, message } = await authPasswordReset({
      code,
      password,
      passwordConfirm,
    });
    if (errorResetPassword) {
      setError(() => errorResetPassword);
    }
    setPeding(false);
    return { error: errorResetPassword, message };
  }

  if (loading) return <View />;

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user: user as UserProps,
        error,
        signIn,
        signUp,
        signOut,
        sendResetPassword,
        resetPassword,
        pending,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
