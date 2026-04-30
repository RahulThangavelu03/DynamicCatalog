import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Box
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";


const CategoryPage = ({ data }) => {
  const { categoryName } = useParams();
  const navigate = useNavigate();

  const filteredItems = data.filter(
    (item) => item.category === categoryName
  );

  function Handleclick(item) {
    navigate(`/item/${encodeURIComponent(item.itemname)}`);
  }

  return (


  

<Box sx={{ mt: 10, px: 3 }}>
  <Grid container spacing={3}>
    {filteredItems.map((item, index) => (
      <Grid
        item
        xs={12}      
        sm={6}       
        md={3}       
        key={index}
        sx={{
          display: "flex", 
        }}
      >
        <Card
          onClick={() => Handleclick(item)}
          sx={{
            width: "100%",           
            display: "flex",
            flexDirection: "column", 
            justifyContent: "space-between", 
            height: "100%",          
            borderRadius: 3,
            overflow: "hidden",
            cursor: "pointer",
            transition: "0.3s",
            "&:hover": {
              transform: "translateY(-5px)",
              boxShadow: 6
            }
          }}
        >
          {/* IMAGE - Fixed height ensures uniformity */}
          <CardMedia
            component="img"
            image={item.image}
            alt={item.itemname}
            sx={{
              width: "100%",        
              height: 180,           
              objectFit: "cover",   
            }}
          />

          {/* CONTENT */}
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                
                display: '-webkit-box',
                WebkitLineClamp: 1,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {item.itemname}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
</Box>



  );
};

export default CategoryPage;