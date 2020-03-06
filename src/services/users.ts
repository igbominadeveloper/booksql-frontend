import axiosInstance from './axios';
import { LoginObject } from '@/interfaces/users';

export const loginService = (emailAndPassword: LoginObject) => axiosInstance.post('/auth/login', emailAndPassword);
