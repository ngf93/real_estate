import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CardPage from './CardPage';
import ArticlePage from './ArticlePage';
import Catalog from './Catalog';
import MainPage from './MainPage';
import Services from './Services';
import UserPage from './UserPage';
import Advertise from './Advertise';
import PersonalAccount from './PersonalAccount';
import Entrance from './Entrance';
import Registration from './Registration';

export default function AppRouter() {
    return (
            <Routes>
                <Route exact path="/" element={<MainPage />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/card-page" element={<CardPage />} />
                <Route path="/article-page" element={<ArticlePage />} />
                <Route path="/service" element={<Services />} />
                <Route path="/user" element={<UserPage />} />
                <Route path="/advertise" element={<Advertise />} />
                <Route path="/personal-account/*" element={<PersonalAccount />} />
                <Route path="/entrance" element={<Entrance />} />
                <Route path="/registration" element={<Registration />} />
            </Routes>
    )
}
