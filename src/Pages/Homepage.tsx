import { styled, InputBase, InputAdornment, Stack, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import TextField from '@mui/material/TextField';
import Card from "../Components/Card";

const Search = styled(TextField)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
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
const Homepage = () => {
  return (
    <Box sx={{padding:'30px 50px'}}>
      <Typography
        variant="h6"
        color="primary"
        gutterBottom
        sx={{ fontSize: "16px", fontWeight: "600" }}
      >
        Filter by keywords
      </Typography>
      {/* <Search>
       
        <InputBase
          placeholder="The most successful IT companies in 2020"
          type="search"
          inputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{ width: "52.632%", border: "1px solid #EAEAEA" }}
        />
      </Search> */}
  
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
      <Stack direction='row' justifyContent='space-between' alignItems='center' flexWrap='wrap' sx={{paddingTop: '45px'}}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Stack>
    </Box>
  );
};

export default Homepage;
