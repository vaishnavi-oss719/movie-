export default function RatingStars({ rating, setRating }) {
  return (
    <div className="flex gap-1">
      {[1,2,3,4,5].map(star => (
        <span
          key={star}
          onClick={() => setRating(star)}
          className={`cursor-pointer text-2xl ${
            star <= rating ? "text-yellow-400" : "text-gray-300"
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );
}
