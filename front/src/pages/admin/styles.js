import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  width: 100%;
  min-width: 100%;
  height: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

export const TopBar = styled.div`
  min-width: 100%;
  height: 100px;
  display: flex;
  background: rgb(6, 31, 51);
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 20px;

  div {
    display: flex;
    align-items: center;
  }

  div.userInfo {
    border-right: 1px solid #cacaca;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding-right: 10px;
    padding-top: 5px;
    padding-bottom: 5px;

    span.userName {
      font-family: Helvetica-Bold;
      font-size: 16px;
      color: #ffffff;
      text-align: left;
    }

    span.logout {
      align-self: flex-end;
      opacity: 0.6;
      font-family: Helvetica;
      font-size: 14px;
      color: #ffffff;
      text-align: right;

      &:hover {
        cursor: pointer;
      }
    }
  }

  .title {
    font-family: Helvetica-Bold;
    font-size: 18px;
    color: #ffffff;
    letter-spacing: 0;
  }
  svg {
    width: 32px;
    height: 32px;
    margin-right: 14px;
  }
`;

export const Main = styled.div``;
