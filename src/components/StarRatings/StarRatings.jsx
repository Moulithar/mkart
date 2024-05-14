import PropTypes from "prop-types"
import React from "react"

const StarRatings = ({ value, maxStars, color }) => {
  const renderStars = () => {
    const stars = []
    const fullStars = Math.floor(value)
    const hasHalfStar = value - fullStars > 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={i} className="bi bi-star-fill" style={{ color }}></i>)
    }

    if (hasHalfStar) {
      stars.push(
        <i key="half" className="bi bi-star-half" style={{ color }}></i>
      )
    }

    const remainingStars = maxStars - (fullStars + (hasHalfStar ? 1 : 0))

    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <i key={`empty-${i}`} className="bi bi-star" style={{ color }}></i>
      )
    }

    return stars
  }

  return <div className="d-flex align-items-center gap-1">{renderStars()}</div>
}

StarRatings.propTypes = {
  value: PropTypes.number.isRequired,
  maxStars: PropTypes.number,
  color: PropTypes.string,
}

StarRatings.defaultProps = {
  maxStars: 5,
  color: "#FF5141",
}

export default StarRatings
