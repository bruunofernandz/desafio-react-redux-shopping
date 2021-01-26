import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #F8F8F8;

    a {
        text-decoration: none;
    }
`;

export const LogoDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    margin-left: 60px;
    margin-bottom: 30px;

    @media (max-width: 600px) {
        margin-left: 10px;
    }

    span {
        margin-left: 10px;
        font-size: 23px;
        font-weight: 900;

        @media (max-width: 600px) {
            font-size: 15px;
        }
    }
`;

export const MenuContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    margin-right: 60px;
    margin-bottom: 30px;
    
    @media (max-width: 600px) {
        margin-right: 10px;
        justify-content: center;
    }

    a {
        text-decoration: none;
    }

    a:hover {
        span {
            color: #000;
        }
    }
    
`;

export const DiscoverText = styled.span`
    padding-right: 30px;
    font-size: 23px;
    font-weight: bold;
    color: #CECCCC;
    
    @media (max-width: 600px) {
        font-size: 15px;
        padding:-right:0px;
        
    }
`;

export const MyCartText = styled.span`
    padding-right: 30px;
    font-size: 23px;
    font-weight: bold;
    color: #CECCCC;

    @media (max-width: 600px) {
        font-size: 15px;
        padding:-right: 0px;
    }
`;

export const GroupCartContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const CartContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #F8F8F8;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
    width: 50px;
    height: 50px;
    border-radius: 50px;
`;

export const CountText = styled.span`
    padding: 5px;
    color: #FFF;
    font-weight: bold;
`;

export const CountContainer = styled.div`
    background: #EB7083;
    border-radius: 50px;
    height: 25px;
    width: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    right: 13px;
`;

export const LogoImg = styled.img`
    width: 40px;
`;

export const CartImg = styled.img`
    width: 22px;
`;

