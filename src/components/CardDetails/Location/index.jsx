import React, {useState, useEffect} from 'react';

import './style.css';

export function Location({character}) {

    const [locationInfo, setLocationInfo] = useState('');
    const locationType = locationInfo.type || '';
    const locationName = locationInfo.name || '';
    const locationDimension = locationInfo.dimension || '';
    const locationResidents = locationInfo.residents || [];

    useEffect(() => {
        const location = character.location || {};

        const generateLocation = async () => {
            try {
                const response = await axios.get(location.url);
                setLocationInfo(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        generateLocation();
    }, [locationInfo, locationType, locationName, locationDimension, locationResidents]);


    return (
        <>
            <div className='c-cardDetails__topic c-cardDetails__location'>
                <h2 className='c-cardDetails__topicTitle'>LOCATION</h2>
                <h2 className='c-cardDetails__locationInfo'>{locationName}</h2>
                <p className='c-cardDetails__locationInfo'><small>{locationType}</small></p>
                <p className='c-cardDetails__locationInfo'>{locationDimension}</p>

                <div className='c-cardDetails__residents'>
                    <img className='c-cardDetails__residentsImg c-cardDetails__locationInfo' src="./src/assets/Residents.svg" alt="Residents image" />
                    <p className='c-cardDetails__locationInfo'><small>{locationResidents.length} residents</small></p>
                </div>
            </div>
        </>
    )
}