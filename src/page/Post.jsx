import React, {useEffect, useState} from 'react';
import {getPosts} from "../apis/fetchPosts.js";
import {Button, Rating} from "@mui/material";
import PostCategory from "../component/postCategory.jsx";

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
    return (
        <>
            <div style={{ justifyContent: 'space-between', display: 'flex' }}>
                <div style={{ width: '50%', height: 700, justifyContent: "center", display:'flex', alignItems:"center" }}>
                <img src={"https://www.next-t.co.kr/public/uploads/7b7f7e2138e29e598cd0cdf2c85ea08d.jpg"}
                             style={{ width: 500, height: 500, marginRight: 5 }} />
                </div>
                <div style={{ width: '50%', height: 700, display:'flex', flexDirection: 'column' }}>
                    <div style={{ marginTop: 100, fontSize: 50 }}>{test.title}</div>
                    <Rating name="read-only" value={test.rate} readOnly />
                    <div style={{ marginTop: 20, fontSize: 20 }}>{test.price}원~</div>
                    <div style={{ marginTop: 20, fontSize: 20 }}>수정 가능 횟수 5 번</div>
                    <div style={{ marginTop: 20, fontSize: 20, marginBottom: 10 }}>상세옵션</div>
                    <PostCategory />
                    <Button variant="outlined"
                            sx={{ height: 56, width: 200, color: "grey", fontSize: 15, border: '1px solid grey', marginLeft: 1 }}>
                        신 청 하 기
                    </Button>
                </div>
            </div>
        </>
    );
}

export default Post;
