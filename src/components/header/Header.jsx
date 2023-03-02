import { Carousel } from '@mantine/carousel';
import { Container, Image, Group, Text, Header, SimpleGrid, Card, Badge, Button, } from '@mantine/core';


export default function Slider() {
  return (
    <Carousel sx={{ maxWidth: '100%' }} mx="auto" withIndicators height={300}>
      <Carousel.Slide>
		<Image src="https://www.jebelz.com/media/wysiwyg/jebelzez_home/Make-your-Coffee.gif"/>
	  </Carousel.Slide>
      <Carousel.Slide><Image src='	https://www.jebelz.com/media/wysiwyg/jebelzez_home/Mahlkonig-X54-54mm-Flat_desktop_EN.webp'></Image></Carousel.Slide>
      <Carousel.Slide><Image src="https://www.jebelz.com/media/wysiwyg/jebelzez_home/Barista-Swag_desktop_EN.gif"/></Carousel.Slide>
      
    </Carousel>
  );
}