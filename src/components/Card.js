import cardImage from '../images/ankur-warikoo.png';
import star from '../images/star.png';

function Card(props) {
    return (<section className='card'>
        <img src={cardImage}/>
        <div className='card--stats'>
            <h3><icon>L</icon> Japan</h3>
            <h2>Mount Fuji</h2>
            <h5>12 Jun,2021- 24 Jan, 2021</h5>
            <p>
            Japan’s Mt. Fuji is an active volcano about 100 kilometers southwest of Tokyo. Commonly called “Fuji-san,” it’s the country’s tallest peak, at 3,776 meters.
            </p>
        </div>
    </section>)
}

export default function Cards(props) {
    
   return (<>
    <Card/>
    <Card/>
    <Card/>
    </>
    )
}
