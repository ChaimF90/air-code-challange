import styled from "styled-components";
import Logo from "../logo.svg";

const Container = styled.div`
    width: 100%;
    height: 100px;
    padding-left: 10%;
    box-sizing: border-box;
    border-top: 3px solid #33DBDB;
    padding-top: 12px;
`;

const Image = styled.img`
    height: auto;
    width: 75;
`;

function TopBar() {
    return (
        <Container>
            <Image src={Logo} />
        </Container>
    );
};

export default TopBar;
