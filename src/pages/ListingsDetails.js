import React from 'react'
import Hero from '../components/Hero'
import Listings from '../components/Listings'
import ListingsFilter from '../components/ListingsFilter'

export default function ListingsDetails() {
  const listings = [<Listings detailed={true} />]
  return (
    <div>
      <Hero heroType='plain' />
      <ListingsFilter components={listings}/>
    </div>
  )
}
