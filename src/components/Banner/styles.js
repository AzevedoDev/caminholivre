import styled from "styled-components"

export const Banner = styled.section`
  @media (max-width: 1366px) {
    width: 100%;
  }
  width: 1366px;
  display: flex;
  justify-content: center;
`

export const Wrapper = styled.div`
  font-family: "Varela Round", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
`
export const Title = styled.h2`
  width: 355px;
  height: 118px;
  font-size: 32px;
  font-weight: 500;
  line-height: 38.4px;
  text-align: left;
  color: #1d4c9d;
`
export const SubTitle = styled.h3`
  width: 365px;
  height: 78px;
  font-size: 16px;
  line-height: 24px;
  text-align: left;
  color: #3a3a3a;
`
export const Button = styled.button`
  width: 196px;
  height: 55px;
  border-radius: 6px;
  background-color: #1d4c9d;
  font-size: 14px;
  font-weight: bold;
  line-height: 38.4px;
  text-align: center;
  color: #ffffff;
`
