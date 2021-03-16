import React from "react";
import styled from "styled-components";

interface Props {
    filter: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    height: 275px;
    @media (max-width: 900px) {
        width: 90%;
    }
`;

const HeaderRow = styled.div`
    height: 70px;
    display: flex;
    margin-bottom: 4%;
`;

const Header = styled.h1`
    color: #102261;
    font-weight: normal;
    font-family: Georgia, 'Times New Roman', Times, serif;
    margin: 0;
    padding-right: 20px;
    margin-top: 22px;
    padding-top: 18px;
    border: 1px solid #000000;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const DescriptionRow = styled.div`
    width: 100%;
`;

const Description = styled.p`
    font-family: Helvetica;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: 333333;
`;

const InputRow = styled.div`
    width: 100%;
    height: 38px;
`;

const Input = styled.input`
    width: 100%;
    height: 100%;
    background-color: #F4F4F4;
    border: none;
    margin-top: 14px;
    padding-left: 14px;
    box-sizing: border-box;
    :focus {
        outline: 1px solid #102261;
    }
`;

function Form(props: Props) {
    return (
        <Container>
            <HeaderRow>
                <Header>The Person Finder</Header>
            </HeaderRow>
            <DescriptionRow>
                <Description>
                    If you just can’t find someone and need to
                    know what they look like,
                    you’ve come to the right place!
                    Just type the name of the person
                    you are looking for below into the search box!
                </Description>
            </DescriptionRow>
            <InputRow>
                <Input
                    onChange={props.filter}
                    placeholder="Type a name..."
                />
            </InputRow>
        </Container>
    );
};

export default Form;
