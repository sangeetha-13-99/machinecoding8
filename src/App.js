import { createBrowserRouter,RouterProvider} from "react-router-dom"
import './App.css';
import { Box } from "@chakra-ui/react";
import { Home } from "./components/Home";
import { Events } from "./components/Events";
import { EventDetail } from "./components/EventDetail";



function App() {

  const router=createBrowserRouter([
    {path:"/", element:<Home/>, children:[
      {path:"/",element:<Events/>},
      {path:"/:eventDetailId", element:<EventDetail/>},
    ]}
  ])
  return (
    <Box className="App" h="100vh">
      <RouterProvider router={router}/>
    </Box>
  );
}

export default App;
