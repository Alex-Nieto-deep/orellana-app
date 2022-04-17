import React from 'react'
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
// import itemData from './itemData';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: 550,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

import image1 from '../../assets/images/damir-omerovic-UMaGtammiSI-unsplash.jpg';
import image2 from '../../assets/images/manny-becerra-k0FXTalRZdk-unsplash.jpg';
import image3 from '../../assets/images/thanh-soledas-Kf1nBG76Xe8-unsplash.jpg';
import image4 from '../../assets/images/volodymyr-tokar-XO483Y8_VSQ-unsplash.jpg';

const itemData = [
  {
    img: image1,
    title: 'Image1',
    author: 'Maicol',
  },
  {
    img: image2,
    title: 'Image2',
    author: 'Pedro',
  },
  {
    img: image3,
    title: 'Image3',
    author: 'San marco',
  },
  {
    img: image4,
    title: 'Image4',
    author: 'Alejandro Magno',
  },
];

export const Info = () => {

  const classes = useStyles();

  return (
    <Container >
      <p>Las orellanas son hongos de la especie Pleurotus son reconocidas por sus propiedades medicinales y nutricionales desde la antigüedad. Son descomponedores de madera y tienen unas interacciones ecológicas únicas y degradan toxinas ambientales.</p>
      <div className={classes.root}>
        <ImageList rowHeight={180} className={classes.imageList}>
          <ImageListItem key="Subheader" cols={2} style={{ height: 'auto' }}>
            <ListSubheader component="div">April 19</ListSubheader>
          </ImageListItem>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img src={item.img} alt={item.title} />
              <ImageListItemBar
                title={item.title}
                subtitle={<span>by: {item.author}</span>}
                actionIcon={
                  <IconButton aria-label={`info about ${item.title}`} className={classes.icon}>
                    <InfoIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </Container>
  )
}
