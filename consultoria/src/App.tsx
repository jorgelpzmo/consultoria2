import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../node_modules/swiper/swiper.min.css';
import '../node_modules/swiper/modules/pagination.min.css';
import '../node_modules/swiper/modules/autoplay.min.css';
import { Pagination, Autoplay } from 'swiper/modules';

const App: React.FC = () => {
  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box display="flex" flexDirection="column" height="100vh">
      {/* Menú en la parte superior */}
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: 'space-between', backgroundColor: '#00594f' }}>
          {/* Logo en la parte izquierda */}
          <Typography variant="h6" component="div">
            Mi Logo
          </Typography>

          {/* Enlaces en la parte derecha */}
          <Box>
            <Button color="inherit" onClick={() => handleScroll('inicio')}>Inicio</Button>
            <Button color="inherit" onClick={() => handleScroll('consulta')}>Consultas</Button>
            <Button color="inherit" onClick={() => handleScroll('contacto')}>Contacto</Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Cuerpo en el medio */}
      <Box component="main" flex={1} overflow="auto">
        {/* Sección Inicio */}
        <Box
          id="inicio"
          height="100%"
          bgcolor="#f5f5f5"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          px={2}
        >
          {/* Texto descriptivo a la izquierda */}
          <Box width="25%" bgcolor="#e8e8e8" p={2} borderRadius={2}>
            <Typography variant="body1">
              Este es un texto descriptivo para la sección Inicio. Aquí puedes agregar más detalles sobre esta sección.
            </Typography>
          </Box>

          {/* Carrusel de imágenes a la derecha */}
          <Box width="75%" height="100%" display="flex" justifyContent="center" alignItems="center">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 6000 }}
              spaceBetween={30}
              slidesPerView={1}
              style={{ height: '90%', margin: '20px' }} // Ajusta la altura del Swiper
            >
              <SwiperSlide>
                <Box bgcolor="#d0d0d0" height="100%" display="flex" justifyContent="center" alignItems="center">
                  <Typography variant="h6">Imagen 1</Typography>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box bgcolor="#c0c0c0" height="100%" display="flex" justifyContent="center" alignItems="center">
                  <Typography variant="h6">Imagen 2</Typography>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box bgcolor="#b0b0b0" height="100%" display="flex" justifyContent="center" alignItems="center">
                  <Typography variant="h6">Imagen 3</Typography>
                </Box>
              </SwiperSlide>
            </Swiper>
          </Box>
        </Box>

        {/* Sección Consulta */}
        <Box
          id="consulta"
          height="100%"
          bgcolor="#e0e0e0"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
         <Box width="75%" height="100%" display="flex" justifyContent="center" alignItems="center">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 6000 }}
              spaceBetween={30}
              slidesPerView={1}
              style={{ height: '90%', margin: '20px' }} // Ajusta la altura del Swiper
            >
              <SwiperSlide>
                <Box bgcolor="#d0d0d0" height="100%" display="flex" justifyContent="center" alignItems="center">
                  <Typography variant="h6">Imagen 1</Typography>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box bgcolor="#c0c0c0" height="100%" display="flex" justifyContent="center" alignItems="center">
                  <Typography variant="h6">Imagen 2</Typography>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box bgcolor="#b0b0b0" height="100%" display="flex" justifyContent="center" alignItems="center">
                  <Typography variant="h6">Imagen 3</Typography>
                </Box>
              </SwiperSlide>
            </Swiper>
          </Box>
          {/* Texto descriptivo a la derecha */}
          <Box width="25%" bgcolor="#e8e8e8" p={2} borderRadius={2}>
            <Typography variant="body1">
              Este es un texto descriptivo para la sección Consultas. Aquí puedes agregar más detalles sobre esta sección.
            </Typography>
          </Box>
        </Box>

        {/* Sección Contacto */}
        <Box
          id="contacto"
          height="100%"
          bgcolor="#cfcfcf"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          px={2}
        >
          {/* Texto descriptivo a la izquierda */}
          <Box width="25%" bgcolor="#e8e8e8" p={2} borderRadius={2}>
            <Typography variant="body1">
              Este es un texto descriptivo para la sección Contacto. Aquí puedes agregar información adicional.
            </Typography>
          </Box>

          {/* Carrusel de imágenes a la derecha */}
          <Box width="75%" height="100%" display="flex" justifyContent="center" alignItems="center">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 6000 }}
              spaceBetween={30}
              slidesPerView={1}
              style={{ height: '90%', margin: '20px' }} // Ajusta la altura del Swiper
            >
              <SwiperSlide>
                <Box bgcolor="#d0d0d0" height="100%" display="flex" justifyContent="center" alignItems="center">
                  <Typography variant="h6">Imagen 1</Typography>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box bgcolor="#c0c0c0" height="100%" display="flex" justifyContent="center" alignItems="center">
                  <Typography variant="h6">Imagen 2</Typography>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box bgcolor="#b0b0b0" height="100%" display="flex" justifyContent="center" alignItems="center">
                  <Typography variant="h6">Imagen 3</Typography>
                </Box>
              </SwiperSlide>
            </Swiper>
          </Box>
        </Box>
      </Box>

      {/* Footer en la parte inferior */}
      <Box component="footer" bgcolor="#00594f" color="white" p={2} textAlign="center">
        <Typography variant="body2">
          © 2025 Mi Consultoría
        </Typography>
      </Box>
    </Box>
  );
};

export default App;