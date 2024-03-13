import { useAtom } from 'jotai'
import { CircularProgress, Grid, Paper, Typography } from '@mui/material'
import { Pokemons as pokemonsStore } from '../store/Pokemons'
import { SearchType as SearchTypeStore } from '../store/SearchType'
import { Loading as LoadingStore } from '../store/Loading'

const Show = () => {
  const [pokemons] = useAtom(pokemonsStore)
  const [SearchType] = useAtom(SearchTypeStore)
  const [Loading] = useAtom(LoadingStore)


  if (Loading)
    return <Grid container spacing={0} textAlign='center'>
      <Grid item xs={12}><CircularProgress /></Grid>
    </Grid>
  else if (!pokemons?.dataStatus)
    return <Grid container spacing={0} textAlign='center'>
      <Grid item xs={12}><Typography variant="h5">We have some problems... Are you sure of your  request?</Typography></Grid>
    </Grid>
  else
    return (
      <Paper sx={{ padding: 5 }} elevation={3}>
        <Grid container spacing={0}>
          {
            (SearchType == 'id' || SearchType == 'name') &&
            pokemons.name && pokemons.name !== '' &&
            <Grid item container xs={12} textAlign='center'>
              <Grid item xs={4}>
                <img src={pokemons?.sprites?.front_default} alt={pokemons.name} />
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h2">{pokemons.name}</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h5">Id</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h6">{pokemons.id}</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h5">Weight</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h6">{pokemons.weight} hectograms</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h5">Height</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h6">{pokemons.height} decimetres</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h5">Abilities</Typography>
              </Grid>
              <Grid item xs={8}>
                {
                  pokemons.abilities.map(ability => (
                    <Typography key={ability.ability.name} variant="body1">{ability.ability.name}</Typography>
                  ))
                }
              </Grid>
            </Grid>
          }
          {
            SearchType === 'ability' && pokemons.name && pokemons.name !== '' &&
            <Grid item container xs={12} textAlign='center'>
              <Grid item xs={4}>
                <Typography variant="h5">Id</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h6">{pokemons.id}</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h5">Name</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h6">{pokemons.name}</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h5">Generation</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h6">{pokemons.generation.name}</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h5">Pokemons</Typography>
              </Grid>
              <Grid item xs={8}>
                {
                  pokemons.pokemon.map(pokemon => (
                    <Typography key={pokemon.pokemon.name} variant="body1">{pokemon.pokemon.name}</Typography>
                  ))
                }
              </Grid>
            </Grid>
          }
          {
            SearchType === 'specie' && pokemons.name && pokemons.name !== '' &&
            <Grid item container xs={12} textAlign='center'>
              <Grid item xs={4}>
                <Typography variant="h5">Id</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h6">{pokemons.id}</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h5">Name</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h6">{pokemons.name}</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h5">Generation</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h6">{pokemons.generation.name}</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h5">happiness</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h6">{pokemons.base_happiness}</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h5">Capture</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h6">{pokemons.capture_rate}%</Typography>
              </Grid>
            </Grid>
          }
          {
            SearchType === 'type' && pokemons.name && pokemons.name !== '' &&
            <Grid item container xs={12} textAlign='center'>
              <Grid item xs={4}>
                <Typography variant="h5">Id</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h6">{pokemons.id}</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h5">Name</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h6">{pokemons.name}</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h5">Generation</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h6">{pokemons.generation.name}</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h5">Pokemons</Typography>
              </Grid>
              <Grid item xs={8}>
                {
                  pokemons.pokemon.map(pokemon => (
                    <Typography key={pokemon.pokemon.name} variant="body1">{pokemon.pokemon.name}</Typography>
                  ))
                }
              </Grid>
            </Grid>
          }
        </Grid>
      </Paper>
    )
}

export default Show