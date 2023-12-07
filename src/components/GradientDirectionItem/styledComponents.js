import styled from 'styled-components/macro'

export const ListItem = styled.li`
    width: 49%;
    list-style-type: none;
    @media screen and (min-width: 768px) {
        width: 24%
    }
`

export const DirectionButton = styled.button`
    text-align: center;
    color: ${props => (props.isActive ? '#334155' : '#1e293b')};
    background-color: #ffffff;
    font-family: 'Roboto';
    font-size: 14px;
    outline: none;
    opacity: ${props => (props.isActive ? 1 : 0.5)};
    cursor: pointer;
`
