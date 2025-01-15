"use client"
import { useEffect, useState } from "react";
import Posts from "./posts";
import Pictures from "./pictures";


export default function Profile() {
const [data, setData] = useState(null);
async function callProfileData() {
    fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((data) => setData(data));        
}

useEffect(() => {
    callProfileData();
}, []);

    return (
      data ? (
      <div className="flex flex-row items-start justify-start h-screen w-screen">
        <div className="flex flex-col items-center justify-start w-1/3 h-1/3 m-1 p-1 bg-gray-200 rounded-lg">
        <div className="flex items-center justify-center w-1/3 h-1/3">
          <img className="w-auto h-full rounded-full border border-black" src={data.results[0].picture.large} alt="Profile" />
        </div>
        <div className="flex items-center justify-center w-full h-full">
          {data.results[0].name.title + " " + data.results[0].name.first + " " + data.results[0].name.last}
        </div>
        <div className="flex items-start justify-center w-full h-full">
          <div className="flex flex-col items-start justify-center w-1/3 h-1/3 m-1 p-1 bg-gray-200 rounded-lg">
          <div> {data.results[0].email}</div>
          <div>phone: {data.results[0].phone}</div>
          <div>cell: {data.results[0].cell}</div>
          <div>age: {data.results[0].dob.age}</div>
          </div>
        </div>
        </div>
        <div className="flex items-start justify-start w-1/3 h-1/3"><Posts /></div>
        <div className="flex items-start justify-startw-1/3 w-1/3 h-1/3"><Pictures/></div>
      </div>
      ) : (
      <div>loading...</div>
      )
    );
  }
