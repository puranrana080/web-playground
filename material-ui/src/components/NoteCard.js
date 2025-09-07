import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import {DeleteOutlined} from "@mui/icons-material"

const NoteCard = ({ note,handleDelete }) => {
  return (
    <Card elevation={1}>
      <CardHeader
        action={
          <IconButton onClick={()=>handleDelete(note.id)}>
            <DeleteOutlined/>
          </IconButton>
        }
        title={note.title}
        subheader={note.category}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary">{note.details}</Typography>
      </CardContent>
    </Card>
  );
};

export default NoteCard;
