import styled from 'styled-components';

const Board = styled.div`

  display: flex;
  justify-content: space-between;

  margin: 0 auto;
  margin-top: 80px;

  width: 73%;
  height: 80%;

  @media (max-width:768px){
    width: 95%;
    height: 50%;
  }
`;

export default Board;
