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


<Box sx={{ mt: 10, px: 2, overflowX: "hidden" }}>

  <Grid container spacing={3}>

    {filteredItems.map((item, index) => (
      
      <Grid item xs={12} sm={6} md={3} key={index}>
        
        <Card
          onClick={() => Handleclick(item)}
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
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

           <CardMedia
            component="img"
            image={item.image}
            alt={item.itemname}
            loading="Lazy"
            sx={{
              width: "100%",
              height: 180,
              objectFit: "cover"
            }}
          />     

 





          <CardContent>
            <Typography variant="h6" noWrap>
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