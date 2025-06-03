import { Box, Typography, Container } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SpeedIcon from '@mui/icons-material/Speed';

export const WhyChooseUs = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '683px',
        width: '100%',
        overflow: 'hidden',
        backgroundColor: '#05058C',
        zIndex: 0
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(/src/assets/img/whychooseus/cover.png)',
          backgroundSize: '100%',
          backgroundPosition: '10% 100%',
          backgroundRepeat: 'no-repeat',
          WebkitTransform: 'scaleX(-1)',
          transform: 'scaleX(-1)',
          zIndex: 0
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.9)', // Semi-transparent overlay
          zIndex: 1
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: { xs: '100%', md: '50%' },
            pr: { md: 4 },
            mt: '-100px'
          }}
        >
          <Typography
            sx={{
              color: '#0E1941',
              mb: 1,
              fontWeight: 400,
              fontSize: '25px'
            }}
          >
            Why Choose Us
          </Typography>

          <Typography
            variant="h3"
            component="h2"
            sx={{
              color: '#0E1941',
              fontWeight: 'bold',
              mb: 1,
              fontSize: { xs: '2rem', md: '42px' }
            }}
          >
            The Insurance That Keeps You Ahead
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: '#555',
              mb: 4,
              lineHeight: 1.4,
              fontSize: '22px'
            }}
          >
            We are committed to providing our customers with high-quality insurance
            products and exceptional customer service. Since our founding in 1985, we
            have worked hard to establish ourselves as a trusted insurance industry.
          </Typography>

          <Box sx={{ mb: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  borderRadius: '50%',
                  bgcolor: '#5578e8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mr: 2
                }}
              >
                <CheckCircleIcon sx={{ color: 'white', width: '70px' }} />
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#0E1941',
                    fontWeight: 'regular',
                    fontSize: '32px'
                  }}
                >
                  Permanent Life Insurance
                </Typography>
                <Typography variant="body2" sx={{ color: '#555', fontSize: '22px' }}>
                  Permanent life insurance is a type of life insurance
                  that provides coverage for the entire lifetime.
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  borderRadius: '50%',
                  bgcolor: '#5578e8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mr: 2
                }}
              >
                <SpeedIcon sx={{ color: 'white', width: '70px' }} />
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#0E1941',
                    fontWeight: 'regular',
                    fontSize: '32px'
                  }}
                >
                  Fast & easy process
                </Typography>
                <Typography variant="body2" sx={{ color: '#555', fontSize: '22px' }}>
                  Permanent life insurance is a type of life insurance
                  that provides coverage for the entire lifetime.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            position: 'absolute',
            right: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            width: '45%',
            height: '80%',
            zIndex: 2,
            gap: 4
          }}
        >
          <Box
            sx={{
              width: '50%',
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(255, 255, 255, 0)',
                zIndex: 1
              }
            }}
          >
            <Box
              component="img"
              src="/src/assets/img/whychooseus/family.png"
              alt="Father and daughter saving money"
              draggable={false}
              sx={{
                width: '270px',
                height: '492px',
                objectFit: 'cover',
                mt: -3,
                mr: 10,
                userSelect: "none"
              }}
            />
          </Box>
          <Box
            sx={{
              width: '50%',
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(255, 255, 255, 0)',
                zIndex: 1,
              }
            }}
          >
            <Box
              component="img"
              src="/src/assets/img/whychooseus/document.png"
              alt="Person signing insurance document"
              draggable={false}
              sx={{
                width: '270px',
                height: '492px',
                objectFit: 'cover',
                mt: 8,
                userSelect: "none"
              }}
            />
          </Box>
        </Box>

        <Box
          sx={{
            position: 'absolute',
            bottom: '15%',
            right: '16%',
            zIndex: 3,
            display: 'inline-flex',
            alignItems: 'center',
            bgcolor: 'white',
            borderRadius: 30,
            px: 3,
            py: 0.5,
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          }}
        >
          <Box component={'img'} src='src/assets/img/whychooseus/verify.png' draggable={false} sx={{ mr: 1, width: '36px', userSelect: "none" }} />
          <Typography
            variant="subtitle1"
            sx={{
              color: 'black',
              fontWeight: 'regular',
              fontSize: '30px'
            }}
          >
            A Better value of Better Protection
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};