
'use client'
import { AiOutlineUser } from "react-icons/ai"; 
import React, { useEffect, useState } from "react";
import { getUserData } from "./dashbord";
import './style.scss'
import { Button } from "@/components/Button";
// import DeleteItemComponent from "../delete/page";
const UserProfilePage: React.FC = () => {
  const [userData, setUserData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const userId = localStorage.getItem("userId");
  useEffect(() => {
    const AxiosUserData = async () => {
      setLoading(true);
      setError(null);
      try {
        if (userId) {
          const data = await getUserData(userId);
          setUserData(data);          
        }
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    AxiosUserData();
  }, [userId]);
  const handleOut=()=>{
      window.location.href='/signin'
  }
  return (
    <div className="dashboard">
      {userData ? (
        <div className="dashboard_admin_info">
          <button onClick={handleOut}>
            <AiOutlineUser/>
          </button>
          <h1 className="first_name">{userData.first_name} 
            <span className="last_name"> {userData.last_name}</span>
          </h1>
        </div>
      ) : (
        <p>No user data found.</p>
      )}
      <div className="dashboard_main">
        <div className="main_one">
        <h1>Հրավեր</h1>
        <h1>Ջնջել օգտատեր</h1>
        <h1>Տեսնել օգտատեր իդ-ի միջոցով </h1>
        <h1>Տեսնել բոլոր օգտատերերի</h1>
        </div>
        <div className="main_two">
          <input type="text" />
          <input type="text" />
          <input type="text" />

        </div>
       <div className="main_tree">

       </div>
        <Button type="button"title="Ուղարկել"></Button>
        <Button type="button"title="Ջնջել"></Button>
        <Button type="button"title="Տեսնել"></Button>
        <Button type="button"title="Տեսնել"></Button>
      </div>
      {/* <DeleteItemComponent/> */}
    </div>
  );
};

export default UserProfilePage;
