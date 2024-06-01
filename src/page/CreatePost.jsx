import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {Button, TextField} from "@mui/material";
import axios from "axios";

function CreatePost() {
    const navigate = useNavigate();
    const [postTitle, setPostTitle] = useState("");
    const [postContent, setPostContent] = useState("");
    const [postPrice, setPostPrice] = useState("");
    const [postEditNumber, setPostEditNumber] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const goPosts = () => {
        const postData = {
            title: postTitle,
            content: postContent,
            price: postPrice,
            editNumber: postEditNumber
        };
        const formData = new FormData();
        if (selectedFile) {
            formData.append('file', selectedFile);
        }

        axios.post('http://localhost:5173/posts', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((res) => {
            console.log('Post created successfully', res.data);
            navigate("/posts", { state: res.data });
        }).catch((err) => {
            console.error('Post creation failed', err);
        });
        navigate("/posts", { state: postData });
    };

        return (
            <>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 200,
                    marginRight: 200,
                    marginTop: 50
                }}>
                    <TextField
                        id="standard-basic"
                        label="제목"
                        variant="standard"
                        sx={{width: 600, marginBottom: 5}}
                        value={postTitle}
                        onChange={(event) => {
                            setPostTitle(event.target.value);
                        }}
                    />
                    <TextField
                        id="standard-basic"
                        label="가격"
                        variant="standard"
                        sx={{width: 600, marginBottom: 5}}
                        value={postPrice}
                        onChange={(event) => {
                            setPostPrice(event.target.value);
                        }}
                    />
                    <TextField
                        id="standard-basic"
                        label="수정 가능 횟수"
                        variant="standard"
                        sx={{width: 600, marginBottom: 5}}
                        value={postEditNumber}
                        onChange={(event) => {
                            setPostEditNumber(event.target.value);
                        }}
                    />
                    <TextField
                        id="standard-multiline-static"
                        label="여기에 내용을 입력하세요."
                        multiline
                        rows={20}
                        variant="standard"
                        sx={{width: 600, marginBottom: 5}}
                        value={postContent}
                        onChange={(event) => {
                            setPostContent(event.target.value);
                        }}
                    />
                    <input
                        type="file"
                        onChange={handleFileChange}
                        style={{ marginBottom: 30 }}
                    />
                    <input
                        type="file"
                        onChange={handleFileChange}
                        style={{ marginBottom: 30 }}
                    />
                    <input
                        type="file"
                        onChange={handleFileChange}
                        style={{ marginBottom: 30 }}
                    />
                    <Button
                        onClick={goPosts}
                        variant="outlined"
                        sx={{height: 40, width: 100, color: "grey", fontSize: 15, border: '1px solid grey'}}>
                        발행
                    </Button>
                </div>
            </>
        );
    }
export default CreatePost;
