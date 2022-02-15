import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
//import { AnimalCard } from './components/animal/AnimalCard.js'
import { AnimalList } from "./components/animal/AnimalList.js"
import { CustomerList } from './components/customer/CustomerList.js'
import { EmployeeList } from './components/employee/EmployeeList.js'
import { LocationList } from './components/location/LocationList.js'


export const ApplicationViews = () => {
    return (
        <>
            <Routes>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/" element={<Home />} />

                {/* Render the animal list when http://localhost:3000/animals */}
                <Route path="/animals" element={<AnimalList />} />

                {/* Render the animal list when http://localhost:3000/customers */}
                <Route path="/customers" element={<CustomerList />} />

                {/* Render the animal list when http://localhost:3000/customers */}
                <Route path="/employees" element={<EmployeeList />} />

                {/* Render the animal list when http://localhost:3000/customers */}
                <Route path="/locations" element={<LocationList />} />
            </Routes>
        </>
    )
}

// add on other cards after AnimalCard! ^
// + make sure you update the imports!
