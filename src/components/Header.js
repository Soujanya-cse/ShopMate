import { Link, NavLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  Badge,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import Logo from "../assets/logo.png";
import { useCart } from "../context/CartContext";

export const Header = () => {
  const { cartList } = useCart();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar
      position="static"
      color="inherit"
      elevation={0}
      sx={{
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            minHeight: "70px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              color: "text.primary",
            }}
          >
            <Box
              component="img"
              src={Logo}
              alt="Shopmate Logo"
              sx={{
                width: 40,
                height: 40,
                objectFit: "contain",
                mr: 1,
              }}
            />

            {!isMobile && (
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                }}
              >
                Shopping Cart
              </Typography>
            )}
          </Box>

          {/* Navigation */}
          {!isMobile && (
            <Box
              sx={{
                display: "flex",
                gap: 1,
              }}
            >
              <Button
                component={NavLink}
                to="/"
                end
                sx={{
                  color: "text.primary",
                  px: 2,
                  "&.active": {
                    backgroundColor: "action.hover",
                  },
                }}
              >
                Home
              </Button>

              <Button
                component={NavLink}
                to="/cart"
                sx={{
                  color: "text.primary",
                  px: 2,
                  "&.active": {
                    backgroundColor: "action.hover",
                  },
                }}
              >
                Cart
              </Button>
            </Box>
          )}

          {/* Cart */}
          <Button
            component={Link}
            to="/cart"
            color="primary"
            sx={{
              fontWeight: 600,
              minWidth: "auto",
            }}
          >
            <Badge
              badgeContent={cartList.length}
              color="primary"
              sx={{
                "& .MuiBadge-badge": {
                  right: -5,
                  top: -3,
                },
              }}
            >
              <ShoppingCartIcon />
            </Badge>

            {!isMobile && (
              <Typography
                component="span"
                sx={{
                  ml: 1,
                  fontWeight: 500,
                }}
              >
                Cart
              </Typography>
            )}
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};