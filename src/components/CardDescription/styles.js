import styled from 'styled-components';

export const CardContainer = styled.div`
   height: auto;
   max-height: 550px;
   width: 450px;

   position: absolute;
   top: 150px;
   bottom: 0px;
   left: 100px;

   border-radius: 10px;
   background: #F8F8F8;
   padding: 0px 50px;
   
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: start;
`;

export const Title = styled.span`
   font-size: 35px;
   font-weight: bold;
   margin: 10px 0px;
`;

export const Description = styled.span`
   line-break: auto;
   font-size: 20px;
   color: #959595;
   margin: 10px 0px;
   
`;

export const Price = styled.span`
   font-size: 20px;
   font-weight: bold;
   margin: 10px 0px;
`;