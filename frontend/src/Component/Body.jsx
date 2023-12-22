import React from 'react'
import styled from "styled-components"


export default function Body() {
  return (
    <Bodydiv>

<div className="bodymain">

    <div className="b1">
        <div className="b11">
                <p>Overview</p>
                <div>
                    <p>This Month</p>

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M2.27748 5.77748C2.61381 5.44114 3.14013 5.41057 3.511 5.68575L3.61726 5.77748L8 10.1598L12.3827 5.77748C12.7191 5.44114 13.2454 5.41057 13.6163 5.68575L13.7225 5.77748C14.0589 6.11381 14.0894 6.64013 13.8142 7.011L13.7225 7.11726L8.66989 12.1699C8.33355 12.5062 7.80724 12.5368 7.43636 12.2616L7.33011 12.1699L2.27748 7.11726C1.90751 6.74729 1.90751 6.14745 2.27748 5.77748Z" fill="#4D4D4D"/>
</svg>
                </div>
        </div>
    </div>

</div>
        
    </Bodydiv>
  )
}

const Bodydiv=styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
background-color: #c3c3c3;

.bodymain{
    width: 90%;
  background-color: #fff;
  align-items: flex-start;
}

.b1{
    display: flex;
flex-direction: column;
align-items: flex-start;
gap: 24px;
align-self: stretch;
}
.b11{
display: flex;
justify-content: space-between;
align-items: center;
align-self: stretch;
}
.b11 p{
color:  #1A181E;
font-family: 'Nunito Sans', sans-serif;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 28px; /* 140% */
}
.b11 div{
    display: flex;
align-items: center;
gap: 16px;
border-radius: 4px;
border: 1px solid var(--Black-85, #D9D9D9);
background: var(--Black-100, #FFF);
}
.b11 div p{
    color: var(--Black-30, #4D4D4D);
    font-family: 'Nunito Sans', sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 150% */
}
.b12{
    display: flex;
align-items: flex-start;
gap: var(--Spacing-spacing-07, 20px);
align-self: stretch;  
}

`