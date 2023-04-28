import './style.css';
import errorImage from '../../assets/Error.gif'

export function ErrorScreen(props) {   
        return (
            <>
                <div className='c-errorScreen'>
                    <p>Sorry, we could not find any characters with this name :(</p>
                    <img className='c-errorScreen__image' src={errorImage} alt="Error image" />
                </div>
            </>
        )
}