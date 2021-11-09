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
  background-color: #f5f5f5;
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
  width: 258px;
  height: 328px;
  left: 33px;
  top: 270px;
  
  background: #FFFFFF;
  border: 2px solid #03BFD3;
  box-sizing: border-box;
  border-radius: 8px;
    `
    export const Tareas=styled.ul`  
    list-style: none; 

    
width: 223px;
height: 63px;
;



background: #FFFFFF;
border: 1px solid #C4C4C4;
box-sizing: border-box;
border-radius: 9px;
    `