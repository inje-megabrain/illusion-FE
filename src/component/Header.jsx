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
            <div
                style={{ color: "white", backgroundColor: "lightblue", height: 70, display: "flex" }}>
                <div onClick={goMainPage} style={{ width: 150, height: 70, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30, paddingRight: 400 }}>Illusion</div>
                <div onClick={goPost} style={{ width: 100, height: 70, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>게시판</div>
                <div onClick={goReview} style={{ width: 100, height: 70, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>리뷰</div>
                <div onClick={goTeam} style={{ width: 100, height: 70, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>팀모집</div>
                <div onClick={goLogin} style={{ width: 200, height: 70, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, paddingLeft: 450, color: "grey" }}>로그인/회원가입</div>
            </div>
        </>
    );
}

export default Header;
