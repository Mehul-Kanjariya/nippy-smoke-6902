import Home from "./Components/Home";
import { Box } from "@chakra-ui/react";
import Router from "./AllRoutes/AllRoutes";

function App() {
  return (
    <Box className="App" backgroundColor="#f5f5f5">
      <Router/>
      {/* <Home/> */}
    </Box>
  );
}

export default App;
