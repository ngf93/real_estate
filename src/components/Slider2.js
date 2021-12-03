import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import Article from './Article';

SwiperCore.use([Navigation]);

export const Slider2 = () => {
    return (
        <Swiper className="swiper-3"
            spaceBetween={0}
            slidesPerView={1}
            breakpoints={{
                576: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 16,
                }
            }}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }}
            
            >
            <SwiperSlide>
                <Article 
                imgUrl="/real_estate/img/img2.jpg" 
                title="Зачем нужен риелтор?"
                text="Риэлтор, в первую очередь, является переговорщиком между продавцом и покупателем. Продавец хочет продать дороже, покупатель хочет купить дешевле — это неоспоримая истина. Именно баланс цены определяет, состоится ли сделка или нет. Поэтому агент должен знать, за какую стоимость каждая конкретная квартира будет востребована на рынке. Такое знание можно получить только из опыта прошлых сделок, знания конъюнктуры по каждому району города и (что самое важное) понимание того, какой спрос на подобные объекты есть сейчас."
                articleUrl="#"
                />
            </SwiperSlide>
            <SwiperSlide>
                <Article 
                imgUrl="/real_estate/img/img2.jpg" 
                title="Зачем нужен риелтор?"
                text="Риэлтор, в первую очередь, является переговорщиком между продавцом и покупателем. Продавец хочет продать дороже, покупатель хочет купить дешевле — это неоспоримая истина. Именно баланс цены определяет, состоится ли сделка или нет. Поэтому агент должен знать, за какую стоимость каждая конкретная квартира будет востребована на рынке. Такое знание можно получить только из опыта прошлых сделок, знания конъюнктуры по каждому району города и (что самое важное) понимание того, какой спрос на подобные объекты есть сейчас."
                articleUrl="#"
                />
            </SwiperSlide>
            <SwiperSlide>
                <Article 
                imgUrl="/real_estate/img/img2.jpg" 
                title="Зачем нужен риелтор?"
                text="Риэлтор, в первую очередь, является переговорщиком между продавцом и покупателем. Продавец хочет продать дороже, покупатель хочет купить дешевле — это неоспоримая истина. Именно баланс цены определяет, состоится ли сделка или нет. Поэтому агент должен знать, за какую стоимость каждая конкретная квартира будет востребована на рынке. Такое знание можно получить только из опыта прошлых сделок, знания конъюнктуры по каждому району города и (что самое важное) понимание того, какой спрос на подобные объекты есть сейчас. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolorem ab aut asperiores ipsum maiores at quas velit doloremque, harum deserunt ullam?"
                articleUrl="#"
                />
            </SwiperSlide>
            <SwiperSlide>
                <Article 
                imgUrl="/real_estate/img/img2.jpg" 
                title="Зачем нужен риелтор?"
                text="Риэлтор, в первую очередь, является переговорщиком между продавцом и покупателем. Продавец хочет продать дороже, покупатель хочет купить дешевле — это неоспоримая истина. Именно баланс цены определяет, состоится ли сделка или нет. Поэтому агент должен знать, за какую стоимость каждая конкретная квартира будет востребована на рынке. Такое знание можно получить только из опыта прошлых сделок, знания конъюнктуры по каждому району города и (что самое важное) понимание того, какой спрос на подобные объекты есть сейчас. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolorem ab aut asperiores ipsum maiores at quas velit doloremque, harum deserunt ullam?"
                articleUrl="#"
                />
            </SwiperSlide>
            <SwiperSlide>
                <Article 
                imgUrl="/real_estate/img/img2.jpg" 
                title="Зачем нужен риелтор?"
                text="Риэлтор, в первую очередь, является переговорщиком между продавцом и покупателем. Продавец хочет продать дороже, покупатель хочет купить дешевле — это неоспоримая истина. Именно баланс цены определяет, состоится ли сделка или нет. Поэтому агент должен знать, за какую стоимость каждая конкретная квартира будет востребована на рынке. Такое знание можно получить только из опыта прошлых сделок, знания конъюнктуры по каждому району города и (что самое важное) понимание того, какой спрос на подобные объекты есть сейчас. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolorem ab aut asperiores ipsum maiores at quas velit doloremque, harum deserunt ullam?"
                articleUrl="#"
                />
            </SwiperSlide>
            <div className="swiper-button-prev">
                <img src="/real_estate/img/icons/prev.svg" alt="предыдущий" className="w-100"/>
            </div>
            <div className="swiper-button-next">
                <img src="/real_estate/img/icons/next.svg" alt="следующий" className="w-100"/>
            </div>
        </Swiper>
    )
}

