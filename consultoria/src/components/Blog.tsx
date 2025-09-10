import React from "react";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Blog() {
  const navigate = useNavigate();

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      {/* Header con botón de volver */}
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: "#00594f", justifyContent: "space-between" }}>
          <Typography variant="h6" component="div">
            Mi Logo
          </Typography>
          <Button
            color="inherit"
            sx={{
              backgroundColor: "#00594f",
              color: "#fff",
              borderRadius: "4px",
              fontSize: "14px",
              padding: "6px 16px",
              transition: "background 0.2s",
              '&:hover': {
                backgroundColor: "#00413a",
                color: "#fff",
              },
            }}
            onClick={() => navigate("/")}
          >
            Volver
          </Button>
        </Toolbar>
      </AppBar>

      {/* Contenido principal */}
      <Box flex={1} display="flex" flexDirection="column" alignItems="center" justifyContent="center" p={3}>
        <Typography variant="h4" gutterBottom>
          Blog
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ textAlign: "center", maxWidth: 600 }}>
          Bienvenido a nuestro blog. Aquí publicaremos artículos, novedades y consejos útiles relacionados con nuestros servicios y el sector legal.
        </Typography>
        {/* Puedes añadir aquí una lista de artículos o posts */}
      </Box>

      {/* Footer igual que en App */}
      <Box component="footer" bgcolor="#00594f" color="white" p={2} textAlign="center">
        <Typography variant="body2">
          © 2025 Mi Consultoría
        </Typography>
      </Box>
    </Box>
  );
}

export default Blog;