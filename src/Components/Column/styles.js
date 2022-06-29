import styled from 'styled-components';

const colors = {
  1: 'var(--green)',
  2: 'var(--blue700)',
};

const Container = styled.ul`

  height: 80%; 
  width: 8%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  background-color: var(--blue500);

  padding: 0;
  border: 8px solid var(--blue500);
  border-radius: 15px;

  :hover {
    transition: 0.4s;
    border: 8px solid ${(props) => (props.colorTurn ? colors[props.colorTurn] : 'inhereit')};
  }
`;

export default Container;
