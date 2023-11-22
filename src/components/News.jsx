import { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
import Loading from './Loading';
import { Grid, Box, Typography } from '@mui/material';
import Item from '@mui/material/Grid';
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      totalResults: 0,
      page: 1,
      progress: 0,
    }
  }

  url = ""
  endScroll = false

  static propTypes = {
    pageSize: PropTypes.number.isRequired,
    country: PropTypes.string.isRequired,
    apiKey: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    searchTerm: PropTypes.string,
    setProgress: PropTypes.func.isRequired,
  }

  static defaultProps = {
    pageSize: 15,
    country: "us",
    apiKey: "de3a70d050c44caaabacf67e80d4ea3f",
    category: "general",
    searchTerm: "",
  }

  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }


  async updateNews(pageNo) {
    this.props.setProgress(10);
    if (this.props.searchTerm === "") {
      this.url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${pageNo}&pageSize=${this.props.pageSize}`;
    }
    else {
      this.url = `https://newsapi.org/v2/everything?q=${this.props.searchTerm}&apiKey=${this.props.apiKey}&page=${pageNo}&pageSize=${this.props.pageSize}`;
    }
    let data = await fetch(this.url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
      page: pageNo,
    })
    this.props.setProgress(100);
    document.title = `TazaKhabar - ${this.capitalize(this.props.searchTerm ? `Search Results - ${this.props.searchTerm}` : this.props.category)}`;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.searchTerm !== this.props.searchTerm) {
      this.setState({
        loading: true,
      });
      this.updateNews(1);
      window.scrollTo(0, 0);
    }
  }

  async componentDidMount() {
    this.updateNews(this.state.page);
  }

  fetchMoreData = async () => {
    if (this.props.searchTerm === "") {
      this.url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    }
    else {
      this.url = `https://newsapi.org/v2/everything?q=${this.props.searchTerm}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    }
    let data = await fetch(this.url);
    let parsedData = await data.json();
    console.log(parsedData);
    if (parsedData.articles.length < this.props.pageSize) {
      this.endScroll = true;
    }
    this.setState({
      page: this.state.page + 1,
      articles: this.state.articles.concat(parsedData.articles),
    })
  }

  render() {
    return (
      <>
        <Box marginTop={12} marginBottom={3}>
          < Typography variant="h4" fontWeight={600} color="initial" textAlign="center" sx={{ fontSize: { "xs": 18, "sm": 20, "md": 22, "lg": 24 } }}>Latest News - {this.capitalize(this.props.searchTerm ? this.props.searchTerm : this.props.category)}</Typography>

          {this.state.loading && <Loading />}

          {(this.state.totalResults !== 0) ?
            <Box sx={{ flexGrow: 1 }} marginY={3} >
              <InfiniteScroll
                dataLength={this.state.articles.length}
                next={this.fetchMoreData}
                hasMore={!(this.endScroll)}
                loader={<Loading />}
              >
                <Grid display="flex" alignItems="flex-start" container rowSpacing={4} columnSpacing={{ xs: 2, sm: 3, md: 4 }} columns={{ xs: 2, sm: 8, md: 12 }}>
                  {this.state.articles.map((element) => (
                    <Grid display="flex" justifyContent="center" alignItems="center" item xs={2} sm={4} md={4} key={element.url}>
                      <Item>
                        <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />

                      </Item>
                    </Grid>
                  ))}
                </Grid>
              </InfiniteScroll>
            </Box>
            : <Typography variant="h6" fontWeight={300} color="initial" marginTop={20} textAlign="center" sx={{ fontSize: { "xs": 18, "sm": 20, "md": 22, "lg": 24 } }}>No News Found</Typography>
          }
        </Box >
      </>
    )
  }
}



export default News