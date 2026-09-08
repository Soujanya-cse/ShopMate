import { Container, Grid, Box, Typography } from "@mui/material";

import { useTitle } from "../hooks/useTitle";
import { ProductCard } from "../components";

export const Home = () => {
  useTitle("Home");

  const products = [
    {
      id: 1,
      name: "Sony Wh-Ch510 Bluetooth Wireless",
      price: 149,
      image: "/assets/images/1001.png",
    },
    {
      id: 2,
      name: "boAt Rockerz 450",
      price: 49,
      image: "/assets/images/1002.png",
    },
    {
      id: 3,
      name: "JBL Tune 760NC",
      price: 179,
      image: "/assets/images/1003.png",
    },
    {
      id: 4,
      name: "Logitech H111 Wired",
      price: 39,
      image: "/assets/images/1004.png",
    },
    {
      id: 5,
      name: "APPLE Airpods Max Bluetooth Headset",
      price: 199,
      image: "/assets/images/1005.png",
    },
    {
      id: 6,
      name: "ZEBRONICS Zeb-Thunder Wired",
      price: 29,
      image: "/assets/images/1006.png",
    },
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography
          variant="h4"
          component="h1"
          textAlign="center"
          fontWeight={600}
          gutterBottom
        >
          Products
        </Typography>

        <Grid
          container
          spacing={3}
          justifyContent="center"
          sx={{ mt: 1 }}
        >
          {products.map((product) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={product.id}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};