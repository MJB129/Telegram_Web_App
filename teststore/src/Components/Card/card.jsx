import React, {useState} from 'react';
import './card.css';
import Button from '../Button/Button'; 
function Card({bud, onAdd, onRemove}) {
    const[count, setCount] = useState(0);
    const { title, Image, price, id } = bud;
    const handleIncrement = () => {
        setCount(count + 1);
    }
    const handleDecrement = () => {
        setCount(count - 1);
    }
    return (
        <>
            <div className="card">
                <span className={count !== 0 ? "card_badge" : "card_badge--hidden"}>{count}</span>
                <div className="image__container">
                    <img src={Image} alt={title} />
                </div>
                <h4 className="card title">{title} <span className="card___price">
                    {price}
                    <span className="card__price--currency">USD</span>
                    </span>
                </h4>
                <div className="btn-container">
                    <Button title={"+"} type={'add'} onClick={handleIncrement} />
                    {count !==0 ? (
                        <Button title={'-'} type={'remove'} onClick={handleDecrement} />
                    ) : (
                        ""
                    )}
                </div>                
            </div>
        </>
    )
}

export default Card;