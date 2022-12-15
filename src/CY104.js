import { Link } from "react-router-dom";
import styled from "@emotion/styled";

import { Keyboard } from "./keyboard";
import { Account } from "./account";
import { Back } from "./back";

const publicUrl = process.env.PUBLIC_URL;

export default function CY() {
  const handleBackButtonClick = () => {
    // eslint-disable-next-line no-restricted-globals
    history.back();
  };

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
        <AccountSvgBox to="/logout">
          <Account />
        </AccountSvgBox>
      </Header>
      <Image src={`${publicUrl}/CY104.jpeg`} alt="CY104" />
      <Name>CY104</Name>
      <Description>키감 그리고 색감에 집중한 콕스의 예쁜 키보드 CY104 기계식. 뛰어난 키감의 게이트론 스위치로 최상의 타건감을 선사하며, 투톤 컬러 조합이 예쁜 게이밍 키보드입니다.</Description>
      <Divider />
      <Name>타건음</Name>
      <Button href="https://www.youtube.com/watch?v=9yT2q8QgO4k" target="_blank" rel="noopener noreferrer">들으러 가기</Button>
      <Divider />
      <Name>구매 링크</Name>
      <Button>구매하러 가기</Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  max-width: 380px;
  height: fit-content;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  position: relative;
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

const AccountSvgBox = styled(Link)`
  position: absolute;
  top: 22px;
  right: 5px;
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

const Image = styled.img`
  margin: 0 auto;
  height: 150px;
  width: 100%;
  border-radius: 10px;
`;

const Name = styled.div`
  margin-top: 15px;
  font-size: 20px;
  font-weight: 700;
`;

const Description = styled.div`
  margin-top: 5px;
`;

const Divider = styled.div`
  margin: 20px 0 10px 0;
  width: 100%;
  height: 1px;
  background-color: white;
`;

const Button = styled.a`
  margin-top: 15px;
  padding: 7px 0;
  width: 100%;
  background-color: white;
  color: black;
  text-align: center;
  border-radius: 15px;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
`;
