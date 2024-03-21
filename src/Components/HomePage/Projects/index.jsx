import React, {useContext} from "react";
import Context from "../../../Context";
import ProjectList from "./ProjectList";
import { projectPhoto1, projectPhoto2, projectPhoto3, projectPhoto4, projectPhoto5, projectPhoto6, projectPhoto7 } from "../../../img/Projects";


const Projects = () => {
    const contextValue = useContext(Context);
    const projectList = [
        {
            photo: projectPhoto1,
            text: 'Навчальна платформа, де розміщені відеокурси на різні теми разом з додатковими матеріалами, які стануть у нагоді для якісного християнського навчання.',
            href: 'https://onovlennia.com.ua/',
            isbutton: true,
            isSocialLinks: false
        },
        {
            photo: projectPhoto2,
            text: 'Модульне навчання для душеопікунів-консультантів. Знаходиться у стані розробки. Призначене для молоді та членів церков, які хочуть навчитися надавати першу психологічну допомогу собі та ближнім у кризових ситуаціях.',
            href: '#',
            isbutton: true,
            isSocialLinks: false
        },
        {
            photo: projectPhoto3,
            text: 'Започаткований 24 лютого 2022-ого року. Про те, що болить, і про Того, хто допомагає проходити цей біль. Кожен новий випуск - щотижня.',
            href: '#',
            isbutton: true,
            isSocialLinks: false
        },
        {
            photo: projectPhoto4,
            text: 'Підбірка розмов з цікавими людьми на важливі теми, про які не завжди говорять за кафедрою. Кожен новий випуск – щомісяця.',
            href: '#',
            isbutton: true,
            isSocialLinks: false
        },
        {
            photo: projectPhoto5,
            text: 'Щодня у Telegram, Viber або Instagram учасникам проєкту (їх понад 7 тис.) приходить нагадування про читання Біблії разом із аудіозаписами певних розділів.',
            href: '#',
            isbutton: false,
            isSocialLinks: true
        },
        {
            photo: projectPhoto6,
            text: 'Навчальний відеокурс з книгою та зошитом, що спрямований на підготовку служителів-наставників, які готують новонавернених до водного хрещення.',
            href: 'https://onovlennia.com.ua/courses/viruyu-obitsyayu/',
            isbutton: true,
            isSocialLinks: false
        },
        {
            photo: projectPhoto7,
            text: 'Створено для збереження інформації та висвітлення діяльності місцевих церков, особливо в час війни. Повідомте нам, якщо ваша церква хотіла б взяти участь у цьому проєкті.',
            href: '#',
            isbutton: true,
            isSocialLinks: false
        }
    ];
    return (
        <div ref={contextValue.projectsSection} id="projects" className="projects-section">
            <div className="container projects-container">
                <h2>Наші проєкти</h2>
                <div className="projects-cards-container">
                    <ProjectList 
                        projectList={projectList}
                    />
                </div>
                {/* <div className="support-button"><a href="#" >Підтримати</a></div> */}
            </div>
        </div>
    );
}

export default Projects;