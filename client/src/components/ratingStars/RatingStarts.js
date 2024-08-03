import { jsx as _jsx } from "react/jsx-runtime";
const RatingStars = ({ rating, maxRating = 5 }) => {
    const stars = [];
    // Iterate through possible star positions
    for (let i = 1; i <= maxRating; i++) {
        if (rating >= i) {
            stars.push(_jsx("i", { className: "fas fa-star yl" }, i)); // Full star
        }
        else if (rating >= i - 0.5) {
            stars.push(_jsx("i", { className: "fas fa-star-half-alt yl" }, i)); // Half star
        }
        else {
            stars.push(_jsx("i", { className: "far fa-star yl" }, i)); // Empty star
        }
    }
    return _jsx("div", { className: "rating-stars", children: stars });
};
export default RatingStars;
