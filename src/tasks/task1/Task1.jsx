import React from "react";
import useFetch from "../../hooks/useFetch";

import { useEffect, useState } from "react";

function Task1() {
  const [refresh, setRefresh] = useState(false);
  const apiUrl = "https://jsonplaceholder.typicode.com/posts";
  const { loading, data, error } = useFetch(apiUrl,refresh);
  console.log(data);
  {
    data?.map((item) => {
      console.log(item);
    });
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection:"column",
        justifyContent: "center",
        alignItem: "center",
        width: "100vw",
        height: "80vh",
      }}
    >
      <button style={{width:"100px",height:"50px",backgroundColor:"blue",marginTop:"80px",marginBottom:"20px"}} onClick={()=>{setRefresh(!refresh)}}>Refresh</button>
      <div
        style={{
          diplay: "flex",
          justifyContent: "center",
          alignItem:"center",
          padding: "40px",
          border: "2px solid black",
          width: "80vw",
          borderRadius:"10px "
        }}
      >
        {
          <table style={{border:"2px solid grey"}}>
            <thead>
              <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, key) => (
                <tr key={key}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.body}</td>
                </tr>
              ))}
            </tbody>
          </table>
        }
      </div>
    </div>
  );
}

export default Task1;
