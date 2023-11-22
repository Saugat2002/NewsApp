import { Component } from 'react'
import PropTypes from 'prop-types'
import {CardMedia} from '@mui/material';

export class NewsImage extends Component {

  constructor() {
    super();
    this.state = {
      imageError: false,
    }
  }

  static propTypes = {
    imageUrl: PropTypes.string,
  }

  handleImageError = () => {
    this.setState({ imageError: true })
  };

  render() {
    return (
      <>
        <CardMedia
          component="img"
          alt="News Image"
          sx={{
            height: 140,
            objectFit: 'cover',
          }}
          image={(this.props.imageUrl && !this.state.imageError) ? this.props.imageUrl : "/news.jpg"}
          onError={this.handleImageError}
        />
      </>
    )
  }
}

export default NewsImage