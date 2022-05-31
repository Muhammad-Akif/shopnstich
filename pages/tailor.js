import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { TailorProfile, TailorOrders } from '../components'
import { useStateContext } from '../context/StateContext';
import { useRouter } from 'next/router'

const dashboard = () => {
    const router = useRouter()
    const { useFirestore, tailorInfo } = useStateContext();
    const [isDashboard, setIsDashboard] = useState(true)
    const [isProfile, setIsProfile] = useState(false)
    const [isOrders, setIsOrders] = useState(false)
    useEffect(() => {
        const labels = ["January", "February", "March", "April", "May", "June"];
        const data = {
            labels: labels,
            datasets: [
                {
                    label: "Working History",
                    backgroundColor: "hsl(252, 82.9%, 67.8%)",
                    borderColor: "hsl(252, 82.9%, 67.8%)",
                    data: [0, 10, 5, 2, 20, 30, 45],
                },
            ],
        };

        const configLineChart = {
            type: "line",
            data,
            options: {},
        };

        var chartLine = new Chart(
            document.getElementById("chartLine"),
            configLineChart
        );
        const dataDoughnut = {
            labels: ["Completed", "Cenceled", "Inprogress"],
            datasets: [
                {
                    label: "My First Dataset",
                    data: [300, 50, 100],
                    backgroundColor: [
                        "rgb(133, 105, 241)",
                        "rgb(164, 101, 241)",
                        "rgb(101, 143, 241)",
                    ],
                    hoverOffset: 4,
                },
            ],
        };

        const configDoughnut = {
            type: "doughnut",
            data: dataDoughnut,
            options: {},
        };

        var chartBar = new Chart(
            document.getElementById("chartDoughnut"),
            configDoughnut
        );
    }, [])

    useEffect(() => {
        useFirestore('tailor')
    }, [])
    if (tailorInfo[0] == undefined) {
        console.log("waiting")
    }
    else {
        var data = Object.entries(tailorInfo[0].data);
        console.log("data", data)
    }

    const onChangeTab = (type) => {
        if (type == 'dashboard') {
            setIsDashboard(true)
            setIsOrders(false)
            setIsProfile(false)
        }
        else if (type == 'profile') {
            setIsProfile(true)
            setIsDashboard(false)
            setIsOrders(false)
        }
        else {
            setIsOrders(true)
            setIsDashboard(false)
            setIsProfile(false)
        }
    }

    const handleLogout = () => {
        localStorage.removeItem('user')
        router.push("/")
    }

    return (
        <>
            <Head>
                <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
            </Head>
            <main class="bg-gray-100 dark:bg-gray-800 rounded-2xl relative h-screen overflow-hidden relative">
                <div class="flex items-start justify-between">
                    <div class="h-screen hidden lg:block my-4 ml-4 shadow-lg relative w-80">
                        <div class="bg-white h-full rounded-2xl dark:bg-gray-700">
                            <div class="flex items-center justify-center pt-6">
                                <svg width="35" height="30" viewBox="0 0 256 366" version="1.1" preserveAspectRatio="xMidYMid">
                                    <defs>
                                        <linearGradient x1="12.5189534%" y1="85.2128611%" x2="88.2282959%" y2="10.0225497%" id="linearGradient-1">
                                            <stop stop-color="#FF0057" stop-opacity="0.16" offset="0%">
                                            </stop>
                                            <stop stop-color="#FF0057" offset="86.1354%">
                                            </stop>
                                        </linearGradient>
                                    </defs>
                                    <g>
                                        <path d="M0,60.8538006 C0,27.245261 27.245304,0 60.8542121,0 L117.027019,0 L255.996549,0 L255.996549,86.5999776 C255.996549,103.404155 242.374096,117.027222 225.569919,117.027222 L145.80812,117.027222 C130.003299,117.277829 117.242615,130.060011 117.027019,145.872817 L117.027019,335.28252 C117.027019,352.087312 103.404567,365.709764 86.5997749,365.709764 L0,365.709764 L0,117.027222 L0,60.8538006 Z" fill="#001B38">
                                        </path>
                                        <circle fill="url(#linearGradient-1)" transform="translate(147.013244, 147.014675) rotate(90.000000) translate(-147.013244, -147.014675) " cx="147.013244" cy="147.014675" r="78.9933938">
                                        </circle>
                                        <circle fill="url(#linearGradient-1)" opacity="0.5" transform="translate(147.013244, 147.014675) rotate(90.000000) translate(-147.013244, -147.014675) " cx="147.013244" cy="147.014675" r="78.9933938">
                                        </circle>
                                    </g>
                                </svg>
                            </div>
                            <nav class="mt-6">
                                <div>
                                    <button onClick={onChangeTab.bind(null, "dashboard")} class="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500" href="#">
                                        <span class="text-left">
                                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z">
                                                </path>
                                            </svg>
                                        </span>
                                        <span class="mx-4 text-sm font-normal">
                                            Dashboard
                                        </span>
                                    </button>
                                    <button onClick={onChangeTab.bind(null, "profile")} class="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500" href="#">
                                        <span class="text-left">
                                            <svg width="20" height="20" fill="currentColor" class="m-auto" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1024 1131q0-64-9-117.5t-29.5-103-60.5-78-97-28.5q-6 4-30 18t-37.5 21.5-35.5 17.5-43 14.5-42 4.5-42-4.5-43-14.5-35.5-17.5-37.5-21.5-30-18q-57 0-97 28.5t-60.5 78-29.5 103-9 117.5 37 106.5 91 42.5h512q54 0 91-42.5t37-106.5zm-157-520q0-94-66.5-160.5t-160.5-66.5-160.5 66.5-66.5 160.5 66.5 160.5 160.5 66.5 160.5-66.5 66.5-160.5zm925 509v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm0-260v-56q0-15-10.5-25.5t-25.5-10.5h-568q-15 0-25.5 10.5t-10.5 25.5v56q0 15 10.5 25.5t25.5 10.5h568q15 0 25.5-10.5t10.5-25.5zm0-252v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm256-320v1216q0 66-47 113t-113 47h-352v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-768v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-352q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z">
                                                </path>
                                            </svg>
                                        </span>
                                        <span class="mx-4 text-sm font-normal">
                                            Profile
                                        </span>
                                    </button>
                                    <button onClick={onChangeTab.bind(null, "orders")} class="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500" href="#">
                                        <span class="text-left">
                                            <svg width="20" fill="currentColor" height="20" class="h-5 w-5" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1088 1256v240q0 16-12 28t-28 12h-240q-16 0-28-12t-12-28v-240q0-16 12-28t28-12h240q16 0 28 12t12 28zm316-600q0 54-15.5 101t-35 76.5-55 59.5-57.5 43.5-61 35.5q-41 23-68.5 65t-27.5 67q0 17-12 32.5t-28 15.5h-240q-15 0-25.5-18.5t-10.5-37.5v-45q0-83 65-156.5t143-108.5q59-27 84-56t25-76q0-42-46.5-74t-107.5-32q-65 0-108 29-35 25-107 115-13 16-31 16-12 0-25-8l-164-125q-13-10-15.5-25t5.5-28q160-266 464-266 80 0 161 31t146 83 106 127.5 41 158.5z">
                                                </path>
                                            </svg>
                                        </span>
                                        <span class="mx-4 text-sm font-normal">
                                            Orders
                                        </span>
                                    </button>
                                    <button onClick={handleLogout} class="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500" href="#">
                                        <span class="text-left">
                                            <svg fill="none" class="relative w-5 h-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                                                <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z">
                                                </path>
                                            </svg>
                                        </span>
                                        <span class="mx-4 text-sm font-normal">
                                            Logout
                                        </span>
                                    </button>
                                </div>
                            </nav>
                        </div>
                    </div>
                    <div>

                    </div>
                    {isDashboard && (
                        <>
                            <div class="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
                                <header class="w-full shadow-lg bg-white dark:bg-gray-700 items-center h-16 rounded-2xl z-40">
                                    <div class="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
                                        <div class="relative items-center pl-1 flex w-full lg:max-w-68 sm:pr-2 sm:ml-0">
                                            {/* <div class="container relative left-0 z-50 flex w-3/4 h-auto h-full">
                                        <div class="relative flex items-center w-full lg:w-64 h-full group">
                                            <div class="absolute z-50 flex items-center justify-center block w-auto h-10 p-3 pr-2 text-sm text-gray-500 uppercase cursor-pointer sm:hidden">
                                                <svg fill="none" class="relative w-5 h-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z">
                                                    </path>
                                                </svg>
                                            </div>
                                            <svg class="absolute left-0 z-20 hidden w-4 h-4 ml-4 text-gray-500 pointer-events-none fill-current group-hover:text-gray-400 sm:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z">
                                                </path>
                                            </svg>
                                            <input type="text" class="block w-full py-1.5 pl-10 pr-4 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ring-opacity-90 bg-gray-100 dark:bg-gray-800 text-gray-400 aa-input" placeholder="Search" />
                                            <div class="absolute right-0 hidden h-auto px-2 py-1 mr-2 text-xs text-gray-400 border border-gray-300 rounded-2xl md:block">
                                                +
                                            </div>
                                        </div>
                                    </div> */}
                                            <div class="relative p-1 flex items-center justify-end w-full ml-5 mr-4 sm:mr-0 sm:right-auto">
                                                <a href="#" class="block relative">
                                                    {/* <img alt="profil" src="/images/person/1.jpg" class="mx-auto object-cover rounded-full h-10 w-10 " /> */}
                                                    Muhammad Akif
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </header>
                            </div>
                            <div class="absolute top-28 left-72">
                                <div class="shadow-lg rounded-lg overflow-hidden">
                                    <div class="py-3 px-5 bg-gray-50">Progress</div>
                                    <canvas className="p-10 chart-d" id="chartLine"></canvas>
                                </div>
                            </div>
                            <section class="absolute bottom-0 left-72 ">
                                <div class="flex justify-center">
                                    <div class="max-w-xl h-56">
                                        <div class="block p-4 rounded-lg shadow-lg bg-white m-4">
                                            <div class="flex items-baseline">
                                                <span class="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                                                    New
                                                </span>
                                            </div>
                                            <div class="md:flex md:flex-row">
                                                <div
                                                    class="md:w-72 w-32 flex justify-center items-center mb-6 lg:mb-0 mx-auto md:mx-0"
                                                >
                                                    <img
                                                        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgVFRYZGRgYGBgYGBgaGBgYGBgcGhgaGhgYGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHhISHjQrJCE0NDQ0NDQ0NDQ0NDE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAgMEBQYHAQj/xAA9EAACAQIEBAMGAwgABgMAAAABAgADEQQFEiEGMUFRImFxEzKBkaGxB0LBFFJicoLR4fAkM1OSk7IVFiP/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAiEQADAQADAQACAwEBAAAAAAAAAQIRAxIhMUFRBCJxE2H/2gAMAwEAAhEDEQA/AOzQhCABCEIAEIQgAQhEM1oALjL1gP8AEZdyY24jSJbE4jHEA6QB5neU+JzSqeTW9AB9ecnYnkZSYiPDN09PGxTnm7n+pv7xosepnk9iAAZocjY6OZ5nqZnjLrJKoC2ghovg89DSMak9p1QeseFdiWDPYkT2SWEI21UDnFg3gAqEIQAIQhAAhCEACEIQAIQhAAhCEACE8hADwxupHDGqrAC5jQmMGRsRjET3nUfGZ3OM6LAhHCrewtfU1ue45CY7EZoqE3e5N773P1ku8+Cw32KzilY6W1HsATMxmfECpuVt2Bbf5CY/HZ1f3SwHltKWvXDb3PxNzDtTE5NVX40a/hpgepkb/wC21DsQB6TIu5vD20XodTZU+KnB7y6yfjJQ1nW3xnMkqHvHExHWP1B1O74biGk4sDY+cdwmLIffcE7GcYwWZFTz6beU1WQcSlXVajXW4+Eua/ZnUv6jsNJ7iOMZCwFUOoZTcEdDJTQNU/CLiHjlFiI3VXeSE5Rv4Svo4j3jkivF0at9jz+8lopMfhCERQQhCABCEIAEIQgB5AmJZrRn2kBNj957GBUi1aAaLJmX4rzDTppA7tu/kvn6zTEzlXFOPJqVGtc3IU/lW21yfhJp4hpayg4kzZ9RVW2G2wtt5GZlsRf1+hjOMxTFySb7n0kQveErAZLeoCD3kQtPVBMd/Z2tyj0MI94kCWOHy1m6S2wWQahdv7SXSRSimZkQDTRYnh9lFwD/AL5SrqZc6m1o1SYOGiPTeSKNchgR5Rk4ZgOUaFxH9JOucD8R2Ipsdjyv0nRlxAIvPnLAY8oQb2InRMg4qZ10u28cv9kV4dBesCbSWhmIXM2Li3K80uGxRKgy2YzabLFzEKZX1MXY7mTqL3gaKkyVTqX2MdkKoY7hcQG26jmP1ktFp/gkwhCIoIQhADyeEz2V+aYjSAo5t9om8WibxDOIxGprjkOUSKpkJakdVpza/pl20lJVkunUvK5Y4r2m000NMkZjiQlN3PRT8+k4xxHitV0B2G7evMzpHF+L0YY/xMo+W/6TkGPa4e/Mnl69YU9pG8LxspMQu+09wuFZ20gbxYQnpym64LyUFtbDtC76ovj4+z/8EZRwk2gMw52PpJr8PKu9gT2m/p4UBbDlIz4EXvMNp+nTPReYZHC5KFHID0lhhMFZdPYy/OFE8XCiGMrtJTVsGCLEStxGUjfYWPl95rThxEthwJaTIdIwGJyYA3K7ETIZthwjnadixOEVhYznnFuWlPFva/yly/TDklP1GPBk7A4rSwle57ReGa7D1mpzs61lieBWPMiaOg+0zmHxAVEHZR9paUcWNMmqORNax928fxl7hG2mNqY8FxbvNHgsTcSpeocUtZbO8qDjNFVSPQjuOskVsSAJQHEanmiQ7vMw3dNwwBHIi8XK3Kanh0n1H6yykNYdMvVp7CEIijyZ3EV9TE/Aeg5S1zWvppm3NvCPjz+l5RU6DR9dRnb/AAOC0fRhGThiesWmGIkdUQkyShEc2kUAiOBjKUlGd/ECoFoITy1i/wAjORZnX1PcDawnXePKBfCt/Cwb9Jx6ulzfykUso2l/1w8wNWx09zO28L5ZoopqFiQDOOcP4XXXQHkXUeu873UxKUUuxAAH2mHJjr38HRGzPn5JDKAJAr4tBzImE4g48a5WmBbcDf6zLHMcVVN2dgDvzsPl8JQ5Xvp1t8eg5ESLiM1VVuTMnw+j1mCM+/fuJf47h4BG8RvJTbNHMoo8y42VLqgZrfDfzlPU43c+7cHz3+e8bxmCRCbgEiNYT9mQ+PSB5y5aM6lotMDxbVY3K6gOY9eoPwlviSuMpMlrMV2/SxlXToYcjVSKsOuk3+m32lzlaLsVho1PhyXHYVqbsjghlJBBhgl8S+om1/EXAAFKw5k6WPfba8yGWUtVRVHUzWXqOPkXXTS5pmliAp5WiaOenTuT8zG6PDzu9jsCZoqfBi6Nyb+k0fCmlp5P9qeooMDmhZ9+82uBxxtMwnDRR7gmwPaa3AZdtNHClJF8SfonF482kXLK13kvH4A2NpXZZhmV95cziHTfZG7wD7AiXam4vM/gNhLvDPcW7TGjv434PT2EJBoVGaLqdV6KL/E7fYfWOUqO3KKfd28rD5CSUEek57o0tIdov2flHLieF4hjRpDtENTj94kmNICBjsIHRkYbMCJwniHANQqsjC1ibeYn0CwmI/ETh/21I1kHjQXPmo5xUtFLxmA4TS+Kw4HIuPopM6LxLhXc2LWXkF/vOf8AA4/4zDn+NvqjCdczbLmqCym3nOLlTb8O/ipTmnPcRlOHw6e0qEXPLVYlufJesoauYI9ygaw57Dry2m7xXDF9WpjUZhYggBR6SPguDLbWVB5XJPqY5bz1GjU7qfhF4Epl6use6OtjN/mNK4I8onJsrSggVfiZIxjC9jNInE9MbvtXn4Oa5/kTs11vY35byqThnXbUjm21wD+k6fWUDfmJ5SReYgkU61eoxGH4ZXw+BwVGxHhPnciaHLsv0AAg/Hf6y9QCNVmhgu34MZx9hg2GNh7rA+nQ/eYDhzDu1dCqMwB30qTYfCdN4mTXQqL/AAH7Sp4Uy/8A4YKjFWqAszA9eg8pU11Rk+LvWM1WAwyMQy2/UeRHQy6GGFuUyWQ4l6dTTUJv7pJ5sOSk+Y5ek2ofadM8nZacfJwf8qcspcThBfl1kvDYcWicVU3t5yXhm2Ett4YSlpGr4UGVy4Sz8peORIy21RpvAqU2O4anYSdhmsfXb+0YUbRyibEeszfpvHhYQhCQalNRrXZj/E33Mmq8y2V4y4v3MukrymjKb8Jj1Yy1eRXe8UiwwHRLRyYtYlBFwGeERFWmCCCLgixHcRyR8ZXCIWPTkO5OwHzgBzCtlq4bMk0bJrDAdgx3E6wNxMVjqVB2bUrPWW59pvpVh+Udh0moy/FB6aMOqj59Zxdl3eHc+OlC1ekkoIhmCwd5T4/F2v0lOkkKZdPCZic2SnTeox90kfSYmpxMa41qTv0IImnw+Wq9Mip7rb2vMZndCkjBaV7Dbc3me036dPHMrc+juG4grpV0uq+zbkwufgw+cvKWKdN+h39LzJ4DHMje6CP93BmiOcUyl32lif8AhfUcVcc4VqszmEx6O3ga8sGrbQ7EOSJnDXRx/Cw+kpMszh6WhUKvSKarafGh5FT8RJeZ4vmAekr+BqqOXpNa/Md7Wtb4SktQlSmvTUYh1qBK6bEGzfCahH2HpM9Vwwp09C/m2A6kmXdJfCPS024V4zk/l0nSz9EDFv4vjJ+FfYSFiEuY7hqZAnS/hwysZLqVJGR/FFVEJhTomIpr0mI+0cVoyqGLEhmiLL2sJA1mEkvTF5RcC3Y2mjoAyswuHs7r2dx8nIl5h6c0p+nNCZ4qSQiRS046qSNNlIKs9tHAs8IgXg2ZAzQ+4DyLj6AkfaTzIOar4AwFyjK/wB8X0vFS1MceUmVOGVaWGeow1GozMQeoJ2HykfhTGsysrDSNRZB/CSe8mZ/g2emqoRYDkOva0ziq2FqIrPfUtr/unmFM869T/wAPXXW4bb9bNo77H0mfxdcXu0nJiww5yhzVSeR6yOxMRn0m4niBdJW4AA3P6TNDFa21qpY9AFLA/GSMnyT21S9Q/wD5ob6ejHz8pps1xYprpQAW5BRb7S5e+tmi6z5K+mUOCr1TfR7McrtYcvIRypkzMulXLN6CwMTUxlR2sdh95b4FyAL/ABmvYmjMYWg9GqEfY9CORmgxFewO/SO5lRD2PUGU+Oc6SOok/kzb8KrH4i5vfaU2R6zVXR72sEEE3FuYHqNp7mtfa1/WTeBXBxSKepnTE+HFyU9Oo5bgXLB6huwGyjkL/rLwU4uklo/pm6xeI5tdPWVz0ItKckOJ4I9J6jITeOIk8Y7xStAeCykSIotG7xMY5phJfsYSSsKqphAKrHudXzG/1vJtOnPcULMD3H2ilMbfgkkmKCxQESWnheGFi4hjG2qxp60ZOjjNG3aMPViPaRYTow1Q0balL0x7pAuyDoCOoHeYjjFEqur02Jb81uQtax8uU32uRcZhkdSCo+UzrhTem8czlYYnLsx1Je/iAsw8x1jjZgDeVePwrUKrEDw3iqdMMwKt/mcHJDlnp8XIrnTV5YxVLjrvA4F6hJI0jzj2X1FVANto1mOfql1BFz9vWRC36FU03iITYNQ25vaTKJQTH4jPLsbsJT4jOmLHSxnVMHPXIdExlRQL9JQY2strzOvxAzLYne/Pncf795X43NiVCg/75yunpH/RYRs0rBnIXlean8OsuviUc81BPpMng6RZr7nsZ0zhLD+wZHfbWdDE+Y8PpymqaTSMKltOjoYbeLDyG9SxgcRtN8ObR2o8SHkVqlzPQ8MFo47wSpGGaCGMCYHjtMXIHmIwsk4VbkeW8llosoQhINCLjB4Se2/9/pISYiWplT+y6SR25SpZFJ7p61eI1kx5aUV7OMn0j6SYBJJ9nAJAMIjJGnQywKRmosAwiAQMdYRthGBS5vlwcHuZlcbl5poHXuQV5bjnab2ql5VNgBUSoh5o2of1D/E5v5M7O/o6v4t9az8MwDZ4w2swlNmOaFjLvOMq0MdNztex79fSZbEYUkk2Mw4lP06+aq+Ed8UbnzjPtDHHpARidKOF6KVzH6VIsRbrPKFEkzTZVlwsCRFVYVMuifwxldjdhztNFxZiBSwt+pdAvre88wACj0mP4xzv29QIh8FPb+Z/zH9JEbVGvJkzh0DhniBMSijVZ1FmUnfbqO4mjtPnyniGQ6lJBG4INiPjNFgONMSi2D6v5he3lOpV+zic/o67aOBZgMq/EHe2IQfzID9VmtwnE2FewWsgJ5BiFPyMfZMnq0T3E8QxwkMLqQR3BvG1WUIkI0s8CvhJ7/YSpQEkAcztL+mtgB2FpnRpIuEISSwjNZL7x6EAI4SeERbC08MoQ00TFsIARkjZEZqR8xirD8iYyYgiLMSYxDTCV64paeICsbCoun+obr89xE5znCUEZmO4BNpzb/5p8SHqPsA9kAvsAL3v3mPM/wCuGvCv7adDzvLUe5Kgnv8ArMxWyWyE6RbffqPUGMZfxoVAp1xqA2FTr5ah19ZqsBjEqL4WBB3HKebSqWepFJr9nLM1wGg2t8JWphSZ0biDKrnUJQUsIFPKdEcvhnycKb1FZluX73O00KuF2+kZYBRKPNc203RN26t+76ectJ2zJ5CJOeZ4QppodzsxHQdvWZhWiCbwvOiZ6o5bp0xTttCm20Q5ntLrLMx4VIs1JGtHl5QzSidgc1q0gdFR08gdvkeU0OU8ZYhCC7+0XkQ1h8jMYWlpkGXPiq6Yel7zndrXCKN3dvID5mw6xZgvv07nwfmIxVM1ghUKdIvbc2BNvS4+c08g5PlqYailCn7qKACebHmWJ6km5PrJ8G9Glh5PYQiGEIQgAllvGo9EssaYDVoET2EoQ00i1TJTmZrPeIqWH8JbU9tlG5huCaLOrUVRqYgAdTMxmnEikH2bWVRu/T4GZLMs7q4l9LGyk+7/AHlHxJmIstJDtzf9B95Dpv4UpS+is7zVqylgTpuevO0hZFivA6H97UPiLH7CM1dqKjuL/PeR8nbxsO67fAyc8KVYyXiGkahjalM3R2Q+R/SWOHwRq69LKCmk6WNme5Ism2/L6yrr0SvMEeoIi6ofZr1GuyTip6oNKuAx/K/L4MOvrJVY9ZiMESrqZq/2oMt5zXCl+HXxcjqcZHxtc2mVqnxH1Mv8Y4tuQB3MoE8bgd2m/EvDn5q9E27Qlni6GikGCEKx8L/vEbHeVN5uYHjneeod4hecWOcAFdYtWibRN7QJFNudhcnYAbkk8gAOZnd/w24P/YqXtqyj9pqjxcj7JNiKYPfYFrdbDcKDKL8M+BdOjG4keK2qjSII0dqjg/mtYqOl787W6rEykj2EIRDCEIQAIQhAAhCEAEMsrcyzWnQUtUcLbpff5S0me4o4Xp4xbk6KqjwVBv6Bx+Zd/UdCN7tMDA8RcePUulA6F/esLmYxMQWJd2JPO5NzHuIMixODbTXTSD7rqdVN/JWsN/IgHytKrBJrqBfifQC8H6ItHr6Tr6AXPy2lC7l3LE3JMm5tiR7i9PePc/4kLDLvDBkzF+4B2FpBy97VE9bfOTK5uD6SuUWMWCL7LsToxF7XP5d7C/S/lLHN6zPRKsANLqbjludJIPLmenaUlCuy1FZCwZtgVO51bEfGWlRajU313K2sLkeFudlW9xy7RqfBlTQdAQovcm2rp/iWSqRM9VWX74gNQL9dBv8AzWsZnUmkVhVPUD1SXF0QHa+xt3+MRlaA1RtsAxt8Db6kSKjWBHfaWGSghyVG4U2uARzHeaSsMqrR3H1tSG4Xcg7ADkT7vaVRl5nQIRdra21NsoAIHJAOS+Uo2jZIlecWBvPAJZ5JktfFVPZ4emXbbUeSID+Z3Oyj6m2wMQECxOw3uQABuSTsAB1M6z+H34e6bYnGoNWzUqLfksbh6g5auVlPLrvsL7grgGng9NWrapiLe9+SlfmKYPM2NtR3520gkTbw0pI9hCEQwhCEACEIQAIQhAAhCEACEIQAjY3BpWQ06qK6MLMrC4PwnO80/DFULVME5BINqVRrr/Q/MdrNf1nTYQA+Wc4wFWhUKV6b03udnFtXmjcmHmCREYcT6hxWFSopSoiup2KsoYH1BmLzf8McJUu1Ath27L4qf/jY7DyUgR6LDi78jINt50HMvw0x1O/swlZemhgjkdyj2A9AxmXzDhjG0ffwtYDuEZ1+LJcD4mMCvA8APY8/rNAXDhGupBFrAAeuq3XzlLRHhZDsQd1OxHqDyl3ltZmpe4hAOx0gOehIYc/jHK0TM5XTSxHYmKWtZGTva3z3knN001D5gN85X6wTa4v0F9ye0TXoJgqy84bwwdnuwQWUaiL6d73sI1gOHcVV2p4as3n7N1X/AL2AX6zc8KcD4sBva0xTu4NndTcACxAQsed9jb9YIEZbi9EDqEqF7XuSpXsAOdunaZzB4V6rhKaM7nkiKWb5Dp5zvVf8P8NVq+1r6n2HgUlKexvchTqPzt5TTZfl1KgoSjTSmo/KihR9OcGx4cq4b/Cl2s+NfQP+lTIL/wBT8h6C/rOo5TlNHDUxToU1RBvYDcnuxO7HzMsISRhCEIAEIQgAQhCABCEIAEIQgAQhCABCEIAEIQgAQhCABCEIAUvEnuCchzT8/wDMv3hCaR9JZGX/AJqfyj/2adZ4S5fCEIq+gjUQhCQUEIQgAQhCABCEIAEIQgAQhCABCEIAf//Z"
                                                        class="rounded-full shadow-md"
                                                        alt="woman avatar"
                                                    />
                                                </div>
                                                <div class="md:ml-6">

                                                    <p class="text-gray-500 font-light mb-6">
                                                        One of the Best tailors, In the market to Deilver quiality stitching and Design. Highly Recomended ....!
                                                        <ul class="flex justify-start mt-2">
                                                            <li>
                                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                                    <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                                                </svg>
                                                            </li>
                                                            <li>
                                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                                    <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                                                </svg>
                                                            </li>
                                                            <li>
                                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                                    <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                                                </svg>
                                                            </li>
                                                            <li>
                                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                                    <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                                                </svg>
                                                            </li>
                                                            <li>
                                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                                    <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                                                </svg>
                                                            </li>
                                                        </ul>
                                                    </p>
                                                    <p class="font-semibold text-xl mb-2 text-gray-800">Muhammad Rafeh Atique</p>
                                                    {/* <p class="font-semibold text-gray-500 mb-0">Rawalpindi</p> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <div class="absolute top-28 right-6">

                                <div class="shadow-lg rounded-lg overflow-hidden">
                                    <div class="py-3 px-5 bg-gray-50">Orders History</div>
                                    <canvas class="p-10" id="chartDoughnut"></canvas>
                                </div>
                            </div>
                        </>
                        //    <TailorDashboard />
                    )}
                    {
                        isProfile && (
                            <TailorProfile finalData={data} />
                        )
                    }
                    {
                        isOrders && (
                            <TailorOrders />
                        )
                    }
                </div>
            </main >
        </>
    )

}

export default dashboard