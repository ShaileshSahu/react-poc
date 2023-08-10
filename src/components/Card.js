import cardImage from '../images/ankur-warikoo.png';
import star from '../images/star.png';

function Card(props) {
    const {slots,rating,status,img,reviews,description,price,location}  = props.card;
    return(
        <div className="card">
                    {slots === 0 &&<div className='card--badge'>{status}</div>}
                    <img src={img} className="card--image"/>
                    <div className="card--stats">
                    <img className="card--star" src={star}/> 
                    <span>{rating}</span>
                    <span className='gray'>({reviews}) . </span>
                    <span className='gray'>{location}</span>
                    </div>
                    <p className='card--title'>{description}</p>
                    <p className='card--description'><span className="bold">From {price} </span>/ person</p>
        </div>);
}

export default function Cards(props) {
    
    return ( <section className='cards'>
        {
        props.cards.map(card => {
                return(<Card card={card} />)
        })
        }
    </section>);
}
