import React from 'react';
import styled from "styled-components";
import Header from '../components/Header';
import BackgroundImage from '../components/BackgroundImage';
const Signup = () => {
  return (
    <Container>
        <BackgroundImage />
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
    </Container>
  )
}
const Container = styled.div``;

export default Signup