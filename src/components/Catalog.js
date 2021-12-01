import React from 'react';
import { NavLink } from 'react-router-dom';
import Card from './Card';

export default function Catalog() {
    return (
        <main>
            <div className="container py-4">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <NavLink to="/">Недвижимость в Казани</NavLink>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">Аренда</li>
                    </ol>
                </nav>
            </div>
            <section className="sec-6 container pb-5">
                <h1>Каталог недвижимости</h1>
                <div className="d-flex justify-content-end mb-4">
                    <button type="button" className="">
                        <img src="../img/icons/pin.svg"/>
                        <span className="ms-2 fs-11 fw-7 color-2">Показать на карте</span>
                    </button>
                </div>
                <form className="form-search mb-3">
                    <div className="custom-select">
                        <button type="button" className="btn btn-2">
                           Снять
                        </button>
                        <div className="options py-2">
                            <div className="radio">
                                <input type="radio" name="type" value="Купить" />
                                <label>Купить</label>
                            </div>
                            <div className="radio">
                                <input type="radio" name="type" value="Продать" />
                                <label>Продать</label>
                            </div>
                            <div className="radio">
                                <input type="radio" name="type" value="Сдать" />
                                <label>Сдать</label>
                            </div>
                            <div className="radio">
                                <input type="radio" name="type" value="Снять" checked={true}/>
                                <label>Снять</label>
                            </div>
                        </div>
                    </div>
                    <div className="custom-select ms-2">
                        <button type="button" className="btn btn-2">
                            Квартиры
                        </button>
                        <div className="options py-2">
                            <div className="radio">
                                <input type="radio" name="real-estate" value="Квартиры" checked={true}/>
                                <label>Квартиры</label>
                            </div>
                            <div className="radio">
                                <input type="radio" name="real-estate" value="Комнаты"/>
                                <label>Комнаты</label>
                            </div>
                            <div className="radio">
                                <input type="radio" name="real-estate" value="Дома"/>
                                <label>Дома</label>
                            </div>
                            <div className="radio">
                                <input type="radio" name="real-estate" value="Дачи"/>
                                <label>Дачи</label>
                            </div>
                            <div className="radio">
                                <input type="radio" name="real-estate" value="Коттеджи"/>
                                <label>Коттеджи</label>
                            </div>
                            <div className="radio">
                                <input type="radio" name="real-estate" value="Гаражи и парковки"/>
                                <label>Гаражи и парковки</label>
                            </div>
                            <div className="radio">
                                <input type="radio" name="real-estate" value="Земельные участки"/>
                                <label className="text-underline">Земельные участки</label>
                            </div>
                            <div className="radio">
                                <input type="radio" name="real-estate" value="Коммерческая недвижимость"/>
                                <label>Коммерческая недвижимость</label>
                            </div>
                        </div>
                    </div>
                    <div className="custom-select ms-2">
                        <button type="button" className="btn btn-2">
                            Район/Метро
                        </button>
                        <div className="options p-2">
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Метро</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Районы</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <label>
                                        <input type="checkbox" name="metro" value="Авиастроительная"  checked={true}/>
                                        <span>Авиастроительная</span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="metro" value="Аметьево" />
                                        <span>Аметьево</span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="metro" value="Горки" />
                                        <span>Горки</span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="metro" value="Дубравная"/>
                                        <span>Дубравная</span>
                                    </label>
                                </div>
                                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
                            </div>

                        </div>
                    </div>
                    
                    <input type="search" className="flex-1 ms-2" placeholder="Адрес или ЖК" />
                    <button type="submit" className="btn btn-1 ms-2">Поиск</button>
                </form>
                <div className="popular-queries d-flex mb-5">
                    <div>Популярные запросы:</div>
                    <button type="button">Студия</button>
                    <button type="button">1 комнатная</button>
                    <button type="button">2 комнатная</button>
                    <button type="button">3 комнатная</button>
                    <button type="button">С мебелью</button>
                    <button type="button">Без мебели</button>
                    <button type="button">Есть лифт</button>
                    <button type="button">Можно с животными</button>
                    <button type="button">Можно с детьми</button>
                </div>

                <div className="row">
                    <div className="d-none d-lg-block col-4 col-xxl-3">
                        <div className="fs-11 mb-4">Найдено 1 200 объявлений</div>
                        <form className="shad-box p-4 mb-4">
                            <fieldset className="mb-4">
                                <legend className="title-font fs-12 fw-6 mb-3">Количество комнат</legend>
                                <label className="ps-2 mb-3">
                                    <input type="checkbox" name="rooms" value="1room"/>
                                    <span className="fs-11 ms-3">1 комнатная</span>
                                </label>
                                <label className="ps-2 mb-3">
                                    <input type="checkbox" name="rooms" value="2room"/>
                                    <span className="fs-11 ms-3">2 комнатная</span>
                                </label>
                                <label className="ps-2 mb-3">
                                    <input type="checkbox" name="rooms" value="3room"/>
                                    <span className="fs-11 ms-3">3 комнатная</span>
                                </label>
                                <label className="ps-2 mb-3">
                                    <input type="checkbox" name="rooms" value="4room"/>
                                    <span className="fs-11 ms-3">4 комнатная</span>
                                </label>
                                <label className="ps-2 mb-3">
                                    <input type="checkbox" name="rooms" value="5room"/>
                                    <span className="fs-11 ms-3">5 комнатная</span>
                                </label>
                                <label className="ps-2 mb-3">
                                    <input type="checkbox" name="rooms" value="6room"/>
                                    <span className="fs-11 ms-3">6 комнатная</span>
                                </label>
                                <label className="ps-2 mb-3">
                                    <input type="checkbox" name="rooms" value="studio"/>
                                    <span className="fs-11 ms-3">Студия</span>
                                </label>
                            </fieldset>
                            <fieldset className="mb-4">
                                <legend className="title-font fs-12 fw-6 mb-3">Цена</legend>
                                <div className="d-flex align-items-baseline">
                                    <div className="fs-11 me-2">От</div>
                                    <input type="number" className="price me-3"/>
                                    <div className="fs-11 me-2">До</div>
                                    <input type="number" className="price"/>
                                </div>
                            </fieldset>

                            <fieldset className="mb-4">
                                <legend className="title-font fs-12 fw-6 mb-3">Срок аренды</legend>
                                <div className="inp-label ps-2 mb-3">
                                    <input type="checkbox" name="lease" value="lease 1" id="lease-1"/>
                                    <label for="lease-1" className="fs-11 ms-3">Посуточно</label>
                                </div>
                                <div className="inp-label ps-2 mb-3">
                                    <input type="checkbox" name="lease" value="lease 2" id="lease-2"/>
                                    <label for="lease-2" className="fs-11 ms-3">Несколько месяцев</label>
                                </div>
                                <div className="inp-label ps-2 mb-3">
                                    <input type="checkbox" name="lease" value="lease 3" id="lease-3"/>
                                    <label for="lease-3" className="fs-11 ms-3">Длительная аренда</label>
                                </div>
                            </fieldset>

                            <fieldset className="mb-4">
                                <legend className="title-font fs-12 fw-6 mb-3">Ремонт</legend>
                                <div className="inp-label ps-2 mb-3">
                                    <input type="checkbox" name="repair" value="no repair" id="no-repair"/>
                                    <label for="no-repair" className="fs-11 ms-3">Без ремонта</label>
                                </div>
                                <div className="inp-label ps-2 mb-3">
                                    <input type="checkbox" name="repair" value="repair 1" id="repair-1"/>
                                    <label for="repair-1" className="fs-11 ms-3">Косметический</label>
                                </div>
                                <div className="inp-label ps-2 mb-3">
                                    <input type="checkbox" name="repair" value="repair 2" id="repair-2"/>
                                    <label for="repair-2" className="fs-11 ms-3">Евроремонт</label>
                                </div>
                                <div className="inp-label ps-2 mb-3">
                                    <input type="checkbox" name="repair" value="repair 3" id="repair-3"/>
                                    <label for="repair-3" className="fs-11 ms-3">Дизайнерский</label>
                                </div>
                            </fieldset>

                            <button type="button" className="btn btn-1 w-100 fs-15">Еще фильтры</button>
                            <button type="button" className="color-1 fs-11 fw-5 mx-auto mt-2">Очистить фильтр</button>
                        </form>
                    </div>
                    <div className="col-12 col-lg-8 col-xxl-9">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <div className="fs-11">Сотрировать: Сначала новые</div>
                            <div>
                                <button type="button" className="fs-11">
                                    <span className="me-3">Показать списком</span>
                                    <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="28" height="5.6" rx="1" fill="#E5E5E5"/>
                                        <rect y="9.3335" width="28" height="5.6" rx="1" fill="#E5E5E5"/>
                                        <rect y="18.6665" width="28" height="6.53333" rx="1" fill="#E5E5E5"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="row row-cols-sm-2 row-cols-xxl-3 g-4">
                            <div>
                                <Card 
                                    url="../img/img3.jpg" 
                                    title="1-к, квартира 52м2" 
                                    price="6 000 000 ₽" 
                                    addressName="ЖК “Столичный”" 
                                    address="Вахитовский район, ул. Четаева 32" 
                                    text="Новый дом. Консьерж. Квартира после евро ремонта. Полы ламинат. Кондиционеры. Рядом школа и деский сад..."
                                    date="Вчера в 21:00"
                                />
                            </div>
                            <div>
                                <Card 
                                    url="../img/img3.jpg" 
                                    title="1-к, квартира 52м2" 
                                    price="6 000 000 ₽" 
                                    addressName="ЖК “Столичный”" 
                                    address="Вахитовский район, ул. Четаева 32" 
                                    text="Новый дом. Консьерж. Квартира после евро ремонта. Полы ламинат. Кондиционеры. Рядом школа и деский сад..."
                                    date="Вчера в 21:00"
                                />
                            </div>
                            <div>
                                <Card 
                                    url="../img/img3.jpg" 
                                    title="1-к, квартира 52м2" 
                                    price="6 000 000 ₽" 
                                    addressName="ЖК “Столичный”" 
                                    address="Вахитовский район, ул. Четаева 32" 
                                    text="Новый дом. Консьерж. Квартира после евро ремонта. Полы ламинат. Кондиционеры. Рядом школа и деский сад..."
                                    date="Вчера в 21:00"
                                />
                            </div>
                            <div>
                                <Card 
                                    url="../img/img3.jpg" 
                                    title="1-к, квартира 52м2" 
                                    price="6 000 000 ₽" 
                                    addressName="ЖК “Столичный”" 
                                    address="Вахитовский район, ул. Четаева 32" 
                                    text="Новый дом. Консьерж. Квартира после евро ремонта. Полы ламинат. Кондиционеры. Рядом школа и деский сад..."
                                    date="Вчера в 21:00"
                                />
                            </div>
                            <div>
                                <Card 
                                    url="../img/img3.jpg" 
                                    title="1-к, квартира 52м2" 
                                    price="6 000 000 ₽" 
                                    addressName="ЖК “Столичный”" 
                                    address="Вахитовский район, ул. Четаева 32" 
                                    text="Новый дом. Консьерж. Квартира после евро ремонта. Полы ламинат. Кондиционеры. Рядом школа и деский сад..."
                                    date="Вчера в 21:00"
                                />
                            </div>
                            <div>
                                <Card 
                                    url="../img/img3.jpg" 
                                    title="1-к, квартира 52м2" 
                                    price="6 000 000 ₽" 
                                    addressName="ЖК “Столичный”" 
                                    address="Вахитовский район, ул. Четаева 32" 
                                    text="Новый дом. Консьерж. Квартира после евро ремонта. Полы ламинат. Кондиционеры. Рядом школа и деский сад..."
                                    date="Вчера в 21:00"
                                />
                            </div>
                            <div>
                                <Card 
                                    url="../img/img3.jpg" 
                                    title="1-к, квартира 52м2" 
                                    price="6 000 000 ₽" 
                                    addressName="ЖК “Столичный”" 
                                    address="Вахитовский район, ул. Четаева 32" 
                                    text="Новый дом. Консьерж. Квартира после евро ремонта. Полы ламинат. Кондиционеры. Рядом школа и деский сад..."
                                    date="Вчера в 21:00"
                                />
                            </div>
                            <div>
                                <Card 
                                    url="../img/img3.jpg" 
                                    title="1-к, квартира 52м2" 
                                    price="6 000 000 ₽" 
                                    addressName="ЖК “Столичный”" 
                                    address="Вахитовский район, ул. Четаева 32" 
                                    text="Новый дом. Консьерж. Квартира после евро ремонта. Полы ламинат. Кондиционеры. Рядом школа и деский сад..."
                                    date="Вчера в 21:00"
                                />
                            </div>
                            <div>
                                <Card 
                                    url="../img/img3.jpg" 
                                    title="1-к, квартира 52м2" 
                                    price="6 000 000 ₽" 
                                    addressName="ЖК “Столичный”" 
                                    address="Вахитовский район, ул. Четаева 32" 
                                    text="Новый дом. Консьерж. Квартира после евро ремонта. Полы ламинат. Кондиционеры. Рядом школа и деский сад..."
                                    date="Вчера в 21:00"
                                />
                            </div>
                            <div>
                                <Card 
                                    url="../img/img3.jpg" 
                                    title="1-к, квартира 52м2" 
                                    price="6 000 000 ₽" 
                                    addressName="ЖК “Столичный”" 
                                    address="Вахитовский район, ул. Четаева 32" 
                                    text="Новый дом. Консьерж. Квартира после евро ремонта. Полы ламинат. Кондиционеры. Рядом школа и деский сад..."
                                    date="Вчера в 21:00"
                                />
                            </div>
                            <div>
                                <Card 
                                    url="../img/img3.jpg" 
                                    title="1-к, квартира 52м2" 
                                    price="6 000 000 ₽" 
                                    addressName="ЖК “Столичный”" 
                                    address="Вахитовский район, ул. Четаева 32" 
                                    text="Новый дом. Консьерж. Квартира после евро ремонта. Полы ламинат. Кондиционеры. Рядом школа и деский сад..."
                                    date="Вчера в 21:00"
                                />
                            </div>
                            <div>
                                <Card 
                                    url="../img/img3.jpg" 
                                    title="1-к, квартира 52м2" 
                                    price="6 000 000 ₽" 
                                    addressName="ЖК “Столичный”" 
                                    address="Вахитовский район, ул. Четаева 32" 
                                    text="Новый дом. Консьерж. Квартира после евро ремонта. Полы ламинат. Кондиционеры. Рядом школа и деский сад..."
                                    date="Вчера в 21:00"
                                />
                            </div>
                        </div>
                        <nav className="mt-4">
                            <ul class="pagination">
                                <li class="page-item">
                                    <a class="page-link" href="#" aria-label="Previous">
                                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7 1L1 7L7 13" stroke="#797979" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </a>
                                </li>
                                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="#" aria-label="Next">
                                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L7 7L1 13" stroke="#797979" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>
        </main>
    )
}

