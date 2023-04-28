import React, {useState} from 'react';

import './style.css';

import {CardDetails} from '../CardDetails';

export function CardPreviewButton({character}) {
    const [showCard, setShowCard] = useState(false);

    const avatarClassName = character.status === 'Dead' ? 'c-cardPreview__avatar--dead' : 'c-cardPreview__avatar--alive'

    const handleCardDetailsButtonClick = () => {
        setShowCard(false);
    }

    return (
        <>
            <section className='c-cardPreview c-cardPreviewButton' onClick={() => setShowCard(true)} >
                <img className={avatarClassName} src={character.image} alt="Character avatar" />

                <div className='c-cardPreview__info'>
                    <h3 className='c-cardPreview__name'>{character.name}</h3>
                    <p className='c-cardPreview__species'><small>{character.species}</small></p>
                </div>
            </section>
            
            {showCard && <CardDetails character={character} onCardDetailsButtonClick={handleCardDetailsButtonClick} />}
        </>
    )
}