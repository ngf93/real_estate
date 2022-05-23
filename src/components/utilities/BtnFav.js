import React, {useEffect, useState} from 'react';
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import {useAccessToken, useCurrentUser} from "../../store/reducers";
import {addWishList, deleteWishList} from "../API/adspage";

export default function BtnFav(props) {

    const axiosPrivate = useAxiosPrivate();
    const token = useAccessToken()
    const user = useCurrentUser()
    const [data, setData] = useState({})
    const [estate, setEstateId] = useState([])
    const [wishlist, setWishList] = useState(false)

    useEffect(() => {
        if(props?.realEstateId){
            setEstateId(props?.realEstateId)
            }
    }, [props?.realEstateId])

    useEffect(() => {
        if (props?.wishlist) {
            setWishList(props?.wishlist)
        }
    }, [props?.wishlist])

    useEffect(() => {
        const info = () => {
            if (token && user?.id && estate)
            setData(data => ({...data, "token": token, "userId": user?.id, "realEstateId": estate}))
        }
        info()
    }, [token, estate, user?.id])

    const addInWishList = async () => {
        try {
            const eee = await addWishList(data, axiosPrivate)
            setWishList(wishlist => !wishlist)
        } catch (error) {
            console.log(error)
        }
    }

    const deleteFromWishList = async () => {
        try {
            const qew = await deleteWishList(data, axiosPrivate)
            setWishList(wishlist => !wishlist)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <button
            type="button"
            onClick={() => {
                (wishlist) ? deleteFromWishList() : addInWishList()
            }}
            className={`btn-fav ${wishlist ? 'clicked' : ''}`}
        >
            <svg viewBox="0 0 22 21" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M15.875 0.942871C13.99 0.942871 12.1808 1.78662 11 3.11995C9.81913 1.78662 8.00996 0.942871 6.12496 0.942871C2.78829 0.942871 0.166626 3.4637 0.166626 6.67204C0.166626 10.6095 3.84996 13.8179 9.42913 18.6929L11 20.0575L12.5708 18.6825C18.15 13.8179 21.8333 10.6095 21.8333 6.67204C21.8333 3.4637 19.2116 0.942871 15.875 0.942871ZM11.1083 17.1408L11 17.245L10.8916 17.1408C5.73496 12.6512 2.33329 9.68245 2.33329 6.67204C2.33329 4.5887 3.95829 3.0262 6.12496 3.0262C7.79329 3.0262 9.41829 4.05745 9.99246 5.48454H12.0183C12.5816 4.05745 14.2066 3.0262 15.875 3.0262C18.0416 3.0262 19.6666 4.5887 19.6666 6.67204C19.6666 9.68245 16.265 12.6512 11.1083 17.1408Z"/>
            </svg>
        </button>
    )
}
