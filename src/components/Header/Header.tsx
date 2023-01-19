import React from 'react'
import { H1Styled, H2Styled, HeaderStyled, Logo } from './HeaderStyles'

interface PropsType {
  heading: string
}

export const Header: React.FC<PropsType> = ({ heading }) => (
  <HeaderStyled>
    <H1Styled>
      <Logo src="logo.jpg" alt="VG logo" />
    </H1Styled>
    <H2Styled>{heading}</H2Styled>
  </HeaderStyled>
)
