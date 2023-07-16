import { useQuery } from '@tanstack/react-query'
import { characterDetailQuery } from '../services/characterDetailQuery'

export const useCharacterDetail = (id) => useQuery(['character-detail'], () => characterDetailQuery(id), {enabled: !!id})