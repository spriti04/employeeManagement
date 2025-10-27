
import { Route, Routes } from 'react-router'
import Home from './Home'
import Profile from './Profile'
import NavLinks from './NavLinks'
import PageNotFound from './PNF'
import EditProfile from './EditProfile'
import SigninPage from './Signin'
import RegisterPage from './Register'
import About from './About'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>

      <Routes>
        <Route element={<NavLinks />}>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/about' element={<About />} />
        </Route>

        <Route path='/signinPage' element={<SigninPage />} />
        <Route path='/registerPage' element={<RegisterPage />}/>
        <Route path='/editProfile' element={<EditProfile />} />
        <Route path='/*' element={<PageNotFound />} />
      </Routes>
    </>


  )
}

export default App
