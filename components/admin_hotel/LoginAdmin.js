// import axios from "axios";
// import React, { useState } from "react";

// export default function Home() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const mainDivStyle = {
//     padding: "1em",
//   };

//   const formStyle = {
//     display: "flex",
//     flexDirection: "column",
//     maxWidth: "560px",
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const credentials = { username, password };

//     const user = await axios.post("/api/Login", credentials);

//     console.log(user);
//   };

//   const handleGetUser = async () => {
//     const user = await axios.get("/api/user");

//     console.log(user);
//   };

//   const handleLogOut = async () => {
//     const user = await axios.get("/api/auth/logout");

//     console.log(user);
//   };

//   return (
//     <div style={mainDivStyle}>
//       <form style={formStyle} onSubmit={(e) => handleSubmit(e)}>
//         <label htmlFor="username"> Username </label>
//         <input
//           type="text"
//           name="username"
//           id="username"
//           onChange={(e) => setUsername(e.target.value)}
//         />

//         <label htmlFor="password"> Password </label>
//         <input
//           type="text"
//           name="password"
//           id="password"
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button> Log in </button>
//       </form>

//       <button onClick={() => handleGetUser()}> User </button>

//       <button onClick={() => handleLogOut()}> Logout </button>
//     </div>
//   );
// }






















// // import { useState } from 'react';
// // import { useRouter } from 'next/router';
// // import axios from 'axios';

// // const LoginAdmin = () => {
// //   const router = useRouter();
// //   const [userData, setUserData] = useState({
// //     username: '',
// //     password: '',
// //   });

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       await axios.post('/api/login', { ...userData });
// //       router.push('/admin-portal/profile');
// //     } catch (err) {
// //       console.log(err.response.data);
// //     }
// //   }

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setUserData({...userData, [name]: value })
// //   }

// //   return (
// //     <div>
// //       <form onSubmit={handleSubmit}>
// //         <label>
// //           Username:
// //           <input type="text" name="username" onChange={e => handleChange(e)} />
// //         </label>
// //         <br />
// //         <label>
// //           Password:
// //           <input type="password" name="password" onChange={e => handleChange(e)} />
// //         </label>
// //         <br />
// //         <button>Login</button>
// //       </form>
// //     </div>
// //   )
// // }

// // export default LoginAdmin;









// // // import axios from 'axios';
// // // import { setCookie } from 'nookies'

// // // export default async (req, res) => {
// // //   const { password, identifier } = req.body;

// // //   try {
// // //     const postRes = await axios.post('http://127.0.0.1:8000/portal/api/login/', {
// // //       identifier,
// // //       password,
// // //     })

// // //     setCookie({ res }, 'jwt', postRes.data.jwt, {
// // //       httpOnly: true,
// // //       secure: process.env.NODE_ENV !== 'development',
// // //     //   maxAge: 30 * 24 * 60 * 60,
// // //       path: '/',
// // //     });

// // //     res.status(200).end();
// // //   } catch (e) {
// // //     res.status(400).send(e.response.data.message[0].messages[0]);
// // //   }
// // // }
























// import React from 'react'
// import axiosInstance from '../../pages/api/auth/axios'
// export default function LoginAdmin() {




//     return (
//         <div className='container'>


//             <form className='container p-10 mb-10 bg-gray-900 pt-30 w-96 justify-items-center rounded-3xl'>
//                 <div className="mb-6">
//                     <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-100 dark:text-gray-300">Your email</label>
//                     <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" onChange={handleChange} required="" />
//                 </div>
//                 <div className="mb-6">
//                     <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-100 dark:text-gray-300">Your password</label>
//                     <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleChange} required="" />
//                 </div>
//                 <div className="flex items-start mb-6">
//                     <div className="flex items-center h-5">
//                         <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required="" />
//                     </div>
//                     <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-100 dark:text-gray-300">Remember me</label>
//                 </div>

                
//                 <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 " onClick={handleSubmit}>Submit</button>
                
                
//                     <a href="#" aria-current="true" className="w-full px-4 py-2 mt-4 ml-20 text-white bg-blue-700 border border-gray-200 cursor-pointer rounded-xl">
//                         New User ?
//                     </a>
                    
                




//             </form>

//         </div>
//     )
// }
