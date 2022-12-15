import { Link } from "react-router-dom";
import styled from "@emotion/styled";

import { Keyboard } from "./keyboard";
import { Account } from "./account";
import { Back } from "./back";

const publicUrl = process.env.PUBLIC_URL;

export default function TKL() {
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
      <Image src={`${publicUrl}/CX87-TKL.jpeg`} alt="CX87-TKL" />
      <Name>CX87-TKL</Name>
      <Description>특수 스위치를 생산하는 JWK만의 특별한 스위치. JWK의 H1, T1 스위치를 적용하여 독특하고 매력적인 키감을 구현하여 탄생한 87키 텐키리스 기계식 키보드입니다.</Description>
      <Divider />
      <Name>타건음</Name>
      <Button href="https://www.youtube.com/watch?v=yz3dU8K57hI" target="_blank" rel="noopener noreferrer">들으러 가기</Button>
      <Divider />
      <Name>구매 링크</Name>
      <Button href="https://prod.danawa.com/info/?pcode=15004838&keyword=cx87&cate=112782" target="_blank" rel="noopener noreferrer">구매하러 가기</Button>
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