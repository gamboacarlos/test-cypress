export const characterDetailQuery = async(id) => {
    const fetchCharacter = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const response  = await fetchCharacter.json()
    return response
}