/* eslint-disable no-restricted-globals */
import { useState } from "react";
import styled from "@emotion/styled";

import { Back } from "./back";
import { Keyboard } from "./keyboard";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleBackButtonClick = () => {
    history.back();
  };
  const handleUsernameChange = ({ target: { value } }) => {
    setUsername(value);
  };
  const handlePasswordChange = ({ target: { value } }) => {
    setPassword(value);
  };
  const handleConfirmChange = ({ target: { value } }) => {
    setConfirm(value);
  };
  const handleSignupButtonClick = () => {
    const hasValues =
      Boolean(username) && Boolean(password) && Boolean(confirm);
    const hasUsername = localStorage.getItem(username) !== null;
    const isConfirmed = password === confirm;

    if (hasValues && !hasUsername && isConfirmed) {
      localStorage.setItem(username, password);
      history.pushState({}, null, "/login");
      location.reload();
    }
  };

  return (
    <Container>
      <BackButton onClick={handleBackButtonClick}>
        <Back />
      </BackButton>
      <div>
        <KeyboardSvgBox>
          <Keyboard />
        </KeyboardSvgBox>
        <Title>키지엠</Title>
        <SubTitle>들어보고 구매하는 키보드 스토어</SubTitle>
      </div>
      <>
        <Username
          value={username}
          onChange={handleUsernameChange}
          placeholder="아이디를 입력해 주세요"
        />
        <Password
          value={password}
          onChange={handlePasswordChange}
          placeholder="비밀번호를 입력해 주세요"
          type="password"
        />
        <Password
          value={confirm}
          onChange={handleConfirmChange}
          placeholder="비밀번호를 다시 한 번 입력해 주세요"
          type="password"
        />
      </>
      <Button onClick={handleSignupButtonClick}>회원가입</Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: auto;
  max-width: 380px;
  height: 100%;
`;

const BackButton = styled.div`
  position: absolute;
  top: 30px;
  left: 30px;
  width: 30px;
  cursor: pointer;
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

const Username = styled.input`
  margin-top: 30px;
  padding: 0 15px;
  width: 250px;
  height: 40px;
  border: none;
  outline: none;
  border-radius: 15px;
`;

const Password = styled.input`
  margin-top: 10px;
  padding: 0 15px;
  width: 250px;
  height: 40px;
  border: none;
  outline: none;
  border-radius: 15px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  width: 250px;
  height: 50px;
  border: 1px solid white;
  border-radius: 25px;
  background-color: black;
  color: white;
  font-weight: bold;
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;

  &:active {
    background-color: white;
    color: black;
  }
`;
