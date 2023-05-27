import React, { useState } from 'react';
import styled from 'styled-components';



export default function LoginRegister() {
  const [Right,setRight] = useState()

  return (
    <>
      <Wrapper>

        <div className="login-wrapper">
          <div className="container login-container">
            <div className="action-content">
              <h4 className="section-title">Register Page</h4>
              <button className="btn btn-default" id="register-container">Register</button>
            </div>
            <div className="form-content">
              <h4 className="section-title">Login Page</h4>
              <div className="section-social">
                <a href="#" className="social-item"><i className="fab fa-facebook" /></a>
                <a href="#" className="social-item"><i className="fab fa-twitter" /></a>
                <a href="#" className="social-item"><i className="fab fa-google-plus" /></a>
              </div>
              <div className="section-form">
                <div className="input-group">
                  {/* <span className="input-icon"><i className="fas fa-envelope" /></span> */}
                  <input type="text" className="form-control" placeholder="Enter your email" />
                </div>
                <div className="input-group">
                  {/* <span className="input-icon"><i className="fas fa-lock" /></span> */}
                  <input type="text" className="form-control" placeholder="Enter your passwod" />
                </div>
                <div className="input-group">
                  <button className="btn btn-default">Login</button>
                </div>
              </div>
            </div>
          </div>
          <div className="container register-container">
            <div className="form-content">
              <h4 className="section-title">Junte-se a nós</h4>
              <div className="section-social">
                <a href="#" className="social-item"><i className="fab fa-facebook" /></a>
                <a href="#" className="social-item"><i className="fab fa-twitter" /></a>
                <a href="#" className="social-item"><i className="fab fa-google-plus" /></a>
              </div>
              <div className="section-form">
                <div className="input-group">
                  <span className="input-icon"><i className="fas fa-envelope" /></span>
                  <input type="text" className="form-control" placeholder="Escreva seu e-mail" />
                </div>
                <div className="input-group">
                  <span className="input-icon"><i className="fas fa-lock" /></span>
                  <input type="text" className="form-control" placeholder="Digite a sua senha" />
                </div>
                <div className="input-group">
                  <span className="input-icon"><i className="fas fa-lock" /></span>
                  <input type="text" className="form-control" placeholder="Confirmar Senha" />
                </div>
                <div className="input-group">
                  <button className="btn btn-default">Login</button>
                </div>
              </div>
            </div>
            <div className="action-content">
              <h4 className="section-title">Faça Login</h4>
              <button className="btn btn-default" id="login-container">Login</button>
            </div>
          </div>
        </div>
      </Wrapper>

    </>
  );
}

const Wrapper = styled.div`

margin: 50px 0 0 0;

.login-wrapper{
  width: 720px;
  height: 550px;
  background-image: linear-gradient(to left, #eea849, #f46b45);
  box-shadow: 0 0 20px black;
  border-radius: 3px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  
  &.is-toggled{
    .container{
      &.login-container{
        left: 100%;
      }

      &.register-container{
        left: 0;
      }
    }
  }
  
  .container{
    width: 100%;
    height: 100%;
    position: absolute;
    transition: left .5s ease-in-out;
    display: flex;
    
    &.login-container{
      left: 0;
      
      .action-content{
        border-right: 1px solid white;
      }
    }
    
    &.register-container{
      left: -100%;
      
      .action-content{
        border-left: 1px solid white;
      }
    }
    
    .section-title{
      font-size: 30px;
      color: #0f0c29;
      margin: 0;
      margin-bottom: 16px;
    }
    
    .section-social{
      margin-bottom: 24px;
      
      .social-item{
        color: white;
        font-size: 30px;
        text-decoration: none;
        transition: .2s ease-in-out;
        
        &:hover{
          color: #24243e;
        }
        
        &:not(:first-child){
          margin-left: 12px;
        }
      }
    }
    
    .section-form{
      .input-group{
        display: flex;
        min-width: 225px;
        
        &:not(:first-child){
          margin-top: 12px;
        }
        
        .btn{
          margin: 0 auto;
          min-width: 150px;
        }
      }
      
      .input-icon{
        background: white;
        padding-left: 12px;
        color: #24243e;
        display: block;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        font-size: 20px;
        padding-top: 8px;
      }
      
      .form-control{
        background: white;
        border: none;
        box-shadow: none;
        background-image: none;
        padding: 12px;
        // border-top-right-radius: 20px;
        // border-bottom-right-radius: 20px;
        outline: none;
        flex-grow: 1;
      }
    }
    
    .btn{
      border: none;
      font-size: 18px;
      border-radius: 20px;
      color: #0f0c29;
      padding: 12px 24px;
      font-weight: 500;
      cursor: pointer;
      transition: .2s ease-in-out;
      
      &.btn-default{
        background: white;
        
        &:hover{
          background: #24243e;
          color: white;
        }
      }
    }
    
    .action-content{
      width: 40%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: column wrap;
    }
    
    .form-content{
      flex-grow: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: column wrap;
    }
  }
}
`