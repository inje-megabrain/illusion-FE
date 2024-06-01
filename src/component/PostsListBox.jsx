import React, {useEffect, useState} from 'react';
import {Box, Rating} from "@mui/material";
import {getPosts} from "../apis/fetchPosts.js";
import {useNavigate} from "react-router-dom";

function PostsListBox() {
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
    const goPost = () => {
        navigate("/posts/post")
    }
    return (
        <>
            <Box
                height={300}
                width={550}
                my={4}
                alignItems="center"
                gap={4}
                p={2}
                sx={{ border: '1px solid lightgrey', borderRadius: 1 }}
            >
                <div style={{ justifyContent: "center", display:'flex', alignItems:"center"}}>
                    <img src={"https://www.next-t.co.kr/public/uploads/7b7f7e2138e29e598cd0cdf2c85ea08d.jpg"}
                         style={{ width: 170, height: 170, marginRight: 5, cursor: 'pointer' }}
                         onClick={goPost}/>
                    <img src={"https://www.next-t.co.kr/public/uploads/7b7f7e2138e29e598cd0cdf2c85ea08d.jpg"}
                         style={{ width: 170, height: 170, marginRight: 5, cursor: 'pointer' }}
                         onClick={goPost}/>
                    <img src={"https://www.next-t.co.kr/public/uploads/7b7f7e2138e29e598cd0cdf2c85ea08d.jpg"}
                         style={{ width: 170, height: 170, cursor: 'pointer' }}
                         onClick={goPost}/>
                </div>
                <div style={{ display: 'flex'}}>
                    <div style={{ marginLeft:25, marginTop:15, fontSize: 20, cursor: 'pointer' }}
                         onClick={goPost}>{test.title}</div>
                    <div style={{ marginLeft:350, marginTop:20, fontSize: 18 }}>{test.price}원~</div>
                </div>

                <div style={{ marginLeft:20, marginTop:5}}>
                    <Rating name="read-only" value={test.rate} readOnly />
                    <div style={{ marginLeft:5, marginTop: 5}}>평균 {test.completionCount}일 소요</div>
                    <div style={{ marginLeft:5, marginTop: 5}}>총 {test.averageCompletionDay}건 완료</div>
                </div>
            </Box>
        </>
    );
}

export default PostsListBox;
