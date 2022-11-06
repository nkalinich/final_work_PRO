import { BrowserRouter, Routes,Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./reducer/store"

import Main from "./pages/Main";
import Quiz from "./pages/Quiz";
import Final from "./pages/Final";

import { Container } from "@mui/material";
import { Box } from "@mui/system";

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Container maxWidth="sm">
            <Box textAlign="center" mt={10}>
              <Routes>
                <Route exact path="/" element={<Main />} />
                <Route path="/question" element={<Quiz />} />
                <Route path="/score" element={<Final />} />
              </Routes>
            </Box>
          </Container>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;