import {
    Home,
    Course,
    Category,
    Article,
    Courses
} from "./pages";

const routes = [
    { path: '/', element: <Home /> },
    { path: '/course/:courseName', element: <Course /> },
    { path: '/courses', element: <Courses /> },
    { path: '/category/:categoryName', element: <Category /> },
    { path: '/article/:ArticleName', element: <Article /> },
]

export default routes;