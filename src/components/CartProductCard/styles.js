import styled from 'styled-components';

export const ProductContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #FFF;
    border-radius: 10px;
    padding: 30px;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
    margin: 20px 0px;
    min-height: 200px
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100px;

    a {
        color: #4293DE;
        text-decoration: underline;
    }
`;

export const TitleText = styled.span`
    font-size: 24px;
    font-weight: bold;

    @media (max-width: 600px) {
        font-size: 15px;
    }
`;

export const PriceText = styled.span`
    color: #CECCCC;
`;

export const QuantityText = styled.span`
    color: #CECCCC;
`;

export const ChangeQuantityContainer = styled.div`
    width: auto;
    display: flex;
    align-items: center;
`;

export const SubtractContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 10px;

    span {
        margin-top: 5px;
    }
`;

export const SubtractButton = styled.button`
    background: #FFF;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
    border-radius: 50px;
    width: 50px;
    height: 50px;
    border-style: none;

    cursor: pointer;
    transition: 0.3s;

    &:hover {
        filter: brightness(85%);  
        transition: 0.3s;
    }
    
`;

export const SubtractIcon = styled.img`
    margin-top: 5px;
    width: 15px;
`;

export const AddContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 10px;

    span {
        margin-top: 5px;
    }
`;

export const AddButton = styled.button`
    background: #FFF;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
    border-radius: 50px;
    width: 50px;
    height: 50px;

    border-style: none;

    cursor: pointer;
    transition: 0.3s;

    &:hover {
        filter: brightness(85%);  
        transition: 0.3s;
    }
`;

export const AddIcon = styled.img`
    width: 15px;
    margin-top: 5px;
`;