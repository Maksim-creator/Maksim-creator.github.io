import React from 'react'
import edcFooterPhoto from '../EducationalWork/edc_footer_photo.png'

const MethodicalBox = () => {
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
                <li><a href='https://docs.google.com/document/d/1VU0XyW7Tslte_Sxo6IqFMcMlB2LTiFHK/edit'  target={'_blank'} rel="noreferrer">"Дидактичні ігри на уроках у початкових класах НУШ"</a></li>
                <li><a href='https://1drv.ms/p/s!Avx80f6I8aBMoCaQC0HlP1abuBzr?e=pN827r' target={'_blank'} rel="noreferrer">Урок математики (дистанційне навчання) 2 клас</a></li>
                <li><a href='https://docs.google.com/document/d/1Uc23AW6DJ-zLtJiWkI0otM1eN5ijcOmG/edit?usp=sharing&ouid=103414423552653844252&rtpof=true&sd=true' target={'_blank'} rel="noreferrer">Виховний захід "Свято Букваря"</a></li>
                <li><a href='https://docs.google.com/document/d/18GwKfwcuZjXGqf0haTbE2zYO6asyDXpE/edit?usp=sharing&ouid=103414423552653844252&rtpof=true&sd=true' target={'_blank'} rel="noreferrer">Розробка уроку "Вода та її властивості"</a><a style={{color: '#32D9DB'}} href={'https://1drv.ms/p/s!Avx80f6I8aBMoCgCgcs5mDesu1mi?e=7bcpMc'}> (презентація)</a></li>
                <li><a href='https://docs.google.com/document/d/1ckLX_TUffzb0e7noGS-9MzRzAnNvAjJD/edit?usp=sharing&ouid=103414423552653844252&rtpof=true&sd=true' target={'_blank'} rel="noreferrer">Виховний захід "Сторінками зимових свят"</a></li>
                <li><a href='https://docs.google.com/document/d/1f4ueNjRcdzIewJKT3FkV_sUjMQy9YOTH/edit?usp=sharing&ouid=103414423552653844252&rtpof=true&sd=true' target={'_blank'} rel="noreferrer">Розробка уроку з української мови</a><a style={{color: '#32D9DB'}} href={'https://1drv.ms/p/s!Avx80f6I8aBMoCqxaY9Ekb2qrBPc?e=RYHIym'}> (презентація)</a></li>
                <li><a href='https://docs.google.com/document/d/1BU-50QhL-2CKQuVWHNuJrR1D8UwVsHHK/edit?usp=sharing&ouid=103414423552653844252&rtpof=true&sd=true' target={'_blank'} rel="noreferrer">Виховний захід "Безпека на дорозі - безпека життя"</a></li>

            </ul>
            <img src={edcFooterPhoto} alt={'footer_photo'} className={'edc_footer_photo'} />
        </div>
    )
}

export default MethodicalBox;
