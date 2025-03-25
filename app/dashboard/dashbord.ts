import axios from "axios";
interface UserData {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
}
export async function getUserData(userId: string): Promise<UserData> {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get<UserData>(`https://app.nginnovators.am/api/auth/get-one-user-by-id/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to get user data");
  }
}