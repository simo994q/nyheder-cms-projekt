import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './globals.css'

import { MainLayout } from './Layout/MainLayout/MainLayout'

function App() {

  const queryClient = new QueryClient()

  const categories = [

  ]

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MainLayout />} >
              {/* <Route index element={<AllArticles />} />
              <Route path='/indland' element={<InlandArticles />} />
              <Route path='/udland' element={<OutlandArticles />} />
              <Route path='/teknologi' element={<TechnologyArticles />} />
              <Route path='/sport' element={<SportsArticles />} />
              <Route path='/politik' element={<PoliticsArticles />} />
              <Route path='/samfund' element={<SocietyArticles />} /> */}
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  )
}

export default App
