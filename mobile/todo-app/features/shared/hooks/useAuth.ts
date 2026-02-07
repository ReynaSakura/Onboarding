import * as SecureStore from 'expo-secure-store';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Platform } from 'react-native';

const AUTH_KEY = 'auth_token';

export const useAuth = () => {
  const queryClient = useQueryClient();

  // Helper to handle both Web and Native
  const getAuthToken = async () => {
    if (Platform.OS === 'web') {
      return localStorage.getItem(AUTH_KEY);
    }
    return await SecureStore.getItemAsync(AUTH_KEY);
  };

  const setAuthToken = async (value: string) => {
    if (Platform.OS === 'web') {
      localStorage.setItem(AUTH_KEY, value);
    } else {
      await SecureStore.setItemAsync(AUTH_KEY, value);
    }
  };

  const removeAuthToken = async () => {
    if (Platform.OS === 'web') {
      localStorage.removeItem(AUTH_KEY);
    } else {
      await SecureStore.deleteItemAsync(AUTH_KEY);
    }
  };

  // Read auth state from storage
  const { data: isAuthenticated = false, isLoading } = useQuery({
    queryKey: ['auth'],
    queryFn: async () => {
      const token = await getAuthToken();
      return token === 'true';
    },
    staleTime: Infinity,
    gcTime: Infinity,
  });

  // Login function
  const login = async () => {
    await setAuthToken('true');
    queryClient.setQueryData(['auth'], true);
  };

  // Logout function
  const logout = async () => {
    await removeAuthToken();
    queryClient.setQueryData(['auth'], false);
  };

  return { isAuthenticated, isLoading, login, logout };
};