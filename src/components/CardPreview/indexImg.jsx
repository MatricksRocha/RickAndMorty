import './style.css';

export function CardPreviewImage({character}) {

    const avatarClassName = character.status === 'Dead' ? 'c-cardPreview__avatar--dead' : 'c-cardPreview__avatar--alive'

    return (
        <>
            <section className='c-cardPreview'>
                <img className={avatarClassName} src={character.image} alt="Character avatar" />

                <div className='c-cardPreview__info'>
                    <h3 className='c-cardPreview__name'>{character.name}</h3>
                    <p className='c-cardPreview__species'><small>{character.species}</small></p>
                </div>
            </section>
        </>
    )
}