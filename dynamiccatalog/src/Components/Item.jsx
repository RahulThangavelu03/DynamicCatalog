
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Divider,
  Button
} from "@mui/material";
import { useParams ,useNavigate} from "react-router-dom";

const ItemDetail = ({ data }) => {
  const { id } = useParams();

  const Navigate=useNavigate()


  
  

  const decodedId=decodeURIComponent(id);


  const item = data.find(
  (i) => i.itemname === decodedId
);

if (!item) {
  return <h2>Item not found</h2>;
}






function HandleNaviagte(item){




Navigate(`/category/${item.category}`)





}


  return (
   <Box padding={3}>
  <Card sx={{ p: 2 }}>
    
    <Grid container spacing={3}>
      
      {/* LEFT: IMAGE */}
      <Grid item xs={12} md={6}>
        <CardMedia
          component="img"
          image={item.image}
          alt={item.itemname}
          sx={{
            width: "100%",
            height: { xs: 250, md: 400 },
            objectFit: "cover",
            borderRadius: 2
          }}
        />
      </Grid>

      {/* RIGHT: DETAILS */}
      <Grid item xs={12} md={6}>
        <CardContent>
          
          <Typography variant="h4" gutterBottom>
            {item.itemname}
          </Typography>

          <Typography
            variant="subtitle1"
            color="text.secondary"
            gutterBottom
          >
            Category: {item.category}
          </Typography>

          <Divider sx={{ my: 2 }} />

          <Typography variant="h6" gutterBottom>
            Specifications
          </Typography>

          {/* Specs List */}
          <Box>
            { 
            item.itemprops.map((prop, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  py: 1,
                  borderBottom: "1px solid #eee"
                }}
              >
                <Typography color="text.secondary">
                  {prop.label}
                </Typography>
                <Typography fontWeight="bold">
                  {prop.value}
                </Typography>
              </Box>
            ))}
          </Box>

      

        </CardContent>
        <Button variant="contained"  severity="warning" color="warning"  onClick={()=>HandleNaviagte(item)}>Go Back</Button>
      </Grid>


    </Grid>



  </Card>
</Box>
  );
};

export default ItemDetail;