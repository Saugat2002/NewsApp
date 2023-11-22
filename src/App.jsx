import { Component } from 'react'
import News from './components/News'
import Navbar from './components/Navbar'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
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
      progress: 0,
    }
  }

  setProgress = (progress) => {
    this.setState({
      progress: progress,
    })
  }

  handleEnterPress = (event) => {
    if (event.key === "Enter") {
      this.setState({
        searchTerm: event.target.value,
      });
    }
  }

  handleNavClick = () => {
    this.setState({
      searchTerm: "",
    });
    
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Router>
          <ThemeProvider theme={theme}>
            <Navbar handleEnterPress={this.handleEnterPress} handleNavClick={this.handleNavClick} />
            <LoadingBar progress={this.state.progress} onLoaderFinished={() => {
              this.setState({
                progress: 0,
              })
            }}/>
            <Routes>
              <Route exact path="/" element={<News setProgress={this.setProgress} key="general" pageSize={this.pageSize} country={this.country} apiKey={apiKey} category="general" searchTerm={this.state.searchTerm} />} />
              <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" pageSize={this.pageSize} country={this.country} apiKey={apiKey} category="business" searchTerm={this.state.searchTerm} />} />
              <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} country={this.country} apiKey={apiKey} category="entertainment" searchTerm={this.state.searchTerm} />} />
              <Route exact path="/health" element={<News setProgress={this.setProgress} key="health" pageSize={this.pageSize} country={this.country} apiKey={apiKey} category="health" searchTerm={this.state.searchTerm} />} />
              <Route exact path="/science" element={<News setProgress={this.setProgress} key="science" pageSize={this.pageSize} country={this.country} apiKey={apiKey} category="science" />} searchTerm={this.state.searchTerm} />
              <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports" pageSize={this.pageSize} country={this.country} apiKey={apiKey} category="sports" />} searchTerm={this.state.searchTerm} />
              <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" pageSize={this.pageSize} country={this.country} apiKey={apiKey} category="technology" searchTerm={this.state.searchTerm} />} />
            </Routes>
          </ThemeProvider>
        </Router>
      </>
    )
  }
}

export default App;