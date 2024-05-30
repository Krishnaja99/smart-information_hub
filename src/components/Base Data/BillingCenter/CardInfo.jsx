import React from 'react';
import Card from './Card';
import styles from './Card.module.css';

import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";


import bc1 from '../../common/assets/BC Images/image1.jpg';
import bc2 from '../../common/assets/BC Images/image2.jpg';
import bc3 from '../../common/assets/BC Images/image3.jpg';

const CardInfo = () => {
  return (
    <div className={styles.cardsStyle}>
      <div>
      <Card>
            <CardMedia
              component="img"
              alt="green iguana"
              height="210"
              image={bc1}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontFamily: "Roboto Slab" }}
              >
                Introduction To Insurance
              </Typography>
            </CardContent>
          </Card>
      </div>

      <div>
      <Card>
            <CardMedia
              component="img"
              alt="green iguana"
              height="190"
              image={bc2}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontFamily: "Roboto Slab" }}
              >
                Introduction To Insurance
              </Typography>
            </CardContent>
          </Card>
      </div>
      <div>

      <Card>
            <CardMedia
              component="img"
              alt="green iguana"
              height="190"
              image={bc3}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontFamily: "Roboto Slab" }}
              >
                Introduction To Insurance
              </Typography>
            </CardContent>
          </Card>
          </div>
          </div>
  );
};

export default CardInfo;
