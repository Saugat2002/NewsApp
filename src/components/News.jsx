import { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
import Loading from './Loading';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    }
  }

  static propTypes = {
    pageSize: PropTypes.number.isRequired,
    country: PropTypes.string.isRequired,
    apiKey: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired
  }

  static defaultProps = {
    pageSize: 15,
    country: "us",
    apiKey: "de3a70d050c44caaabacf67e80d4ea3f",
    category: "general"
  }

  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    let filteredArticles = parsedData.articles.filter((element) => {
      return (element.title !== "[Removed]" && element.title)
    });
    console.log(filteredArticles);
    this.setState({
      articles: filteredArticles,
      totalResults: parsedData.totalResults,
      loading: false,
    })
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    let filteredArticles = parsedData.articles.filter((element) => {
      return (element.title !== "[Removed]" && element.title)
    });
    this.setState({
      articles: filteredArticles,
      page: this.state.page - 1,
      loading: false,
    })
  }

  handleNextClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    let filteredArticles = parsedData.articles.filter((element) => {
      return (element.title !== "[Removed]" && element.title)
    });
    if (filteredArticles.length > 0) {
      this.setState({
        articles: filteredArticles,
        page: this.state.page + 1,
        loading: false,
      })
    }
  }

  render() {
    return (
      <>
        <Box marginTop={12} marginBottom={3}>
          <Typography marginLeft={5} variant="h4" fontWeight={600} color="initial" textAlign={{ xs: "center", md: "left", lg: "left" }} sx={{ fontSize: { "xs": 16, "sm": 20, "md": 22, "lg": 24 } }}>Latest News - {this.capitalize(this.props.category)}</Typography>
          {this.state.loading ? <Loading /> :
            <Box sx={{ flexGrow: 1 }} marginY={3} >
              <Grid display="flex" container rowSpacing={4} columnSpacing={{ xs: 2, sm: 3, md: 4 }} columns={{ xs: 2, sm: 8, md: 12 }}>
                {this.state.articles.map((element) => (
                  <Grid display="flex" justifyContent="center" alignItems="center" item xs={2} sm={4} md={4} key={element.url}>
                    <Item><NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} /></Item>
                  </Grid>
                ))}
              </Grid>
            </Box>
          }
          <Box marginX={5} display="flex" justifyContent="space-between" >
            <Button disabled={this.state.page <= 1} color="secondary" variant="contained" onClick={this.handlePrevClick} sx={{ fontSize: { "xs": 8, "sm": 10, "md": 12, "lg": 14 } }}>&larr; Previous</Button>
            <Button disabled={Math.ceil(this.state.totalResults / this.props.pageSize) < this.state.page + 1} color="secondary" variant="contained" onClick={this.handleNextClick} sx={{ fontSize: { "xs": 8, "sm": 10, "md": 12, "lg": 14 } }}>Next &rarr;</Button>
          </Box>
        </Box>
      </>
    )
  }
}



export default News