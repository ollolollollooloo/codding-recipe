import { Node, Position } from 'reactflow';
import { v4 as uuidv4 } from 'uuid';

import NodeTech from '../components/NodeTech';

export const nodeTypes:any = {
  tech: NodeTech
}

export const initialNodes: Node[] = [
  {
    id: uuidv4(),
    type: 'tech',
    data: { text: 'OS', list: ['windows10', 'macm1', 'ubuntu20'], choosen: 'windows10' },
    position: { x: 100, y: 100 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    style: { backgroundColor: '#6FB1FC' },
  },
  {
    id: uuidv4(),
    type: 'output',
    data: { text: 'macm1', src: 'macm1' },
    position: { x: 400, y: 100 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    style: { backgroundColor: '#FF8C42' },
  },
  {
    id: uuidv4(),
    type: 'default',
    data: { text: 'ubuntu20', src: 'ubuntu20' },
    position: { x: 250, y: 250 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    style: { backgroundColor: '#eee' },
  },
]
