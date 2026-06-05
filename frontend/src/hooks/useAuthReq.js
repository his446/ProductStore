import { useAuth } from "@clerk/react";
import api from "../lib/axios";
import { useEffect } from "react";

const useAuthReq = () => {
  const { isSignedIn, getToken, isLoaded } = useAuth();

  //include token to the req headers
  useEffect(() => {
    const interceptor = api.interceptors.request.use(async (config) => {
      if (isSignedIn) {
        const token = await getToken();
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      }
      return config;
    });
    
    return () => api.interceptors.request.eject(interceptor);
  }, [isSignedIn, getToken]);

  return { isSignedIn, isClerkLoaded: isLoaded };
};
export default useAuthReq;
