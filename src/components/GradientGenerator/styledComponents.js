import styled from 'styled-components'
export const GradientGeneratorContainer = styled.div`
    background-image: linear-gradient(${props => props.gradientValue})
`
export const ResponsiveContainer = styled.div`
    display="flex";
  `
export const Heading = styled.h1`
    color: '#ffffff'
  `
export const DirectionsDescription = styled.p`
    color:'#ffffff'
  `
export const GradientDirectionList = styled.ul`
    color:'#ffffff'
  `
export const ColorsPickersDescription = styled.p`
    color:'#ffffff'
  `
export const ColorPickerContainer = styled.div`
    width:40%;
  `
export const CustomInputAndColorContainer = styled.div`
    width:40%;
  `
export const ColorValue = styled.p`
    color:'#ffffff'
  `
export const CustomInput = styled.input`
    width:40%
  `
export const GenerateButton = styled.button`
    color:block
  `
