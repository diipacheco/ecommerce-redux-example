import styled from 'styled-components';

export const Container = styled.header`
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      min-width: 350px;
      height: 130px;
      border-bottom: 1px solid rgb(75, 75, 75, 0.9);
      padding: 0 50px;
      button{
        border: none;
        background: none;
        cursor: pointer;
      }
      img{
        max-height: 65px;
      }
`;
