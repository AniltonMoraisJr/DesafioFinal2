import styled from "styled-components";
import fundo from "../../assets/images/fundo.jpg";

export const Container = styled.div`
  width: 100%;
  min-width: 100%;
  height: 100%;
  min-height: 100%;

  background-image: url(${fundo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const Wrapper = styled.div`
  width: 100%;
  min-width: 100%;
  height: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 1));
  svg {
    width: 72px !important;
    height: 72px !important;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    input {
      width: 300px;
      height: 40px;
      border: none;
      border-radius: 5px;
      margin-bottom: 10px;
      padding: 5px 5px 5px 20px;

      font-size: 14px;

      &:first-of-type {
        margin-top: 30px;
      }
      &:last-of-type {
        margin-bottom: 20px;
      }
    }

    button {
      width: 300px;
      height: 40px;
      background: #f55;
      color: #fff;
      font-weight: bold;
      font-size: 14px;
      text-align: center;
      padding: 5px 0;
      border: none;
      border-radius: 5px;
    }
  }
`;
