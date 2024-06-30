import React, {useState} from 'react';
import {Button, TextField} from "@mui/material";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function CreateReview() {
    const navigate = useNavigate();
    const [reviewTitle, setReviewTitle] = useState("");
    const [reviewContent, setReviewContent] = useState("");
    const [reviewPrice, setReviewPrice] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };
    const goReviews = () => {
        const reviewData = {
            title: reviewTitle,
            content: reviewContent,
            price: reviewPrice
        };
        navigate("/reviews", { state: reviewData });
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
    };
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginLeft: 200, marginRight: 200, marginTop: 50 }}>
                <TextField
                    id="standard-basic"
                    label="제목"
                    variant="standard"
                    sx={{ width: 600, marginBottom: 5 }}
                    value={reviewTitle}
                    onChange={(event) => {
                        setReviewTitle(event.target.value);
                    }}
                />
                <TextField
                    id="standard-basic"
                    label="가격"
                    variant="standard"
                    sx={{ width: 600, marginBottom: 5 }}
                    value={reviewPrice}
                    onChange={(event) => {
                        setReviewPrice(event.target.value);
                    }}
                />
                <TextField
                    id="standard-multiline-static"
                    label="여기에 내용을 입력하세요."
                    multiline
                    rows={20}
                    variant="standard"
                    sx = {{ width: 600, marginBottom: 5 }}
                    value={reviewContent}
                    onChange={(event) => {
                        setReviewContent(event.target.value);
                    }}
                />
                <input
                    type="file"
                    onChange={handleFileChange}
                    style={{ marginBottom: 30 }}
                />
                <Button
                    onClick={goReviews}
                    variant="outlined"
                    sx={{ height: 40, width: 100, color: "grey", fontSize: 15, border: '1px solid grey' }}>
                    발행
                </Button>
            </div>
        </>
    );
}

export default CreateReview;
