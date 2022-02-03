import React, {useState, useEffect} from 'react';
import Card from '../Card';
import { Link } from 'react-router-dom';
import * as Scroll from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';

export default function UserAds() {
    const [view, setView] = useState('as-a-list');

    useEffect(() => {
        function updateSize() {
            if(window.matchMedia("(max-width: 1399px)").matches){
                setView('tiled');
            } else {
                setView('as-a-list');
            }
        }
          window.addEventListener('resize', updateSize);
          updateSize();
          return () => window.removeEventListener('resize', updateSize);
    }, []);

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <div className="px-sm-3 px-md-4 px-xxl-5 pb-sm-4 pb-xxl-5">
            <nav className="d-block d-lg-none mt-3 mb-3 mb-sm-5" aria-label="breadcrumb">
                <Link to="/personal-account" className="gray-3">&#10094; Назад</Link>
            </nav>
            <h4 className="text-center color-1 mb-3 mb-sm-4 mb-xl-5">Мои объявления</h4>
            <div className={(view === 'as-a-list') ? "" : "row row-cols-sm-2 gx-2 gx-md-4"}>
                <div className="mb-4 mb-md-5">
                    <Card 
                        type={view}
                        images={['/real_estate/img/img1.jpg', '/real_estate/img/img2.jpg', '/real_estate/img/img3.jpg', '/real_estate/img/img4.jpg']}
                        title="1-к, квартира 52м2" 
                        price="6 000 000" 
                        addressName="ЖК “Столичный”" 
                        address="Вахитовский район, ул. Четаева 32" 
                        metro="Козья слобода, 7 минут"
                        text='Сдается 1-комнатная квартира в строящемся доме (Дом 3.1), срок сдачи: IV-кв. 2021, общей площадью 51.82 кв.м., на 18 этаже. Жилой комплекс "Столичный"- это современный жилой комплекс, который находится в самом  центре Казани, состоящий из нескольких кварталов, органично сочетающий городской комфорт и природное окружение...'
                        date="Вчера в 21:00"
                        authorName="Колесникова Ирина"
                        authorPhoto="/real_estate/img/photo.png"
                        authorTimeSpan="сентября 2021"
                        phone="+ 7 (952) 879 78 65"
                        communalPayments="Не включая коммунальные платежи"
                        deposit="20 000"
                        commission="50%"
                        prepayment="без предоплаты"
                        tenancy="аренда от года"
                    />
                    <div className={(view === 'as-a-list') ? "d-flex justify-content-end align-items-center mt-2" : "mt-2"}>
                        <button type="button" className="color-1 d-flex align-items-center">
                            <img src="/real_estate/img/icons/pa-8.svg" alt="Срочная продажа"/>
                            <span className="ms-2">Срочная продажа</span>
                        </button>
                        <Link to="/advertise" className={(view === 'as-a-list') ? "ms-4 color-1 d-flex align-items-center" : "mt-2 color-1 d-flex align-items-center"}>
                            <img src="/real_estate/img/icons/pa-9.svg" alt="Редактировать"/>
                            <span className="ms-2">Редактировать</span>
                        </Link>
                        <button type="button" data-bs-toggle="modal" data-bs-target="#delete-ad" className={(view === 'as-a-list') ? "ms-4 color-1 d-flex align-items-center" : "mt-2 color-1 d-flex align-items-center"}>
                            <img src="/real_estate/img/icons/pa-10.svg" alt="Удалить"/>
                            <span className="ms-2">Удалить</span>
                        </button>
                    </div>
                </div>
                <div className="mb-4 mb-md-5">
                    <Card 
                        type={view}
                        images={['/real_estate/img/img1.jpg', '/real_estate/img/img2.jpg', '/real_estate/img/img3.jpg', '/real_estate/img/img4.jpg']}
                        title="1-к, квартира 52м2" 
                        price="6 000 000" 
                        addressName="ЖК “Столичный”" 
                        address="Вахитовский район, ул. Четаева 32" 
                        metro="Козья слобода, 7 минут"
                        text='Сдается 1-комнатная квартира в строящемся доме (Дом 3.1), срок сдачи: IV-кв. 2021, общей площадью 51.82 кв.м., на 18 этаже. Жилой комплекс "Столичный"- это современный жилой комплекс, который находится в самом  центре Казани, состоящий из нескольких кварталов, органично сочетающий городской комфорт и природное окружение...'
                        date="Вчера в 21:00"
                        authorName="Колесникова Ирина"
                        authorPhoto="/real_estate/img/photo.png"
                        authorTimeSpan="сентября 2021"
                        phone="+ 7 (952) 879 78 65"
                        communalPayments="Не включая коммунальные платежи"
                        deposit="20 000"
                        commission="50%"
                        prepayment="без предоплаты"
                        tenancy="аренда от года"
                    />
                    <div className={(view === 'as-a-list') ? "d-flex justify-content-end align-items-center mt-2" : "mt-2"}>
                        <button type="button" className="color-1 d-flex align-items-center">
                            <img src="/real_estate/img/icons/pa-8.svg" alt="Срочная продажа"/>
                            <span className="ms-2">Срочная продажа</span>
                        </button>
                        <Link to="/advertise" className={(view === 'as-a-list') ? "ms-4 color-1 d-flex align-items-center" : "mt-2 color-1 d-flex align-items-center"}>
                            <img src="/real_estate/img/icons/pa-9.svg" alt="Редактировать"/>
                            <span className="ms-2">Редактировать</span>
                        </Link>
                        <button type="button" data-bs-toggle="modal" data-bs-target="#delete-ad" className={(view === 'as-a-list') ? "ms-4 color-1 d-flex align-items-center" : "mt-2 color-1 d-flex align-items-center"}>
                            <img src="/real_estate/img/icons/pa-10.svg" alt="Удалить"/>
                            <span className="ms-2">Удалить</span>
                        </button>
                    </div>
                </div>
                <div className="mb-4 mb-md-5">
                    <Card 
                        type={view}
                        images={['/real_estate/img/img1.jpg', '/real_estate/img/img2.jpg', '/real_estate/img/img3.jpg', '/real_estate/img/img4.jpg']}
                        title="1-к, квартира 52м2" 
                        price="6 000 000" 
                        addressName="ЖК “Столичный”" 
                        address="Вахитовский район, ул. Четаева 32" 
                        metro="Козья слобода, 7 минут"
                        text='Сдается 1-комнатная квартира в строящемся доме (Дом 3.1), срок сдачи: IV-кв. 2021, общей площадью 51.82 кв.м., на 18 этаже. Жилой комплекс "Столичный"- это современный жилой комплекс, который находится в самом  центре Казани, состоящий из нескольких кварталов, органично сочетающий городской комфорт и природное окружение...'
                        date="Вчера в 21:00"
                        authorName="Колесникова Ирина"
                        authorPhoto="/real_estate/img/photo.png"
                        authorTimeSpan="сентября 2021"
                        phone="+ 7 (952) 879 78 65"
                        communalPayments="Не включая коммунальные платежи"
                        deposit="20 000"
                        commission="50%"
                        prepayment="без предоплаты"
                        tenancy="аренда от года"
                    />
                    <div className={(view === 'as-a-list') ? "d-flex justify-content-end align-items-center mt-2" : "mt-2"}>
                        <button type="button" className="color-1 d-flex align-items-center">
                            <img src="/real_estate/img/icons/pa-8.svg" alt="Срочная продажа"/>
                            <span className="ms-2">Срочная продажа</span>
                        </button>
                        <Link to="/advertise" className={(view === 'as-a-list') ? "ms-4 color-1 d-flex align-items-center" : "mt-2 color-1 d-flex align-items-center"}>
                            <img src="/real_estate/img/icons/pa-9.svg" alt="Редактировать"/>
                            <span className="ms-2">Редактировать</span>
                        </Link>
                        <button type="button" data-bs-toggle="modal" data-bs-target="#delete-ad" className={(view === 'as-a-list') ? "ms-4 color-1 d-flex align-items-center" : "mt-2 color-1 d-flex align-items-center"}>
                            <img src="/real_estate/img/icons/pa-10.svg" alt="Удалить"/>
                            <span className="ms-2">Удалить</span>
                        </button>
                    </div>
                </div>
                <div className="mb-4 mb-md-5">
                    <Card 
                        type={view}
                        images={['/real_estate/img/img1.jpg', '/real_estate/img/img2.jpg', '/real_estate/img/img3.jpg', '/real_estate/img/img4.jpg']}
                        title="1-к, квартира 52м2" 
                        price="6 000 000" 
                        addressName="ЖК “Столичный”" 
                        address="Вахитовский район, ул. Четаева 32" 
                        metro="Козья слобода, 7 минут"
                        text='Сдается 1-комнатная квартира в строящемся доме (Дом 3.1), срок сдачи: IV-кв. 2021, общей площадью 51.82 кв.м., на 18 этаже. Жилой комплекс "Столичный"- это современный жилой комплекс, который находится в самом  центре Казани, состоящий из нескольких кварталов, органично сочетающий городской комфорт и природное окружение...'
                        date="Вчера в 21:00"
                        authorName="Колесникова Ирина"
                        authorPhoto="/real_estate/img/photo.png"
                        authorTimeSpan="сентября 2021"
                        phone="+ 7 (952) 879 78 65"
                        communalPayments="Не включая коммунальные платежи"
                        deposit="20 000"
                        commission="50%"
                        prepayment="без предоплаты"
                        tenancy="аренда от года"
                    />
                    <div className={(view === 'as-a-list') ? "d-flex justify-content-end align-items-center mt-2" : "mt-2"}>
                        <button type="button" className="color-1 d-flex align-items-center">
                            <img src="/real_estate/img/icons/pa-8.svg" alt="Срочная продажа"/>
                            <span className="ms-2">Срочная продажа</span>
                        </button>
                        <Link to="/advertise" className={(view === 'as-a-list') ? "ms-4 color-1 d-flex align-items-center" : "mt-2 color-1 d-flex align-items-center"}>
                            <img src="/real_estate/img/icons/pa-9.svg" alt="Редактировать"/>
                            <span className="ms-2">Редактировать</span>
                        </Link>
                        <button type="button" data-bs-toggle="modal" data-bs-target="#delete-ad" className={(view === 'as-a-list') ? "ms-4 color-1 d-flex align-items-center" : "mt-2 color-1 d-flex align-items-center"}>
                            <img src="/real_estate/img/icons/pa-10.svg" alt="Удалить"/>
                            <span className="ms-2">Удалить</span>
                        </button>
                    </div>
                </div>
            </div>
            <nav>
                <ul className="pagination">
                    <li className="page-item">
                        <a className="page-link" href="/" aria-label="Previous">
                        <img src="/real_estate/img/icons/prev2.svg" alt="Previous"/>
                        </a>
                    </li>
                    <li className="page-item active"><a className="page-link" href="/">1</a></li>
                    <li className="page-item"><a className="page-link" href="/">2</a></li>
                    <li className="page-item"><a className="page-link" href="/">3</a></li>
                    <li className="page-item">...</li>
                    <li className="page-item"><a className="page-link" href="/">6</a></li>
                    <li className="page-item">
                        <a className="page-link" href="/" aria-label="Next">
                        <img src="/real_estate/img/icons/next2.svg" alt="Next"/>
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="modal fade" id="delete-ad" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="btn-close" data-bs-dismiss="modal">
                                <svg viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.00006 1.18237L15 15.9049"/>
                                    <path d="M14.9999 1.18237L1.00001 15.9049"/>
                                </svg>
                            </button>
                            <div className="text-center fs-15 fw-6 title-font my-5">Вы уверены что хотите удалить объявление?</div>
                            <div className="row row-cols-2">
                                <div>
                                    <button type="button" data-bs-dismiss="modal" className="btn btn-2 w-100 fs-11 text-uppercase">Отмена</button>
                                </div>
                                <div>
                                    <button type="button" className="btn btn-1 w-100 fs-11 text-uppercase">Удалить</button>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
