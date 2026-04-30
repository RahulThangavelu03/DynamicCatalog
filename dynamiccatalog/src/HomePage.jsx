import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  CardMedia
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = ({ data }) => {
  const navigate = useNavigate();

  const groupedData = data.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <Grid container spacing={3} padding={3}>
      {Object.keys(groupedData).map((category) => {
        const previewItems = groupedData[category].slice(0, 3);

        return (
          <Grid item xs={12} sm={6} md={4} key={category}>
            <Card sx={{ cursor: "pointer" }}   onClick={() => navigate(`/category/${category}`)}>
              
              {/* Image Preview */}
              <CardMedia
                component="img"
                height="140"
                image={previewItems[0].image}
                alt={category}
              />

              <CardContent>
                <Typography variant="h5">{category}</Typography>

                {previewItems.map((item, index) => (
                  <Typography key={index}>
                    • {item.itemname}
                  </Typography>
                ))}

                <Button
                  onClick={() => navigate(`/category/${category}`)}
                >
                  View More →
                </Button>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Home;