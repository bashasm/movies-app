import StarIcon from "./StarIcon";

import styled from "styled-components";

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
`;

function Rating({ value }) {
  const ratingValue = (value / 10) * 5;
  const stars = 5;
  const fillColor = "#f1a545";
  const emptyColor = "#cccccc";
  const size = 25;

  return (
    <RatingContainer>
      <span>
        {[...Array(stars)].map((_, index) => (
          <span
            key={index}
            style={{
              color:
                ratingValue && ratingValue > index ? fillColor : emptyColor,
              width: size,
              height: size,
              display: "inline-flex",
            }}
          >
            <StarIcon size={size} />
          </span>
        ))}
      </span>
      {value}
    </RatingContainer>
  );
}

export default Rating;
