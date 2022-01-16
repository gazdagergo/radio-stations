import { Card, Accordion } from 'react-bootstrap'
import styled, { css, keyframes } from 'styled-components'
import Icons from '../Icons'
import DashCircle from '../Icons/DashCircle'
import PlusCircle from '../Icons/PlusCircle'

const { Power, ChevronLeft } = Icons

export const StationListWrap = styled(Card)`
  border-radius: var(--border-radius);
  box-shadow: 0 36px 24px -24px black;
`

export const StationListBody = styled(Card.Body)`
  background: ${({ theme }) => theme.colors.secondaryBackground};
  @media(max-width: 400px){
    &.card-body {
      padding-left: 0;
      padding-right: 0;
    }
  }
`

export const StationLisHead = styled(Card.Header)`
  height: 75px;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 1.2rem;
  letter-spacing: .02rem;
  ${({ theme }) => `
    background: ${theme.colors.primary};
    color: ${theme.colors.negativeText};
  `}

  &:first-child {
    border-radius: calc(var(--border-radius) - 1px) calc(var(--border-radius) - 1px) 0 0;
  }
`

export const StationListStatusFooter = styled(Card.Footer)`
  height: 75px;
  background: ${({ theme }) => theme.colors.ternaryBackgrouond};
  display: flex;
  align-items:center;
  justify-content: flex-start;
  padding-top: 18px;
  flex-direction: column;

  &:last-child {
    border-radius: 0 0 calc(var(--border-radius) - 1px) calc(var(--border-radius) - 1px);
  }

  h2 {
    margin: 0;
    text-transform: uppercase;
    font-size: .6rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary};
  }
  
  p {
    font-size: 1.4rem;
    margin: 0;
    color: ${({ theme }) => theme.colors.negativeSecondaryText};
  }  
`

export const BackButton = styled(ChevronLeft).attrs({ size: 25 })`
  path {
    stroke-width: .4;
    stroke-linecap: round;
    stroke: white;
  }
`

export const PowerButton = styled(Power).attrs({ size: 25 })`
  margin-top: -4px;
  path {
    stroke-width: .4;
    stroke-linecap: round;
    stroke: white;
  }
`

export const StationList = styled(Accordion)`
  border-radius: 0;
`

export const StationListItem = styled(Accordion.Item)`
  border-width: 0 0 1px 0;
  border-color: ${({ theme }) => theme.colors.negativeSecondaryText}88;
  background: transparent;
  &.accordion-item:last-of-type {
    border-radius: 0;
  }
  &:last-child{
    border: none;
  }
  button:after {
    content: none;
  }
`

export const StationName = styled(Accordion.Header)`
  .accordion-button {
    display: flex;
    justify-content: space-between;
    font-size: 1.4rem;
    background: none;
    color: ${({ theme }) => theme.colors.negativeSecondaryText};
  }
`

export const StationDetails = styled(Accordion.Body)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const RadioTeaser = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.negativeSecondaryText};
  display: inline-flex;
  border-radius: 50%;
  overflow: hidden;
`

const beat = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`


const VolumeControlMixin = css`
  svg circle {
    fill: ${({ theme }) => theme.colors.primary};
    opacity: 0;
  }

  &:focus svg circle {
    animation: ${beat} .1s ease-in-out backwards;
  }

  &:active svg circle {
    animation: none;
  }

  svg path {
    stroke: ${({ theme }) => theme.colors.negativeSecondaryText};
    fill: ${({ theme }) => theme.colors.negativeSecondaryText};
    stroke-width: 0.15px;
  }
`

export const Up = styled(PlusCircle).attrs({ size: 38 })``
export const Down = styled(DashCircle).attrs({ size: 38 })``

export const VolumeControl = styled.button`
  border: none;
  background: transparent;
  ${VolumeControlMixin}
`
