import styled from 'styled-components';

const colors = {
  0: 'inhereit',
  1: 'var(--green)',
  2: 'var(--blue700)',
};

const Ball = styled.div`

  width: 55px;
  height: 55px;

  background-color: ${(props) => (props.colorOption ? colors[props.colorOption] : 'inhereit')};

  border-radius: 50%;

  @media (max-width:768px){
    width: 40px;
    height: 40px;
  }
`;

export default Ball;
