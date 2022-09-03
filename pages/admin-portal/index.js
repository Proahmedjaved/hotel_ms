// import React from 'react'
// import Sidebar from '../../components/admin_hotel/Sidebar'
// import Profile from './Profile'

// export default function index() {
//   return (
//     <div>

//       <div className='flex w-full'>
//         <Sidebar />

//         <div className='w-[90%] pt-10'>
//           <Profile />
//         </div>
//       </div>

//     </div>
//   )
// }



import React from 'react'
import Sidebar from '../../components/admin_hotel/Sidebar'
import Profile from './Profile'
import { useRouter } from 'next/router';
import axios from 'axios';
import nookies from 'nookies';

export default function index(props) {
  const router = useRouter();
  const goToRegister = () => {
    router.push('/admin-portal/Signup');
  }

  return (
    <div>
      <div><button onClick={goToRegister}>Register</button></div>

      <div className='flex w-full'>
        <Sidebar />
        

        <div className='w-[90%] pt-10'>
          <Profile />
        </div>
      </div>

    </div>
  )
};


export const getServerSideProps = async (ctx) => {
  const cookies = nookies.get(ctx)
  let user = null;

  if (cookies?.jwt) {
    try {
      const { data } = await axios.get('http://localhost:8000/portal/hotelprofile/', {
        headers: {
          Authorization:
            `Bearer ${cookies.jwt}`,
          },
      });
      user = data;
    } catch (e) {
      console.log(e);
    }
  }

  if (user) {
    return {
      redirect: {
        permanent: false,
        destination: '/profile'
      }
    }
  }

  return {
    props: {}
  }
};
