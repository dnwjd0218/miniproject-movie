import styled from 'styled-components';

const Login = () => {
    return (
        <LoginContainer>
            <LoginForm>
                <Title>로그인</Title>
                <Label htmlFor="emailOrId">이메일 또는 아이디</Label>
                <Input type="text" id="emailOrId" name="emailOrId" placeholder="이메일 또는 아이디를 입력하세요" />

                <Label htmlFor="password">비밀번호</Label>
                <Input type="password" id="password" name="password" placeholder="비밀번호를 입력하세요" />

                <LoginButton>로그인</LoginButton>
            </LoginForm>
        </LoginContainer>
    );
};

const LoginContainer = styled.div`
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

const LoginForm = styled.form`
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

const LoginButton = styled.button`
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
export default Login;