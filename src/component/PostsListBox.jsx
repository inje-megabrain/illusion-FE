import React, {useEffect, useState} from 'react';
import {Box, Rating} from "@mui/material";
import {getPosts} from "../apis/fetchPosts.js";
import {useNavigate} from "react-router-dom";
import '/src/css/PostsPage.css'

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
                <div className="PostsPageImage">
                    <img src={"https://d2v80xjmx68n4w.cloudfront.net/gigs/uloP51705138977.jpg"}
                         style={{ width: 170, height: 170, marginRight: 5, cursor: 'pointer' }}
                         onClick={goPost}/>
                    <img src={"https://embed.pixiv.net/spotlight.php?id=9610&lang=ko"}
                         style={{ width: 170, height: 170, marginRight: 5, cursor: 'pointer' }}
                         onClick={goPost}/>
                    <img src={"https://i2.ruliweb.com/thumb/23/06/08/18896a04fa116493c.png"}
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
