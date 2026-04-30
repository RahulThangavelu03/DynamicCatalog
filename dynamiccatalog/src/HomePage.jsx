import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  CardMedia,
  Box
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
   

<Box sx={{ mt: 10, px: 3 }}>
  <Grid container spacing={4}>
    
    {Object.keys(groupedData).map((category) => {
      const previewItems = groupedData[category].slice(0, 3);

      return (
        <Grid item xs={12} sm={6} md={3} key={category}>
          
          <Card
            onClick={() => navigate(`/category/${category}`)}
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              cursor: "pointer",
              borderRadius: 3,
              overflow: "hidden",
              transition: "0.3s",
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: 6
              }
            }}
          >

            {/* Image */}
            <CardMedia
              component="img"
              image={previewItems[0].image}
              alt={category}
              sx={{
                height: 160,
                objectFit: "cover"
              }}
            />

            <CardContent sx={{ flexGrow: 1 }}>
              
              {/* Category Title */}
              <Typography
                variant="h5"
                gutterBottom
                sx={{ fontWeight: "bold" }}
              >
                {category}
              </Typography>

              {/* Preview Items */}
              {previewItems.map((item, index) => (
                <Typography
                  key={index}
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                  }}
                >
                  • {item.itemname}
                </Typography>
              ))}

            </CardContent>

            {/* Button */}
            <Box sx={{ p: 2, pt: 0 }}>
              <Button
                variant="contained"
                fullWidth
                onClick={(e) => {
                  e.stopPropagation();   // ⭐ prevents double navigation
                  navigate(`/category/${category}`);
                }}
              >
                View More
              </Button>
            </Box>

          </Card>

        </Grid>
      );
    })}

  </Grid>
</Box>
  );
};

export default Home;