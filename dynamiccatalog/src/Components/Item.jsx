import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Box
} from "@mui/material";
import { useParams } from "react-router-dom";
import { Products } from "../Data";

const ItemDetail = ({ data }) => {
  const { id } = useParams();

  const item = data[id];

  return (
    <Box padding={3}>
      <Card>
        <CardMedia
          component="img"
          height="300"
          image={item.image}
          alt={item.itemname}
        />

        <CardContent>
          <Typography variant="h4">
            {item.itemname}
          </Typography>

          <Typography variant="subtitle1">
            Category: {item.category}
          </Typography>

          <Typography variant="h6" mt={2}>
            Specifications:
          </Typography>

          {item.itemprops.map((prop, index) => (
            <Typography key={index}>
              • {prop.label}: {prop.value}
            </Typography>
          ))}
        </CardContent>
      </Card>
    </Box>
  );
};

export default ItemDetail;