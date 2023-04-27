import './style.css';

export function CardPreviewButton({character}) {
    return (
        <>
            <section className='c-cardPreview c-cardPreviewButton' onClick={character.onClick}>
                <img className='c-cardPreview__avatar' src={character.image} alt="Character avatar" />

                <div className='c-cardPreview__info'>
                    <h3 className='c-cardPreview__name'>{character.name}</h3>
                    <p className='c-cardPreview__species'><small>{character.species}</small></p>
                </div>
            </section>
        </>
    )
}