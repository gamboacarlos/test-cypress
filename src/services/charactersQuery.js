export const charactersQuery = async() => {
    const fetchCharacters = await fetch('https://rickandmortyapi.com/api/character')
    const { results }  = await fetchCharacters.json()
    return results
}