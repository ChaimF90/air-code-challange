import styled, { keyframes } from "styled-components";
import { Person } from "../types";

interface Props {
    people: Array<Person>;
    loading: boolean;
}

const LoadingAnimation = keyframes`
    0% { opacity: .1; }
    20% {opacity: .3; }
    40% {opacity: .5; }
    60% {opacity: .7; }
    850% {opacity: .9; }
    100% { opacity: 1; }
`;


const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 24px;
    width: 40%;
    @media (max-width: 900px) {
        width: 90%;
    }
`;

const LineItem = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
    @media (max-width: 900px) {
        height: 150px;
        margin-bottom: 34px;
    }
`;

const AvatarContainer = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    background-color: #C4C4C4;
    @media (max-width: 900px) {
        align-items: center;
    }
`;

const TextInfoContainer = styled.div`
    height: 100%;
    width: 75%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Avatar = styled.img`
    height: 100%;
    width: auto;
    @media (max-width: 900px) {
        width: 90%;
        height: auto;
    }
`;

const Name = styled.span`
    font-weight: bold;
    color: #333333;
`;

const Description = styled.p`
    color: #666666;
`;

const LoaderAvatar = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    background-color: #C4C4C4;
    animation-name: ${LoadingAnimation};
    animation-duration: 1s;
    animation-iteration-count: infinite;
`;

const LoaderName = styled.div`
    width: 25%;
    height: 20%;
    background-color: #333333;
    animation-name: ${LoadingAnimation};
    animation-duration: 1s;
    animation-iteration-count: infinite;
`;

const LoadingDescription = styled.div`
    width: 100%;
    height: 70%;
    background-color: #C4C4C4;
    animation-name: ${LoadingAnimation};
    animation-duration: 1s;
    animation-iteration-count: infinite;
    margin-top: 20px;
`;

function Results(props: Props) {
    function renderPeople(person: Person) {
        return (
            <LineItem key={person.id}>
                <AvatarContainer>
                    <Avatar src={person.avatar} />
                </AvatarContainer>
                <TextInfoContainer>
                    <Name>{person.name}</Name>
                    <Description>
                        {person.description}
                    </Description>
                </TextInfoContainer>
            </LineItem>
        );
    };

    function renderLoadingState(number: Number) {
        return (
            <LineItem key={number.toString()}>
                <AvatarContainer>
                    <LoaderAvatar />
                </AvatarContainer>
                <TextInfoContainer>
                    <LoaderName />
                    <LoadingDescription />
                </TextInfoContainer>
            </LineItem>
        );
    }

    if (props.loading) {
        return (
            <Container>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(renderLoadingState)}
            </Container>
        );
    }

    return (
        <Container>
            {props.people.map(renderPeople)}
        </Container>
    );
};

export default Results;
