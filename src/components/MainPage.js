import React from 'react';
import { Slider2 } from './Slider2';
import { Slider1 } from './Slider1';
import Tile from './utilities/Tile';
import {Link, useParams} from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import {MainBanner} from './MainBanner';
import {useEffect, useState} from "react";
import {getBanner, getPopular, getRecommend} from "./API/mainpagereq";
import useGeolocation from './hooks/useGeolocation';
import useConnectionCity from './hooks/useConnectionCity';

export default function MainPage() {
    const {userId} = useParams();
    const {page} = useParams();

    const [recommend, setRecommend] = useState([]);
    const [popular, setPopular] = useState([]);
    const [banner, setBanner] = useState([]);

    useEffect(() => {
        const fun = async () => {
            try {
                let result = await getBanner()
                if (result) {
                    setBanner(result)
                }
            } catch (err) {
                console.log(err)
            }

        }
        fun()
    }, [])
    useEffect(() => {
        const fun = async () => {
            try {
                let result = await getRecommend(userId, 6)
                if (result) {
                    setRecommend(result)
                }
            } catch (err) {
                console.log(err)
            }
        }
        fun()
    }, [userId])

    useEffect(() => {
        const fun = async () => {
            try {
                let result = await getPopular(page, 6)
                if (result) {
                    setPopular(result)
                }
            } catch (err) {
                console.log(err)
            }
        }
        fun()
    }, [page])

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <main>

            <section id="sec-1">
                <MainBanner banners={banner}/>
            </section>

            <section id="sec-2" className="container tiles px-xxl-5 mb-6">
                <Tile
                  img="/Real_estate_front/img/icons/icon-1.svg"
                  titles={['Квартиры', 'Комнаты']}
                  hoverLinks={[
                      {name: 'Купить', link: '/catalog/page/1?transactionType=1&estateId=2'},
                      {name: 'Сдать', link: '/advertise'},
                      {name: 'Продать', link: '/advertise'},
                      {name: 'Снять', link: '/catalog/page/1?transactionType=0&estateId=2'}]}
                  />
                  <Tile
                  img="/Real_estate_front/img/icons/icon-2.svg"
                  titles={['Дома', 'Дачи', 'Коттеджи']}
                  hoverLinks={[
                      {name: 'Купить', link: '/catalog/page/1?transactionType=1&estateId=2'},
                      {name: 'Сдать', link: '/advertise'},
                      {name: 'Продать', link: '/advertise'},
                      {name: 'Снять', link: '/catalog/page/1?transactionType=0&estateId=2'}]}
                  />
                  <Tile
                  img="/Real_estate_front/img/icons/icon-3.svg"
                  titles={['Гараж', 'Паркинг']}
                  hoverLinks={[
                      {name: 'Купить', link: '/catalog/page/1?transactionType=1&estateId=8'},
                      {name: 'Сдать', link: '/advertise'},
                      {name: 'Продать', link: '/advertise'},
                      {name: 'Снять', link: '/catalog/page/1?transactionType=0&estateId=8'}]}
                  />
                  <Tile
                  img="/Real_estate_front/img/icons/icon-4.svg"
                  titles={['Земельные участки']}
                  hoverLinks={[
                      {name: 'Купить', link: '/catalog/page/1?transactionType=1&estateId=1'},
                      {name: 'Сдать', link: '/advertise'},
                      {name: 'Продать', link: '/advertise'},
                      {name: 'Снять', link: '/catalog/page/1?transactionType=0&estateId=1'}]}
                  />
                  <Tile
                  img="/Real_estate_front/img/icons/icon-5.svg"
                  titles={['Коммерческая недвижимость']}
                  hoverLinks={[
                      {name: 'Купить', link: '/catalog/page/1?transactionType=1&estateId=4'},
                      {name: 'Сдать', link: '/advertise'},
                      {name: 'Продать', link: '/advertise'},
                      {name: 'Снять', link: '/catalog/page/1?transactionType=0&estateId=4'}]}
                  />
                  <Tile
                  img="/Real_estate_front/img/icons/icon-6.svg"
                  simpleLink={{title: 'Ипотека', url: '/service'}}
                />
            </section>

            <section id="sec-3" className="container mb-6">
                <h3>Найти на карте</h3>
                <img src="/Real_estate_front/img/map.png" alt="Карта" className="w-100"/>
            </section>

            <section className="sec-4 container mb-6">
                <h3>Срочная продажа</h3>
                <div className="position-relative">
                    <Slider1/>
                </div>
                <div className="text-center mt-2">
                    <a href="/" className="fs-11 fw-5">
                        Смотреть все
                    </a>
                </div>
            </section>

            <section className="sec-4 container mb-6">
                <h3>Часто просматриваемые</h3>
                <div className="position-relative">
                <Slider1 popular={popular}/>
                </div>
                <div className="text-center mt-2">
                    <a href="/" className="fs-11 fw-5">
                        Смотреть все
                    </a>
                </div>
            </section>

            <section className="sec-4 container mb-6">
                <h3>Рекомендованные Вам</h3>
                <div className="position-relative">
                <Slider1 recommend={recommend}/>
                </div>
                <div className="text-center mt-2">
                    <a href="/" className="fs-11 fw-5">
                        Смотреть все
                    </a>
                </div>
            </section>

            <section id="sec-5">
                <div className="container pb-5">
                    <div className="row gx-xxl-5 mb-6">
                        <div className="col-lg-7 col-xl-8">
                            <img src="/Real_estate_front/img/img4.jpg" alt="" className="w-100"/>
                        </div>
                        <div className="info col-lg-5 col-xl-4 pt-xxl-5 mt-4 mt-lg-0">
                            <h2>Продаете или покупаете недвижимость?</h2>
                            <div className="d-flex align-items-baseline mt-2 mt-sm-4">
                            <img src="/Real_estate_front/img/icons/mark.svg" alt=""/>
                                <div className="color-2 fs-15 ms-2 ms-sm-3">Юридическая консультация</div>
                            </div>
                            <div className="d-flex align-items-baseline mt-2 mt-sm-4">
                                <img src="/Real_estate_front/img/icons/mark.svg" alt=""/>
                                <div className="color-2 fs-15 ms-2 ms-sm-3">Сопровождение сделок</div>
                            </div>
                            <div className="d-flex align-items-baseline mt-2 mt-sm-4">
                                <img src="/Real_estate_front/img/icons/mark.svg" alt=""/>
                                <div className="color-2 fs-15 ms-2 ms-sm-3">Оформление ипотеки на выгодных условиях</div>
                            </div>
                            <button
                                type="button"
                                className="btn btn-1 fs-15 mx-auto mt-4 mt-lg-5"
                            >
                                Услуги риелтора
                            </button>
                        </div>
                    </div>
                    <h3>Статьи</h3>
                    <div className="position-relative">
                        <Slider2/>
                    </div>
                    <div className="text-center mt-4">
                    <Link to="/articles/page/1" onClick={() => scrollToTop()} className="fs-12 color-1 bb-1">Смотреть все статьи</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
