import { Box, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export const Navbar = () => {
  return (
    <Box 
      sx={{ 
        position: "fixed", 
        height: "81px",
        width: "100%",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
    >
      {/* top right blue menu*/}
      <Box 
        sx={{
          bgcolor: '#3978E9',
          width: 'fit-content',
          height: '40px',
          display: 'flex',
          gap: '18px',
          paddingX: '20px',
          alignItems: 'center', 
          position: 'absolute',
          top: 0,
          right: 0, // Position at right edge
          borderBottomLeftRadius: "20px",
          zIndex: 3,
        }}
      >
        <Typography sx={{ color: 'white', fontSize: '23px', fontWeight: 500, ml: '5px'}}>ลูกค้าส่วนบุคคล</Typography>
        <Typography sx={{ color: 'white', fontSize: '23px', fontWeight: 500 }}>สนใจด้านการลงทุน</Typography>
        <Typography sx={{ color: 'white', fontSize: '23px', fontWeight: 500 }}>สนใจข้อมูลตัวเเทน / นายหน้า</Typography>
        <Typography sx={{ color: 'white', fontSize: '23px', fontWeight: 500 }}>สำหรับตัวเเทน</Typography>
          <Box
            component="img"
            src="src/assets/img/navbar/icon.png" 
            alt="Insurance Icon"
            sx={{
              height: '30px',
              width: '30px',
              mx: 1.6,
            }}
          />
        <Box sx={{
            display: 'flex',
            gap:'5px',
            mr:'14px'
        }}>
            <Typography sx={{ color: 'white', fontSize: '30px', fontWeight: 300 }}>TH</Typography>
            <Typography sx={{ color: 'white', fontSize: '30px', fontWeight: 300 }}>|</Typography>
            <Typography sx={{ color: 'white', fontSize: '30px', fontWeight: 500 }}>EN</Typography>
        </Box>
      </Box>

      {/* blue line box */}
      <Box 
        sx={{
          bgcolor: '#3978E9',
          width: '100%',
          height: '10px',
          position: 'absolute',
          borderBottomLeftRadius: "5px",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 2,
        }}
      />

      {/* blue box */}
      <Box
        sx={{
          bgcolor: "#3978E9",
          width: "100%",
          height: "81px",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 0,
        }}
      />

      {/* white box */}
      <Box
        sx={{
          bgcolor: "white",
          width: "100%",
          height: "100px",
          border: "1px solid #E6E6E6",
          borderBottomLeftRadius: "15px",
          boxShadow: "10px 5px 5px rgba(0, 0, 0, 0.15)",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1,
        }}
      >
        {/* Content for white box */}
        <Stack direction={'row'} spacing={20} sx={{mt:3, ml:19}}>
        <Box
            component={'img'}
            src="src/assets/img/navbar/BKI.png" 
            sx={{
                width:'234px',
                height:'48px'
            }}
        />

        <Box sx={{ width: '100%', maxWidth: '440px'}}>
            <TextField 
                fullWidth
                placeholder="ค้นหาสิ่งที่คุณสนใจ"
                variant="outlined"
                InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                    <SearchIcon sx={{ color: '#666' }} />
                    </InputAdornment>
                ),
                sx: {
                    borderRadius: '10px',
                    height: '48px',
                    '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#3978E9',
                    border:'3px solid #3978E9'
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#3978E9',
                    border:'3px solid #3978E9'
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#3978E9',
                    border:'3px solid #3978E9'
                    },
                    fontSize: '22px',
                    color: '#6b6b6b',
                    backgroundColor: 'white',
                    mt:2,
                    ml:1.2
                }
                }}
                InputLabelProps={{
                shrink: false,
                }}
            />
            </Box>

            <Box sx={{
                display:'flex',
                gap:'43px',
            }}>
                <Typography sx={{ color: '#05058C', fontSize: '28px', fontWeight: 500 ,mt:3, ml:-14.5}}>Home</Typography>
                <Typography sx={{ color: '#05058C', fontSize: '28px', fontWeight: 500 ,mt:3, }}>Product</Typography>
                <Typography sx={{ color: '#05058C', fontSize: '28px', fontWeight: 500 ,mt:3, }}>Service</Typography>
                <Typography sx={{ color: '#05058C', fontSize: '28px', fontWeight: 500 ,mt:3, }}>About BKI</Typography>
                <Typography sx={{ color: '#05058C', fontSize: '28px', fontWeight: 500 ,mt:3, }}>Investor</Typography>
                <Typography sx={{ color: '#05058C', fontSize: '28px', fontWeight: 500 ,mt:3, }}>Contact Us</Typography>
                <Typography sx={{ color: '#05058C', fontSize: '28px', fontWeight: 500 ,mt:3, }}>My BKI</Typography>
            </Box>

        </Stack>
      </Box>
    </Box>
  );
};