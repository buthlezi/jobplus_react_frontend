import React from 'react'
import PageTitle from '../components/PageTitle';
import Listings from '../components/Listings';
import ListingsFilter from '../components/ListingsFilter';

export default function Notifications() {
  const listings = [<Listings />]

  return (
    <>
      <PageTitle title='Notifications' />
      <ListingsFilter components={listings}/>
    </>
  )
}
