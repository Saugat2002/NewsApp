import { Component } from 'react';
import { PropTypes } from 'prop-types';
import NewsImage from './NewsImage';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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

        <NewsImage imageUrl={imageUrl} />

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