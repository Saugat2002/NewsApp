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

  pageSize = 9;
  country = "in";

  constructor() {
    super();
    this.state = {
      searchTerm: "",
    }
  }

  handleEnterPress = (event) => {
    if (event.key === "Enter") {
      this.setState({
        searchTerm: event.target.value,
      });
    }
  }

  resetSearchTerm = () => {
    this.setState({
      searchTerm: "",
    });
  }

  render() {
    return (
      <>
        <Router>
          <ThemeProvider theme={theme}>
            <Navbar handleSearchChange={this.handleSearchChange} handleEnterPress={this.handleEnterPress} resetSearchTerm={this.resetSearchTerm}/>
            <Routes>
              <Route exact path="/" element={<News key="general" pageSize={this.pageSize} country={this.country} apiKey={apiKey} category="general" searchTerm={this.state.searchTerm} />} />
              <Route exact path="/business" element={<News key="business" pageSize={this.pageSize} country={this.country} apiKey={apiKey} category="business" searchTerm={this.state.searchTerm} />} />
              <Route exact path="/entertainment" element={<News key="entertainment" pageSize={this.pageSize} country={this.country} apiKey={apiKey} category="entertainment" searchTerm={this.state.searchTerm} />} />
              <Route exact path="/health" element={<News key="health" pageSize={this.pageSize} country={this.country} apiKey={apiKey} category="health" searchTerm={this.state.searchTerm} />} />
              <Route exact path="/science" element={<News key="science" pageSize={this.pageSize} country={this.country} apiKey={apiKey} category="science" />} searchTerm={this.state.searchTerm} />
              <Route exact path="/sports" element={<News path="/sports" pageSize={this.pageSize} country={this.country} apiKey={apiKey} category="sports" />} searchTerm={this.state.searchTerm} />
              <Route exact path="/technology" element={<News key="technology" pageSize={this.pageSize} country={this.country} apiKey={apiKey} category="technology" searchTerm={this.state.searchTerm} />} />
            </Routes>
          </ThemeProvider>
        </Router>
      </>
    )
  }
}

export default App;