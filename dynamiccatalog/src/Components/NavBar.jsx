import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar = ({ categories }) => {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar>

        {/* Logo / Title */}
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          Product Catalog
        </Typography>

         <Button
           
              color="inherit"
              onClick={() => navigate("/")}
            >Home Page</Button>

        {/* Category Links */}
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          {categories.map((cat) => (
            <Button
              key={cat}
              color="inherit"
              onClick={() => navigate(`/category/${cat}`)}
            >
              {cat}
            </Button>
          ))}
        </Box>

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;