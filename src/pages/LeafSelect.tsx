import { useCallback, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { Button, Title } from '../components/common/style';

const MainWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 45px 15px 0 15px;
  padding-bottom: ;
`;

const LeafListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
  height: 100%;
  overflow-y: auto;
`;

interface LeafBtnProps {
  isSelect: boolean;
  img: string;
}

const LeafBtn = styled.button<LeafBtnProps>`
  width: calc(50vw - 25px);
  height: calc(50vw - 25px);
  margin: 5px;
  border-radius: 12px;
  opacity: ${(props) => (props.isSelect ? 1 : 0.5)};
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-repeat: norepeat;
  border: none;
  outline: none;
`;

const NextBtn = styled(Button)`
  flex-shrink: 0;
`;

const leafs = [
  { img: '/img/Group14.png', id: 0 },
  { img: '/img/Group15.png', id: 1 },
  { img: '/img/Group15.png', id: 2 },
  { img: '/img/Group15.png', id: 3 },
  { img: '/img/Group15.png', id: 4 },
  { img: '/img/Group15.png', id: 5 },
  { img: '/img/Group15.png', id: 6 }
];

function LeafSelect() {
  const [select, setSelect] = useState(0);
  const navigate = useNavigate();

  const onNextClick = useCallback(() => {
    navigate('/guest/write');
  }, []);

  const selectImg = useCallback(
    (id: number) => () => {
      setSelect(id);
    },
    []
  );

  return (
    <MainWrapper>
      <Title>꽃 송이를 선택해주세요.</Title>
      <LeafListWrapper>
        {leafs.map((e) => {
          return (
            <LeafBtn
              img={e.img}
              key={e.id}
              onClick={selectImg(e.id)}
              isSelect={select === e.id}
            />
          );
        })}
      </LeafListWrapper>
      <NextBtn onClick={onNextClick}>다음</NextBtn>
    </MainWrapper>
  );
}

export default LeafSelect;
