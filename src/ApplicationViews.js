import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
//import { AnimalCard } from './components/animal/AnimalCard.js'
import { AnimalList } from "./components/animal/AnimalList.js"
import { AnimalDetail } from "./components/animal/AnimalDetail"
import { CustomerList } from './components/customer/CustomerList.js'
import { EmployeeList } from './components/employee/EmployeeList.js'
import { LocationList } from './components/location/LocationList.js'
import { LocationDetail } from './components/location/LocationDetail.js'


export const ApplicationViews = () => {
    return (
        <>
            <Routes>
                {/* Render the Home when http://localhost:3000/ */}
                <Route exact path="/" element={<Home />} />

                {/* Render the animal list when http://localhost:3000/animals */}
                <Route exact path="/animals" element={<AnimalList />} />
                <Route path="/animals/:animalId" element={<AnimalDetail />} />
                {/*
                This is a new route to handle a URL with the following pattern:
                http://localhost:3000/animals/1

                It will not handle the following URL because the `(\d+)`
                matches only numbers after the final slash in the URL
                http://localhost:3000/animals/jack
                */}


                {/* Render the customer list when http://localhost:3000/customers */}
                <Route path="/customers" element={<CustomerList />} />

                {/* Render the employee list when http://localhost:3000/employees */}
                <Route path="/employees" element={<EmployeeList />} />

                {/* Render the location list when http://localhost:3000/locations */}
                <Route exact path="/locations" element={<LocationList />} />
                <Route path="/locations/:locationId" element={<LocationDetail />} />

            </Routes>
        </>
    )
}

// Stopped at beginning of Chapter 13