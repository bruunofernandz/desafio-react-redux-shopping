import styled from 'styled-components';

export const Card = styled.div`
    width: 100%;
    height: 300px;

    @media (max-width: 900px) {
        height: auto;
        
    }

    flex: 1;
    border-radius: 10px;

    &:first-child {
        margin-right: 15px;
    }

    &:nth-child(2){
        margin-left: 15px;
    }


    @media (max-width: 600px) {
        flex: none;

        &:nth-child(2){
            margin-left: 0;
        }
    }

    position: relative;
    overflow: hidden;
    margin-bottom: 30px;

`;

export const GameImg = styled.img`
    width: 100%;

    @media (max-width: 900px) {
        width: auto;
    }
    filter: brightness(30%);
    position: absolute;
    border-radius: 10px;
`;

export const GroupContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 20px 0px;
    margin: 0px 80px;

`;

export const Title = styled.span`
    color: #F5F5F5;
    font-size: 28px;
    font-weight: 500;
    margin: 10px 0px;
    text-align: center;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
    text-align: center;

    @media (max-width: 900px) {
        font-size: 18px;
    }
`;

export const Price = styled.span`
    color: #F5F5F5;
    font-size: 22px;
    font-weight: bold;
    margin: 10px 0px;
    text-align: center;

    @media (max-width: 900px) {
        font-size: 18px;
    }

`;

export const AddCartButton = styled.button`
    height: 50px;
    width: 330px;
    margin: 10px 0px;
    border-radius: 10px;
    background: #F8F8F8;
    border-style: solid;
    color: #9256BA;
    font-weight: bold;

    @media (max-width: 900px) {
        height: 40px;
        width: 130px;
    }

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