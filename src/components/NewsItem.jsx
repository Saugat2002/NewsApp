import { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import NewsImage from './NewsImage';
import { Box, Chip, Card, CardActions, CardContent, CardHeader, Button, Typography } from '@mui/material';

export class NewsItem extends Component {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    imageUrl: PropTypes.string,
    newsUrl: PropTypes.string,
    author: PropTypes.string,
    date: PropTypes.string,
    source: PropTypes.string,
  }

  static defaultProps = {
    title: "No Title",
    description: "No Description",
    imageUrl: "https://images.unsplash.com/photo-1632724811178-0e4d8d4c2a2b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&w=1000&q=80",
    author: "Unknown",
    date: "Unknown",
    source: "Unknown",
  }

  readableDateFormat = (dateString) => {
    let date = new Date(dateString);
    let options = { month: "long", day: "numeric", year: "numeric" };
    return date.toLocaleDateString(undefined, options);
  }

  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <>


        <Card sx={{
          maxWidth: 345
        }}>
          <NewsImage imageUrl={imageUrl} />

          <CardContent>
            <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: { "xs": 14, "sm": 15, "md": 16, "lg": 17 } }}>
              {title ? title.slice(0, 45) : "No Title"}...
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: { "xs": 12, "sm": 13, "md": 14, "lg": 15 } }}>
              {description ? description.slice(0, 55) : "No Description"}...
            </Typography>
            <Chip size="small" label={<Typography variant='body2' sx={{ fontSize: { "xs": 10, "sm": 11, "md": 12, "lg": 13 } }}>{source}</Typography>} variant="filled" color='secondary' sx={{ marginTop: ".5rem" }} />
          </CardContent>
          <Box display="flex" alignItems="space-between">
            <CardActions sx={{ width: '50%' }}>
              <Link to={newsUrl ? newsUrl : "/"} target='_blank' rel='noreferrer'>
                <Button size="small" sx={{ fontSize: { "xs": 10, "sm": 11, "md": 12, "lg": 13 } }}>Learn More</Button>
              </Link>
            </CardActions>
            <CardHeader
              title={(author && author.length < 80) ? author.slice(0,30) : "Unknown"}
              subheader={date ? this.readableDateFormat(date) : "Unknown"}
              titleTypographyProps={{ fontSize: { "xs": 11, "sm": 12, "md": 13, "lg": 14 } }}
              subheaderTypographyProps={{ fontSize: { "xs": 10, "sm": 11, "md": 12, "lg": 13 } }}
              sx={{ textAlign: 'right', width: '50%' }}
            />
          </Box>
        </Card>
      </>
    );
  }
}

export default NewsItem;