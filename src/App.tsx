import { useState } from 'react'
import { LandingPage } from './components/pages/LandingPage'
import { AddressPage } from './components/pages/AddressPage'
import { LocationInsideCLondonPage } from './components/pages/LocationInsideCLondonPage'

type Page = 'landing' | 'address' | 'locationInside'

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing')
  const [postcode, setPostcode] = useState('')

  if (currentPage === 'locationInside') {
    return (
      <LocationInsideCLondonPage
        onBack={() => setCurrentPage('address')}
      />
    )
  }

  if (currentPage === 'address') {
    return (
      <AddressPage
        postcode={postcode}
        onBack={() => setCurrentPage('landing')}
        onConfirm={() => setCurrentPage('locationInside')}
      />
    )
  }

  return (
    <LandingPage
      postcode={postcode}
      onPostcodeChange={setPostcode}
      onCheckAddress={() => setCurrentPage('address')}
    />
  )
}

export default App
