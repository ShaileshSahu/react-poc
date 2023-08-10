import cardImage from '../images/ankur-warikoo.png';
import star from '../images/star.png';

const cardDetail = {
    status: 'Sold out',
    img: cardImage,
    rating: 4.6,
    reviews: 6,
    location: 'USA',
    title: 'Life Lesson with kate',
    description: 'Life Lesson with kate',
    price: '$135',
};


function CardDetail(props) {
    const {rating,status,img,reviews,description,price,location}  = props.person;
    return ( <section>
        <div className="card">
            <h3>{status}</h3>
            <img src={img} className="card--image"/>
            <div className="card--stats">
            <img className="card--star" src={star}/> 
            <span>{rating}</span>
            <span className='gray'>({reviews}) . </span>
            <span className='gray'>{location}</span>
            </div>
            <p>{description}</p>
            <p><span className="bold">From {price} </span>/ person</p>
        </div>
    </section>);
}
export default function Card() {
    return <CardDetail person={cardDetail}/>
}