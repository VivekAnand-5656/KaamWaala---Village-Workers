import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./components/Home"
import Workers from "./components/Workers"
import Find from "./components/Find"
import Signup from "./components/Signup"
import Login from "./components/Login"
import { useState } from "react"
import Post from "./components/Post"
import ViewJob from "./components/ViewJob"

 


function App() { 
   const [workers,setWorkers] = useState([]);
   const [jobs,setJobs] = useState([]);
   return <> 
       <BrowserRouter>
       <Routes>
         <Route path="/" element={<Layout/>} >
            <Route index element={<Home/>} />
            <Route path="registerlabour" element={<Workers workers={workers} setWorkers={setWorkers} />} />
            <Route path="findlabour" element={<Find workers={workers} />} />
            <Route path="postjob" element={<Post jobs={jobs} setJobs={setJobs} />} />
            <Route path="viewjobs" element={<ViewJob jobs={jobs} />} />
            <Route path="signup" element={<Signup/>} />
            <Route path="login" element={<Login/>} /> 
         </Route>
       </Routes>
       </BrowserRouter>
   </>
}

export default App
