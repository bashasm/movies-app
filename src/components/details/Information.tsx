import styled from "styled-components";

const InformationContainer = styled.div`
  margin: 10px 0;
`;
const TitleContainer = styled.div`
  font-size: 20px;
  margin: 20px 0;
`;
const TextContainer = styled.div`
  font-size: 16px;
  margin: 20px 0;
`;

function Information({ information }) {
  return (
    <InformationContainer>
      <TitleContainer>Information:</TitleContainer>
      <TextContainer>{information}</TextContainer>
    </InformationContainer>
  );
}

export default Information;
