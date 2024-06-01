import React from 'react';
import {useNavigate} from "react-router-dom";

function Header() {
    const navigate = useNavigate();

    const goMainPage = () => {
        navigate("/")
    }
    const goPost = () => {
        navigate("/posts")
    }
    const goReview = () => {
        navigate("/reviews")
    }
    const goTeam = () => {
        navigate("/teams")
    }
    const goLogin = () => {
        navigate("/login")
    }

    return (
        <>
            <>
                <div style={{
                    color: "white",
                    backgroundColor: "lightblue",
                    height: 70,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingLeft: 30,
                    paddingRight: 30,
                }}>
                    <div onClick={goMainPage} style={{ cursor: 'pointer', fontSize: 30 }}>Illusion</div>
                    <div style={{
                        height: 70,
                        display: "flex",
                        alignItems: "center",
                        gap: 80,
                    }}>
                        <div onClick={goPost} style={{ cursor: 'pointer', fontSize: 18 }}>게시판</div>
                        <div onClick={goReview} style={{ cursor: 'pointer', fontSize: 18 }}>리뷰</div>
                        <div onClick={goTeam} style={{ cursor: 'pointer', fontSize: 18 }}>팀모집</div>
                    </div>
                    <div onClick={goLogin} style={{ cursor: 'pointer', fontSize: 18, color: "grey" }}>로그인/회원가입</div>
                </div>
            </>

        </>
    );
}

export default Header;
