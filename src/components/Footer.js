import {Box, Typography} from '@mui/material';

const Footer = _ => {
  return (
    <Box pb={4}>
      <Typography variant='h6' align='center'>Cinematic | &copy; 2023</Typography>
      <Typography variant='h6' align='center'>
        <a href="https://github.com/rpsingh6634/Cinematic" target="_blank" rel="noreferrer">
          Github Source Code
        </a>
      </Typography>
    </Box>
  )
}

export default Footer;