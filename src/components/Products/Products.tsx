import { Grid, Skeleton, Typography, Paper, Link } from "@mui/material";
import { useState } from "react";
import { commonStyleSheet } from "../../common/Common.styles";
import { Product, ProductDetails } from "./Products.interfaces";

const ProductItem = (props: Product) => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    console.log("image loaded");
    setLoading(false);
  };

  return (
    <Grid container spacing={1} direction="column">
      <Grid item>
        {loading && (
          <Skeleton
            variant="rectangular"
            height={150}
            width={150}
            animation="wave"
          />
        )}
        <img
          src={props.imgUrl}
          alt={props.title + "_image"}
          onLoad={handleImageLoad}
        />
      </Grid>
      <Grid item>
        <Typography variant="subtitle2" align="left" textOverflow="ellipsis">
          {props.title}
        </Typography>
      </Grid>
    </Grid>
  );
};

const Products = (props: { data: ProductDetails }) => {
  return (
    <Paper elevation={1}>
      <Typography variant="h6" align="left" fontWeight="bold" padding={2}>
        {props.data.paperHeading}
      </Typography>
      <Grid container>
        {props.data.products.map((item) => (
          <Grid item xs={12} sm={6} md={6} lg={6} padding={2}>
            <ProductItem imgUrl={item.imgUrl} title={item.title} />
          </Grid>
        ))}
        {props.data.linkText && (
          <Grid item ml={2} mb={2}>
            <Link sx={commonStyleSheet.link}>
              <Typography variant="body2">{props.data.linkText}</Typography>
            </Link>
          </Grid>
        )}
      </Grid>
    </Paper>
  );
};

export default Products;
