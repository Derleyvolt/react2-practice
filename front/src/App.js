import LoginPage from './LoginPage';
import Todo from "./Todo";
import Navbar from './Navbar';
import Table from './Table';
import { createBrowserRouter, RouterProvider, BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Navbar/>,
        children: [
            {
                path: "todo/:id",
                element: <Todo />,
            },
            {
                path: '/table',
                element: <Table/>
            }
        ]
    },
    {
        path: '/login',
        element: <LoginPage/>
    },
]);

function App() {
    return (
        //<div className='t-body'>
            <RouterProvider router={router}> </RouterProvider>
        //</div>
    );
}

export default App;
