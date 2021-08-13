import React from 'react'
import Hero from '../components/Hero';
import Listings from '../components/Listings';
import ListingsFilter from '../components/ListingsFilter';

export default function Search() {
  const listings = [<Listings />]
  return (
   <>
      <Hero heroType='plain' />
      <ListingsFilter components={listings}/>
    </>
  )
}
