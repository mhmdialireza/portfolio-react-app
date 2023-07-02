import { Home, Course, Category, Article } from "./pages";

const routes = [
    { path: '/', element: <Home /> },
    { path: '/course/:courseName', element: <Course /> },
    { path: '/category/:categoryName', element: <Category /> },
    { path: '/article/:ArticleName', element: <Article /> },
]

export default routes;