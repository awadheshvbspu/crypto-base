import React from 'react'
import CoinSearch from '../component/CoinSearch'
import Trending from '../component/Trending'

export default function Home({coin}) {
  return (
    <>
        <CoinSearch coin={coin}/>
        <Trending/>
    </>
  )
}
