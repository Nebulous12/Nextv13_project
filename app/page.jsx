'use client'

import Link from "next/link"
import CourseSearch from "./components/CourseSearch"
import LoadingPage from "./loading"
import { useState, useEffect } from "react"
import Courses from "./components/Courses"

const HomePage = () => {
        const [courses, setCourses] = useState([])
        const [loading, setLoading] = useState(true)

        useEffect(()=> {
               const fetchCourses = async ()=> {
                const res = await fetch('/api/courses')
                const data = await res.json();
                setCourses(data)
                setLoading(false);
               }
               fetchCourses()
        }, [])
        if(loading){
          return <LoadingPage />
        }
  return (
   
    <>
                <h1>Welcome</h1>
                <CourseSearch getSearchResults={(results)=>setCourses(results)} />
                <Courses courses={courses} />
              
    </>

  )
}

export default HomePage