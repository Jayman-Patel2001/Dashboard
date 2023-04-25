import { css } from "@emotion/react";
const medium = (props) => {
  return css`
    @media only screen and (max-width: 1600px) {
      ${props}
    }
  `;
};
const mobile = (props) => {
  return css`
    @media only screen and (max-width: 850px) {
      ${props}
    }
  `;
};

const small = (props) => {
  return css`
    @media only screen and (max-width: 501px) {
      ${props}
    }
  `;
};

export default medium;
export { mobile };
export { small };
