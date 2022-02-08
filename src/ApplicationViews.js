import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { AnimalCard } from './components/animal/AnimalCard.js'
import { CustomerCard } from './components/customer/CustomerCard.js'


export const ApplicationViews = () => {
    return (
        <>
            <Routes>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/" element={<Home />} />

                {/* Render the animal list when http://localhost:3000/animals */}
                <Route path="/animals" element={<AnimalCard />} />

                {/* Render the animal list when http://localhost:3000/customers */}
                <Route path="/customers" element={<CustomerCard />} />
            </Routes>
        </>
    )
}

// add on other cards after AnimalCard! ^
// + make sure you update the imports!

// check render at beginning of class; between chap 7 - 8

// ***push your code and api up to github, Damn