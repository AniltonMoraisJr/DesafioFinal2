import styled from "styled-components/native";

export const Container = styled.ImageBackground`
  flex: 1;
`;

export const Wrapper = styled.View`
  width: 100%;
  height: 100%;
`;

export const Input = styled.TextInput`
  background: #fff;
  border: none;
  width: 100%;
  height: 40px;
  padding: 7px 5px 7px 10px;
  color: #000;
  border-radius: 6px;
  margin: 5px 0;
  font-family: Helvetica;
  font-size: 15px;
`;

export const CustomButton = styled.TouchableOpacity`
  background: #f55;
  width: 100%;
  height: 40px;
  color: #fff;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  border: none;
  border-radius: 6px;
  margin: 5px 0px;
`;
