import {
    Home,
    Course,
    Category,
    Article,
    Courses,
    Login,
    Register,
    Articles,
    Contact
} from "./pages";

const routes = [
    { path: '/', element: <Home /> },
    { path: '/course-info/:courseName', element: <Course /> },
    { path: "/courses/:page", element: <Courses /> },
    { path: "/category-info/:categoryName/:page", element: <Category /> },
    { path: '/article-info/:articleName', element: <Article /> },
    { path: "/articles/:page", element: <Articles /> },
    // { path: "/search/:value", element: <Search /> },
    { path: "/contact", element: <Contact /> },
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },


]

export default routes;