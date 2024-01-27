import React from "react"
import styled, { keyframes } from "styled-components"
import {
  marquee1,
  marquee2,
  marquee3,
  marquee4,
  marquee5,
  marquee6,
  marquee7,
  marquee8,
} from "./assets/images/1.png"

const data = [
  {
    id: 1,
    value: 1,
  },
  {
    id: 2,
    value: 2,
  },
  {
    id: 3,
    value: 3,
  },
  {
    id: 4,
    value: 4,
  },
  {
    id: 5,
    value: 5,
  },
  {
    id: 6,
    value: 6,
  },
  {
    id: 7,
    value: 7,
  },
  {
    id: 8,
    value: 8,
  },
  {
    id: 9,
    value: 9,
  },
  {
    id: 10,
    value: 10,
  },
  {
    id: 11,
    value: 11,
  },
  {
    id: 12,
    value: 12,
  },
]

const scrollAnimation = keyframes`
  0% {
    transform: translateX(0%);
  }

  100% {
    transform: translateX(-100%);
  }
`

const ScrollImage = styled.img`
  width: auto;
  max-height: 100%;
  opacity: 0.5;
  margin-inline: 75px;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    cursor: default;
    opacity: 1;
  }
`

const MarqueeWrapper = styled.div`
  overflow: hidden;
`
const MarqueeContent = styled.div`
  display: flex;
  animation: ${scrollAnimation} 20s linear infinite; // Adjust the speed as needed
  margin-left: -25px; // Adjust to match the margin used in ScrollImage
`

const Marquee = () => {
  return (
    <MarqueeWrapper className="my-5">
      <MarqueeContent>
        {data.map((data, index) => (
          <ScrollImage
            key={index}
            src={`https://themes.pixelstrap.com/multikart/assets/images/logos/${data?.value}.png`}
            alt={`Logo ${index}`}
          />
        ))}
      </MarqueeContent>
    </MarqueeWrapper>
  )
}

export default Marquee
