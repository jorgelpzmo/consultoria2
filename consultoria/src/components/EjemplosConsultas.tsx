import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Box, Button, Divider, Fade } from "@mui/material";
import { useNavigate } from "react-router-dom";
import '../css/styles.css';

const ejemplos = [
  {
    pregunta: "¿Cómo puedo solicitar una cita?",
    descripcion: "Puedes solicitar una cita a través de nuestro formulario de contacto, por teléfono o por correo electrónico. Nuestro equipo te responderá lo antes posible para confirmar la disponibilidad.",
  },
  {
    pregunta: "¿Qué documentación necesito para una consulta legal?",
    descripcion: "Generalmente, necesitarás tu DNI y cualquier documento relevante al caso. Si tienes dudas, consúltanos antes de tu cita y te indicaremos qué traer.",
  },
  {
    pregunta: "¿Cuánto cuesta una consulta inicial?",
    descripcion: "La consulta inicial tiene un coste fijo que te informaremos al contactar. En algunos casos, la primera consulta puede ser gratuita dependiendo del tipo de servicio.",
  },
  {
    pregunta: "¿Puedo recibir asesoría online?",
    descripcion: "Sí, ofrecemos asesoría online mediante videollamada o correo electrónico. Indícanos tu preferencia al solicitar la consulta.",
  },
];

function EjemplosConsultas() {
  const navigate = useNavigate();
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [show, setShow] = useState(true);

  const handleSelect = (idx: number) => {
    setShow(false);
    setTimeout(() => {
      setSelectedIdx(idx);
      setShow(true);
    }, 200); // Duración de la salida
  };

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

      {/* Contenido principal dividido en dos columnas */}
      <Box
        flex={1}
        display="flex"
        flexDirection="row"
        alignItems="stretch"
        justifyContent="center"
        p={3}
        sx={{ minHeight: 0 }}
        className="ejemplos-consultas-main"
      >
        {/* Columna izquierda: botones de consultas */}
        <Box
          width={{ xs: "100%", md: "40%" }}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          sx={{ pr: { md: 3 }, minWidth: 0 }}
          className="ejemplos-consultas-col"
        >
          {ejemplos.map((ejemplo, idx) => (
            <Button
              key={ejemplo.pregunta}
              variant={selectedIdx === idx ? "contained" : "outlined"}
              color="primary"
              sx={{
                mb: 2,
                width: "100%",
                maxWidth: 300,
                backgroundColor: selectedIdx === idx ? "#00594f" : "#fff",
                color: selectedIdx === idx ? "#fff" : "#00594f",
                borderColor: "#00594f",
                borderRadius: "4px",
                fontSize: "14px",
                textAlign: "left",
                boxShadow: selectedIdx === idx ? "0 2px 6px rgba(0,0,0,0.08)" : "none",
                transition: "background 0.2s",
                '&:hover': {
                  backgroundColor: selectedIdx === idx ? "#00413a" : "#e0e0e0",
                  color: "#00594f",
                },
              }}
              onClick={() => handleSelect(idx)}
              className="ejemplos-consultas-btn"
            >
              {ejemplo.pregunta}
            </Button>
          ))}
        </Box>

        {/* Línea vertical para pantallas grandes */}
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            display: { xs: "none", md: "block" },
            mx: 2,
            borderColor: "#00594f",
            borderWidth: "1px",
          }}
          className="ejemplos-consultas-divider"
        />

        {/* Columna derecha: descripción con efecto de entrada/salida */}
        <Box
          width={{ xs: "100%", md: "60%" }}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          sx={{ pl: { md: 3 }, minWidth: 0 }}
          className="ejemplos-consultas-col"
        >
          <Fade in={show} timeout={300}>
            <Box>
              <Typography
                variant="h4"
                gutterBottom
                sx={{ textAlign: "center" }}
                className="ejemplos-consultas-title"
              >
                {ejemplos[selectedIdx].pregunta}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  textAlign: "center",
                  maxWidth: 500,
                  width: "100%",
                  whiteSpace: "pre-line",
                  margin: "0 auto",
                }}
                className="ejemplos-consultas-desc"
              >
                {ejemplos[selectedIdx].descripcion}
              </Typography>
            </Box>
          </Fade>
        </Box>
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

export default EjemplosConsultas;