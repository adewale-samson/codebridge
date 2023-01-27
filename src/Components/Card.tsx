import { Card as CardComponent } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Box, styled } from "@mui/material";
import { NewsData } from '../useFetch'




const DateBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

const Card: React.FC<{info: NewsData,  moreClick: ()=>void}> = ({info, moreClick}) => {

  return (
    <>
     
      <CardComponent sx={{ maxWidth: "400px", height: '530px', borderRadius: '5px', marginBottom: '45px', boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="217px"
            width="100%"
            image={info.imageUrl}
            alt={info.newsSite}
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
            <Typography variant="h5" component="div" sx={{fontSize: '24px', width: '350px', height: '58px',marginBottom: '20px'}}>
              {info.title.slice(0, 43)}
              {/* {titleChange.slice(0,43)} */}
            </Typography>
            <Typography variant="body2" color="text.primary" sx={{height: '96px', width: '350px'}}>
              {info.summary.slice(0, 100)}
              {/* {description.slice(0, 100)} */}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" endIcon={<ArrowRightAltIcon />} sx={{textTransform: 'initial', color: '#363636', fontSize: '16px', fontWeight: '700'}} onClick={moreClick}>
            Read more
          </Button>
        </CardActions>
      </CardComponent>
     
    </>
  );
};

export default Card;
