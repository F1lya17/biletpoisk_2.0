import React from "react";
import hills from '../public/hills.svg'
import { Review } from "@/store/services/moveApi";
import Image from "next/image";

type reviewCardProps = {
    review: Review
}

const ReviewCard: React.FC<reviewCardProps> = function ({ review }) {
    return (
        <div className="review">
            <div className="review__img-container">
                <div className="review__img"><Image src={hills} alt="" /></div>
            </div>
            <div className="review__info">
                <div className="review__main">
                    <div className="review__name">{review.name}</div>
                    <div className="review__rating">Оценка: <span>{review.rating}</span></div>
                </div>
                <div className="review__text">{review.text}</div>
            </div>
        </div>
    );
}

export default ReviewCard;