import {
  Container,
  Box,
  Typography,
  Paper,
  Stack,
} from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { useCart } from "../context/CartContext";
import { useTitle } from "../hooks/useTitle";
import { CartCard } from "../components";

export const Cart = () => {
  const { total, cartList } = useCart();

  useTitle("Cart");

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        {/* Cart Header */}
        <Paper
          elevation={1}
          sx={{
            p: 3,
            mb: 4,
            borderRadius: 2,
          }}
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignItems="center"
            justifyContent="space-between"
            spacing={2}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <ShoppingCartIcon color="primary" />

              <Typography
                variant="h5"
                fontWeight={600}
              >
                Cart Items: {cartList.length}
              </Typography>
            </Box>

            <Typography
              variant="h5"
              color="primary"
              fontWeight={700}
            >
              Total: ${total}
            </Typography>
          </Stack>
        </Paper>

        {/* Cart Items */}
        {cartList.length > 0 ? (
          <Box>
            {cartList.map((product) => (
              <CartCard
                key={product.id}
                product={product}
              />
            ))}
          </Box>
        ) : (
          <Paper
            elevation={1}
            sx={{
              p: 6,
              textAlign: "center",
              borderRadius: 2,
            }}
          >
            <ShoppingCartIcon
              sx={{
                fontSize: 60,
                color: "text.secondary",
                mb: 2,
              }}
            />

            <Typography
              variant="h6"
              color="text.secondary"
            >
              Your cart is empty
            </Typography>
          </Paper>
        )}
      </Box>
    </Container>
  );
};