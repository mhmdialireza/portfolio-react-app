import {
    Home,
    Course,
    Category,
    Article,
    Courses,
    Login,
    Register
} from "./pages";

const routes = [
    { path: '/', element: <Home /> },
    { path: '/course/:courseName', element: <Course /> },
    { path: '/courses', element: <Courses /> },
    { path: '/category/:categoryName', element: <Category /> },
    { path: '/article/:ArticleName', element: <Article /> },
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
]

export default routes;