import { Box, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  // Check window width on component mount and when window resize events occur
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    // Initial check
    handleResize();
    
    // Listen for resize events
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  // Determine if we should use smaller font based on window width
  const useSmallFont = windowWidth <= 1450;
  
  // Font size variables that change based on window width
  const menuFontSize = useSmallFont ? "17px" : "18px";
  const langFontSize = useSmallFont ? "20px" : "22px";
  const navLinkFontSize = useSmallFont ? "19px" : "22px";
  const searchFontSize = useSmallFont ? "22px" : "22px";
  
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
          bgcolor: "#3978E9",
          width: "fit-content",
          height: "30px",
          display: "flex",
          gap: useSmallFont ? "16px" : "18px",
          paddingX: useSmallFont ? "10px" : "20px",
          alignItems: "center", 
          position: "absolute",
          top: 0,
          right: 0,
          borderBottomLeftRadius: "20px",
          zIndex: 3,
        }}
      >
        <Typography sx={{ color: "white", fontSize: menuFontSize, fontWeight: 500, ml: "5px"}}>ลูกค้าส่วนบุคคล</Typography>
        <Typography sx={{ color: "white", fontSize: menuFontSize, fontWeight: 500 }}>สนใจด้านการลงทุน</Typography>
        <Typography sx={{ color: "white", fontSize: menuFontSize, fontWeight: 500 }}>สนใจข้อมูลตัวเเทน / นายหน้า</Typography>
        <Typography sx={{ color: "white", fontSize: menuFontSize, fontWeight: 500 }}>สำหรับตัวเเทน</Typography>
        <Box
          component="img"
          src="src/assets/img/navbar/icon.png" 
          alt="Insurance Icon"
          draggable={false}
          sx={{
            height: useSmallFont ? "18px" : "22px",
            width: useSmallFont ? "18px" : "22px",
            mx: 0,
            userSelect: "none",
          }}
        />
        <Box sx={{
          display: "flex",
          gap:"5px",
          mr:"12px"
        }}>
          <Typography sx={{ color: "white", fontSize: langFontSize, fontWeight: 300 }}>TH</Typography>
          <Typography sx={{ color: "white", fontSize: langFontSize, fontWeight: 300 }}>|</Typography>
          <Typography sx={{ color: "white", fontSize: langFontSize, fontWeight: 500 }}>EN</Typography>
        </Box>
      </Box>

      {/* blue line box */}
      <Box 
        sx={{
          bgcolor: "#3978E9",
          width: "100%",
          height: "9px",
          position: "absolute",
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
          height: "70px",
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
          height: "81px",
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
        <Stack 
          direction={"row"} 
          spacing={useSmallFont ? 8 : 15} 
          sx={{mt:3, ml: useSmallFont ? 14 : 15}}
        >
          <Box
            component={"img"}
            src="src/assets/img/navbar/BKI.png" 
            alt="BKI Logo"
            draggable={false}
            sx={{
              width: useSmallFont ? "179px" : "179px",
              height: useSmallFont ? "36px" : "36px",
              userSelect: "none",
            }}
          />

          <Box sx={{ width: "100%", maxWidth: useSmallFont ? "300px" : "344px"}}>
            <TextField 
              fullWidth
              placeholder="ค้นหาสิ่งที่คุณสนใจ"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "#666" }} />
                  </InputAdornment>
                ),
                sx: {
                  borderRadius: "10px",
                  height: "36px",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#3978E9",
                    border:"3px solid #3978E9"
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#3978E9",
                    border:"3px solid #3978E9"
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#3978E9",
                    border:"3px solid #3978E9"
                  },
                  fontSize: searchFontSize,
                  color: "#6b6b6b",
                  backgroundColor: "white",
                  mt:1.5,
                  ml: useSmallFont ? 3 : 3
                }
              }}
              InputLabelProps={{
                shrink: false,
              }}
            />
          </Box>

          <Box sx={{
            display:"flex",
            gap: useSmallFont ? "20px" : "35px",
          }}>
            <Typography sx={{ color: "#05058C", fontSize: navLinkFontSize, fontWeight: 500, mt:2, ml: useSmallFont ? 2 : -8}}>Home</Typography>
            <Typography sx={{ color: "#05058C", fontSize: navLinkFontSize, fontWeight: 500, mt:2 }}>Product</Typography>
            <Typography sx={{ color: "#05058C", fontSize: navLinkFontSize, fontWeight: 500, mt:2 }}>Service</Typography>
            <Typography sx={{ color: "#05058C", fontSize: navLinkFontSize, fontWeight: 500, mt:2 }}>About BKI</Typography>
            <Typography sx={{ color: "#05058C", fontSize: navLinkFontSize, fontWeight: 500, mt:2 }}>Investor</Typography>
            <Typography sx={{ color: "#05058C", fontSize: navLinkFontSize, fontWeight: 500, mt:2 }}>Contact Us</Typography>
            <Typography sx={{ color: "#05058C", fontSize: navLinkFontSize, fontWeight: 500, mt:2 }}>My BKI</Typography>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};