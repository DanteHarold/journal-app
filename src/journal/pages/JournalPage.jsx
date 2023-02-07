import { IconButton, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startNewNote } from "../../store/journal/thunks";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";

const drawerWidth = 240;

export const JournalPage = () => {
  const { isSaving, active } = useSelector((state) => state.journal);
  const dispatch = useDispatch();

  const onClickNewNote = () => {
    dispatch(startNewNote());
  };

  return (
    <JournalLayout>
      {/* <Typography>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo nisi
        necessitatibus officiis autem facere placeat qui blanditiis quas non
        illo eveniet aut aliquid, dolor hic iure minima ea quisquam sapiente.
      </Typography> */}
      {!!active ? <NoteView /> : <NothingSelectedView />}

      <IconButton
        disabled={isSaving}
        onClick={onClickNewNote}
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50,
          border: "1px solid red",
        }}
      >
        +
      </IconButton>
    </JournalLayout>
  );
};
