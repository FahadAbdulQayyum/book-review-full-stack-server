"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const RatingStars = ({ rating, maxRating = 5 }) => {
    const stars = [];
    // Iterate through possible star positions
    for (let i = 1; i <= maxRating; i++) {
        if (rating >= i) {
            stars.push(<i key={i} className="fas fa-star yl"></i>); // Full star
        }
        else if (rating >= i - 0.5) {
            stars.push(<i key={i} className="fas fa-star-half-alt yl"></i>); // Half star
        }
        else {
            stars.push(<i key={i} className="far fa-star yl"></i>); // Empty star
        }
    }
    return <div className="rating-stars">{stars}</div>;
};
exports.default = RatingStars;
