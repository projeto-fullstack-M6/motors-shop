import styled from "styled-components";


export const Header = styled.header`

    background-color: var(--white);
    width: 100%;
    height: 80px;
    display: flex;
   
    justify-content: space-between;
    align-items: center;
    

    img{
        width: 153px;
        height: 26px;
    }

    div{
       display:flex;
       height: 100%;
       justify-content: center;
       align-items: center;
       border-left: 1px solid #DEE2E6 ;
       gap: 10px;
       width: 20%;
        
        .acronym{
            background-color: var(--brand-1);
            width: 32px;
            height: 32px;
            border-radius: 150px;
            color: var(--white);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            font-weight: var(--weight-700) ;
           
        }
        .name{
            color: var(--black);
            font-size: 16px;
            font-weight: var(--weight-400) ;
            
        }
    }
    


`