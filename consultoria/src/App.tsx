import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../node_modules/swiper/swiper.min.css';
import '../node_modules/swiper/modules/pagination.min.css';
import '../node_modules/swiper/modules/autoplay.min.css';
import { Pagination, Autoplay } from 'swiper/modules';
import './css/styles.css';
import ContactForm from "./components/ContactForm";
import { useNavigate } from 'react-router-dom';


const App: React.FC = () => {
  const navigate = useNavigate();

  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };



  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100vh"
      sx={{ backgroundColor: "#f9f6f1" }} // blanco hueso para todo el fondo
    >
      {/* Menú en la parte superior */}
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: 'space-between', backgroundColor: '#00594f' }}>
          {/* Logo en la parte izquierda */}
          <Typography variant="h6" component="div">
            Mi Logo
          </Typography>

          {/* Enlaces en la parte derecha */}
          <Box>
            <Button
              color="inherit"
              onClick={() => handleScroll('inicio')}
              sx={{
                transition: 'background 0.2s',
                '&:hover': {
                  backgroundColor: '#00413a', // Color más oscuro al hacer hover
                  color: '#fff',
                },
              }}
            >
              Inicio
            </Button>
            <Button
              color="inherit"
              onClick={() => handleScroll('consulta')}
              sx={{
                transition: 'background 0.2s',
                '&:hover': {
                  backgroundColor: '#00413a',
                  color: '#fff',
                },
              }}
            >
              Consultas
            </Button>
            <Button
              color="inherit"
              onClick={() => handleScroll('contacto')}
              sx={{
                transition: 'background 0.2s',
                '&:hover': {
                  backgroundColor: '#00413a',
                  color: '#fff',
                },
              }}
            >
              Contacto
            </Button>
            <Button
              color="inherit"
              sx={{
                transition: 'background 0.2s',
                '&:hover': {
                  backgroundColor: '#00413a',
                  color: '#fff',
                },
              }}
              onClick={() => navigate('/blog')}
            >
              Blog
            </Button>
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
          sx={{ backgroundColor: "#f9f6f1" }}
        >
          {/* Texto descriptivo a la izquierda */}
          <Box width="25%" height="90%" minWidth={0} display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h4" gutterBottom sx={{ marginBottom: 20, textAlign: 'center' }}>
              ¿Estas de baja médica y no sabes que pasará ahora?
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'center' }}>
              Descubre si puedes optar a una incapacidad permanente y qué opciones legales tienes. Atención personalizada, claridad desde el primer momento.
            </Typography>
            <Button
              color="inherit"
              sx={{
                mt: 2,
                backgroundColor: "#00594f",
                color: "#fff",
                borderRadius: "4px",
                fontSize: "14px",
                padding: "8px 20px",
                transition: "background 0.2s",
                '&:hover': {
                  backgroundColor: "#00413a",
                  color: "#fff",
                },
                boxShadow: "0 2px 6px rgba(0,0,0,0.08)"
              }}
              onClick={() => {
                const section = document.getElementById('contacto');
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Saber más
            </Button>
          </Box>

          {/* Carrusel de imágenes a la derecha */}
          <Box width="75%" height="100%" display="flex" justifyContent="center" minWidth={0} alignItems="center"
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
          sx={{ backgroundColor: "#f9f6f1" }}
        >
          {/* Carrusel de imágenes a la izquierda */}
          <Box width="75%" height="100%" display="flex" justifyContent="center" minWidth={0} alignItems="center"
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
          <Box width="25%" height="90%" minWidth={0} display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h4" gutterBottom sx={{ marginBottom: 13, textAlign: 'center' }}>
              ¿Te suena alguna de estas situaciones?
            </Typography>
            <Box sx={{ textAlign: 'left', mb: 2 }}>
              <ul style={{ paddingLeft: 20, margin: 0, fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', fontSize: '1rem', color: 'inherit', lineHeight: 2.5 }}>
                <li>Estás de baja médica y nadie te explica qué derechos tienes.</li>
                <li>No sabes si puedes pedir una incapacidad permanente.</li>
                <li>Te sientes perdido entre trámites, plazos y decisiones que no entiendes.</li>
              </ul>
              <Typography variant="body1" sx={{ mt: 7, textAlign: 'left' }}>
                No estás solo. Es normal sentirse así. Aquí empieza tu claridad.
              </Typography>
            </Box>
            
          </Box>
        </Box>

        {/* Sección Servicios */}
        <Box
          id="servicios"
          height="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          px={2}
          sx={{ backgroundColor: "#f9f6f1" }}
        >
          {/* Título centrado y separado */}
          <Typography
            variant="h4"
            gutterBottom
            sx={{ textAlign: 'center', mt: 4, mb: 25, letterSpacing: 1 }}
          >
            Especialista en incapacidad permanente
          </Typography>
          {/* Contenido dividido en dos columnas */}
          <Box
            display="flex"
            flexDirection="row"
            width="100%"
            justifyContent="center"
            alignItems="stretch"
            mt={2}
            mb={4}
          >
            {/* Descripción, ocupa el 50% */}
            <Box width="50%" display="flex" flexDirection="column" justifyContent="center" alignItems="center" px={2}>
              <Typography variant="body1" sx={{ textAlign: 'center', fontSize: '1.1rem' }}>
                Solo trabajo este tipo de casos, lo que me permite darte un trato 100% personalizado, con explicaciones claras, soluciones concretas y una hoja de ruta desde el primer momento.
              </Typography>
            </Box>
            {/* Lista, ocupa el otro 50% */}
            <Box width="50%" display="flex" flexDirection="column" justifyContent="center" alignItems="center" px={2}>
              <Box
                component="ul"
                sx={{
                  listStyle: 'disc',
                  pl: 3,
                  m: 0,
                  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                  fontSize: '1.08rem',
                  color: 'inherit',
                  textAlign: 'left',
                  lineHeight: 2,
                }}
              >
                <li>Trato cercano y humano</li>
                <li>Análisis gratuito de tu caso</li>
                <li>Explicación clara de opciones y fases</li>
                <li>Posibilidad de pago por fases</li>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Sección Equipo */}
        <Box
          id="equipo"
          height="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          px={2}
          sx={{ backgroundColor: "#f9f6f1" }}
        >
          {/* Título centrado */}
          <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 25 }}>
            Testimonios de clientes
          </Typography>
          {/* Testimonios en dos columnas */}
          <Box
            display="flex"
            flexDirection="row"
            width="100%"
            justifyContent="center"
            alignItems="stretch"
            gap={4}
          >
            {/* Testimonio 1 a la izquierda */}
            <Box
              width={{ xs: "100%", md: "45%" }}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="flex-end"
              px={2}
            >
              <Typography variant="body1" sx={{ textAlign: 'left', fontStyle: 'italic', mb: 2 }}>
                “Josep me explicó todo con una claridad brutal. Me sentí acompañado y hoy tengo mi incapacidad reconocida.”<br />
                <span style={{ fontStyle: 'normal', fontWeight: 500 }}>– Laura, Barcelona</span>
              </Typography>
            </Box>
            {/* Testimonio 2 a la derecha */}
            <Box
              width={{ xs: "100%", md: "45%" }}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="flex-start"
              px={2}
            >
              <Typography variant="body1" sx={{ textAlign: 'left', fontStyle: 'italic', mb: 2 }}>
                “Después de tanta confusión, encontrar a alguien que solo se dedica a esto fue un alivio. Lo recomiendo al 100%.”<br />
                <span style={{ fontStyle: 'normal', fontWeight: 500 }}>– Marc, Terrassa</span>
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Sección Cómo funciona */}
<Box
  id="como-funciona"
  height="100%"
  display="flex"
  flexDirection="column"
  justifyContent="center"
  alignItems="center"
  px={2}
  sx={{ backgroundColor: "#f9f6f1" }}
>
  <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mt: 4, mb: 10 }}>
    ¿Cómo funciona?
  </Typography>
  <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', mb: 10 }}>
    Proceso simple en 3 pasos
  </Typography>
  <Box
    component="ol"
    sx={{
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: '1.08rem',
      color: 'inherit',
      textAlign: 'left',
      lineHeight: 2,
      maxWidth: 500,
      margin: '0 auto',
      pl: 3,
    }}
  >
    <li>Solicitas tu análisis gratuito</li>
    <li>Te explico tu situación y opciones reales</li>
    <li>Te acompaño paso a paso en todo el proceso, sin sorpresas</li>
  </Box>
</Box>

{/* Sección Sobre mí */}
<Box
  id="sobre-mi"
  height="100%"
  display="flex"
  justifyContent="center"
  alignItems="center"
  px={2}
  sx={{ backgroundColor: "#f9f6f1" }}
>
  <Box width="100%" maxWidth={700} display="flex" flexDirection="column" alignItems="center">
    <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 10}}>
      Sobre mí
    </Typography>
    <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', mt: 1 }}>
      Josep Maria Merino – Abogado especializado
    </Typography>
    <Typography variant="body1" sx={{ textAlign: 'center', mt: 10 }}>
      Llevo años trabajando exclusivamente en casos de incapacidad permanente. Mi enfoque es humano, cercano y realista. No prometo lo imposible: te explico lo que sí se puede hacer, cuándo y cómo.
    </Typography>
  </Box>
</Box>

        {/* Sección Preguntas Frecuentes */}
        <Box
          id="faq"
          height="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          px={2}
          sx={{ backgroundColor: "#f9f6f1" }}
        >
          <Box width="100%" maxWidth={700} display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
              Preguntas Frecuentes
            </Typography>
            <Box sx={{ width: '100%' }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mt: 2 }}>
                ¿Y si no me conceden la incapacidad?
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Te explico desde el principio las probabilidades reales. No todos los casos se ganan, pero siempre tendrás claridad.
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mt: 2 }}>
                ¿Cuánto cuesta?
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Trabajo por fases, y puedes pagar a medida que avanzamos. Sin sorpresas ni tarifas ocultas.
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mt: 2 }}>
                ¿Cuánto tarda el proceso?
              </Typography>
              <Typography variant="body1">
                Cada caso es distinto, pero te detallo los plazos desde el primer momento para que sepas qué esperar.
              </Typography>
            </Box>
            <Button
              color="inherit"
              sx={{
                mt: 2,
                backgroundColor: "#00594f",
                color: "#fff",
                borderRadius: "4px",
                fontSize: "14px",
                padding: "8px 20px",
                transition: "background 0.2s",
                '&:hover': {
                  backgroundColor: "#00413a",
                  color: "#fff",
                },
                boxShadow: "0 2px 6px rgba(0,0,0,0.08)"
              }}
              onClick={() => navigate('/ejemplos-consultas')}
            >
              Saber más
            </Button>
          </Box>
        </Box>

        
        {/* Sección Contacto */}
        <Box
          id="contacto"
          height="100%"
          sx={{ backgroundColor: "#f9f6f1" }} // Degradado de cfcfcf a bfbfbf
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          px={2}
          
        >
          {/* Texto descriptivo a la izquierda */}
          <Box width="25%" height="90%" minWidth={0} display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>
              Contacto
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'center' }}>
              Ponte en contacto con nosotros para más información. Estamos disponibles para atender tus consultas y ayudarte a encontrar la mejor solución para tus necesidades.
            </Typography>
            <ContactForm />
          </Box>

          {/* Carrusel de imágenes a la derecha */}
          <Box width="75%" height="100%" display="flex" justifyContent="center" minWidth={0} alignItems="center"
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