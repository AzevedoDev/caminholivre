import styled from "styled-components"
import { Link as GLink } from "gatsby"

export const Header = styled.header`
  @media (max-width: 1366px) {
    width: 100%;
  }
  width: 1366px;
  display: flex;
  justify-content: center;
`
export const Wrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 36px;
  margin-bottom: 140px;
`
export const Link = styled(GLink)`
  font-family: "Varela Round", sans-serif;
  font-size: 18px;
  line-height: 20px;
  text-align: center;
  color: #1d4c9d;
  text-decoration: none;
  padding-bottom: 9px;
  min-width: 90px;
  &:hover {
    border-bottom: solid 5px #1d4c9d;
    margin-bottom: -5px;
  }
`
