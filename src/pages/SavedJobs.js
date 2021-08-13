import React from 'react'
import Listings from '../components/Listings'
import ListingsFilter from '../components/ListingsFilter'
import PageTitle from '../components/PageTitle'

export default function SavedJobs() {
  const listings = [<Listings />]

  return (
    <>
      <PageTitle title='Saved Jobs' />
      <ListingsFilter components={listings} />
    </>
  )
}
