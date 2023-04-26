import './style.css';

export function CardPreview(props) {
    return (
        <>
            <section className='c-cardPreview'>
                <img className='c-cardPreview__avatar' src={props.avatar} alt="Character avatar" />

                <div className='c-cardPreview__info'>
                    <h3 className='c-cardPreview__name'>{props.name}</h3>
                    <p className='c-cardPreview__species'><small>{props.species}</small></p>
                </div>
            </section>
        </>
    )
}