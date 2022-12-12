import { Link } from "react-router-dom";
import styled from "@emotion/styled";

import { Keyboard } from "./keyboard";

export default function Home() {
  return (
    <Container>
      <div>
        <KeyboardSvgBox>
          <Keyboard />
        </KeyboardSvgBox>
        <Title>키지엠</Title>
        <SubTitle>들어보고 구매하는 키보드 스토어</SubTitle>
      </div>
      <Link
        to="/login"
        style={{
          margin: "20px 0",
        }}
      >
        <Button>로그인</Button>
      </Link>
      <Link to="/signup">
        <Button style={{ marginTop: 0 }}>회원가입</Button>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const KeyboardSvgBox = styled.div`
  width: 200px;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 20px;
  text-align: center;
`;

const SubTitle = styled.div`
  margin-top: 12px;
  font-weight: bold;
  font-size: 12px;
  text-align: center;
`;

const Button = styled.button`
  width: 250px;
  height: 50px;
  border: 1px solid white;
  border-radius: 25px;
  background-color: black;
  color: white;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;

  &:active {
    background-color: white;
    color: black;
  }
`;
