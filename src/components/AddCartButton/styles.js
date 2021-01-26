import styled from 'styled-components';

export const AddCartButtonComponent = styled.button`
    height: 50px;
    width: 100%;
    margin: 10px 0px;
    border-radius: 10px;
    background: #F8F8F8;
    border-style: solid;
    color: #9256BA;
    font-weight: bold;

    cursor: pointer;
    transition: 0.3s;

    &:hover {
        filter: brightness(85%);  
        transition: 0.3s;
    }

    @media (max-width: 900px) {
        height: 40px;
    }
`;