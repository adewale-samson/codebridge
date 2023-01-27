import { styled, InputAdornment, Stack, Box, Typography, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Card from "../Components/Card";
import { useState, useEffect } from 'react'
import useFetch, {NewsData} from '../useFetch'



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


const url = 'https://api.spaceflightnewsapi.net/v3/articles'  

const Homepage = () => {
  const {news, handleClick} = useFetch(url);

  const [searchText, setSearchText] = useState('')
  const [filteredNews, setFilteredNews] = useState<NewsData[]>([])



   useEffect(() => {
    const filterData = () => {
      const keywords = searchText.split(' ')
      let filteredData = news.filter((item) => {
        let matchName = false
        let matchDescription = false
        keywords.forEach((keyword) => {
          if(item.title.toLowerCase().includes(keyword.toLowerCase())) matchName = true
          if(item.summary.toLowerCase().includes(keyword.toLowerCase())) matchDescription = true
        })
        return matchName || matchDescription
      })
      filteredData.sort((a, b) => {
        let aNameMatch = 0
        let bNameMatch = 0
        let aDescriptionMatch = 0
        let bDescriptionMatch = 0
        keywords.forEach((keyword) => {
          if(a.title.toLowerCase().includes(keyword.toLowerCase())) aNameMatch++
          if(b.title.toLowerCase().includes(keyword.toLowerCase())) bNameMatch++
          if(a.summary.toLowerCase().includes(keyword.toLowerCase())) aDescriptionMatch++
          if(b.summary.toLowerCase().includes(keyword.toLowerCase())) bDescriptionMatch++
        })
        if(aNameMatch !== bNameMatch) return bNameMatch - aNameMatch
        else return bDescriptionMatch - aDescriptionMatch
      })
      setFilteredNews(filteredData)
    }
    filterData()
  }, [searchText, news])
 
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
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" >
              <SearchIcon />
            </InputAdornment>
          ),
        }}  
      />
        <Typography variant='h6' color="primary" sx={{fontWeight: '600', fontSize: '16px', borderBottom: '1px solid #EAEAEA'}}>
          Results: {filteredNews ? filteredNews.length: news.length} 
        </Typography>
      <Stack direction='row' justifyContent='space-between' alignItems='center' flexWrap='wrap' sx={{paddingTop: '45px', justifyContent: {xs: 'space-around', md: 'space-around'}}}>
        {
          filteredNews.map((info, index) => {
             return <Card key={info.id}  info={info} moreClick={() =>handleClick(info)}/>

          })
        }
      </Stack>
        {filteredNews.length === 0 && (
          <Typography variant="body1" align={filteredNews.length === 0 ? "center" : 'left'} >
          No results found
          </Typography>
          )}
      
    </Box>
    
  );
};

export default Homepage;



