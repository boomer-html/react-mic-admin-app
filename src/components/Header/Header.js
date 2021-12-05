import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <Link className="header-title" to="/">MIC ADMIN</Link>
        </header>
    )
}

export default Header;