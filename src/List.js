import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

import { Keyboard } from "./keyboard";
import { Account } from "./account";

const publicUrl = process.env.PUBLIC_URL;

const list = [
  {
    name: "CK87-PBT",
    description: "특별한 컬러 디자인과 게이트론의 만남",
    src: `${publicUrl}/CK87-PBT.jpeg`,
    link: "https://www.youtube.com/watch?v=TqOOrn-8qF0",
  },
  {
    name: "CK01-TKL-PBT-SL",
    description: "조용하고 특색있는 키감의 완벽한 텐키리스 키보드",
    src: `${publicUrl}/CK01-TKL-PBT-SL.jpeg`,
    link: "https://www.youtube.com/watch?v=ZDK6f7e9fcM",
  },
  {
    name: "CX87-TKL",
    description: "H1, T1 스위치를 적용한 87키 텐키리스",
    src: `${publicUrl}/CX87-TKL.jpeg`,
    link: "https://www.youtube.com/watch?v=yz3dU8K57hI",
  },
  {
    name: "CY104",
    description: "키감 그리고 색감에 집중한 예쁜 키보드",
    src: `${publicUrl}/CY104.jpeg`,
    link: "https://www.youtube.com/watch?v=9yT2q8QgO4k",
  },
];

export default function List() {
  const [search, setSearch] = useState("");

  const handleInputChange = ({ target: { value } }) => {
    setSearch(value);
  };

  return (
    <Container>
      <Header>
        <KeyboardSvgBox>
          <Keyboard />
        </KeyboardSvgBox>
        키지엠
        <AccountSvgBox to="/logout">
          <Account />
        </AccountSvgBox>
      </Header>
      <Search
        value={search}
        onChange={handleInputChange}
        placeholder="검색어를 입력해 주세요"
      />
      <Contents>
        {list.map(({ name, description, src, link }) =>
          name.includes(search.toUpperCase()) ? (
            <Card key={name}>
              <Image src={src} alt={name} />
              <Name>{name}</Name>
              <Description>{description}</Description>
              <DetailBox>
                <Detail href={link} target="_blank" rel="noopener noreferrer">
                  보러가기
                </Detail>
              </DetailBox>
            </Card>
          ) : null,
        )}
      </Contents>
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

const Search = styled.input`
  padding: 0 15px;
  width: 300px;
  height: 35px;
  border: none;
  outline: none;
  border-radius: 15px;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 30px 0;
`;

const Card = styled.div`
  padding: 20px 25px;
  max-width: 75vw;
  background-color: white;
  border-radius: 10px;
`;

const Image = styled.img`
  margin: 0 auto;
  height: 150px;
  width: 100%;
`;

const Name = styled.div`
  margin-top: 10px;
  color: #333;
`;

const Description = styled.div`
  font-size: 12px;
  color: rgb(158, 158, 158);
`;

const DetailBox = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 10px;
`;

const Detail = styled.a`
  width: fit-content;
  font-size: 14px;
  color: rgb(74, 190, 202);
  text-decoration: none;
  cursor: pointer;
`;
