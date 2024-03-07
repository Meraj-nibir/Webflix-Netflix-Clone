import React from 'react';
import styled from "styled-components";
import Header from '../components/Header';
import BackgroundImage from '../components/BackgroundImage';
const Signup = () => {
  return (
    <Container>
        <BackgroundImage />
        <div className="content">

        
            <Header />
            <div className="body flex column a-center j-center">
                <div className="text flex column">
                    <h1>Unlimited Movies Tv shows and more.</h1>
                    <h4>Wtach anywhere, Cancel anytime.</h4>
                    <h6>
                        Ready to watch? Enter your email to create or reset membership
                    </h6>
                </div>
                <div className="form">
                    <input type="email" placeholder='Enter email address'  name='email'/>
                    <input type="password" placeholder='Enter password' name='password' />
                    <button>Get Started</button>
                </div>
                <button>Log In</button>
            </div>
        </div>
    </Container>
  )
}
const Container = styled.div`
    position: relative;
    .content{
        position: absolute;
        top:0;
        left: 0
        background-color: rgba(0,0,0,0.5);
        height: 100vh;
        width:100vw;
        display: grid;
        grit-template-rows:15vh 85vh; 
    }
`;

export default Signup