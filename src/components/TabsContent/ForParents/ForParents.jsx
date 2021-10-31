import React from 'react'
import './styles.css'

const ForParents = () => {
    return (
        <div className={'froParents_container'}>
            <h2 className={'title'}>Доброго дня, шановні батьки!</h2>
            <hr className={'hr'} />
            <div className={'forParents_content'}>А чи замислювалися Ви, хто несе найбільшу відповідальність за виховання дитини? </div>
            <div className={'forParents_content'}>Сучасна сім’я несе найбільшу відповідальність за виховання дитини.</div>
            <div className={'forParents_content'}>Саме вона має виконувати головне завдання — забезпечувати матеріальні <br/> та педагогічні умови для духовного, морального, інтелектуального й фізичного <br/> розвитку юного покоління.</div>
            <div className={'quote_wrapper'}>
                <p>
                    <q className={'quote'}>
                        Якими діти народжуються — ні від кого не залежить, але в <br /> наших силах зробити їх хорошими через правильне виховання.
                    </q>
                </p>
                <p className={'author'}>
                    — Плутарх
                </p>
            </div>

            <ul className={'links'}>
                <li><a href='https://docs.google.com/document/d/1cV-JyTz-6K-Q0br14E5BzmKhM4ZB9m_e/edit?usp=sharing&ouid=117703222231962966412&rtpof=true&sd=true' target={'_blank'} rel="noreferrer">Анкета для батьків</a></li>
                <li><a href='https://docs.google.com/document/d/1ye0evqQqLXcCNe8MiWGPDHGGbhUEdWvA/edit?usp=sharing&ouid=117703222231962966412&rtpof=true&sd=true' target={'_blank'} rel="noreferrer">Десять заповідей для батьків майбутнього першокласника</a></li>
                <li><a href='https://docs.google.com/document/d/1BJTasBWDAB4tE3fWvmgveqV3ZyqzK6Fm/edit?usp=sharing&ouid=117703222231962966412&rtpof=true&sd=true' target={'_blank'} rel="noreferrer">Труднощі школярів у навчанні та шляхи їх подолання</a></li>
                <li><a href='https://drive.google.com/file/d/1V7ltJ6xDDHkTtuL6qq5hZBqLDqophLoN/view?usp=sharing' target={'_blank'} rel="noreferrer">Допоможіть дитині полюбити читати</a></li>
                <li><a href='https://docs.google.com/document/d/1fWlv4kRF9HGSaO-dxS2cCc1m77nNbaah/edit?usp=sharing&ouid=117703222231962966412&rtpof=true&sd=true' target={'_blank'} rel="noreferrer">Консультація для батьків "Взаємини з дитиною з особливими освітніми потребами"</a></li>
                <li><a href='https://drive.google.com/file/d/1w_DAeXmpjambfHHppdHhKBzlm4jJXmf8/view?usp=sharing' target={'_blank'} rel="noreferrer">Декілька порад щодо режиму дня</a></li>
            </ul>
        </div>
    )
}

export default ForParents;