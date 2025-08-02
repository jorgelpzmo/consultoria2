import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../node_modules/swiper/swiper.min.css';
import '../node_modules/swiper/modules/pagination.min.css';
import '../node_modules/swiper/modules/autoplay.min.css';
import { Pagination, Autoplay } from 'swiper/modules';
import './css/styles.css';


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
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          px={2}
          sx={{
            background: 'linear-gradient(to bottom, #f5f5f5, #e0e0e0)', // Degradado de f5f5f5 a e0e0e0
            }}
        >
          {/* Texto descriptivo a la izquierda */}
          <Box width="25%" height="90%">
            <Typography variant="h4" gutterBottom sx={{ marginBottom: 20, textAlign: 'center' }}>
              Inicio
            </Typography>
            <Typography variant="body1">
              Bienvenido a nuestra página de inicio. Aquí encontrarás información general sobre nuestros servicios y cómo podemos ayudarte a alcanzar tus objetivos.
            </Typography>
          </Box>

          {/* Carrusel de imágenes a la derecha */}
          <Box width="75%" height="100%" display="flex" justifyContent="center" alignItems="center"
            sx={{
              '& .swiper-pagination-bullet': {
              backgroundColor: '#00594f', // Cambia el color de los puntos
              width: '12px', // Cambia el tamaño de los puntos
              height: '12px',
              opacity: 0.2, // Ajusta la opacidad
              },
              '& .swiper-pagination-bullet-active': {
                backgroundColor: '#008c7a', // Cambia el color del punto activo
                opacity: 1, // Asegura que el punto activo sea completamente visible
              },
            }}
          >
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 6000 }}
              spaceBetween={30}
              slidesPerView={1}
              style={{ height: '90%', margin: '20px' }}
            >
              <SwiperSlide>
                <Box
                  component="img"
                  src="../public/Recurso-17entrevista.png"
                  alt="Imagen 1"
                  height="100%"
                  width="100%"
                  sx={{ objectFit: 'cover' }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  component="img"
                  src="../public/despacho-abogados-consultoria-integral.webp"
                  alt="Imagen 2"
                  height="100%"
                  width="100%"
                  sx={{ objectFit: 'cover' }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  component="img"
                  src="../public/imagen3-seccion1.jpg"
                  alt="Imagen 3"
                  height="100%"
                  width="100%"
                  sx={{ objectFit: 'cover' }}
                />
              </SwiperSlide>
            </Swiper>
          </Box>
        </Box>

        {/* Sección Consulta */}
        <Box
          id="consulta"
          height="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          px={2}
          sx={{
            background: 'linear-gradient(to bottom, #e0e0e0, #cfcfcf)', // Degradado de e0e0e0 a cfcfcf
          }}
        >
          {/* Carrusel de imágenes a la izquierda */}
          <Box width="75%" height="100%" display="flex" justifyContent="center" alignItems="center"
          
          sx={{
              '& .swiper-pagination-bullet': {
              backgroundColor: '#00594f', // Cambia el color de los puntos
              width: '12px', // Cambia el tamaño de los puntos
              height: '12px',
              opacity: 0.2, // Ajusta la opacidad
              },
              '& .swiper-pagination-bullet-active': {
                backgroundColor: '#008c7a', // Cambia el color del punto activo
                opacity: 1, // Asegura que el punto activo sea completamente visible
              },
            }}>
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 6000 }}
              spaceBetween={30}
              slidesPerView={1}
              style={{ height: '90%', margin: '20px' }}
            >
              <SwiperSlide>
                <Box
                  component="img"
                  src="../public/Recurso-17entrevista.png"
                  alt="Imagen 1"
                  height="100%"
                  width="100%"
                  sx={{ objectFit: 'cover' }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  component="img"
                  src="../public/despacho-abogados-consultoria-integral.webp"
                  alt="Imagen 2"
                  height="100%"
                  width="100%"
                  sx={{ objectFit: 'cover' }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  component="img"
                  src="../public/imagen3-seccion1.jpg"
                  alt="Imagen 3"
                  height="100%"
                  width="100%"
                  sx={{ objectFit: 'cover' }}
                />
              </SwiperSlide>
            </Swiper>
          </Box>

          {/* Texto descriptivo a la derecha */}
          <Box width="25%" height="90%">
            <Typography variant="h4" gutterBottom sx={{ marginBottom: 20, textAlign: 'center' }}>
              Consultas
            </Typography>
            <Typography variant="body1">
              En esta sección puedes realizar consultas personalizadas sobre nuestros servicios. Nuestro equipo está listo para resolver tus dudas y ofrecerte soluciones adaptadas a tus necesidades.
            </Typography>
          </Box>
        </Box>

        {/* Sección Contacto */}
        <Box
          id="contacto"
          height="100%"
          sx={{ background: 'linear-gradient(to bottom, #cfcfcf, #bfbfbf)' }} // Degradado de cfcfcf a bfbfbf
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          px={2}
          
        >
          {/* Texto descriptivo a la izquierda */}
          <Box width="25%" height="90%">
            <Typography variant="h4" gutterBottom sx={{ marginBottom: 20, textAlign: 'center' }}>
              Contacto
            </Typography>
            <Typography variant="body1">
              Ponte en contacto con nosotros para más información. Estamos disponibles para atender tus consultas y ayudarte a encontrar la mejor solución para tus necesidades.
            </Typography>
          </Box>

          {/* Carrusel de imágenes a la derecha */}
          <Box width="75%" height="100%" display="flex" justifyContent="center" alignItems="center"
          sx={{
              '& .swiper-pagination-bullet': {
              backgroundColor: '#00594f', // Cambia el color de los puntos
              width: '12px', // Cambia el tamaño de los puntos
              height: '12px',
              opacity: 0.2, // Ajusta la opacidad
              },
              '& .swiper-pagination-bullet-active': {
                backgroundColor: '#008c7a', // Cambia el color del punto activo
                opacity: 1, // Asegura que el punto activo sea completamente visible
              },
            }}
          >
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 6000 }}
              spaceBetween={30}
              slidesPerView={1}
              style={{ height: '90%', margin: '20px' }}
            >
              <SwiperSlide>
                <Box
                  component="img"
                  src="../public/Recurso-17entrevista.png"
                  alt="Imagen 1"
                  height="100%"
                  width="100%"
                  sx={{ objectFit: 'cover' }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  component="img"
                  src="../public/despacho-abogados-consultoria-integral.webp"
                  alt="Imagen 2"
                  height="100%"
                  width="100%"
                  sx={{ objectFit: 'cover' }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  component="img"
                  src="../public/imagen3-seccion1.jpg"
                  alt="Imagen 3"
                  height="100%"
                  width="100%"
                  sx={{ objectFit: 'cover' }}
                />
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