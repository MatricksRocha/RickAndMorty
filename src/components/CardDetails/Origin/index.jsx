import React, {useState, useEffect} from 'react';

import './style.css';

export function Origin({character}) {

    const [originInfo, setOriginInfo] = useState({});

    const generateOrigin = async () => {
        try {
            if(character?.origin?.url !== '') { 
                const response = await axios.get(character?.origin?.url);
                setOriginInfo(response?.data);
            } else {
                setOriginInfo(character?.origin);
            }
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        generateOrigin();
    }, []);

    return (
        <>
            <div className='c-cardDetails__topic c-cardDetails__origin'>
                <h2 className='c-cardDetails__topicTitle'>ORIGIN</h2>
                <p className='c-cardDetails__originInfo'><small>{originInfo?.type}</small></p>
                <h2 className='c-cardDetails__originInfo c-cardDetails__originInfoName'>{originInfo?.name}</h2>
                <p className='c-cardDetails__originInfo'><small>{originInfo?.dimension}</small></p>

                {character?.origin?.url !== '' 
                    ? <div className='c-cardDetails__residents'><img className='c-cardDetails__residentsImg c-cardDetails__originInfo' src='./src/assets/Residents.svg' alt='Residents image' /> <p className='c-cardDetails__originInfo'><small>{originInfo?.residents?.length} residents</small></p></div> 
                    : <div></div>
                }
            </div>
        </>
    )
}