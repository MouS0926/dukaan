import React from 'react'
import styled from "styled-components"
import Sidebar2 from './Sidebar2'
import Navbar from './Navbar'
import Body from './Body'
import Refundbody from './Refundbody'


export default function Refund() {
  return (
    <DashWrapper>
         
    <Sidebar2/>
   
    <Content>
        <Navbar/>
     <Refundbody/>
  </Content>

</DashWrapper>
  )
}

const DashWrapper=styled.div`
width:100%;
margin: 0;
padding: 0;
box-sizing: border-box;
    display: flex
`

const Content = styled.div`
width:84%;
    display: flex;
  flex-direction: column;
 margin-left: auto;

`
 

