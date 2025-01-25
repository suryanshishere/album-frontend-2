"use client";

import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { RootState, AppDispatch } from "./store";
import {
  Box,
  Button,
  TextField,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { addComment } from "./store/commentsSlice";
 
export default function Comments() {
  const comments = useSelector((state: RootState) => state.comments.list);
  const dispatch = useDispatch<AppDispatch>();
  const [text, setText] = useState("");

  const handleAddComment = () => {
    if (text.trim()) {
      const newComment = {
        text,
        timestamp: new Date().toISOString(),
      };

       dispatch(addComment(newComment));
      
       setText("");
    }
  };

  return (
    <Box
      maxWidth="40rem"
      display="flex"
      flexDirection="column"
      justifyItems="center"
      sx={{
        py: 4,
        px: 3,
        width: "100%",
        gap: 3,
      }}
    >
      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        gap={2}
        alignItems="center"
      >
        <TextField
          fullWidth
          value={text}
          onChange={(e) => setText(e.target.value)}
          label="Add a comment"
          variant="outlined"
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleAddComment}
          disabled={!text.trim()}
          sx={{ width: {xs:"100%",sm: "fit-content"} }}
        >
          Submit
        </Button>
      </Box>
      <hr />
      <hr />
      <hr />
      <hr />
      <Typography variant="h5" gutterBottom>
        Comments
      </Typography>

      <List >
        {comments.map((comment, index) => (
          <ListItem key={index} alignItems="flex-start">
            <ListItemText
              primary={comment.text}
              secondary={new Date(comment.timestamp).toLocaleString()}
            />
          </ListItem>
        ))}
      </List>

      <Divider sx={{ my: 2 }} />
    </Box>
  );
} 