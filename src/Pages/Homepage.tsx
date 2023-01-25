import { styled, InputAdornment, Stack, Box, Typography, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Card from "../Components/Card";
import useFetch from '../useFetch'



const Search = styled(TextField)(({ theme }) => ({
  borderRadius: '5px',
  border: "1px solid #EAEAEA", marginBottom: '40px',
  width: "52.632%", boxSizing: 'border-box',
  boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)',
  '&:focus':{
    border: 'none',
    outline: 'none'
  },
  '&:hover':{
    border: 'none',
    outline: 'none'
  },
  '&:active':{
    border: 'none',
    outline: 'none'
  }
}));

let url= 'https://newsapi.org/v2/top-headlines?country=us&apiKey=6c4f02d3895b4639b40c9ccd895bc885'

const Homepage = () => {
 
  const {news, handleClick} = useFetch(url);
 
  return (
    
    <Box sx={{padding:{lg:'30px 50px', md:'30px 50px', sm:'30px 50px', xs:'30px 25px'}}}>
      <Typography
        variant="h6"
        color="primary"
        gutterBottom
        sx={{ fontSize: "16px", fontWeight: "600" }}
      >
        Filter by keywords
      </Typography>
      
  
      <Search
      type='search'
        placeholder="The most successful IT companies in 2020"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" >
              <SearchIcon />
            </InputAdornment>
          ),
        }}  
      />
      <Typography variant='h6' color="primary" sx={{fontWeight: '600', fontSize: '16px', borderBottom: '1px solid #EAEAEA'}}>
        Results: 6
      </Typography>
      <Stack direction='row' justifyContent='space-between' alignItems='center' flexWrap='wrap' sx={{paddingTop: '45px', justifyContent: {xs: 'space-around', md: 'space-around'}}}>
        {
          news.map((info, index) => {
             return <Card key={index}  info={info} moreClick={() =>handleClick(info)}/>

          })
        }
      </Stack>
      
    </Box>
    
  );
};

export default Homepage;
