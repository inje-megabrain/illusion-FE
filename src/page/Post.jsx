import React, {useEffect, useState} from 'react';
import {getPosts} from "../apis/fetchPosts.js";
import {Avatar, Button, Rating} from "@mui/material";
import PostCategory from "../component/postCategory.jsx";
import '/src/css/PostPage.css'
import {useNavigate} from "react-router-dom";

function Post() {
    useEffect(() => {
        const fetchAndSetData = async () => {
            try {
                const post = await getPosts();
                setTest(post.data)
            } catch (error) {
                console.log("에러뜹니다.")
            }
        }
        fetchAndSetData();
    }, []);

    const [test, setTest] = useState([])

    const navigate = useNavigate();
    const goLogin = () => {
        navigate("/login")
    }

    return (
        <>
            <div style={{ justifyContent: 'space-between', display: 'flex' }}>
                <div className={"PostPageImage"}>
                <img src={"https://d2v80xjmx68n4w.cloudfront.net/gigs/uloP51705138977.jpg"}
                     style={{ width: 600, height: 600, marginRight: 5 }} />
                <img src={"https://embed.pixiv.net/spotlight.php?id=9610&lang=ko"}
                     style={{ width: 600, height: 600, marginRight: 5 }} />
                <img src={"https://i2.ruliweb.com/thumb/23/06/08/18896a04fa116493c.png"}
                     style={{ width: 600, height: 600, marginRight: 5 }} />
                </div>
                <div style={{ width: '40%', height: 700, display:'flex', flexDirection: 'column' }}>
                    <div style={{ marginTop: 100, fontSize: 50, marginLeft: 5 }}>{test.title}</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginRight: 410, alignItems: 'center', marginBottom: 10 }}>
                        <Avatar src="https://www.ehom.kr/news/2023/09/06/5b8bc97773db52cfb610661bdf88649c153104.png"
                                style={{ width: 30, height: 30 }}/>
                        <div style={{ marginRight: 100 }}>김 작가님</div>
                    </div>
                    <div style={{ marginTop: 10, fontSize: 25, marginLeft: 5, marginBottom: 10 }}>{test.price}원~</div>
                    <Rating name="read-only" value={test.rate} readOnly />
                    <div style={{ marginTop: 20, fontSize: 18, marginLeft: 5 }}>수정 가능 횟수 0번</div>
                    <div style={{ marginTop: 20, fontSize: 18, marginLeft: 5 }}>평균 {test.completionCount}일 소요</div>
                    <div style={{ marginTop: 20, fontSize: 18, marginLeft: 5 }}>총 {test.averageCompletionDay}건 완료</div>
                    <div style={{ marginTop: 20, fontSize: 18, marginBottom: 10, marginLeft: 5 }}>상세옵션</div>
                    <PostCategory />
                    <Button variant="outlined"
                            sx={{ height: 56, width: 200, color: "grey", fontSize: 15, border: '1px solid grey', marginLeft: 1 }}
                            onClick={goLogin}>
                        신 청 하 기
                    </Button>
                    <div style={{ marginLeft: 5, marginTop: 20, fontSize: 18 }}>상세설명</div>
                </div>
            </div>
        </>
    );
}

export default Post;
