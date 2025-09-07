import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Typography,
  Avatar,
} from "@mui/material";
import { DeleteOutlined } from "@mui/icons-material";

const NoteCard = ({ note, handleDelete }) => {
  const categoryColors = {
    work: "#2196f3",
    reminders: "#ff9800",
    todos: "#4caf50",
    money:"#4151b9ff"
  };
  return (
    <Card elevation={1}>
      <CardHeader
        avatar={
          <Avatar sx={{ backgroundColor:categoryColors[note.category] || "#9c27b0"   }}>
            {note.category[0].toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton onClick={() => handleDelete(note.id)}>
            <DeleteOutlined />
          </IconButton>
        }
        title={note.title}
        subheader={note.category}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          {note.details}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NoteCard;
