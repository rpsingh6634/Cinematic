import useLocalStorage from "use-local-storage";
import FavoriteMovieCard from "../components/FavoriteMovieCard";
import { Box, Typography } from "@mui/material";
import Masonry from '@mui/lab/Masonry';

const Home = _ => {
  const [favorites] = useLocalStorage("mostFavorites", "[]");

  return (
    <>
      <Box p={4}>
        <Typography variant="h5" textAlign="center">Welcome to My Collection</Typography>
        <hr />
        <Masonry columns={4} spacing={2}>
          {JSON.parse(favorites).map((e, i) => {
            return <FavoriteMovieCard id={e} key={i} />
          })}
        </Masonry>
      </Box>
    </>
  )
}

export default Home;