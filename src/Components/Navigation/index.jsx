import React, {useContext} from "react";
import Context from "../../Context";

const Navigation = (props) => {
    const { navClassName, listClassName, itemClassName, linkClassName, isLastClassName = false } = props;
    const contextValue = useContext(Context);

    const handlerClick = (e, id) => {
        e.preventDefault();
        contextValue.setIsMobileMenuOpen(() => false);
        window.location.href = window.location.origin + id;
    }

    return (
        <nav className={navClassName}>
            <ul className={listClassName}>
                <li className={itemClassName}>
                    <a href={`${window.location.origin}#about-us`} className={linkClassName} onClick={(e) => handlerClick(e, '#about-us')}>Про нас</a>
                </li>
                <li className={itemClassName}>
                    <a href={`${window.location.origin}#books`} className={linkClassName} onClick={(e) => handlerClick(e, '#books')}>Книги</a>
                </li>
                <li className={itemClassName}>
                    <a href={`${window.location.origin}#projects`} className={linkClassName} onClick={(e) => handlerClick(e, '#projects')}>Проєкти</a>
                </li>
                <li className={itemClassName}>
                    <a href={`${window.location.origin}#institutions`} className={linkClassName} onClick={(e) => handlerClick(e, '#institutions')}>Навчальні заклади</a>
                </li>
                <li className={itemClassName}>
                    <a href={`${window.location.origin}#contacts`} className={`${linkClassName}${isLastClassName ? " last" : ""}`} onClick={(e) => handlerClick(e, '#contacts')}>Контакти</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;