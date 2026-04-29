import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { Products } from "./Data"

const CategoryPage = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate();


  const filteredItems = Products.filter(
    (item) => item.category === categoryName
  );

  return (
    <Grid container spacing={3} padding={3}>
      {filteredItems.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card
            onClick={() => navigate(`/item/${index}`)}
            sx={{ cursor: "pointer" }}
          >
            <CardMedia
              component="img"
              height="160"
              image={item.image}
              alt={item.itemname}
            />
            <CardContent>
              <Typography variant="h6">
                {item.itemname}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CategoryPage;