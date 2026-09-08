import { useCart } from "../context/CartContext";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";

export const CartCard = ({ product }) => {
  const { removeFromCart } = useCart();

  const { name, price, image } = product;

  return (
    <Card
      elevation={2}
      sx={{
        display: "flex",
        alignItems: "center",
        p: 1.5,
        mb: 3,
        borderRadius: 2,

        "@media (max-width:600px)": {
          flexDirection: "column",
          alignItems: "stretch",
        },
      }}
    >
      {/* Image */}
      <CardMedia
        component="img"
        image={image}
        alt={name}
        sx={{
          width: 150,
          height: 100,
          objectFit: "contain",
          mr: 2,

          "@media (max-width:600px)": {
            width: "100%",
            height: 180,
            mr: 0,
          },
        }}
      />

      <CardContent
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          p: 1,

          "&:last-child": {
            pb: 1,
          },

          "@media (max-width:600px)": {
            flexDirection: "column",
            alignItems: "stretch",
            gap: 2,
          },
        }}
      >
        {/* Name */}
        <Typography
          variant="body1"
          sx={{
            fontWeight: 500,
            flex: 1,
          }}
        >
          {name}
        </Typography>

        {/* Price */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            width: 100,
          }}
        >
          ${price}
        </Typography>

        {/* Remove */}
        <Box>
          <Button
            variant="contained"
            color="error"
            onClick={() => removeFromCart(product)}
          >
            Remove
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};