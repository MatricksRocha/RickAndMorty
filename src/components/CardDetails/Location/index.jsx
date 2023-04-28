import {useState, useEffect} from 'react';

import './style.css';
import residentsImage from '../../../assets/Residents.svg'

export function Location({character}) {

    const [locationInfo, setLocationInfo] = useState('');

    useEffect(() => {
        const generateLocation = async () => {
            try {
                if(character?.location?.url !== ''){
                    const response = await axios.get(character?.location?.url);
                    setLocationInfo(response?.data);
                } else {
                    setLocationInfo(character?.location);
                }
            } catch (error) {
                console.error(error);
            }
        }
        generateLocation();
    }, []);

    return (
        <>
            <div className='c-cardDetails__topic c-cardDetails__location'>
                <h2 className='c-cardDetails__topicTitle'>LOCATION</h2>
                <p className='c-cardDetails__locationInfo'><small>{locationInfo?.type}</small></p>
                <h2 className='c-cardDetails__locationInfo c-cardDetails__locationInfoName'>{locationInfo?.name}</h2>
                <p className='c-cardDetails__locationInfo'><small>{locationInfo?.dimension}</small></p>

                {character?.location?.url !== '' 
                    ? <div className='c-cardDetails__residents'><img className='c-cardDetails__residentsImg c-cardDetails__locationInfo' src={residentsImage} alt="Residents image" /><p className='c-cardDetails__locationInfo'><small>{locationInfo?.residents?.length} residents</small></p></div>
                    : <div></div>
                }
            </div>
        </>
    )
}