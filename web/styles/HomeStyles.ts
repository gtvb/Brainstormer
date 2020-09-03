import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;

  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const MainContentWrapper = styled.main`
  background: var(--main-white);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const Heading = styled.div`
  font: 900 10rem Inter;
  padding: 64px 0;
  text-align: center;
  margin: 64px 0;
`;

export const SignInButton = styled.button`
  margin: 0 24px;
  padding: 8px;
  color: var(--main-white);
  background: var(--main-salmon);
  font: 600 1.5rem Inter;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.2s linear;

  &:hover {
    background: var(--dark-salmon);
  }
`;

export const JoinButton = styled.button`
  padding: 24px 16px;
  background: var(--main-salmon);
  color: var(--main-white);
  font: 600 2.4rem Inter;
  border: 0;
  border-radius: 4px;
  transition: 0.2s linear;
  cursor: pointer;
  margin-bottom: 16px;

  &:hover {
    background: var(--dark-salmon);
  }
`;

export const CardsGroup = styled.div`
  width: 100vw;
  margin: 50px 0;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
