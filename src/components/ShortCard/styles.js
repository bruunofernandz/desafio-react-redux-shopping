import styled from 'styled-components';

export const Card = styled.div`
    min-height: 250px;
    height: auto;
    border-radius: 10px;
    background: #7159c1;
    width: auto;
    margin: 5px 5px;

    position: relative;
    overflow: hidden;
`;

export const GameImg = styled.img`
    width: 100%;
    height: 100%;
    fill: cover;
    filter: brightness(30%);
    position: absolute;
    border-radius: 10px;
`;

export const GroupContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
    margin: 0px 50px;
    padding: 25px 0px;
`;

export const Title = styled.span`
    color: #F5F5F5;
    font-size: 22px;
    font-weight: 500;
    margin: 10px 0px;
    text-align: center;

    &:hover {
       filter: brightness(50%);
    }
`;

export const Price = styled.span`
    color: #F5F5F5;
    font-size: 22px;
    font-weight: 700;
    margin: 10px 0px;
`;

export const AddCartButton = styled.button`
    height: 40px;
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