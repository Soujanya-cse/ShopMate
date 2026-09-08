import { useEffect, useState } from "react";

import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";

import { useCart } from "../context/CartContext";

export const ProductCard = ({ product }) => {
  const { cartList, addToCart, removeFromCart } = useCart();

  const [isInCart, setIsInCart] = useState(false);

  const { id, name, price, image } = product;

  useEffect(() => {
    const productIsInCart = cartList.find(
      (cartItem) => cartItem.id === id
    );

    setIsInCart(Boolean(productIsInCart));
  }, [cartList, id]);

  return (
    <Card
      elevation={2}
      sx={{
        width: "100%",
        maxWidth: 350,
        minHeight: 400,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: 2,
        transition: "0.2s",

        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 6,
        },
      }}
    >
      {/* Product Image */}
      <CardMedia
        component="img"
        image={image}
        alt={name}
        sx={{
          height: 250,
          objectFit: "contain",
          p: 2,
        }}
      />

      {/* Product Details */}
      <CardContent>
        <Typography
          variant="body1"
          sx={{
            fontWeight: 500,
            minHeight: 50,
          }}
        >
          {name}
        </Typography>

        {/* Price + Button */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 3,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
            }}
          >
            ${price}
          </Typography>

          {isInCart ? (
            <Button
              variant="contained"
              color="error"
              onClick={() => removeFromCart(product)}
            >
              Remove
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={() => addToCart(product)}
            >
              Add To Cart
            </Button>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};