import axios from "axios";

interface LoginResponse {
  access_token: string;
  user_id:number;

}
export async function login(email: string, password: string): Promise<LoginResponse> {
  try {
    const response = await axios.post<LoginResponse>("https://app.nginnovators.am/api/auth/login", {
      email,
      password,
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Login failed");
  }
}