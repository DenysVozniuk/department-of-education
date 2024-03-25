import React, {useContext} from "react";
import Context from "../../../Context";
import InstitutionsList from "./components/InstitutionsList";
import { institutionImage1, institutionImage2, institutionImage3, institutionImage4,
institutionImage5, institutionImage6, institutionImage7, institutionImage8 } from "../../../img/Institutions";

const Institutions = () => {
    const contextValue = useContext(Context);
    const nonBreakingSpace = '\u00A0';
    const institutionList = [
        {
            name: 'Київський біблійний інститут',
            address: `Адреса: вул.${nonBreakingSpace}Оніскевича, 3, м.${nonBreakingSpace}Київ, 03115`,
            href: 'https://kbi.org.ua/',
            image: institutionImage1
        },
        {
            name: 'Євангельський Теологічний Університет',
            address: `Адреса: вул.${nonBreakingSpace}Голосіївська, 57, м.${nonBreakingSpace}Київ, 03039`,
            href: 'https://www.evangeltu.org/',
            image: institutionImage2
        },
        {
            name: 'Львівська Богословська Семінарія',
            address: `Адреса: вул.${nonBreakingSpace}Скрипника, 2а, м.${nonBreakingSpace}Львів, 79049`,
            href: 'https://lts.lviv.ua/',
            image: institutionImage3
        },
        {
            name: 'Рівненська Духовна  Семінарія',
            address: `Адреса: вул.${nonBreakingSpace}Хліборобів, 2, м.${nonBreakingSpace}Рівне, 33028`,
            href: 'https://www.rdsa.rv.ua/',
            image: institutionImage4
        },
        {
            name: 'Полтавська Богословська Семінарія',
            address: `Адреса: вул.${nonBreakingSpace}Б.${nonBreakingSpace}Хмельницького, 2а, м.${nonBreakingSpace}Полтава, 36004`,
            href: 'https://seminary.ua/',
            image: institutionImage5
        },
        {
            name: 'Чернівецька Біблійна Семінарія',
            address: `Адреса: вул.${nonBreakingSpace}Червоноармійська, 246, м.${nonBreakingSpace}Чернівці, 58013`,
            href: 'https://cbsem.com/',
            image: institutionImage6
        },
        {
            name: 'Тернопільська Біблійна Семінарія',
            address: `Адреса: вул.${nonBreakingSpace}Київська 10/143 м.${nonBreakingSpace}Тернопіль, 46023`,
            href: 'https://www.tbsem.com/main.htm',
            image: institutionImage7
        },
        {
            name: 'Семінарія Практичного Богослів’я',
            address: `Адреса: вул.${nonBreakingSpace}Сосновського, 63в, м.${nonBreakingSpace}Коростень, 11500`,
            href: 'http://korosten-bc.org.ua/',
            image: institutionImage8
        }
    ];
    return (
        <div ref={contextValue.institutionsSection} id="institutions" className="institutions-section">
            <div className="container institution-container">
                <h2>Навчальні заклади</h2>
                <div className="institutions-cards-container">
                    <InstitutionsList 
                        institutionList={institutionList}
                    />
                </div>
            </div>
        </div>
    );
}

export default Institutions;