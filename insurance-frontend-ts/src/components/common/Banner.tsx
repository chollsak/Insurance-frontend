import { Box, Typography, Button } from "@mui/material"

export const Banner = () => {
  return (
    <Box>
      <Box 
        width={'full'} 
        height={510} 
        sx={{
          backgroundImage: 'url(/src/assets/img/banner/bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          paddingLeft: '130px',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(57, 120, 233, 0.4)', // Semi-transparent overlay
            zIndex: 1
          }
        }}
      >
        {/* Text content on the left */}
        <Box 
          sx={{ 
            color: 'white', 
            width: '30%', 
            zIndex: 2,
            position: 'relative',
            mb:18
          }}
        >
          <Typography sx={{mb:-1, fontWeight: 'bold',fontSize:'50px' }}>
            กรุงเทพประกันภัย
          </Typography>
          <Typography sx={{ mb: -1, fontSize: '30px'}}>
            สินค้าประกันภัยและบริการใหม่
          </Typography>
          <Typography sx={{ mb: 1, fontSize: '30px'}}>
            รวมทั้งโปรโมชั่นที่คุ้มค่าที่กรุงเทพประกันภัยเตรียมไว้ให้คุณ
          </Typography>
          <Button 
            variant="contained" 
            sx={{ 
              bgcolor: '#05058C', 
              mb:-20,
              '&:hover': { bgcolor: '#001850' },
              borderRadius: '12px',
              padding: '12px 60px',
              textTransform: 'none',
              fontSize:'30px'
            }}
          >
            ค้นหาแผนประกันที่ใช่
          </Button>
        </Box>

        {/* Scrollable images container */}
        <Box sx={{ width: '70%', position: 'relative', zIndex: 2 }}>
          {/* Scrollable images */}
          <Box
            sx={{
              display: 'flex',
              gap: 3,
              overflowX: 'auto',
              overflowY: 'hidden',
              scrollbarWidth: 'thin',
              '&::-webkit-scrollbar': { 
                height: '6px',
              },
              '&::-webkit-scrollbar-track': {
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '10px'
              },
              '&::-webkit-scrollbar-thumb': {
                background: 'rgba(255, 255, 255, 0.3)',
                borderRadius: '10px',
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.5)'
                }
              },
              padding: '10px 5px',
              scrollBehavior: 'smooth',
              cursor: 'grab',
              '&:active': {
                cursor: 'grabbing'
              }
            }}
          >
            {/* Banner 1 */}
            <Box 
              component="img"
              src="/src/assets/img/banner/banner1.png"
              alt="Banner 1"
              sx={{ 
                width: '480px',
                height: '480px',
                objectFit: 'cover',
                borderRadius: '12px',
                flexShrink: 0
              }}
            />
            
            {/* Banner 2 */}
            <Box
              component="img"
              src="/src/assets/img/banner/banner2.png"
              alt="Banner 2"
              sx={{ 
                width: '480px',
                height: '480px',
                objectFit: 'cover',
                borderRadius: '12px',
                flexShrink: 0
              }}
            />
            
            {/* Banner 3 */}
            <Box
              component="img"
              src="/src/assets/img/banner/banner3.png"
              alt="Banner 3"
              sx={{ 
                width: '480px',
                height: '480px',
                objectFit: 'cover',
                borderRadius: '12px',
                flexShrink: 0
              }}
            />
            
            {/* Banner 4 */}
            <Box
              component="img"
              src="/src/assets/img/banner/banner4.png"
              alt="Banner 4"
              sx={{ 
                width: '480px',
                height: '480px',
                objectFit: 'cover',
                borderRadius: '12px',
                flexShrink: 0
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}