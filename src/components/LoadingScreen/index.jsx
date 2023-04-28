import './style.css';

export function LoadingScreen(props) {   
        return (
            <>
                <div className='c-loadingScreenBackground'>
                    <img className='c-loadingScreenBackground__image' src="./src/assets/Loading.svg" alt="Loading image" />
                    <p>LOADING...</p>
                </div>
            </>
        )
}