import React, {useState} from 'react';
import {AddressSuggestions} from "react-dadata";
import env from "../../config/env";

const AboutResidential = (
    {
        onChange,
        estateName,
        activeField,
        seterActiveField,
        valid,
        resetValid
    }) => {

    return (
        <fieldset data-show={(activeField === 2) ? 'true' : 'false'} name="anchor-2"
                  className="element frame p-lg-4 mb-4 mb-lg-5">
            <legend className="text-center text-lg-start title-font fw-7 fs-15 mb-md-4">Об объекте
            </legend>
            <div className="row align-items-center">
                <div className="col-md-3 fs-11 title mt-4 mt-sm-5 mb-3 m-md-0">Название ЖК:</div>
                <div className="col-md-9">
                    <input
                        type="text"
                        name="residentalComplex"
                        className="fs-11"
                        placeholder="Например: “Центральный”"
                        onChange={(e) => onChange(e)}
                    />
                </div>
            </div>
            <hr className="d-none d-md-block my-4"/>
            <div className="row">
                <div className="col-md-3 fs-11 title-req mt-4 mt-sm-5 mb-3 m-md-0">
                    <span
                        data-for="housing-type"
                        data-status={false}
                        style={{color: valid?.isInValidHouseType ? '#DA1E2A' : ''}}
                    >
                        Тип жилья*:
                    </span>
                </div>
                <div className="col-md-9">
                    <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4">
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    name="houseType"
                                    value={0}
                                    onChange={(e) => {
                                        onChange(e)
                                        resetValid(e, 'isInValidHouseType')
                                    }}
                                />
                                <span className="fs-11 ms-2">Квартира</span>
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    name="houseType"
                                    value={1}
                                    onChange={(e) => onChange(e)}
                                />
                                <span className="fs-11 ms-2">Апартаменты</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="d-none d-md-block my-4"/>
            <div className="row align-items-center">
                <div className="col-md-3 fs-11 title-req mt-4 mt-sm-5 mb-3 m-md-0">
                    <span
                        data-for="rooms"
                        data-status={false}
                        style={{color: valid?.isInValidRoomType ? '#DA1E2A' : ''}}
                    >
                        Количество комнат*:
                    </span>
                </div>
                <div className="col-md-9 d-flex">
                    <label className="inp-btn me-2">
                        <input
                            type="radio"
                            name="roomType"
                            value={0}
                            onChange={(e) => {
                                onChange(e)
                                resetValid(e, 'isInValidRoomType')
                            }}
                        />
                        <div>Студия</div>
                    </label>
                    <label className="inp-btn me-2">
                        <input
                            type="radio"
                            name="roomType"
                            value={1}
                            onChange={(e) => {
                                onChange(e)
                                resetValid(e, 'isInValidRoomType')
                            }}
                        />
                        <div>1</div>
                    </label>
                    <label className="inp-btn me-2">
                        <input
                            type="radio"
                            name="roomType"
                            value={2}
                            onChange={(e) => {
                                onChange(e)
                                resetValid(e, 'isInValidRoomType')
                            }}
                        />
                        <div>2</div>
                    </label>
                    <label className="inp-btn me-2">
                        <input
                            type="radio"
                            name="roomType"
                            value={3}
                            onChange={(e) => {
                                onChange(e)
                                resetValid(e, 'isInValidRoomType')
                            }}
                        />
                        <div>3</div>
                    </label>
                    <label className="inp-btn me-2">
                        <input
                            type="radio"
                            name="roomType"
                            value={4}
                            onChange={(e) => {
                                onChange(e)
                                resetValid(e, 'isInValidRoomType')
                            }}
                        />
                        <div>4</div>
                    </label>
                    <label className="inp-btn me-2">
                        <input
                            type="radio"
                            name="roomType"
                            value={5}
                            onChange={(e) => {
                                onChange(e)
                                resetValid(e, 'isInValidRoomType')
                            }}
                        />
                        <div>5</div>
                    </label>
                    <label className="inp-btn me-2">
                        <input
                            type="radio"
                            name="roomType"
                            value={6}
                            onChange={(e) => {
                                onChange(e)
                                resetValid(e, 'isInValidRoomType')
                            }}
                        />
                        <div>5+</div>
                    </label>
                    <label className="inp-btn me-2">
                        <input
                            type="radio"
                            name="roomType"
                            value={7}
                            onChange={(e) => {
                                onChange(e)
                                resetValid(e, 'isInValidRoomType')
                            }}
                        />
                        <div>Св. план.</div>
                    </label>
                </div>
            </div>
            <hr className="d-none d-md-block my-4"/>
            <div className="row row-cols-2 row-cols-md-4 align-items-center mt-4 mt-sm-5">
                <div className="fs-11 title-req">
                    <span
                        data-for="total-area"
                        data-status={false}
                        style={{color: valid?.isInValidTotalArea ? '#DA1E2A' : ''}}
                    >
                        Общая площадь*:
                    </span>
                </div>
                <div>
                    <input
                        type="number"
                        name="totalArea"
                        placeholder="0"
                        style={{borderColor: valid.isInValidTotalArea ? '#DA1E2A' : ''}}
                        className="fs-11 area w-100"
                        onChange={(e) => {
                            onChange(e)
                            resetValid(e, 'isInValidTotalArea')
                        }}
                    />
                </div>
                <div
                    className="text-md-end title mt-3 mt-sm-4 mt-md-0"
                >
                    Жилая площадь:
                </div>
                <div className="mt-3 mt-sm-4 mt-md-0">
                    <input
                        type="number"
                        name="livingArea"
                        placeholder="0"
                        className="fs-11 area w-100"
                        onChange={(e) => onChange(e)}
                    />
                </div>
            </div>
            <hr className="d-none d-md-block my-4"/>
            <div
                className="row row-cols-2 row-cols-md-4 align-items-center mt-3 mt-sm-4"
            >
                <div className="fs-11 title">Площадь кухни:</div>
                <div>
                    <input
                        type="number"
                        name="kitchenArea"
                        placeholder="0"
                        className="fs-11 area w-100"
                        onChange={(e) => onChange(e)}
                    />
                </div>
            </div>
            <hr className="d-none d-md-block my-4"/>
            <div className="row row-cols-2 row-cols-md-4 align-items-center mt-4 mt-sm-5 mt-md-0">
                <div className="fs-11 title-req">
                    <span
                        data-for="floor"
                        data-status={false}
                        style={{color: valid?.isInValidFloor ? '#DA1E2A' : ''}}
                    >
                        Этаж*:
                    </span>
                </div>
                <div>
                    <input
                        type="number"
                        name="floor"
                        placeholder="0"
                        style={{borderColor: valid?.isInValidFloor ? '#DA1E2A' : ''}}
                        className="fs-11 w-100"
                        onChange={(e) => {
                            onChange(e)
                            resetValid(e, 'isInValidFloor')
                        }}
                    />
                </div>
                <div
                    className="title text-md-end mt-3 mt-sm-4 mt-md-0"
                >
                    Этажей в доме:
                </div>
                <div className="mt-3 mt-sm-4 mt-md-0">
                    <input
                        type="number"
                        name="maxFloor"
                        placeholder="0"
                        className="fs-11 w-100"
                        onChange={(e) => onChange(e)}
                    />
                </div>
            </div>
            <hr className="d-none d-md-block my-4"/>
            <div className="row mt-4 mt-sm-5 mt-md-0">
                <div className="col-md-3 fs-11 title mb-3 m-md-0">Санузел:</div>
                <div className="col-md-9">
                    <div className="row row-cols-2 row-cols-sm-3 row-cols-xxl-4 gy-3">
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    name="WCType"
                                    value={0}
                                    onChange={e => onChange(e)}
                                />
                                <span className="fs-11 ms-2">Раздельный</span>
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    name="WCType"
                                    value={1}
                                    onChange={e => onChange(e)}
                                />
                                <span className="fs-11 ms-2">Совмещенный</span>
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    name="WCType"
                                    value={2}
                                    onChange={e => onChange(e)}
                                />
                                <span className="fs-11 ms-2">Два или более</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="d-none d-md-block my-4"/>
            <div className="row mt-4 mt-sm-5 mt-md-0">
                <div className="col-md-3 fs-11 title mb-3 m-md-0">Балкон/Лоджия:</div>
                <div className="col-md-9">
                    <div className="row row-cols-2 row-cols-sm-3 row-cols-xxl-4 gy-3">
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    name="balconyType"
                                    value={1}
                                    onChange={e => onChange(e)}
                                />
                                <span className="fs-11 ms-2">Балкон</span>
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    name="balconyType"
                                    value={2}
                                    onChange={e => onChange(e)}
                                />
                                <span className="fs-11 ms-2">Лоджия</span>
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    name="balconyType"
                                    value={3}
                                    onChange={e => onChange(e)}
                                />
                                <span className="fs-11 ms-2">Несколько</span>
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    name="balconyType"
                                    value={0}
                                    onChange={e => onChange(e)}
                                />
                                <span className="fs-11 ms-2">Нет</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="d-none d-md-block my-4"/>
            <div className="row mt-4 mt-sm-5 mt-md-0">
                <div className="col-md-3 fs-11 title mb-3 m-md-0">Планировка:</div>
                <div className="col-md-9">
                    <div className="row row-cols-2 row-cols-sm-3 row-cols-xxl-4 gy-3">
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    name="layoutType"
                                    value={0}
                                    onChange={e => onChange(e)}
                                />
                                <span className="fs-11 ms-2">Изолированная</span>
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    name="layoutType"
                                    value={1}
                                    onChange={e => onChange(e)}
                                />
                                <span className="fs-11 ms-2">Смежная</span>
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    name="layoutType"
                                    value={2}
                                    onChange={e => onChange(e)}
                                />
                                <span className="fs-11 ms-2">Свободная</span>
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    name="layoutType"
                                    value={3}
                                    onChange={e => onChange(e)}
                                />
                                <span className="fs-11 ms-2">Смежно-изолированная</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="d-none d-md-block my-4"/>
            <div className="row mt-4 mt-sm-5 mt-md-0">
                <div className="col-md-3 fs-11 title mb-3 m-md-0">Ремонт:</div>
                <div className="col-md-9">
                    <div className="row row-cols-2 row-cols-sm-3 row-cols-xxl-4 gy-3">
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    name="repairType"
                                    value={0}
                                    onChange={e => onChange(e)}
                                />
                                <span className="fs-11 ms-2">Косметический</span>
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    name="repairType"
                                    value={1}
                                    onChange={e => onChange(e)}
                                />
                                <span className="fs-11 ms-2">Евро</span>
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    name="repairType"
                                    value={2}
                                    onChange={e => onChange(e)}
                                />
                                <span className="fs-11 ms-2">Дизайнерский</span>
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    name="repairType"
                                    value={3}
                                    onChange={e => onChange(e)}
                                />
                                <span className="fs-11 ms-2">Без ремонта</span>
                            </label>
                        </div>
                    </div>
                </div>
                <hr className="d-none d-md-block my-4"/>
                <div className="row mt-4 mt-sm-5 mt-md-0">
                    <div className="col-md-3 fs-11 title mb-3 m-md-0">Окна:</div>
                    <div className="col-md-9">
                        <div className="row row-cols-2 row-cols-sm-3 row-cols-xxl-4 gy-3">
                            <div>
                                <label>
                                    <input
                                        type="radio"
                                        name="window"
                                        value={0}
                                        onChange={e => onChange(e)}
                                    />
                                    <span className="fs-11 ms-2">Во двор</span>
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input
                                        type="radio"
                                        name="window"
                                        value={1}
                                        onChange={e => onChange(e)}
                                    />
                                    <span className="fs-11 ms-2">На улицу</span>
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input
                                        type="radio"
                                        name="window"
                                        value={2}
                                        onChange={e => onChange(e)}
                                    />
                                    <span className="fs-11 ms-2">На солнечную сторону</span>
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input
                                        type="radio"
                                        name="window"
                                        value={3}
                                        onChange={e => onChange(e)}
                                    />
                                    <span className="fs-11 ms-2">На две стороны</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="d-none d-md-block my-4"/>
                <div className="row mt-4 mt-sm-5 mt-md-0">
                    <div className="col-md-3 fs-11 title mb-3 m-md-0">Тип окон:</div>
                    <div className="col-md-9">
                        <div className="row row-cols-2 row-cols-sm-3 row-cols-xxl-4 gy-3">
                            <div>
                                <label>
                                    <input
                                        type="radio"
                                        name="windowType"
                                        value={0}
                                        onChange={e => onChange(e)}
                                    />
                                    <span className="fs-11 ms-2">Обычное прямоугольное</span>
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input
                                        type="radio"
                                        name="windowType"
                                        value={1}
                                        onChange={e => onChange(e)}
                                    />
                                    <span className="fs-11 ms-2">С вращающейся рамой</span>
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input
                                        type="radio"
                                        name="windowType"
                                        value={2}
                                        onChange={e => onChange(e)}
                                    />
                                    <span className="fs-11 ms-2">В нише</span>
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input
                                        type="radio"
                                        name="windowType"
                                        value={3}
                                        onChange={e => onChange(e)}
                                    />
                                    <span className="fs-11 ms-2">Панорамное</span>
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input
                                        type="radio"
                                        name="windowType"
                                        value={4}
                                        onChange={e => onChange(e)}
                                    />
                                    <span className="fs-11 ms-2">Французское</span>
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input
                                        type="radio"
                                        name="windowType"
                                        value={5}
                                        onChange={e => onChange(e)}
                                    />
                                    <span className="fs-11 ms-2">Эркер</span>
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input
                                        type="radio"
                                        name="windowType"
                                        value={6}
                                        onChange={e => onChange(e)}
                                    />
                                    <span className="fs-11 ms-2">С изогнутым верхом</span>
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input
                                        type="radio"
                                        name="windowType"
                                        value={7}
                                        onChange={e => onChange(e)}
                                    />
                                    <span className="fs-11 ms-2">Выгнутое</span>
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input
                                        type="radio"
                                        name="windowType"
                                        value={8}
                                        onChange={e => onChange(e)}
                                    />
                                    <span className="fs-11 ms-2">Со скользящей рамой</span>
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input
                                        type="radio"
                                        name="windowType"
                                        value={9}
                                        onChange={e => onChange(e)}
                                    />
                                    <span className="fs-11 ms-2">Со створным переплетом</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    estateName?.toLowerCase() === 'дом' ||
                    estateName?.toLowerCase() === 'дача' ||
                    estateName?.toLowerCase() === 'коттедж' &&
                    <>
                        <hr className="d-none d-md-block my-4"/>
                        <div className="row mt-4 mt-sm-5 mt-md-0">
                            <div className="col-md-3 fs-11 title mb-3 m-md-0">Хозпостройки:</div>
                            <div className="col-md-9">
                                <div className="row row-cols-2 row-cols-sm-3 row-cols-xxl-4 gy-3">
                                    <div>
                                        <label>
                                            <input
                                                type="radio"
                                                name="outBuildingType"
                                                value={0}
                                                onChange={e => onChange(e)}
                                            />
                                            <span className="fs-11 ms-2">Гараж</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            <input
                                                type="radio"
                                                name="outBuildingType"
                                                value={1}
                                                onChange={e => onChange(e)}
                                            />
                                            <span className="fs-11 ms-2">Баня</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            <input
                                                type="radio"
                                                name="outBuildingType"
                                                value={2}
                                                onChange={e => onChange(e)}
                                            />
                                            <span className="fs-11 ms-2">Хозпостройки</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="d-none d-md-block my-4"/>
                        <div className="row mt-4 mt-sm-5 mt-md-0">
                            <div className="col-md-3 fs-11 title mb-3 m-md-0">Подвал:</div>
                            <div className="col-md-9">
                                <div className="row row-cols-2 row-cols-sm-3 row-cols-xxl-4 gy-3">
                                    <div>
                                        <label>
                                            <input
                                                type="radio"
                                                name="hasBasement"
                                                value={1}
                                                onChange={e => onChange(e)}
                                            />
                                            <span className="fs-11 ms-2">Есть</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            <input
                                                type="radio"
                                                name="hasBasement"
                                                value={0}
                                                onChange={e => onChange(e)}
                                            />
                                            <span className="fs-11 ms-2">Нет</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                }
                <hr className="d-none d-md-block my-4"/>
                <div className="row mt-4 mt-sm-5 mt-md-0">
                    <div className="col-md-3 fs-11 title mb-3 m-md-0">Дополнительно:</div>
                    <div className="col-md-9">
                        <div className="row row-cols-sm-2 row-cols-xxl-3">
                            <label className="mb-3">
                                <input
                                    type="checkbox"
                                    name="hasKitchenFurniture"
                                    onChange={e => onChange(e)}
                                />
                                <span className="fs-11 ms-3">Кухонная мебель</span>
                            </label>
                            <label className="mb-3">
                                <input
                                    type="checkbox"
                                    name="hasFurniture"
                                    onChange={e => onChange(e)}
                                />
                                <span className="fs-11 ms-3">Мебель в комнатах</span>
                            </label>
                            <label className="mb-3">
                                <input
                                    type="checkbox"
                                    name="hasRefrigerator"
                                    onChange={e => onChange(e)}
                                />
                                <span className="fs-11 ms-3">Холодильник</span>
                            </label>
                            <label className="mb-3">
                                <input
                                    type="checkbox"
                                    name="hasWashingMachine"
                                    onChange={e => onChange(e)}
                                />
                                <span className="fs-11 ms-3">Стиральная машина</span>
                            </label>
                            <label className="mb-3">
                                <input
                                    type="checkbox"
                                    name="hasDishWasher"
                                    onChange={e => onChange(e)}
                                />
                                <span className="fs-11 ms-3">Посудомоечная машина</span>
                            </label>
                            <label className="mb-3">
                                <input
                                    type="checkbox"
                                    name="hasTv"
                                    onChange={e => onChange(e)}
                                />
                                <span className="fs-11 ms-3">Телевизор</span>
                            </label>
                            <label className="mb-3">
                                <input
                                    type="checkbox"
                                    name="hasConditioner"
                                    onChange={e => onChange(e)}
                                />
                                <span className="fs-11 ms-3">Кондиционер</span>
                            </label>
                            <label className="mb-3">
                                <input
                                    type="checkbox"
                                    name="hasInternet"
                                    onChange={e => onChange(e)}
                                />
                                <span className="fs-11 ms-3">Интернет</span>
                            </label>
                            <label className="mb-3">
                                <input
                                    type="checkbox"
                                    name="hasBathroom"
                                    onChange={e => onChange(e)}
                                />
                                <span className="fs-11 ms-3">Ванна</span>
                            </label>
                            <label className="mb-3">
                                <input
                                    type="checkbox"
                                    name="hasShowerCabin"
                                    onChange={e => onChange(e)}
                                />
                                <span className="fs-11 ms-3">Душевая кабина</span>
                            </label>
                            <label className="mb-3">
                                <input
                                    type="checkbox"
                                    name="withKids"
                                    onChange={e => onChange(e)}
                                />
                                <span className="fs-11 ms-3">Можно с детьми</span>
                            </label>
                            <label className="mb-3">
                                <input
                                    type="checkbox"
                                    name="withPets"
                                    onChange={e => onChange(e)}
                                />
                                <span className="fs-11 ms-3">Можно с животными</span>
                            </label>
                        </div>
                    </div>
                </div>
                <hr className="d-none d-md-block my-4"/>
                <div className="row mt-4 mt-sm-5 mt-md-0">
                    <div className="col-md-3 fs-11 title mb-3 m-md-0">Направление по Розе ветров:</div>
                    <div className="col-md-9">
                        <div className="row row-cols-2 row-cols-sm-3 row-cols-xxl-4 gy-3">
                            <div>
                                <label>
                                    <input
                                        type="radio"
                                        name="windRoseDirectionType"
                                        value={0}
                                        onChange={e => onChange(e)}
                                    />
                                    <span className="fs-11 ms-2">Север</span>
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input
                                        type="radio"
                                        name="windRoseDirectionType"
                                        value={1}
                                        onChange={e => onChange(e)}
                                    />
                                    <span className="fs-11 ms-2">Юг</span>
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input
                                        type="radio"
                                        name="windRoseDirectionType"
                                        value={2}
                                        onChange={e => onChange(e)}
                                    />
                                    <span className="fs-11 ms-2">Запад</span>
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input
                                        type="radio"
                                        name="windRoseDirectionType"
                                        value={3}
                                        onChange={e => onChange(e)}
                                    />
                                    <span className="fs-11 ms-2">Восток</span>
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input
                                        type="radio"
                                        name="windRoseDirectionType"
                                        value={4}
                                        onChange={e => onChange(e)}
                                    />
                                    <span className="fs-11 ms-2">Северо-восток</span>
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input
                                        type="radio"
                                        name="windRoseDirectionType"
                                        value={5}
                                        onChange={e => onChange(e)}
                                    />
                                    <span className="fs-11 ms-2">Юго-восток</span>
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input
                                        type="radio"
                                        name="windRoseDirectionType"
                                        value={6}
                                        onChange={e => onChange(e)}
                                    />
                                    <span className="fs-11 ms-2">Северо-запад</span>
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input
                                        type="radio"
                                        name="windRoseDirectionType"
                                        value={7}
                                        onChange={e => onChange(e)}
                                    />
                                    <span className="fs-11 ms-2">Юго-запад</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* для мобильных устроийств */}
            <div
                className="d-lg-none row row-cols-2 row-cols-md-3 gx-2 gx-sm-4 justify-content-center mt-4 mt-sm-5">
                <div>
                    <button type="button" className="btn btn-2 w-100"
                            onClick={() => seterActiveField(1)}>Назад
                    </button>
                </div>
                <div>
                    <button type="button" className="btn btn-1 w-100"
                            onClick={() => seterActiveField(3)}>Далее
                    </button>
                </div>
            </div>
        </fieldset>
    );
};

export default AboutResidential;