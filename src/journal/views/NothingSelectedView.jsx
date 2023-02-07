import { Grid, Typography } from "@mui/material";
import React from "react";

export const NothingSelectedView = () => {
  return (
    <Grid
      className="animate__animated animate__fadeIn animate__faster"
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "calc(100vh-110px)",
        backgroundColor: "primary.main",
        padding: 4,
        borderRadius: 3,
      }}
    >
      <Grid item xs={12}></Grid>
      <Grid item xs={12}>
        <Typography color="white" variant="h5">
          Selecciona o Crea un Entrada
        </Typography>
      </Grid>
    </Grid>
  );
};
