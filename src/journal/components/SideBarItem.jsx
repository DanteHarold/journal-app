import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveNote } from "../../store/journal/journalSlice";

export const SideBarItem = ({ title, body, id, date, imageUrls = [] }) => {
  //   const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const newTitle = useMemo(() => {
    return title.length > 17 ? title.sunstring(0, 17) + "..." : title;
  }, [title]);

  const onClickActive = (e) => {
    dispatch(setActiveNote({ title, body, id, date, imageUrls }));
  };

  return (
    <ListItem disablePadding>
      <ListItemButton onClick={onClickActive}>
        <ListItemIcon></ListItemIcon>
        <Grid container>
          <ListItemText primary={newTitle} />
          <ListItemText secondary={body} />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
