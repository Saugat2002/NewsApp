import { Component } from 'react';
import { PropTypes } from 'prop-types';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export class NewsItem extends Component {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    imageUrl: PropTypes.string,
    newsUrl: PropTypes.string,
  }

  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (

      <Card sx={{
        maxWidth: 345
      }}>
        {
          imageUrl ?
            <CardMedia
              component="img"
              alt="News Image"
              sx={{
                height: 140,
                objectFit: 'contain',
              }}
              image={imageUrl}
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

        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {title ? title.slice(0, 45) : "No Title"}...
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description ? description.slice(0, 55) : "No Description"}...
          </Typography>
        </CardContent>
        <CardActions>
          <a href={newsUrl ? newsUrl : "/"} target='_blank' rel='noreferrer'>
            <Button size="small">Learn More</Button>
          </a>
        </CardActions>
      </Card>
    );
  }
}

export default NewsItem;