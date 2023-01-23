import { Card as CardComponent } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Box, styled } from "@mui/material";

const DateBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));
const Card = () => {
  return (
    <>
      <CardComponent sx={{ maxWidth: "400px", borderRadius: '5px', marginBottom: '45px', boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="217px"
            width="100%"
            image=""
            // image="https://source.unsplash.com/random/1920x1080/?wallpaper"
            alt="green iguana"
          />
          <CardContent>
            <DateBox>
              <CalendarTodayOutlinedIcon
                sx={{
                  color: "#363636",
                  opacity: "0.6",
                  fontSize: "12px",
                  marginRight: "10px",
                }}
              />
              <Typography
                variant="h6" gutterBottom
                sx={{ color: "#363636", opacity: "0.6", fontSize: "12px" }}
              >
                June 29th, 2021
              </Typography>
            </DateBox>
            <Typography gutterBottom variant="h5" component="div" sx={{fontSize: '24px'}}>
                The 2020 World's Most Valuable Brands
            </Typography>
            <Typography variant="body2" color="text.primary">
                Non sed molestie tortor massa vitae in mattis. Eget vel consequat
                hendrerit commodo libero aliquam. Urna arcu nunc tortor vitae pharetra...
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" endIcon={<ArrowRightAltIcon />} sx={{textTransform: 'initial', color: '#363636', fontSize: '16px', fontWeight: '700'}}>
            Read more
          </Button>
        </CardActions>
      </CardComponent>
    </>
  );
};

export default Card;
