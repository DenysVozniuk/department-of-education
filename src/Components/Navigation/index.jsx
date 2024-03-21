import React, {useContext} from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Context from "../../Context";

const Navigation = (props) => {
    const { navClassName, listClassName, itemClassName, linkClassName, isLastClassName = false } = props;
    const contextValue = useContext(Context);
    //const navigate = useNavigate();
    const location = useLocation();

    const handlerClickOrder = () => {
        contextValue.setIsMobileMenuOpen(() => false);
    }

    const handlerClickHome = (e, id) => {
        e.preventDefault();
        contextValue.setIsMobileMenuOpen(() => false);
        window.scroll({
            left: 0,
            top: id.offsetTop,
            behavior: 'smooth'
        });
    }

    return (
        <nav className={navClassName}>
            <ul className={listClassName}>
                <li className={itemClassName}>
                    <Link to="/" className={linkClassName} onClick={!location.pathname.includes('order') ? (e) => handlerClickHome(e, contextValue.aboutUsSection.current) : () => handlerClickOrder()}>Про нас</Link>
                </li>
                <li className={itemClassName}>
                    <Link to="/" className={linkClassName} onClick={!location.pathname.includes('order') ? (e) => handlerClickHome(e, contextValue.booksSection.current) : () => handlerClickOrder()}>Книги</Link>
                </li>
                <li className={itemClassName}>
                    <Link to="/" className={linkClassName} onClick={!location.pathname.includes('order') ? (e) => handlerClickHome(e, contextValue.projectsSection.current) : () => handlerClickOrder()}>Проєкти</Link>
                </li>
                <li className={itemClassName}>
                    <Link to="/" className={linkClassName} onClick={!location.pathname.includes('order') ? (e) => handlerClickHome(e, contextValue.institutionsSection.current) : () => handlerClickOrder()}>Навчальні заклади</Link>
                </li>
                <li className={itemClassName}>
                    <Link to="/" className={`${linkClassName}${isLastClassName ? " last" : ""}`} onClick={!location.pathname.includes('order') ? (e) => handlerClickHome(e, contextValue.contactsSection.current) : () => handlerClickOrder()}>Контакти</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;