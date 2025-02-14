import { getAccessToken } from "./token"

export const isAuthenticated = () => {
    const token = getAccessToken();
    return token !== null;
}