import styled from "styled-components";
import GamerImg from '../../assets/images/controllerBackground.jpg';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #F8F8F8;
`;

export const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 30px 64px;
`;

export const SearchIcon = styled.img`
    width: 20px;
    position: absolute;
    left: 80px;
`;

export const InputSearch = styled.input.attrs({
    type: 'text',
    placeholder: 'Search your games by name or id'
})`
    height: 50px;
    border: 1px solid #E3E3E3;
    border-radius: 10px;
    flex: 1;
    background: #F8F8F8;
    padding-left: 45px;
    font-size: 20px;
    color: #030303;
`;

export const ButtonSearch = styled.button`
    margin-left: 35px;
    height: 50px;
    width: 13vw;
    border-radius: 10px;
    background: #F8F8F8;
    box-shadow: 0px 0px 0px;
    border: 1px solid #955BBF;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        filter: brightness(95%);  
        transition: 0.3s;
        border-radius: 25px;

    }

`;

export const ControllerGamerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-image: url(${GamerImg});
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: 0px -220px;
    fill: cover;
    margin: 35px 63px;
    height: 450px;

    @media (max-width: 900px) {
        background-position: 0px 0px;
        height: 250px;
    }
`;

export const CenterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const TitleController = styled.span`
    font-size: 43px;
    font-weight: bold;
    margin: 10px 0px;

    @media (max-width: 900px) {
        font-size: 23px;
    }
`;

export const PriceController = styled.span`
    font-size: 23px;
    font-weight: bold;
    margin: 10px 0px;
    color: #F8F8F8;

    @media (max-width: 900px) {
        font-size: 13px;
    }
`;

export const AddCartButton1 = styled.button`
    height: 50px;
    width: 100%;
    margin: 10px 0px;
    border-radius: 10px;
    background: #F8F8F8;
    border-style: solid;
    color: #9256BA;

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

export const Subtitle = styled.span`
    font-size: 23px;
    font-weight: bold;
    margin: 0px 63px;
    margin-bottom: 20px;
`;

export const ComingSoonContainer = styled.div`
    display: flex;        
    margin: 20px 63px;

    @media (max-width: 600px) {
        flex-wrap: wrap;
    }
`;

export const GameListContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin: 5px 63px;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
        margin: 0px 50px;
    }
`;