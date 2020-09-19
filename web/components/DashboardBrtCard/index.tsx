import React, { useState, useEffect } from "react";
import Switch from "react-switch";
import {
  Container,
  BrainstormInfo,
  BrainstormTitle,
  Active,
  Group,
  StormPieces,
} from "./styles";
import { Brainstorm } from "../../pages/user-dashboard";
import { FcDataProtection } from "react-icons/fc";

interface Props {
  brainstormData: Brainstorm;
}

const UserBrainstormCard: React.FC<Props> = ({ brainstormData }) => {
  const [active, setActive] = useState<boolean>(brainstormData.active);

  async function handleActiveness() {
    setActive(!active);

    const response = await fetch("/api/brainstorm/update", {
      method: "PUT",
      body: JSON.stringify(active),
    });

    const data = await response.json();

    console.log(data);
  }

  return (
    <Container>
      <BrainstormInfo>
        <p>Brainstorm</p>
        <p>6h ago</p>
      </BrainstormInfo>
      <BrainstormTitle>
        <h3>{brainstormData.title}</h3>
      </BrainstormTitle>
      <Active>
        <Group>
          <p>Active:</p>
          <Switch
            offHandleColor="#eee"
            onHandleColor="#eee"
            draggable={false}
            onChange={handleActiveness}
            checked={active}
            checkedIcon={false}
            uncheckedIcon={false}
            height={15}
            width={30}
            handleDiameter={20}
            offColor="#f13030"
            onColor="#2dea8f"
          />
        </Group>

        <StormPieces>
          <p>
            {brainstormData.stormPieces.length}
            {` `}Stormpieces
          </p>
        </StormPieces>
      </Active>
    </Container>
  );
};

export default UserBrainstormCard;
