'use client'
import React from 'react'
import Tempurature from '../tempurature'
import { v4 as uuidv4 } from 'uuid';
import { GeoLocationData } from '../../types/geo-location-data';
import Icon from './ow-icon';
import DetailSection from './details-sub-container';
import DetailWithLabel from './detail-with-label';
import { roundToWholeNumber } from '../helpers';

type CurrentWeatherDetailsProps = {
    geoLocationData: GeoLocationData | null
}

const CurrentWeatherDetails: React.FC<CurrentWeatherDetailsProps> = ({geoLocationData}) => {
  return (
        <div className='
        bg-secondary
        border
        border-solid
        rounded-xl
        mt-36
        p-6
        shadow-md
        h-full' 
        id='current-weather-details'>
            <section className='text-primary pb-24' id='location-details'>
                <span className='text-xl'>{geoLocationData?.geoData.name}, </span>
                <span className='text-xl'>{geoLocationData?.geoData.state}, </span>
                <span className='text-xl'>{geoLocationData?.geoData.country}</span>
            </section>
            <section className='flex flex-row gap-24 justify-center' id='weather-details'>
                <DetailSection id='tempurature-details'>
                    <div>
                        {geoLocationData?.locationData.weather.map((weather) => {
                        return <div title={`${weather.main} - ${weather.description}`} className='text-lg font-bold text-secondary' key={uuidv4()}>{weather.main} - {weather.description}</div>
                        })}
                    </div>
                    <div title='Temperature' className='flex items-center'>
                        <Icon iconCode={geoLocationData?.locationData.weather.length ? geoLocationData?.locationData.weather[0].icon : ''} />
                        <Tempurature classes='text-xl font-bold' temp={geoLocationData?.locationData.main.temp}/>
                    </div>
                    <DetailWithLabel title='What the tempurature feels like to human perception of weather' containerClasses='my-4' labelText='Feels Like:'>
                        <Tempurature classes='text-lg font-bold' temp={geoLocationData?.locationData.main.feels_like}/>
                    </DetailWithLabel>
                    <DetailWithLabel title='Maximal currently observed temperature (within large megalopolises and urban areas)' containerClasses='mb-4' labelText='Max Temp:'>
                        <Tempurature classes='text-lg font-bold' temp={geoLocationData?.locationData.main.temp_max}/>
                    </DetailWithLabel>
                    <DetailWithLabel title='Minimal currently observed temperature (within large megalopolises and urban areas)' labelText='Minimum Temp:'>
                       <Tempurature classes='text-lg font-bold' temp={geoLocationData?.locationData.main.temp_min}/>
                    </DetailWithLabel>
                </DetailSection>
                <DetailSection id='additional-details'>
                    <div title='Atmospheric pressure on the sea level'>
                        <p className='text-lg mt-0 font-bold text-secondary'>Atmospheric Pressure: </p>
                        <p className='text-lg text-secondary'>{roundToWholeNumber(geoLocationData?.locationData.main.pressure ?? 0)} hPa</p>
                    </div>
                    <div title='Atmospheric pressure on the sea level'>
                        <p className='text-lg mt-0 font-bold text-secondary'>Humidity: </p>
                        <p className='text-lg text-secondary'>{roundToWholeNumber(geoLocationData?.locationData.main.humidity ?? 0)}%</p>
                    </div>
                </DetailSection>
                <DetailSection id='sunrise-and-set-details'>
                    <div title='Wind Speed'>
                        <p className='text-lg mt-0 font-bold text-secondary'>Wind Speed: </p>
                        <p className='text-lg text-secondary'>{roundToWholeNumber(geoLocationData?.locationData.wind.speed ?? 0)} miles/hour</p>
                    </div>
                    <div title='Wind Gust'>
                        <p className='text-lg mt-0 font-bold text-secondary'>Wind Gust: </p>
                        <p className='text-lg text-secondary'>{roundToWholeNumber(geoLocationData?.locationData.wind.gust ?? 0)} miles/hour</p>
                    </div>
                </DetailSection>
            </section>
        </div>
  )
}

export default CurrentWeatherDetails