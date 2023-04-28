import './style.css';
import loadingImage from '../../assets/Loading.svg'

export function LoadingScreen(props) {   
        return (
            <>
                <div className='c-loadingScreenBackground'>
                    <img className='c-loadingScreenBackground__image' src={loadingImage} alt="Loading image" />
                    <p>LOADING...</p>
                </div>
            </>
        )
}