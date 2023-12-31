import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './globals.css'

import { MainLayout } from './Layout/MainLayout/MainLayout'

import { AllArticles } from './Components/Categories/AllArticles'
import { Inland } from './Components/Categories/Inland'
import { Outland } from './Components/Categories/Outland'
import { Technology } from './Components/Categories/Technology'
import { Sports } from './Components/Categories/Sports'
import { Politics } from './Components/Categories/Politics'
import { Society } from './Components/Categories/Society'
import { Detailed } from './Components/Detailed/Detailed'
import { Login } from './Components/Login/Login'
import { UserContextProvider } from './context/Context'
import { Edit } from './Components/Edit/Edit'

function App() {

  const queryClient = new QueryClient()

  return (
    <>
      <UserContextProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<MainLayout />} >
                <Route index element={<AllArticles />} />
                <Route path='/indland' element={<Inland />} />
                <Route path='/udland' element={<Outland />} />
                <Route path='/teknologi' element={<Technology />} />
                <Route path='/sport' element={<Sports />} />
                <Route path='/politik' element={<Politics />} />
                <Route path='/samfund' element={<Society />} />
                <Route path='/:category/:id' element={<Detailed />} />
                <Route path='/login' element={<Login />} />
                <Route path='/edit/:id' element={<Edit />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </UserContextProvider>
    </>
  )
}

export default App
