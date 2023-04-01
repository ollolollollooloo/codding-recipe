import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Handle, Position } from 'reactflow';

import { BasicMenu } from '../'
import { NodeTechProps } from '../../services/@types'

const NodeTech = ({ data }: NodeTechProps) => {
  return (
    <>
      <Handle type="target" position={Position.Left} />
      <Card >
        <CardMedia
          component="img"
          height="140"
          image={`/images/icons/${data.choosen}.png`}
          alt={data.src}
          style={{ padding: 20, width: "100%" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          </Typography>
          <Typography variant="body2" color="text.secondary">
          </Typography>
        </CardContent>
        <CardActions>
          <BasicMenu list={data.list} />
        </CardActions>
      </Card>
      <Handle type="source" position={Position.Right} />
    </>
  );
}
export default NodeTech