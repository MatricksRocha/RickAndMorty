import React, {useState, useEffect} from 'react';

import './style.css';

export function About({character}) {
    
    const [lastSeen, setLastSeen] = useState('');

    const generatePronoun = () => {
        if (character?.gender === 'Male') {
            return('He');
        } else if (character?.gender === 'Female') {
            return('She');
        } else {
            return('It');
        }
    }

    const generateStatus = () => {
        if (character?.status === 'Alive') {
            return(`${generatePronoun()} is ${(character?.status).toLowerCase()} and well`);
        } else if (character.status === 'Dead') {
            return(`${generatePronoun()} is ${(character?.status).toLowerCase()}`);
        } else {
            return(`It can't be told if ${(generatePronoun()).toLowerCase()} is alive or dead`);
        }
    }

    const generateLastSeen = async () => {
        try {
            const response = await axios.get((character?.episode).slice(-1));
            setLastSeen(response.data.air_date);
        } catch (error) {
            console.error(error);
        }
    }

useEffect(() => {
    generateLastSeen();
}, []);

    const generateAboutPhrase = () => {
        return `${character?.name} is a ${(character?.gender).toLowerCase()} ${(character.species).toLowerCase()}. ${generateStatus()}. Last seen ${lastSeen}.`;
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