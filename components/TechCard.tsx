import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function TechCard({ data }: any) {
  const { src, tabname } = data

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={`/images/icons/${src}.png`}
        alt={src}
        style={{ padding: 20, height: "100%" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        </Typography>
        <Typography variant="body2" color="text.secondary">
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Choose</Button>
      </CardActions>
    </Card>
  );
}
