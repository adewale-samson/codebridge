import { CardMedia, Button, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import {KeyboardBackspace} from "@mui/icons-material";
import {useLocation, useNavigate } from 'react-router-dom'





const Articlepage = () => {
const navigate = useNavigate();
  const backHandler = () => {
    navigate(-1)
}

  const location = useLocation();
  const image = location.state.click.imageUrl;
  const title = location.state.click.title;
  const content = location.state.click.summary;
  
  return (
    <Box>
      <Box >
        <CardMedia
          sx={{ height: "245px", width: "100%", positiion: 'fixed' }}
          image={image}
          title={title}
        />
        <Box
          sx={{
            position: 'relative',
            top: "-90px",
            
            padding: {xs:'35px 40px', md:"35px 75px", lg:'35px 75px'} ,
            background: "#ffffff",
            width: "89.583%",
            margin: '0 auto',
            boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.05)",
            borderRadius: "5px",
            border: "1px solid #EAEAEA",
          }}
        >
          <Typography
            sx={{ textAlign: "center", fontSize: "24px", marginBottom: "50px" }}
          >
            {title}
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            {content}
            {content}
            {content}
            {content}
            {content}
            {content}
            {content}
            {content}
            {content}
            {content}
            {content}
            
          </Typography>
        </Box>
      </Box>
      <Box >
        <Button
          size="small"
          startIcon={<KeyboardBackspace />}
          sx={{
            textTransform: "initial",
            color: "#363636",
            fontSize: "16px",
            fontWeight: 700,
            position: 'relative', top: '-50px', left: {xs: '70px', md:'151px', lg:'151px'}
            
          }}
          onClick={backHandler}
        >
          Back to homepage
        </Button>
      </Box>
    </Box>
  );
};

export default Articlepage;
