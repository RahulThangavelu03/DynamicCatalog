
import { useEffect,useState } from "react"
import { Products } from "./Data"
import { Grid, Card, CardContent, CardMedia , Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function HomePage(){



    const [productslist,setProductslist] = useState([])

useEffect(()=>{

const Data = Products.reduce((acc,item)=>{

if(!acc[item.category]){


    acc[item.category] =[]
}



acc[item.category].push(item)


return acc


},{})


 setProductslist(Data)

 console.log(Data,"data")

},[])




    return (
    <Grid container spacing={3} padding={3}>
      {productslist && Object.keys(productslist).map((category) => {
        const previewItems = productslist[category].slice(0, 3);

        return (
          <Grid item xs={12} sm={6} md={4} key={category}>
            <Card sx={{ cursor: "pointer" }}>
              
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
}

export default HomePage