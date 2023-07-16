import { useQuery } from '@tanstack/react-query'
import { charactersQuery } from '../services/charactersQuery'

export const useCharactersList = () => useQuery(['characters-list'], charactersQuery)