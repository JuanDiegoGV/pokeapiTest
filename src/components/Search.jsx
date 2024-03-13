import { useState } from 'react'
import { useAtom } from 'jotai'
import { Grid, FormControl, RadioGroup, FormControlLabel, Radio, TextField, Button } from "@mui/material"
import { SearchPokemon } from '../api/Pokemon'
import { Pokemons as pokemonsStore } from '../store/Pokemons'
import { SearchType as SearchTypeStore } from '../store/SearchType'
import { Loading as LoadingStore } from '../store/Loading'

const Search = () => {

  const [query, setQuery] = useState({
    searchType: 'id',
    searchTerm: ''
  })

  const [pokemons, setPokemons] = useAtom(pokemonsStore)
  const [SearchType, setSearchType] = useAtom(SearchTypeStore)
  const [Loading, setLoading] = useAtom(LoadingStore)


  const handleSearch = async () => {
    setLoading(true)
    const results = await SearchPokemon(query)
    setSearchType(query.searchType)
    setPokemons(results)
    setLoading(false)
  }

  return (
    <Grid container spacing={0} pr={5}>
      <Grid item xs={12}>
        <TextField
          fullWidth
          id="searchTerm"
          label="type here..."
          onChange={(e) => setQuery({ ...query, searchTerm: e.target.value })}
          autoComplete='off'
          onKeyDown={(k) => {
            if (k.keyCode == 13) handleSearch()
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="id"
            name="searchType"
            onChange={(e, a) => setQuery({ ...query, searchType: a })}
          >
            <FormControlLabel value="id" control={<Radio />} label="Id" />
            <FormControlLabel value="name" control={<Radio />} label="Name" />
            <FormControlLabel value="specie" control={<Radio />} label="Specie" />
            <FormControlLabel value="type" control={<Radio />} label="Type" />
            <FormControlLabel value="ability" control={<Radio />} label="Ability" />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="success" fullWidth onClick={() => handleSearch()}>
          Search
        </Button>
      </Grid>
    </Grid>
  )

}

export default Search