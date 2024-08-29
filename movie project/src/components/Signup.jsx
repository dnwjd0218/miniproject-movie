import styled from "styled-components";

const Signup = () => {
    return (
        <SignupContainer>
            <SignupForm>
                <Title>회원가입</Title>
                <Label>이름</Label>
                <Input type="text" placeholder="이름을 입력하세요" />

                <Label>이메일</Label>
                <Input type="email" placeholder="이메일을 입력하세요" />

                <Label>비밀번호</Label>
                <Input type="password" placeholder="비밀번호를 입력하세요" />

                <Label>비밀번호 확인</Label>
                <Input type="password" placeholder="비밀번호를 다시 입력하세요" />

                <SignupButton>회원가입</SignupButton>
            </SignupForm>
        </SignupContainer>
    );
};

const SignupContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw; 
    background-color: #000000;

    @media (max-width: 750px) {
    padding: 20px;
}
    `;

const SignupForm = styled.form`
    display: flex;
    flex-direction: column;
    padding: 40px;
    width: 100%;
    max-width: 400px;
    min-width: 300px;
    border: 1px solid #000000;
    border-radius: 10px;
    background-color: #555555;

    @media (max-width: 750px) {
    padding: 20px;
}
    `;

const Title = styled.h1`
margin-bottom: 20px;
text-align: center;
font-size: 24px;
color: #ffffff;
`;

const Label = styled.label`
    margin-bottom: 8px;
    font-weight: bold;
    color: #ffffff;
    `;

const Input = styled.input`
    margin-bottom: 15px;
    padding: 10px;
    border: 1px solid #ffffff;
    border-radius: 5px;
    font-size: 14px;
    background-color: #ffffff;
    color: #000000;
    `;

const SignupButton = styled.button`
    margin-top: 10px;
    padding: 10px;
    background-color: #b0cdab;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;

&:hover {
    background-color: #87a07e;
}

@media (max-width: 750px) {
    width: 100%;
}
`;

export default Signup;