import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import ResponseCard from '../../components/ResponseCard';
import {checkPhotoPath} from '../../helpers/photo';
import Loader from '../../components/Loader';
import PaginationCustom from '../../components/PaginationCustom';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import {useSelector} from 'react-redux';
import useRedirectToPath from '../../hooks/redirectToPath';
import {
    getCompletedResponses,
    getIncomingsResponses,
    getInProcessResponses,
    getOutgoingsResponses
} from '../../API/responses';

const InWork = () => {
    const initialPageLimit = 10
    const {page} = useParams()
    const axiosPrivate = useAxiosPrivate()
    const userId = useSelector(state => state?.currentUser?.id)
    const token = useSelector(state => state?.accessToken)
    const [tab, setTab] = useState('in') // out
    useRedirectToPath('/personal-account/in-work/page/1', [tab])
    const [inProcess, setInProcess] = useState({
        isLoading: false,
        error: null,
        meta: null,
        items: []
    })
    const [completed, setCompleted] = useState({
        isLoading: false,
        error: null,
        meta: null,
        items: []
    })

    const getInProcessResponsesRequest = (page, limit) => {
        (userId && token && page) && getInProcessResponses(axiosPrivate, userId, {page, limit, token})
            .then(result => setInProcess(prev => ({isLoading: true, meta: result?.meta, items: result?.data})))
            .catch(error => setInProcess(prev => ({...prev, isLoading: true, error})))
    }

    const getCompletedResponsesRequest = (page, limit) => {
        (userId && token && page) && getCompletedResponses(axiosPrivate, userId, {page, limit, token})
            .then(result => setCompleted(prev => ({isLoading: true, meta: result?.meta, items: result?.data})))
            .catch(error => setCompleted(prev => ({...prev, isLoading: true, error})))
    }

    useEffect(() => getInProcessResponsesRequest(page, initialPageLimit), [userId, token, page])
    useEffect(() => getCompletedResponsesRequest(page, initialPageLimit), [userId, token, page])


    useEffect(() => {
        console.log(inProcess)
    }, [inProcess])

    useEffect(() => {
        console.log(completed)
    }, [completed])

    return (
        <div className='px-2 px-sm-4 pb-4 pb-sm-5'>
            <nav className="d-block d-lg-none mt-3 mb-3 mb-sm-5" aria-label="breadcrumb">
                <Link to="/personal-account" className="gray-3">&#10094; Назад</Link>
            </nav>
            <h4 className="text-center color-1 mb-3 mb-sm-4 mb-xl-5">В работе</h4>
            <ul className='tabs mb-4'>
                <li>
                    <button
                        className={tab === 'in' ? 'active' : ''}
                        onClick={() => setTab('in')}
                    >
                        Текущие ({inProcess?.items?.length || 0})
                    </button>
                </li>
                <li>
                    <button
                        className={tab === 'out' ? 'active' : ''}
                        onClick={() => setTab('out')}
                    >
                        Выполненные ({completed?.items?.length || 0})
                    </button>
                </li>
            </ul>
            <div className="row px-4 px-sm-0 row-cols-sm-2 row-cols-xxl-1 g-3 g-md-4">
                {(tab === 'in')
                    ? (
                        inProcess.isLoading
                            ? inProcess?.items?.length
                                ? inProcess.items.map(item => (
                                    <div key={item.id}>
                                        <ResponseCard
                                            type='work'
                                            id={item?.user?.id}
                                            userName={item?.user?.fullName}
                                            avatar={checkPhotoPath(item?.user?.avatar)}
                                            price={item?.price}
                                            priceType={(typeof item?.priceTypeForUser === 'string') && item.priceTypeForUser.toLowerCase()}
                                            description={item?.description}
                                            experience={(typeof item?.service?.experienceTypeForUser === 'string') && item.service.experienceTypeForUser.toLowerCase()}
                                            rating={'3.35'}
                                        />
                                    </div>
                                ))
                                : <h5 className="text-center p-5 w-100">Текущих нет</h5>
                            : <div className="d-flex justify-content-center p-5 w-100"><Loader color="#146492"/></div>
                    )
                    : (
                        completed.isLoading
                            ? completed?.items?.length
                                ? completed.items.map(item => (
                                    <div key={item.id}>
                                        <ResponseCard
                                            id={item?.user?.id}
                                            userName={item?.user?.fullName}
                                            avatar={checkPhotoPath(item?.user?.avatar)}
                                            price={item?.price}
                                            priceType={(typeof item?.priceTypeForUser === 'string') && item.priceTypeForUser.toLowerCase()}
                                            description={item?.description}
                                            experience={(typeof item?.service?.experienceTypeForUser === 'string') && item.service.experienceTypeForUser.toLowerCase()}
                                            rating={'3.35'}
                                        />
                                    </div>
                                ))
                                : <h5 className="text-center p-5 w-100">Выполненных нет</h5>
                            : <div className="d-flex justify-content-center p-5 w-100"><Loader color="#146492"/></div>
                    )
                }
            </div>
            <PaginationCustom baseUrl='/personal-account/responses' meta={tab === 'in' ? inProcess.meta : completed.meta}/>
        </div>
    );
};

export default InWork;