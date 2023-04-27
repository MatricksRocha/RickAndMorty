import React, {useState, useEffect} from 'react';

import './style.css';


import {CardPreviewImage} from '../CardPreview/indexImg';
import {About} from './About';
import {Location} from './Location';
import {Origin} from './Origin';

export function CardDetails({character}) {
    return (
        <>
        <div className='c-cardDetailsBackground'>
            <section className='c-cardDetails'>
                <section className='c-cardDetails__avatarAndTopics'>

                        <CardPreviewImage character={character} />

                    <section className='c-cardDetails__allTopics'>
                        <About character={character} />

                        <div className='c-cardDetails__locationAndOrigin'>
                            <Location character={character} />
                            <Origin character={character} />
                        </div>
                    </section>
                </section>

                <section className='c-cardDetails__closeButton'>
                    <button className='c-button'>Close</button>
                </section>
            </section>
        </div>
        </>
    )
}