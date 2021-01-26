import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    padding: 30px 0px;
`;

export const ShoppingCartContainer = styled.div`
    background: white;
    margin: 0px 63px;
    box-shadow: 5px 5px 20px rgba(255, 255, 255, 0.3),
    -2px -2px 20px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    min-height: 300px;
    height: auto;
    padding: 20px 40px;
    a {
        text-decoration: none;
    }

    @media (max-width: 600px) {
        margin: 0px 23px;
        min-height: 500px;

    }
`;

export const BackToShoppingContainer = styled.div`
    display: flex;
    align-items: center;
    width: 200px;
    margin-bottom: 30px;
`;

export const BackIcon = styled.img`
    width: 20px;
`;

export const BackText = styled.span`
    margin-left: 10px;
    font-size: 18px;
    font-weight: bold;
`;

export const ContainerTotal = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 5px;
    padding-top: 20px;
`;

export const TotalValue = styled.span`
    font-weight: bold;
`;

export const QuantityTotal = styled.span`
    font-weight: bold;
`;

export const ContainerCartEmpty = styled.div`
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
        font-size: 16px;
    }
`;