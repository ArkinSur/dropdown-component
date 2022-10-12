import { useState } from "react";
import { MoreIcon } from "../icons/more-icon";
import { Button, ButtonContainer, Content } from "./styles";

interface IDropdown {
  children?: JSX.Element | JSX.Element[];
  align: 'left' | 'right'
}

const Dropdown = ({ children, align }: IDropdown) => {
    const [isActive, setIsActive] = useState(false);

    const toggleState = () => {
        setIsActive(prevState => !prevState)
    }

  return (
    <ButtonContainer>
      <Button onClick={toggleState}>
        <MoreIcon color="white" />
      </Button>
      <Content align={align} isActive={isActive}>{children}</Content>
    </ButtonContainer>
  );
};

export default Dropdown;
