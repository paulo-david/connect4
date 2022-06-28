import styled from 'styled-components';

const Container = styled.ul`

  height: 80%; 
  /* altura na verdade vai ser fit-content ( pois o tabuleiro sempre estará preenchido) */
  width: 10%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  background-color: var(--blue500);
  border-radius: 15px;


  :hover {
    transition: 0.4s;
    background-color: var(--blue800);
  }
`;

export default Container;
