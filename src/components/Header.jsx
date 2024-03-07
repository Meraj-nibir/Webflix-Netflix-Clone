import React from 'react';
import styled from 'styled-components';
//import logo from "";
const Header = (props) => {
  return (
    <Container>
        <div className="logo">
            <img src="" alt="Logo" />
        </div>
        <button>{props.login ? "Log in":"Sign In"}</button>
    </Container>
  );
}

const Container = styled.div``;

export default Header;