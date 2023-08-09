import LoginPage from './LoginPage';
import Todo from "./Todo";
import Navbar from './Navbar';
import Table from './Table';
import { createBrowserRouter, RouterProvider, BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';

const router = createBrowserRouter([
    {
        path: '/project',
        element: <Navbar/>,
        children: [
            {
                path: "/project/todo/:id",
                element: <Todo />,
            },
            {
                path: '/project/table',
                element: <Table/>
            }
        ]
    },
    {
        path: '/',
        element: <LoginPage/>,
    },
]);

function App() {
    return (
        <RouterProvider router={router}> </RouterProvider>
    );
}

export default App;
