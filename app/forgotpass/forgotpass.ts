import axios from "axios";

interface ForgotPasswordResponse {
  message: string;
}
export async function forgotPassword(email: string): Promise<ForgotPasswordResponse> {
  try {
    const response = await axios.post<ForgotPasswordResponse>(`https://app.nginnovators.am/api/auth/delete-user/${email}`, {
      email,
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to send reset email");
  }
}