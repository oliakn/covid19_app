import React, {useState, useEffect} from 'react';
import {Line} from 'react-chartjs-2'
import axios from "axios";
const BarChart = () => {
    const [info, setInfo] = useState([])
    useEffect(() => {
        axios('https://disease.sh/v3/covid-19/countries/')
            .then(rec => {
                setInfo(rec.data)
            })
    }, [])
    let label = [info.reduce((acc,rec) => [...acc, rec.country], [])]
    let confirmed = [info.reduce((acc,rec) => [...acc, rec.cases], [])]
    let death = [info.reduce((acc,rec) => [...acc, rec.deaths], [])]
    let recovered = [info.reduce((acc,rec) => [...acc, rec.recovered], [])]
    return <div className='chart'>
        <Line
            data={{
                labels: Object.values(label[0]),
                datasets: [

                    {
                        label: 'Total Confirmed',
                        data: Object.values(confirmed[0]),
                        backgroundColor: ['#364ec6'],
                        fill: true,
                        borderColor: ['#627af5'],
                        borderWidth: 1,
                    },
                    {
                        label: 'Total Deaths',
                        data: Object.values(death[0]),
                        backgroundColor: ['#F01054'],
                        borderColor: ['#ff3865'],
                        borderWidth: 1,
                    },
                    {
                        label: 'Total Recovered',
                        data: Object.values(recovered[0]),
                        backgroundColor: ['#28F74B'],
                        borderColor: ['#96FF00'],
                        borderWidth: 1,
                    },
                ],
            }}

            height={550}
            width={900}
            options={{
                maintainAspectRatio: false,
            }}
        />
    </div>
}

export default BarChart