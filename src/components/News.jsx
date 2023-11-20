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
    console.log(filteredArticles);
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
    console.log(filteredArticles);
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
          <Typography marginLeft={5} variant="h4" fontWeight={600} color="initial">Latest News</Typography>
          {this.state.loading && <Loading />}
          {!this.state.loading &&
            <Box sx={{ flexGrow: 1 }} marginY={3} >
              <Grid display="flex" container rowSpacing={4} columnSpacing={{ xs: 2, sm: 3, md: 4 }} columns={{ xs: 2, sm: 8, md: 12 }}>
                {this.state.articles.map((element) => (
                  <Grid display="flex" justifyContent="center" alignItems="center" item xs={2} sm={4} md={4} key={element.url}>
                    <Item><NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} /></Item>
                  </Grid>
                ))}
              </Grid>
            </Box>
          }
          <Box marginX={5} display="flex" justifyContent="space-between" >
            <Button disabled={this.state.page <= 1} color="secondary" variant="contained" onClick={this.handlePrevClick}>&larr; Previous</Button>
            <Button disabled={Math.ceil(this.state.totalResults / 18) < this.state.page + 1} color="secondary" variant="contained" onClick={this.handleNextClick}>Next &rarr;</Button>
          </Box>
        </Box>
      </>
    )
  }
}



export default News