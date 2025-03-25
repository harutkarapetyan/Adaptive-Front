import axios from "axios";
interface RegisterResponse {
  message: string;
}
export async function registerUser(
  first_name: string,
  last_name: string,
  email: string,
  password: string,
  confirm_password: string,
  phone_number: string
): Promise<RegisterResponse> {
  try {
    const response = await axios.post<RegisterResponse>("https://app.nginnovators.am/api/auth/add-user", {
      first_name,
      last_name,
      email,
      password,
      confirm_password,
      phone_number,
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Registration failed");
  }
}