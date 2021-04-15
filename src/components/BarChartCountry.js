import React, {useState, useEffect} from 'react';
import {HorizontalBar} from 'react-chartjs-2'
import axios from "axios";
const BarChart = ({name}) => {
    const [info, setInfo] = useState([])
    useEffect(() => {
        axios(`https://disease.sh/v3/covid-19/countries/${name}`)
            .then(rec => setInfo(rec.data))
    }, [])
    let label = [[info].reduce((acc,rec) => [...acc, rec.country], [])]
    let confirmed = [[info].reduce((acc,rec) => [...acc, rec.cases], [])]
    let death = [[info].reduce((acc,rec) => [...acc, rec.deaths], [])]
    let recovered = [[info].reduce((acc,rec) => [...acc, rec.recovered], [])]
    console.log(info)
    return <div className='chart'>
        <HorizontalBar
            data={{
                labels: Object.values(label[0]),
                datasets: [

                    {
                        label: 'Total Confirmed',
                        data: Object.values(confirmed[0]),
                        backgroundColor: ['rgba(54, 78, 198, 0.5)'],
                        borderColor: ['rgba(54, 78, 198, 1)'],
                        borderWidth: 1,
                    },
                    {
                        label: 'Total Deaths',
                        data: Object.values(death[0]),
                        backgroundColor: ['rgba(240, 16, 84, 0.5)'],
                        borderColor: ['rgba(240, 16, 84, 1)'],
                        borderWidth: 1,
                    },
                    {
                        label: 'Total Recovered',
                        data: Object.values(recovered[0]),
                        backgroundColor:['rgba(40, 246, 75, 0.5)'],
                        borderColor: ['rgba(40, 246, 75, 1)'],
                        borderWidth: 1,
                    },
                ],
            }}

            height={350}
            width={800}
            options={{
                maintainAspectRatio: false,
            }}
        />
    </div>
}

export default BarChart