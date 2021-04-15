import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import axios from "axios";
import Spinner from "../components/Spinner";
import BarChartCountry from "../components/BarChartCountry";
import Layout from "../components/Layout";

const Country = () => {
    const {name} = useParams()
    const [country, setCountry] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios(`https://disease.sh/v3/covid-19/countries/${name}`)
            .then(rec => {
                setCountry(rec.data)
                setIsLoading(false)
            })
    }, [])
    console.log(country)
    return (
        <Layout>
            <div className='country'>
                <div className="container country__container">
                    {
                        isLoading ? <Spinner /> :
                            <div className='country-info' >
                                <div className='country-img'>
                                    <img src={country?.countryInfo?.flag} alt=""/>
                                </div>
                                <div className="country-info__title"><b>Country: </b>{country.country}</div>
                                <div className="row">
                                    <div className="col-4">
                                        <div className="boxes-box con">
                                            <div className="boxes-box__cont">
                                                <h3 className='boxes-box__title con'>New Confirmed:<span
                                                    className='boxes-box__subtitle '>{country.todayCases}</span></h3>
                                                <h3 className='boxes-box__title con'>Total Confirmed:<span
                                                    className='boxes-box__subtitle '><b>{country.cases}</b></span>
                                                </h3>
                                            </div>
                                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M46.125 11.9531H44.4375V10.2656C44.4375 9.23006 43.5981 8.39062 42.5625 8.39062C41.5269 8.39062 40.6875 9.23006 40.6875 10.2656V11.9531H39C37.9644 11.9531 37.125 12.7926 37.125 13.8281C37.125 14.8637 37.9644 15.7031 39 15.7031H40.6875V17.3906C40.6875 18.4262 41.5269 19.2656 42.5625 19.2656C43.5981 19.2656 44.4375 18.4262 44.4375 17.3906V15.7031H46.125C47.1606 15.7031 48 14.8637 48 13.8281C48 12.7926 47.1606 11.9531 46.125 11.9531Z"
                                                    fill="#364EC6"/>
                                                <path
                                                    d="M29.5696 23.3654C32.4238 21.1604 34.2656 17.7056 34.2656 13.8281C34.2656 7.18547 28.8614 1.78125 22.2188 1.78125C15.5761 1.78125 10.1719 7.18547 10.1719 13.8281C10.1719 17.7055 12.0137 21.1604 14.8679 23.3654C6.40247 26.3243 0 34.4463 0 44.3438C0 45.3793 0.839438 46.2188 1.875 46.2188H42.5625C43.5981 46.2188 44.4375 45.3793 44.4375 44.3438C44.4375 34.4438 38.0302 26.3227 29.5696 23.3654ZM13.9219 13.8281C13.9219 9.25322 17.6438 5.53125 22.2188 5.53125C26.7937 5.53125 30.5156 9.25322 30.5156 13.8281C30.5156 18.403 26.7937 22.125 22.2188 22.125C17.6438 22.125 13.9219 18.403 13.9219 13.8281ZM3.8445 42.4688C4.78697 33.1622 12.6678 25.875 22.2188 25.875C31.7697 25.875 39.6505 33.1622 40.593 42.4688H3.8445Z"
                                                    fill="#364EC6"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="boxes-box">
                                            <div className="boxes-box__cont">
                                                <h3 className='boxes-box__title deth'>New Deaths:<span
                                                    className='boxes-box__subtitle '>{country.todayDeaths}</span></h3>
                                                <h3 className='boxes-box__title deth'>Total Deaths:<span
                                                    className='boxes-box__subtitle '><b>{country.deaths}</b></span></h3>
                                            </div>

                                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M29.5696 23.3654C32.4238 21.1604 34.2656 17.7056 34.2656 13.8281C34.2656 7.18547 28.8614 1.78125 22.2188 1.78125C15.5761 1.78125 10.1719 7.18547 10.1719 13.8281C10.1719 17.7055 12.0137 21.1604 14.8679 23.3654C6.40247 26.3244 0 34.4463 0 44.3438C0 45.3793 0.839438 46.2188 1.875 46.2188H42.5625C43.5981 46.2188 44.4375 45.3793 44.4375 44.3438C44.4375 34.4433 38.0297 26.3226 29.5696 23.3654ZM13.9219 13.8281C13.9219 9.25322 17.6438 5.53125 22.2188 5.53125C26.7937 5.53125 30.5156 9.25322 30.5156 13.8281C30.5156 18.403 26.7937 22.125 22.2188 22.125C17.6438 22.125 13.9219 18.403 13.9219 13.8281ZM3.84441 42.4688C4.78697 33.1622 12.6678 25.875 22.2188 25.875C31.7697 25.875 39.6505 33.1622 40.5931 42.4688H3.84441ZM48 13.8281C48 14.8637 47.1606 15.7031 46.125 15.7031H39C37.9644 15.7031 37.125 14.8637 37.125 13.8281C37.125 12.7926 37.9644 11.9531 39 11.9531H46.125C47.1606 11.9531 48 12.7926 48 13.8281Z"
                                                    fill="url(#paint0_linear)"/>
                                                <defs>
                                                    <linearGradient id="paint0_linear" x1="0" y1="24" x2="48" y2="24"
                                                                    gradientUnits="userSpaceOnUse">
                                                        <stop offset="0.9999" stop-color="#F01054"/>
                                                        <stop offset="1" stop-color="#EA80FC"/>
                                                    </linearGradient>
                                                </defs>
                                            </svg>

                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="boxes-box">
                                            <div className="boxes-box__cont">
                                                <h3 className='boxes-box__title rec'>New Recovered: <span
                                                    className='boxes-box__subtitle'>{country.todayRecovered}</span></h3>
                                                <h3 className='boxes-box__title rec'>Total Recovered: <span
                                                    className='boxes-box__subtitle'><b>{country.recovered}</b></span>
                                                </h3>
                                            </div>
                                            <svg width="50" height="50" viewBox="0 0 48 48" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M29.5696 23.3654C32.4238 21.1604 34.2656 17.7056 34.2656 13.8281C34.2656 7.18547 28.8614 1.78125 22.2188 1.78125C15.5761 1.78125 10.1719 7.18547 10.1719 13.8281C10.1719 17.7055 12.0137 21.1604 14.8679 23.3654C6.40247 26.3243 0 34.4463 0 44.3438C0 45.3793 0.839438 46.2188 1.875 46.2188H42.5625C43.5981 46.2188 44.4375 45.3793 44.4375 44.3438C44.4375 34.4438 38.0302 26.3227 29.5696 23.3654ZM13.9219 13.8281C13.9219 9.25322 17.6438 5.53125 22.2188 5.53125C26.7937 5.53125 30.5156 9.25322 30.5156 13.8281C30.5156 18.403 26.7937 22.125 22.2188 22.125C17.6438 22.125 13.9219 18.403 13.9219 13.8281ZM3.8445 42.4688C4.78697 33.1622 12.6678 25.875 22.2188 25.875C31.7697 25.875 39.6505 33.1622 40.593 42.4688H3.8445Z"
                                                    fill="#28F64B"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <BarChartCountry name={name} />
                            </div>

                    }

                </div>
            </div>
        </Layout>
    );
};

export default Country;