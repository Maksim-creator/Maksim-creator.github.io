import React from 'react'
import './styles.css'
import photo from './photo.png'
import photo1 from './photosContent/001.png';
import photo2 from './photosContent/1.png';
import photo3 from './photosContent/2.png';
import photo4 from './photosContent/3.png';
import photo6 from './photosContent/5.png';
import photo7 from './photosContent/6.png';
import photo8 from './photosContent/7.png';
import photo9 from './photosContent/8.png';
import photo10 from './photosContent/9.jpg'
import photo11 from './photosContent/10.jpg'
import photo12 from './photosContent/11.jpg'
import photo14 from './photosContent/13.jpg'
import photo16 from './photosContent/15.jpg'
import photo17 from './photosContent/16.png'
import photo19 from './photosContent/18.png'
import photo20 from './photosContent/19.png'
import photo21 from './photosContent/20.png'

import photo5 from './photosContent/4.png';
import photo13 from './photosContent/12.jpg'
import photo15 from './photosContent/14.jpg'
import photo18 from './photosContent/17.png'
import photo22 from './photosContent/21.png'

const AboutMe = () => {
    return (
        <div>
            <div className={'aboutMe_container'}>
                <div className={'aboutMe_leftSide'}>
                    <img className={'profile_photo'} src={photo} alt={'profile_photo'}/>
                    <div className={'aboutMe_quoteTitle'}>
                        Життєве кредо:
                    </div>
                    <div className={'aboutMe_quote'}>
                        Мети досягає той, <br />
                        Хто її прагне!
                    </div>
                </div>
                <div className={'aboutMe_rightSide'}>
                    <div className={'vl'} />
                    <div className={'descr_Wrapper'}>
                        <div className={'descr'}>
                            <span className={'aboutMe_description'}>Освіта: </span> повна вища, Миколаївський державний університет імені В.О. Сухомлинського; <br /> 2000 рік
                        </div>
                        <div className={'descr'}>
                            <span className={'aboutMe_description'}>Спеціальність за дипломом:</span> вчитель початкових класів
                        </div>
                        <div className={'descr'}><span className={'aboutMe_description'}>Педадгогічний стаж:</span> 24 роки</div>
                        <div className={'descr'}><span className={'aboutMe_description'}>Кваліфікаційна категорія:</span> спеціаліст вищої категорії</div>
                        <div className={'descr'}><span className={'aboutMe_description'}>Посада:</span> вчитель початкових класів</div>
                    </div>
                </div>
            </div>
            <div className={'photos_container'}>
                <div className={'diplomaBox'}>
                    <img src={photo1} alt='diploma' className={'diplomaImage'} />
                    <img src={photo2} alt='diploma' className={'diplomaImage'}/>
                </div>
                <div className={'diplomaBox'}>
                    <img src={photo3} alt='diploma' className={'diplomaImage'}/>
                    <img src={photo4} alt='diploma' className={'diplomaImage'}/>
                </div>

                <div className={'diplomaBox'}>
                    <img src={photo7} alt='diploma' className={'diplomaImage'}/>
                    <img src={photo8} alt='diploma' className={'diplomaImage'}/>
                </div>
                <div className={'diplomaBox'}>
                    <img src={photo9} alt='diploma' className={'diplomaImage'} />
                    <img src={photo10} alt='diploma' className={'diplomaImage'} />
                </div>
                <div className={'diplomaBox'}>
                    <img src={photo11} alt='diploma' className={'diplomaImage'} />
                    <img src={photo12} alt='diploma' className={'diplomaImage'} />
                </div>
                <div className={'diplomaBox'}>
                    <img src={photo14} alt='diploma' className={'diplomaImage'} />
                    <img src={photo16} alt='diploma' className={'diplomaImage'} />
                </div>

                <div className={'diplomaBox'}>
                    <img src={photo19} alt='diploma' className={'diplomaImage'} />
                    <img src={photo20} alt='diploma' className={'diplomaImage'} />
                </div>
                <div className={'diplomaBox'}>
                    <img src={photo21} alt='diploma' className={'diplomaImage'} />
                    <img src={photo17} alt='diploma' className={'diplomaImage'} />
                </div>
                <div className={'diplomaBox'}>
                    <img src={photo15} alt='diploma' className={'diplomaImage extra'} />
                    <img src={photo13} alt='diploma' className={'diplomaImage extra'} />
                </div>
                <div className={'diplomaBox'}>
                    <img src={photo22} alt='diploma' className={'diplomaImage extra'} />
                    <img src={photo18} alt='diploma' className={'diplomaImage extra'} />
                </div>
                <div className={'diplomaBox'} style={{marginBottom:25}}>
                    <img src={photo5} alt='diploma'  className={'diplomaImage extra'}/>
                    <img src={photo6} alt='diploma' className={'diplomaImage'}/>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;
