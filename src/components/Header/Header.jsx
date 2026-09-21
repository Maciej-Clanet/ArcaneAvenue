import "./Header.css"
import Logo from "../../assets/Logo.png"
import { NavLink } from "react-router"

export default function Header() {

    return (
        <header className="main-header">
            <div className="header-top bg-paper">
                <div className="header-left test">
                    l
                </div>
                <div className="header-middle test">
                    <NavLink to="/">
                        <img className="logo" src={Logo} alt="Arcane Avenue Logo" />
                    </NavLink>
                </div>
                <div className="header-right test">
                    <nav className="header-nav">
                        <NavLink className="header-action" to="auth">ACCOUNT</NavLink>
                        <NavLink className="header-action" to="wishlist">WISHLIST</NavLink>
                        <button className="header-action" to="auth">CART (0)</button>
                    </nav>
                </div>
            </div>
            <nav className="category-nav">
                <NavLink to="products" className="h-nl">ALL</NavLink>
                <NavLink to="products" className="h-nl">NEW</NavLink>
                <NavLink to="products" className="h-nl">MAGIC TRICKS</NavLink>
                <NavLink to="products" className="h-nl">PLAYING CARDS</NavLink>
                <NavLink to="products" className="h-nl">BOOKS</NavLink>
                <NavLink to="products" className="h-nl">COIN MAGIC</NavLink>
                <NavLink to="products" className="h-nl">CLOSE UP</NavLink>
                <NavLink to="products" className="h-nl">STAGE</NavLink>
                <NavLink to="products" className="h-nl">MENTALISM</NavLink>
                <NavLink to="products" className="h-nl">COLLECTIBLES</NavLink>
                <NavLink to="products" className="h-nl">APPAREL</NavLink>
            </nav>
        </header>
    )
}