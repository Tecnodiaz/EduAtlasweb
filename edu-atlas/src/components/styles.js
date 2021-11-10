import styled, { css } from 'styled-components'

export const Styledbottomnavbar = styled.nav`
  background-color: #f5f5f5;
  border-top: 1px solid #e5e5e5;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  font-size: 14px;
  font-weight: 500;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 0 20px;
  box-sizing: border-box;
  -webkit-box-shadow: 0 -1px 0 rgba(0,0,0,.1);
  box-shadow: 0 -1px 0 rgba(0,0,0,.1);
  -webkit-transition: all .3s;
  transition: all .3s;
  @media (max-width: 767px) {
    height: auto;
    padding: 15px;
    font-size: 12px;
    text-align: center;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
 `
export const Styledtopnavbar = styled.nav`
  background-color: #fff;
  border-bottom: 2px solid #03BFD3;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  font-size: 14px;
  font-weight: 500;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 0 20px;
  box-sizing: border-box;
  -webkit-box-shadow: 0 -1px 0 rgba(0,0,0,.1);
  box-shadow: 0 -1px 0 rgba(0,0,0,.1);
  -webkit-transition: all .3s;
  transition: all .3s;
  @media (max-width: 767px) {
    height: auto;
    padding: 15px;
    font-size: 12px;
    text-align: center;
    -webkit-box-shadow: none;
    box-shadow: none;
  }   `

  export const Tareashome=styled.div`
  position: absolute;
  top: 0;
  left: 0;
  
  width: 258px;
  height: 70%;
  background-color: #fff;
 
  
  @media (max-width: 767px) { 
    display: none;
  }

  left: 33px;
  top:15%;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.20);
  border: 2px solid #03BFD3;
  box-sizing: border-box;
  padding: 5px;
border-radius: 8px;
 

  ul{
    list-style: none;
    padding: 0;
    margin: 0;
  }
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      border-bottom: 1px solid #e5e5e5;
      font-size: 14px;
      font-weight: 500;
      color: #666;
      text-transform: uppercase;
      letter-spacing: 1px;
      
      &:last-child {
        border-bottom: none;
      
      }
    
      
      


  }
    `

    export const Styledposter = styled.div`
    position: fixed;
width: 752px;
height: 29%;
left: 328px;
top: 12%;

background: #FFFFFF;
box-shadow: 2px 8px 4px rgba(0, 0, 0, 0.25);

border-radius: 7px;
text-align:center;
@media (max-width: 767px) {
  left: auto;
 width:90%;
height:auto;
 
}
    h1{
      margin: 0;
      font-size: 24px;
      font-weight: 500;
     
      
      letter-spacing: 1px;
      margin-bottom: 10px;
    }
    textarea{
      
    
      width: 98%;
      
height: 137px;
border-radius: 6px;
left: 348px;
top: 320px;
text-align: left;
font-size: 14px;
font-weight: 500;
color: #666;
background: #F6F6F6;
letter-spacing: 1px;
padding: 10px;
box-sizing: border-box;
-webkit-box-shadow: 0 -1px 0 rgba(0,0,0,.1);
box-shadow: 0 -1px 0 rgba(0,0,0,.1);
-webkit-transition: all .3s;
transition: all .3s;
    } 
    button{
      
width: 90%;
height: 36px;
left: 806px;
top: 491px;
margin-top: 4px;
background: #03BFD3;
border-radius: 6px;

border:none
color: #fff;
font-size: 14px;
font-weight: 500;
letter-spacing: 1px;
cursor: pointer;
-webkit-transition: all .3s;
transition: all .3s;
@media (max-width: 767px) {
  height:auto;
  width:auto;
}

    }
    
`
  
export const Styledposts = styled.div`
position: absolute;
width: 755px;
height: 259px;
left: 325px;
top: 50%;

background: #FFFFFF;
border: 1px solid #AFAFAF;
box-sizing: border-box;
border-radius: 13px;
text-align: center;
@media (max-width: 767px) {
  left: auto;
 width:auto;
 height:auto;
}
    `