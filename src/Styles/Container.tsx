import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
`;

export const Content = styled.div`
  width: 100%;
  background-color: #2c3e50;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding: 20px;

  @media screen and (min-width: 767px) {
    width: 70vw;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const VisorInputStyles = styled.div`
  width: 100%;
  height: 75px;
  background-color: #34495e;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  input {
    width: 100%;
    height: 100%;
    background-color: #34495e;
    color: #fff;
    padding-right: 1.5rem;
    border: none;
    text-align: right;
    font-size: 36px;
    font-family: "Roboto", sans-serif;
    outline: none;
  }
`;
