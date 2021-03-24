import styled from "styled-components"
import { typography } from "../../constraints/Tokens"
import "./Typography.css"

export const H1 = styled.h1`
  font-family: ${typography.headingFont};
  font-weight: bold;
  font-size: 60px;

  @media (max-width: 450px) {
    font-size: 34px;
  }
`
export const H2 = styled.h2`
  font-family: ${typography.headingFont};
  font-weight: bold;
  font-size: 40px;

  @media (max-width: 450px) {
    font-size: 28px;
  }
`

export const H3 = styled.h3`
  font-family: ${typography.headingFont};
  font-weight: bold;
  font-size: 30px;

  @media (max-width: 450px) {
    font-size: 24px;
  }
`

export const H4 = styled.h4`
  font-family: ${typography.headingFont};
  font-weight: bold;
  font-size: 24px;

  @media (max-width: 450px) {
    font-size: 18px;
  }
`

export const H5 = styled.h5`
  font-family: ${typography.headingFont};
  font-weight: bold;
  font-size: 18px;

  @media (max-width: 450px) {
    font-size: 14px;
  }
`

export const BodyIntro = styled.p`
  font-family: ${typography.bodyFont};
  font-weight: 500;
  font-size: 24px;
  line-height: 140%normal;
`

export const BodyMain = styled.p`
  font-family: ${typography.bodyFont};
  font-weight: normal;
  font-size: 20px;
  line-height: 140%normal;
`

export const MediumText = styled.p`
  font-family: ${typography.bodyFont};
  font-weight: normal;
  font-size: 16px;
  line-height: 130%;
`

export const Caption = styled.p`
  font-family: ${typography.bodyFont};
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
`

export const Caption2 = styled.p`
  font-family: ${typography.headingFont};
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  text-transform: uppercase;
`

export const SmallText = styled.p`
  font-family: ${typography.monospaceFont};
  font-weight: normal;
  font-size: 12px;
  line-height: 130%;
`

export const SmallText2 = styled.p`
  font-family: ${typography.monospaceFont};
  font-weight: 500;
  font-size: 10px;
  line-height: 130%;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`
