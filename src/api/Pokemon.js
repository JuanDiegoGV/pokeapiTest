import axios from 'axios'

let api = 'https://pokeapi.co/api/v2/'

const SearchPokemon = async ({ searchType, searchTerm }) => {
  let query = ''

  if (searchType === 'id' || searchType === 'name')
    query = 'pokemon/' + searchTerm
  else if (searchType === 'specie')
    query = 'pokemon-species/' + searchTerm
  else if (searchType === 'type')
    query = 'type/' + searchTerm
  else if (searchType === 'ability')
    query = 'ability/' + searchTerm

  try {
    const { data } = await axios.get(api + query + '?limit=5')
    data.dataStatus = true
    return data
  } catch (error) {
    const data = { dataStatus: false }
    return data
  }

}

export {
  SearchPokemon
}