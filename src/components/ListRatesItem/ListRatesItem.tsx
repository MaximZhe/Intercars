import React from 'react';
import Button from '../UI/Button/Button';
import wifi from '../../assets/icons/Wi-Fi.svg';
import air from '../../assets/icons/Air Cond.svg';
import usb from '../../assets/icons/USB.svg';
import './ListRatesItem.scss'

import arrow from '../../assets/icons/Arrow Icon.svg'

const ListRatesItem = () => {
    return (
        <div className='list-item'>
              <div className='list-item-offer--mobail'>
                <p className='list-item-offer__company'>Intercars</p>
                <div className='list-item-offer__best'>
                  <p className='list-item-offer__text'>Лучшая цена</p>
                </div>
              </div>
              <div className='list-item__wrapper'>
                <div className='list-item-info'>
                  <div className='list-item-info__top'>
                    <div className='list-item__data text-left'>
                      <p className='list-item__date'>20 АПР, чт</p>
                      <div className='list-item__time'>21:45</div>
                    </div>
                    <div className='list-item-spent'>
                      <p className='list-item-spent__time'>В пути: 33ч 15мин</p>
                      <div className='list-item-spent__transfer'><span>1 </span>пересадка</div>
                      <div className='list-item-spent__img' ></div>
                    </div>
                    <div className='list-item__data text-right'>
                      <p className='list-item__date '>22 АПР, сб</p>
                      <div className='list-item__time'>07:00</div>
                    </div>
                  </div>
                  <>
                    <div className='list-item-spent__img--mobail' ></div>
                  </>
                  <div className='list-item-info__bottom'>
                    <div className='list-item__place'>
                      <p className='list-item__city text-left'>Минск</p>
                      <p className='list-item__adress text-left'>Центральный автовокзал, ул. Бобруйская, 6</p>
                    </div>
                    <div className='list-item-company'>
                      <p className='list-item-company__title'>Перевозчик</p>
                      <p className='list-item-company__name'>ECOLINES</p>
                    </div>
                    <div className='list-item__place'>
                      <p className='list-item__city text-right'>Берлин</p>
                      <p className='list-item__adress text-right'>Bus Station (ZOB) "Am Funkturm" on Masurenallee</p>
                    </div>
                  </div>

                </div>
                <div className='list-item-details'>
                  <button type='button' className='list-item-details__btn'>
                    Детали маршрута
                    <img src={arrow} alt='' />
                  </button>
                  <div className='list-item-icons'>
                    <div className='list-item-icons__item'>
                      <img src={wifi} alt=''/>
                    </div>
                    <div className='list-item-icons__item'>
                      <img src={air} alt=''/>
                    </div>
                    <div className='list-item-icons__item'>
                      <img src={usb} alt=''/>
                    </div>
                  </div>
                </div>
              </div>
              <div className='list-item-order'>
                <div className='list-item-offer'>
                  <p className='list-item-offer__company'>Intercars</p>
                  <div className='list-item-offer__best'>
                    <p className='list-item-offer__text'>Лучшая цена</p>
                  </div>
                </div>
                <div className='list-item-order__inner'>
                  <p className='list-item-order__price'>1698 RUB</p>
                  <div className='list-item-places--mobail'>
                    <p className='list-item-places__free'>Осталось мест: 28 </p>
                    <p className='list-item-places__stock'>Aкционных мест: 5 </p>
                  </div>
                </div>
                <Button className='list-item-order__btn'>
                  Выбрать билет
                </Button>
                <div className='list-item-places'>
                  <p className='list-item-places__free'>Осталось мест: 28 </p>
                  <p className='list-item-places__stock'>Aкционных мест: 5 </p>
                </div>
              </div>
            </div>
    );
};

export default ListRatesItem;