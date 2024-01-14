import styled from "styled-components";
import Marquee from "react-marquee-slider";
import { photos } from "./photos";

const Photo = styled.img`
  width: 100%;
  height: 500px;
  border-radius: 4px;
  box-shadow: 0 7px 20px 0 rgba(0, 0, 0, 0.12);
  object-fit: cover;
  filter: grayscale(100%); /* Apply grayscale filter by default */

  &:hover {
    filter: grayscale(0%); /* Remove the grayscale filter on hover */
  }
`;

const Gallery = ({ size }) => {
  return (
    <div>
      <div>
        <Marquee velocity={25}>
          {photos.map((id) => (
            <Photo
              src={id}
              key={`marquee-example-people-${id}`}
              style={{
                marginLeft: "87px",
              }}
            />
          ))}
        </Marquee>
      </div>

      <div />

     
    </div>
  );
};

export default Gallery;
