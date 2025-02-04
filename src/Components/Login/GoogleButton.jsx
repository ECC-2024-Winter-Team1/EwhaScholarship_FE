import React from "react";
import styled from "styled-components";

const GoogleButton = () => {
  return (
    <Button>
      <Image src="/google.png" alt="Sign in with Google" />
    </Button>
  );
};

export default GoogleButton;

const Button = styled.button`
  position: absolute;
  top: 411px;
  width: 249px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const Image = styled.img`
  width: 74%;
  height: 74%;
  object-fit: cover;
`;