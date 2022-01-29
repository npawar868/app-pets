import react from 'react'
import {Route,  Routes} from 'react-router-dom'
import Login from './Components/Login'
import Registration from './Components/Registration'
import PetList from './Components/PetList'

export const RouterComponent = ()=>{
    return (<>
        < Routes>
            {/* <Route path="/" element={<HomeComponent/>}></Route> */}
            <Route path = "/login" element = {<Login/>}></Route>
            <Route path = "/registration" element = {<Registration/>}></Route>
            <Route path = "/pet/list" element = {<PetList/>}></Route>
            {/* <Route path="/Product/:id" element={<ProductComponent/>}></Route> */}
        </ Routes>
    </>)
}
