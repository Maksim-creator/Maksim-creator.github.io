import React from 'react';
import './styles.css'
import edcFooterPhoto from './edc_footer_photo.png';
const EducationalWork = () => {
    return (
        <div>
            <div className={'edc_header'}>
                <div className={'edc_title'}>
                    Місія школи з виховної роботи:
                </div>
                <div className={'edc_descr'}>
                    Формування і розвиток свідомої особистості з громадською позицією, готовою до конкретного вибору свого місця в житті, здатного змінити на краще своє життя і життя своєї країни.
                </div>
            </div>
            <ul className={'edc_list'}>
                <li><a href='https://docs.google.com/document/d/1rj0UPt9K82dBVRAMjQ4uXS8uTz728ebz/edit?usp=sharing&ouid=117703222231962966412&rtpof=true&sd=true'>8 Березня - свято мам</a></li>
                <li><a href='https://docs.google.com/presentation/d/1V3Fd9dfeaBn3X2-NXZ-osu5pxcfNz-sx/edit?usp=sharing&ouid=117703222231962966412&rtpof=true&sd=true'> Безпека вдома</a></li>
                <li><a href='https://docs.google.com/presentation/d/10oQ4sDJgoCdpj7FUlo8f6LU-ScvwKbiF/edit?usp=sharing&ouid=117703222231962966412&rtpof=true&sd=true'>Екскурсія до перехрестя</a></li>
                <li><a href='https://docs.google.com/presentation/d/1zl9_TSk4EZLTj_a6-nbwUXJArVglPdDi/edit?usp=sharing&ouid=117703222231962966412&rtpof=true&sd=true'>Екскурсія містом</a></li>
                <li><a href='https://docs.google.com/presentation/d/17SeOT8Vkx7NyNTwZSdBVvWDETgyCBcII/edit?usp=sharing&ouid=117703222231962966412&rtpof=true&sd=true'>Правила поведінки під час літніх канікул</a></li>
                <li><a href='https://docs.google.com/presentation/d/1dmS-O09JyR0dNDQ4VTh7ZR-uYwo8zGss/edit?usp=sharing&ouid=117703222231962966412&rtpof=true&sd=true'>День вишиванки</a></li>
                <li><a href='https://docs.google.com/document/d/1mdVe9l91uxM4yOuhLgO2eFTtc94b0tdn/edit?usp=sharing&ouid=117703222231962966412&rtpof=true&sd=true'>Свято Букваря</a></li>
            </ul>
            <img src={edcFooterPhoto} alt={'footer_photo'} className={'edc_footer_photo'} />
        </div>
    )
}

export default EducationalWork;