import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
//import { AnimalCard } from './components/animal/AnimalCard.js'
import { AnimalList } from "./components/animal/AnimalList.js"
import { CustomerCard } from './components/customer/CustomerCard.js'
import { EmployeeCard } from './components/employee/EmployeeCard.js'
import { LocationCard } from './components/location/LocationCard.js'


export const ApplicationViews = () => {
    return (
        <>
            <Routes>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/" element={<Home />} />

                {/* Render the animal list when http://localhost:3000/animals */}
                <Route path="/animals" element={<AnimalList />} />

                {/* Render the animal list when http://localhost:3000/customers */}
                <Route path="/customers" element={<CustomerCard />} />

                {/* Render the animal list when http://localhost:3000/customers */}
                <Route path="/employees" element={<EmployeeCard />} />

                {/* Render the animal list when http://localhost:3000/customers */}
                <Route path="/locations" element={<LocationCard />} />
            </Routes>
        </>
    )
}

// add on other cards after AnimalCard! ^
// + make sure you update the imports!
