import React from 'react'
import { FaChevronCircleUp } from "react-icons/fa";
import { FaChevronCircleDown } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeItem, increase, decrease } from '../control/cardSlice';

export default function CourseItem({ id, title, price, img, quantity }) {
    const dispatch = useDispatch();
    return (

        <div className='cardItem'>
            <img src={img} alt="" />
            <div className='cardInfo'>
                <h4>{title}</h4>
                <h4>{price} TL</h4>
                <div>
                    <button className='cardQuantityButton' onClick={() => dispatch(increase(id))}>
                        <FaChevronCircleUp />
                    </button>
                    <p className='cardItemP'>{quantity}</p>
                    <button className='cardQuantityButton' onClick={() => dispatch(decrease(id))} >
                        <FaChevronCircleDown />
                    </button>
                </div>
                <button className='cardDeleteButton' onClick={() => { dispatch(removeItem(id)) }}>Sil</button>
            </div>

        </div >
    );
}
