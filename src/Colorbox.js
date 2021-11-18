import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Addcolor } from './Addcolor';

export function Colorbox() {
  const [color, setcolor] = useState("red");
  const styles = { backgroundColor: color };
  const [colors, setcolors] = useState(["teal", "black", "red", "yellow"]);
  return (
    <div>
      <div className="divide">
        <TextField value={color} onChange={(event) => setcolor(event.target.value)}
          style={styles} label="Enter the color" variant="standard" />
        <Button onClick={() => setcolors([...colors, color])} variant="outlined">Add Colors</Button>
      </div>
      {colors.map((clr) => (
        <Addcolor color={clr} />
      ))}
    </div>
  );
}
