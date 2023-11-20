import { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "./index.css";

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
});


export class App extends Component {

  constructor(){
    super();
    this.state = {
      category: "general"
    }
  }

  handleBusinessClick = () => {
    this.setState({
      category: "business",
    });
  }

  render() {
    return (
      <>
        <ThemeProvider theme={theme}>
          <Navbar handleBusinessClick = {this.handleBusinessClick}/>
          <News pageSize={9} country="us" apiKey="de3a70d050c44caaabacf67e80d4ea3f" category={this.state.category}/>
        </ThemeProvider>
      </>
    )
  }
}

export default App