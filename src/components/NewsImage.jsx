import { Component } from 'react'
import PropTypes from 'prop-types'
import CardMedia from '@mui/material/CardMedia';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export class NewsImage extends Component {

  constructor(){
    super();
    this.state = {
      imageError: false,
    }
  }

  static propTypes = {
    imageUrl: PropTypes.string,
  }

  handleImageError = () => {
    this.setState({imageError: true})
  };

  render() {
    return (
      <>
        {(this.props.imageUrl && !this.state.imageError) ?
          <CardMedia
            component="img"
            alt="News Image"
            sx={{
              height: 140,
              objectFit: 'contain',
            }}
            image={this.props.imageUrl}
            onError={this.handleImageError}
          /> :
          <CardMedia
            sx={
              {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }
            }
          >
            <ErrorOutlineIcon sx={{
              height: 160,
              width: 100,
              objectFit: 'cover',

            }} />
          </CardMedia>
        }
      </>
    )
  }
}

export default NewsImage