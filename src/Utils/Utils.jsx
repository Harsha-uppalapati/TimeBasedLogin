// import { useState, useEffect } from "react";

// export const HandleForm = e => {
//   const [data, setData] = useState({});

//   useEffect(() => {
//     let [name, value] = e.target;
//     setData({ ...data, [name]: value });
//   }, [e]);

//   return [data];
// };

// export const Validation = e => {
//   const [data, setData] = useState({});

//   useEffect(() => {
//     let [name, value] = e.target;
//     if (name === "email" && value !== "") {
//       setData({ ...data, [name]: "err" });
//     } else if (name === "password" && value !== "") {
//       setData({ ...data, [name]: "err" });
//     }
//   }, [e]);

//   return [data];
// };
