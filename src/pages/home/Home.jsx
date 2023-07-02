import React from 'react'
import {
  AboutUs,
  Footer,
  Header,
  LastArticles,
  LastCourses,
  PopularCourses,
  PresellCourses
} from '../../components'

const Home = () => {
  return (
    <>
      <Header />
      <LastCourses />
      <AboutUs />
      <PopularCourses />
      <PresellCourses />
      <LastArticles />
      <Footer />
    </>
  )
}

export default Home