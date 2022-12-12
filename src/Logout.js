/* eslint-disable no-restricted-globals */
import { useEffect, useState } from "react";
import styled from "@emotion/styled";

import { Back } from "./back";
import { Keyboard } from "./keyboard";
import { Account } from "./account";

export default function Logout() {
  const [username, setUsername] = useState("");

  const handleBackButtonClick = () => {
    // eslint-disable-next-line no-restricted-globals
    history.back();
  };
  const handleLogoutButtonClick = () => {
    localStorage.removeItem("activeUsername");
    history.pushState({}, null, "/");
    location.reload();
  };

  useEffect(() => {
    const activeUsername = localStorage.getItem("activeUsername");

    if (activeUsername !== null) {
      setUsername(activeUsername);
    }
  }, []);

  return (
    <Container>
      <Header>
        <BackButton onClick={handleBackButtonClick}>
          <Back />
        </BackButton>
        <KeyboardSvgBox>
          <Keyboard />
        </KeyboardSvgBox>
        키지엠
      </Header>
      <AccountSvgBox>
        <Account />
      </AccountSvgBox>
      {username && <Username>{username}</Username>}
      <Text>{username}님, 키지엠을 이용해 주셔서 감사합니다.</Text>
      <Button onClick={handleLogoutButtonClick}>로그아웃</Button>
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

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  position: absolute;
  top: 0;
  width: 100%;
  height: 70px;
`;

const BackButton = styled.div`
  position: absolute;
  top: 20px;
  left: 30px;
  width: 30px;
  cursor: pointer;
`;

const KeyboardSvgBox = styled.div`
  width: 40px;
`;

const AccountSvgBox = styled.div`
  width: 150px;
  height: 150px;
`;

const Username = styled.div`
  margin-top: 25px;
  font-size: 24px;
  font-weight: 600;
`;

const Text = styled.div`
  margin-top: 10px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
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
