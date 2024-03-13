import {AppBar, Container, Toolbar, Typography, Grid} from '@mui/material'
import Search from './components/Search'
import Show from './components/Show'

function App() {

  return (
    <Container maxWidth="lg">
      <AppBar position="fixed" color="primary">
        <Toolbar title='Poke Api'>
          <Typography variant="h6">
            PokeApi Test
          </Typography>
        </Toolbar>
      </AppBar>

      <Grid container spacing={0} pt={20}>
        <Grid item xs={12} sm={6}>
          <Search />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Show />
        </Grid>
      </Grid>
    </Container>
  )
}

export default App
