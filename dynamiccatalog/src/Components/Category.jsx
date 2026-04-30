import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";

const CategoryPage = ({ data }) => {
  const { categoryName } = useParams();
  const navigate = useNavigate();

  const filteredItems = data.filter(
    (item) => item.category === categoryName
  );



function Handleclick(item){

console.log(item,"item'''''''''''''''")

const name = item.itemname

let dummy = name.trim()



console.log(name,"nameeeee")

console.log(dummy,"dumm")


navigate(`/item/${item.itemname}`)
}



  return (

    
 <Grid container spacing={3} padding={3}>
  {filteredItems.map((item, index) => (
    
    <Grid
      item
      xs={12}
      sm={6}
      md={3}
      key={index}
      sx={{ display: "flex" }}
    >
      
      <Card
        onClick={() => Handleclick(item)}
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          cursor: "pointer",
          transition: "0.3s",
          "&:hover": {
            transform: "scale(1.03)",
            boxShadow: 6
          }
        }}
      >
        
        <CardMedia
          component="img"
          image={item.image}
          alt={item.itemname}
          sx={{
            width: "100%",
            height: 180,
            objectFit: "cover"
          }}
        />

        <CardContent>
          <Typography
            variant="h6"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical"
            }}
          >
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