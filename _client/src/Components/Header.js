import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '../Global/Variables'

const Wrapper = styled.div`
  background: ${colors.primary};
  color: ${colors.white};
  margin-bottom: 64px;
  padding: 96px 48px;
`

const Title = styled.h1`
  font-size: 48px;
  font-weight: 600;
  line-height: 56px;
  margin: 0 0 24px;
`

const SubTitle = styled.p`
  font-size: 24px;
  line-height: 32px;
  margin: 0;
  opacity: .65;
`

const Header = ({ title, subTitle }) => (
  <Wrapper>
    <Title>{ title }</Title>
    { subTitle && <SubTitle>{ subTitle }</SubTitle> }
  </Wrapper>
)

Header.propTypes = {
  title: propTypes.string.isRequired,
  subTitle: propTypes.string,
}

Header.defaultProps = {
  subTitle: '',
}

export default Header
