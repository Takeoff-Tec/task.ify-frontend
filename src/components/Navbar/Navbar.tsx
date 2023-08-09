import { useLocation } from 'react-router-dom'
import Logo from '../Logo/Logo'
import NavLinks from '../NavLinks/NavLinks'

import NavbarProps from '../../../interfaces/NavLinks'

import './Navbar.css'

const Navbar: React.FC<NavbarProps> = ({ appState, setAppState }) => {
    const location = useLocation()
    return (
        <nav className='navbar'>
            {location.pathname !== '/' && appState.isAuthenticated && (
                <>
                    <Logo />
                    <NavLinks
                        appState={appState}
                        setAppState={setAppState}
                    />
                </>
            )}
        </nav>
    )
}

export default Navbar
