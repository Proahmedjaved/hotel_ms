import Footer from '../../components/cus_hotel/footer';
import HeaderItem from '../../components/cus_hotel/HeaderItem';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react'


import React from 'react'


export default function booking_confirmation() {
    const [selectedDate, setSelectedDate] = useState(null)
    const [open, setOpen] = useState(true);
    return (
        <>
            <div>
                <HeaderItem />
            </div>



            <div>

                <nav class="bg-[#334155] px-2 sm:px-4 py-2.5 dark:bg-gray-900 w-full z-20  left-0 border-b border-gray-200 dark:border-gray-600">
                    <div class="container flex flex-wrap justify-between items-center mx-auto">
                        <div class="flex items-center">

                        </div>
                        <div class="flex md:order-2">
                            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Book</button>
                            <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                                <span class="sr-only">Open main menu</span>
                                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                            </button>
                        </div>


                        <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                            <ul class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border  border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-[#334155] dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                <li>
                                    <select name="dropdown" className="shadow appearance-none border rounded-2xl  py-2 px-3 w-full  text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="city" >
                                        <option defaultValue="karachi" >Karachi</option>
                                        <option value="hyderabad">Hyderabad</option>
                                        <option value="lahore">Lahore</option>
                                    </select>
                                </li>
                                <li>
                                    <DatePicker className='shadow appearance-none border rounded-2xl py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline' selected={selectedDate} onChange={date => setSelectedDate(date)}
                                        dateFormat='dd/MM/yyyy' minDate={new Date()}
                                        placeholderText="Check-In"
                                    />
                                </li>
                                <li>
                                    <DatePicker className='shadow appearance-none border rounded-2xl  py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline' selected={selectedDate} onChange={date => setSelectedDate(date)}
                                        dateFormat='dd/MM/yyyy' minDate={new Date()}
                                        placeholderText="Check-Out"
                                    />
                                </li>
                                <li>
                                    <select name="dropdown" className="shadow appearance-none border rounded-2xl  py-2 px-3 w-[16] text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Room" >
                                        <option defaultValue="rooms" >Rooms</option>
                                        <option value="adults">Adult</option>
                                        <option value="kids">Kids</option>
                                        <option value="infants">Infants</option>
                                    </select>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

            <div>

                <div class="flex flex-col md:flex-row h-screen w-screen">
                    <div class="basis-[100%] md:basis-[25%]  h-[100vh] flex justify-center items-center">
                        <div className='bg-white h-[90%] w-60 ml-1 rounded-3xl abolute  flex flex-wrap '>
                        </div>
                    </div>




                    <div class="basis-[100%] md:basis-[80%]  h-[100vh] flex justify-center items-center pb-20 ">

                        <div className='bg-white h-[100%] w-[90%]  rounded-3xl abolute  flex flex-wrap mt-20 scroll-smooth md:scroll-auto overflow-auto touch-auto'>
                            <div>
                                <div className="flex">
                                    <div className={` ${open ? "w-72" : "w-0 "
                                        } bg-black h-screen   pt-8 relative duration-300`}>

                                            {/* inside collapsible */}

                                        <div className={`text-white origin-left font-medium text-xl duration-200 ${
                                            !open && "scale-0"
                                            }`}>

                                            <a href="#" class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-3xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                                <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/docs/images/blog/image-4.jpg" alt="" />
                                                <div class="flex flex-col justify-between p-4 leading-normal">
                                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>


                                                    <div class="text-center">

                                                        <button>Book me</button>
                                                    </div>
                                                </div>
                                            </a>

                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className='mt-5'>

                                <a href="#" class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-3xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/docs/images/blog/image-4.jpg" alt="" />
                                    <div class="flex flex-col justify-between p-4 leading-normal">
                                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>


                                        <div class="text-center">

                                            <button className={`absolute cursor-pointer -right-5 top-9 w-7 h-4 border-red  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg
                                            border-2   ${!open && "rotate-180"}`}
                                                onClick={() => setOpen(!open)}></button>





                                        </div>
                                    </div>
                                </a>

                            </div>

                        </div>
                    </div>


                    {/* offcanvas */}


                </div>
            </div>



        </>
    )
}
