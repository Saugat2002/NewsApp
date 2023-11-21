import { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
});

const apiKey = import.meta.env.VITE_REACT_APP_NEWS_API_KEY;

export class App extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <>
        <Router>
          <ThemeProvider theme={theme}>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<News key="general" pageSize={9} country="us" apiKey={apiKey} category="general" />} />
              <Route exact path="/business" element={<News key="business" pageSize={9} country="us" apiKey={apiKey} category="business" />} />
              <Route exact path="/entertainment" element={<News key="entertainment" pageSize={9} country="us" apiKey={apiKey} category="entertainment" />} />
              <Route exact path="/health" element={<News key="health" pageSize={9} country="us" apiKey={apiKey} category="health" />} />
              <Route exact path="/science" element={<News key="science" pageSize={9} country="us" apiKey={apiKey} category="science" />} />
              <Route exact path="/sports" element={<News path="/sports" pageSize={9} country="us" apiKey={apiKey} category="sports" />} />
              <Route exact path="/technology" element={<News key="technology" pageSize={9} country="us" apiKey={apiKey} category="technology" />} />
            </Routes>
          </ThemeProvider>
        </Router>
      </>
    )
  }
}

export default App