import { Landing, Navbar, TopBar } from './../../components'

const Header = () => {
    return (
        <header className="header">
            <TopBar />
            <Navbar />
            <Landing />
        </header>
    )
}

export default Header