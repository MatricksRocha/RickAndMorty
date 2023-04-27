import React, {useState, useEffect} from 'react';

import './style.css';

export function Origin({character}) {

    const [originInfo, setOriginInfo] = useState('');
    const originType = originInfo.type || '';
    const originName = originInfo.name || '';
    const originDimension = originInfo.dimension || '';
    const originResidents = originInfo.residents || [];

    useEffect(() => {
        const origin = character.origin || {};

        const generateOrigin = async () => {
            try {
                const response = await axios.get(origin.url);
                setOriginInfo(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        generateOrigin();
    }, [originInfo, originType, originName, originDimension, originResidents]);

    return (
        <>
            <div className='c-cardDetails__topic c-cardDetails__origin'>
                <h2 className='c-cardDetails__topicTitle'>ORIGIN</h2>
                <h2 className='c-cardDetails__originInfo'>{originName}</h2>
                <p className='c-cardDetails__originInfo'><small>{originType}</small></p>
                <p className='c-cardDetails__originInfo'>{originDimension}</p>

                <div className='c-cardDetails__residents'>
                    <img className='c-cardDetails__residentsImg c-cardDetails__originInfo' src="./src/assets/Residents.svg" alt="Residents image" />
                    <p className='c-cardDetails__originInfo'><small>{originResidents.length} residents</small></p>
                </div>
            </div>
        </>
    )
}