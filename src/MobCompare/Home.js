import React, { createContext, useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Compare from './Compare'
import Detail from './Detail'
import Mob from './Mob'
import { createServer } from "miragejs"
import axios from "axios"
import honor20 from '../images/honor20.png'
import iphone11 from '../images/iphone11.png'
import iphone11pro from '../images/iphone11pro.png'
import lg from '../images/lg.png'
import oneplus from '../images/oneplus.png'
import "./Mob.css"
import Header from './Header'


export  const detailcontext = createContext(null)


createServer({
    routes() {
        this.get("/api/products", () => [
            {
                id: "B07V7ZWFJB",
                brand: "Honor",
                model: "Honor 20",
                rear_camera: "48MP + 16MP + 2MP + 2MP",
                front_camera: "32MP",
                screen: "6.25inch FHD",
                storage: "128gb",
                os: "Android v9",
                cost: 291.8,
                image: honor20
            },
            {
                id: "B07XVLW7YK",
                brand: "Apple",
                model: "iPhone 11 (128GB) - Black",
                rear_camera: "12MP ultra wide & wide cameras",
                front_camera: "12MP TrueDepth camera",
                screen: "6.1-inch liquid Retina HD",
                storage: "128gb",
                os: "Apple iOS",
                cost: 858.21,
                image: iphone11
            },
            {
                id: "B07XVMJF2D",
                brand: "Apple",
                model: "iPhone 11 Pro (256GB) - Gold",
                rear_camera: "Triple-camera system with 12MP",
                front_camera: "12MP TrueDepth camera",
                screen: "5.8-inch Super Retina XDR",
                storage: "256gb",
                os: "Apple iOS",
                cost: 1506.16,
                image: iphone11pro
            },
            {

                id: "B082P36B9X",
                brand: "LG",
                model: "LG G8X - Dual Screen (Aurora Black)",
                rear_camera: "12MB OIS + 13MP Wide",
                front_camera: "32MP",
                screen: "6.4-inch Dual OLED",
                storage: "128gb",
                os: "Android 9 (Pie)",
                cost: 661.18,
                image: lg
            },
            {
                id: "B07DJ8K2KT",
                brand: "OnePlus",
                model: "OnePlus 7T Pro (256GB)",
                rear_camera: "48MP + 16MP + 8MP Triple camera",
                front_camera: "16MP",
                screen: "6.67-inch 90Hz fluid display",
                storage: "256gb",
                os: "Oxygen OS",
                cost: 714.07,
                image: oneplus
            }
        ])
    }
})





function Home() {
    let [product, setproduct] = useState([])
    const [compare, setcompare] = useState([])
    const [] = useState([])
    useEffect(() => {
        async function getdata() {
            let response = await axios.get("/api/products")
            setproduct(response.data)
        }
        getdata()
    }, [])

        

    return (
        <detailcontext.Provider value={{ product , setproduct , compare , setcompare }}>
            <BrowserRouter>
                <Header></Header>
                <Routes>
                    <Route path='/' element={<Mob />} ></Route>
                    <Route path='/Compare' element={<Compare />} ></Route>
                    <Route path='/Detail/:id' element={<Detail />}></Route>
                </Routes>
            </BrowserRouter>
        </detailcontext.Provider>
    )
}

export default Home