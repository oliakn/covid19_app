import React, {useEffect, useState} from 'react';
import axios from "axios";
import {NavLink} from 'react-router-dom'
import Spinner from "../components/Spinner";
import Layout from "../components/Layout";

const Countries = () => {
    const [info, setInfo] = useState([])
    const [search, setSearch] = useState('')
    const filteredInfo = info.filter(rec =>  rec.country.toLowerCase().includes(search.toLowerCase()))

    useEffect(() => {
        axios('https://disease.sh/v3/covid-19/countries')
            .then(rec => {
                setInfo(rec.data)
            })
    }, [])
    return (
        <Layout>
            <div className="container countries-table__container ">
                <div className="boxes__title">
                    All Countries
                </div>
                <input type="search" name="q" className="search"
                       placeholder="Search..." id='search' autoComplete="off" onChange={(e) => setSearch(e.target.value)}/>
                {
                    info.length === 0 ? <Spinner/> :
                        <table className="table table-hover bg-white">
                            <thead>
                            <tr className='tr'>
                                <th scope="col" className='th'>Country</th>
                                <th scope="col" className='th'>Cases</th>
                                <th scope="col" className='th'>Today Cases</th>
                                <th scope="col" className='th'>Deaths</th>
                                <th scope="col" className='th'>Today Deaths</th>
                                <th scope="col" className='th'>Recovered</th>
                                <th scope="col" className='th'>Today Recovered</th>
                            </tr>
                            </thead>
                            {
                                filteredInfo.map(rec => (
                                    <tbody>
                                    <tr>
                                        <td><NavLink to={`/country/${rec.country}`}>
                                            <th scope="row" className='td__country'>{rec.country}</th>
                                        </NavLink></td>
                                        <td>{rec.cases}</td>
                                        <td>{rec.todayCases}</td>
                                        <td>{rec.deaths}</td>
                                        <td>{rec.todayDeaths}</td>
                                        <td>{rec.recovered}</td>
                                        <td>{rec.todayRecovered}</td>
                                    </tr>
                                    </tbody>
                                ))
                            }
                        </table>

                }

            </div>

        </Layout>
    );
};

export default Countries;