import { Grid, Link, Paper, Stack, Typography } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { commonStyleSheet } from "../../common/Common.styles";
import Products from "../../components/Products/Products";
import { imgList, products, topCarouselImgs } from "./Home.constants";

const ProductStack = () => {
  return (
    <Stack direction="row" spacing={3}>
      <Products data={products.products1} />
      <Products data={products.products2} />
      <Products data={products.products3} />
    </Stack>
  );
};

const Home = () => {
  return (
    <Grid container mt={20} spacing={2} justifyContent="center">
      <Grid item width="100%">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          autoplay={{ delay: 3000 }}
        >
          {topCarouselImgs.map((item) => (
            <SwiperSlide>
              <img src={item} alt={item + "_img"} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Grid>
      <Grid item>
        <ProductStack />
      </Grid>
      <Grid
        item
        minHeight={500}
        minWidth={900}
        mt={2}
        sx={{
          background: `url(${"https://picsum.photos/id/22/900/500"})`,
          boxShadow: "inset 0 0 0 1000px rgba(0, 0, 0, 0.4)",
        }}
      >
        <Typography variant="h6" sx={commonStyleSheet.whiteFont}>
          Prime Video: Recommended for you
        </Typography>
        <Typography variant="subtitle2" sx={commonStyleSheet.whiteFont}>
          Some Random Movie
        </Typography>
      </Grid>
      <Grid item>
        <ProductStack />
      </Grid>
      <Grid item width="100%">
        <Paper sx={{ padding: 2 }}>
          <Typography align="left" variant="h5" gutterBottom fontWeight="bold">
            Inspired by your browsing history
          </Typography>
          <Swiper
            autoplay={{ delay: 3000 }}
            slidesPerView={6}
            className="mySwiper"
          >
            {imgList.map((item) => (
              <SwiperSlide>
                <img src={item} alt={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Paper>
      </Grid>
      <Grid item width="100%">
        <Paper sx={{ padding: 2 }}>
          <Typography align="left" variant="h5" gutterBottom fontWeight="bold">
            More items to explore
          </Typography>
          <Swiper
            autoplay={{ delay: 3000 }}
            slidesPerView={6}
            className="mySwiper"
          >
            {imgList.map((item, idx) => (
              <SwiperSlide>
                <Stack spacing={1} mr={2}>
                  <img src={item} alt={item} />
                  <Link sx={commonStyleSheet.link}>
                    <Typography align="left">
                      Product Title: {idx + 1}
                    </Typography>
                  </Link>
                  <Stack
                    direction="row"
                    justifyContent="start"
                    alignItems="center"
                    spacing={1}
                  >
                    <Typography variant="body1">
                      ₹{(idx + 1) * 1000}
                      <sup>00</sup>
                    </Typography>
                    <Typography variant="caption">
                      <s>{(idx + 1) * 2000}</s>
                    </Typography>
                  </Stack>
                </Stack>
              </SwiperSlide>
            ))}
          </Swiper>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Home;
