"use client";
import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

function ProfilePage() {
  const router = useRouter();
  const [data, setData] = useState("nothing");

  const onLogout = async () => {
    try {
      axios.get("/api/users/logout");
      toast.success("Logout Successful");
      // router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const getUserData = async () => {
    const res = await axios.get("/api/users/me");
    console.log(res.data);
    setData(res.data.data._id);
  };
  return (
    <>
      <div>ProfilePage</div>
      <hr />
      <h2>
        {data === "nothing" ? "Nothing": <Link href={`/profile/${data}`}>{data}</Link>
        }
      </h2>
      <button className=" bg-white text-black" onClick={onLogout}>
        Logout
      </button>
      <button className=" bg-blue-700 text-white" onClick={getUserData}>
        {" "}
        User Profile
      </button>
    </>
  );
}

export default ProfilePage;
