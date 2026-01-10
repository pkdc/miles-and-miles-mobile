import { useState } from 'react'
import { LandingPage } from './components/pages/LandingPage'
import { AddressPage } from './components/pages/AddressPage'
import { LocationInsideCLondonPage } from './components/pages/LocationInsideCLondonPage'
import { ChooseDateTimePage } from './components/pages/ChooseDateTimePage'
import { AvailableVehiclesPage } from './components/pages/AvailableVehiclesPage'

type Page = 'landing' | 'address' | 'locationInside' | 'chooseDateTime' | 'availableVehicles'

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing')
  const [postcode, setPostcode] = useState('')

  if (currentPage === 'availableVehicles') {
    return (
      <AvailableVehiclesPage
        onBack={() => setCurrentPage('chooseDateTime')}
      />
    )
  }

  if (currentPage === 'chooseDateTime') {
    return (
      <ChooseDateTimePage
        onBack={() => setCurrentPage('locationInside')}
        onConfirm={() => setCurrentPage('availableVehicles')}
      />
    )
  }

  if (currentPage === 'locationInside') {
    return (
      <LocationInsideCLondonPage
        onBack={() => setCurrentPage('address')}
        onNext={() => setCurrentPage('chooseDateTime')}
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
