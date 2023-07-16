import React, { useEffect } from 'react'
import Layout from '../components/Layout/Layout'
import { useCharacterDetail } from '../hooks/useCharacterDetail'
import { useLocation } from 'react-router-dom'
import CharacterDetail from '../components/CharacterDetail/CharacterDetail'

const Character = () => {
    const location = useLocation()
    const characterIdFromPath = location.pathname && Number(
        location.pathname.replace('/character/', '')
      )
   const { data, isSuccess } = useCharacterDetail(characterIdFromPath)
    
  return (
    <Layout>
        {isSuccess ? <CharacterDetail character={data}/> : null}
    </Layout>
  )
}

export default Character