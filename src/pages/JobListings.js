import React from 'react'
import Hero from '../components/Hero';
import ListingsFilter from '../components/ListingsFilter';


export default function JobListings() {
  return (
    <>
      <Hero heroType='plain' />
      <ListingsFilter />
    </>
  )
}
