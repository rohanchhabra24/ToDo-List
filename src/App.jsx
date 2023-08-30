import React, { useState } from "react";
import {
  AppBar,
  CssBaseline,
  Toolbar,
  Typography,
  Paper,
  TextField,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Checkbox,
  Divider,
  Container,
} from "@mui/material";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const handleAddTask = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput("");
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleToggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <>
      <AppBar position="static">
        <CssBaseline />
        <Toolbar>
          <PlaylistAddCheckIcon />
          <Typography variant="h6">ToDo List</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" style={{ marginTop: "40px" }}>
        <Paper elevation={3} style={{ padding: "16px" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <TextField
              label="Add a task"
              variant="outlined"
              fullWidth
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleAddTask();
                }
              }}
            />
            <IconButton onClick={handleAddTask} color = "success">
              <AddIcon style={{ fontSize: '2rem'}}/>
            </IconButton>
          </div>
          <List>
            {tasks.map((task, index) => (
              <React.Fragment key={index}>
                <ListItem>
                  <Checkbox
                    checked={task.completed}
                    onChange={() => handleToggleComplete(index)}
                  />
                  <ListItemText
                    primary={task.text}
                    style={
                      task.completed ? { textDecoration: "line-through" } : {}
                    }
                  />
                  <ListItemSecondaryAction>
                    <IconButton onClick={() => handleDeleteTask(index)}color = "error"  fontSize="large">
                      <DeleteIcon style={{ fontSize: '2rem'}}/>
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>
        </Paper>
      </Container>
    </>
  );
};

export default App;
