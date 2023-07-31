'use client';
import { useState, useRef } from 'react';
import Image from 'next/image';
import { Card, CardHeader, CardContent } from '@mui/material';
import { Typography, IconButton, Box, Tooltip } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function ProductsItem({ id }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const swiperRef = useRef();

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const handleMouseEnter = () => {
    console.log(swiperRef.current.swiper);
    swiperRef.current.swiper.enabled = true;
    swiperRef.current.swiper.slideNext();
    swiperRef.current.swiper.originalParams.autoplay.delay = 6000;
    swiperRef?.current?.swiper?.autoplay?.start();
    swiperRef.current.swiper.pagination.init();
  };

  const handleMouseLeave = () => {
    swiperRef?.current?.swiper?.autoplay?.stop();
    swiperRef.current.swiper.pagination.destroy();
    swiperRef.current.swiper.slideTo(0, 500, false);
  };
  return (
    <Card
      id={id}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        transition: 'box-shadow 500ms ease-in-out',
        '&:hover': {
          boxShadow: '0px 4px 17px 0px rgba(34, 60, 80, 0.5)',
          '& .scaleImage': {
            transform: 'scale(1.03)',
          },
        },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: 'calc(100% - 16px)',
          height: 200,
          m: 1,
        }}
      >
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          loop={true}
          effect={'fade'}
          slidesPerView={1}
          ref={swiperRef}
          direction="vertical"
          enabled={false}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, EffectFade]}
          style={{
            width: 'calc(100% - 16px)',
            height: 200,
            '--swiper-pagination-color': '#FFBA08',
            '--swiper-pagination-bullet-inactive-color': '#999999',
            '--swiper-pagination-bullet-inactive-opacity': '1',
            '--swiper-pagination-bullet-size': '12px',
            '--swiper-pagination-bullet-vertical-gap': '8px',
            '--swiper-pagination-right': '18px',
          }}
        >
          <IconButton
            sx={{ position: 'absolute', top: 0, right: 0, zIndex: 2 }}
            onClick={handleFavorite}
          >
            {isFavorite ? (
              <Tooltip title="Remove from favorite">
                <FavoriteOutlinedIcon sx={{ fontSize: 30 }} />
              </Tooltip>
            ) : (
              <Tooltip title="Add to favorite">
                <FavoriteBorderOutlinedIcon sx={{ fontSize: 30 }} />
              </Tooltip>
            )}
          </IconButton>
          <SwiperSlide>
            <Image
              className="scaleImage"
              style={{ transition: 'transform 500ms ease-in-out' }}
              src="/hookah_item.jpg"
              fill={true}
              alt="image"
              sizes="100%"
              priority="false"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="scaleImage"
              style={{ transition: 'transform 500ms ease-in-out' }}
              src="/hookah_item2.jpg"
              fill={true}
              alt="image"
              sizes="100%"
              priority="false"
            />
          </SwiperSlide>
        </Swiper>
      </Box>

      <CardHeader title="Hookah Mia" component="h3" />
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ fontWeight: 700, fontSize: 30 }}
        >
          100$
        </Typography>
        <IconButton>
          <Tooltip title="Add to backet">
            <AddShoppingCartOutlinedIcon sx={{ fontSize: 30 }} />
          </Tooltip>
        </IconButton>
      </CardContent>
    </Card>
  );
}