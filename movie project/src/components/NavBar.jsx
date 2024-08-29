import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { useState } from "react"

const NavBar = ({onSearch}) => {
    const nav = useNavigate()
    
    const SignupClick = () => {
        nav('/signup')
    }
    const LoginClick = () => {
        nav('/login')
    } 
    const [search, setSearch] =useState('')

    const SearchChange = (e) => {
        setSearch(e.target.value)
        onSearch(e.target.value)
    }
    return(
        <NavBarContainer>
            <H1>Cinema218</H1>
            <SearchInput type="text" value={search} onChange={SearchChange} placeholder="검색어를 입력하세요"/>
            <Div>
                <Button onClick={SignupClick}>회원가입</Button>
                <Button onClick={LoginClick} >로그인</Button>
            </Div>
        </NavBarContainer>
    )
}

const NavBarContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #000000;
    width: 100%;
    position: fixed;
    padding: 3px 20px;
    
    @media (max-width: 750px){
        flex-direction: column;
        align-items: flex-start;
        padding:10px;
    }
`

const H1 = styled.h1`
    color: #447d89;
    font-size: 22px;
    font-weight: bold;
    margin: 20px;

    @media (max-width: 750px){
        font-size: 18px;
        margin: 10px 0;
    }
`

const SearchInput = styled.input`
    padding: 8px 16px;
    margin-right: 10px;
    font-size: 12px;
    border: 1px solid #000000;
    border-radius: 5px;
    width: 300px;

    @media (max-width: 750px) {
        width: 100%;
        margin: 10px 0;
    }
`

const Div = styled.div`
    display: flex;
    gap: 10px;

    @media (max-width: 750px){
        width: 100%;
        justify-context: space-between;
    }
`

const Button = styled.button`
    background-color: #000000;
    color: #c8c8c8;
    padding: 8px 16px;
    cursor: point;

    @media (max-width: 750px){
        width: 100%;
    }
`

export default NavBar