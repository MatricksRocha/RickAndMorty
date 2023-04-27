import React, {useState, useEffect} from 'react';

import './style.css';

export function About({character}) {
    
    const [lastSeen, setLastSeen] = useState('');
    const gender = character.gender || '';
    const status = character.status || '';
    const species = character.species || '';

    const generatePronoun = () => {
        if (gender === 'Male') {
            return('He');
        } else if (gender === 'Female') {
            return('She');
        } else {
            return('It');
        }
    }

    const generateStatus = () => {
        if (status === 'Alive') {
            return(`${generatePronoun()} is ${(status).toLowerCase()} and well`);
        } else if (status === 'Dead') {
            return(`${generatePronoun()} is ${(status.toLowerCase())}`);
        } else {
            return(`It can't be told if ${(generatePronoun()).toLowerCase()} is alive or dead`);
        }
    }

useEffect(() => {
    const generateLastSeen = async () => {
        const episode = character.episode || [];
        try {
            const response = await axios.get((episode).slice(-1));
            setLastSeen(response.data.air_date);
        } catch (error) {
            console.error(error);
        }
    }
    generateLastSeen();
}, [lastSeen, gender, status, species]);


    const generateAboutPhrase = () => {
        return `${character.name} is a ${(gender).toLowerCase()} ${(species).toLowerCase()}. ${generateStatus()}. Last seen ${lastSeen}.`;
    }

    return (
        <>
                <div className='c-cardDetails__topic c-cardDetails__about'>
                    <h2 className='c-cardDetails__topicTitle'>ABOUT</h2>
                    <p className='c-cardDetails__aboutText'><small>{generateAboutPhrase()}</small></p>
                </div>
        </>
    )
}