import React from 'react';
import {TextField} from "@mui/material";

function PostsTextField() {
    return (
        <>
            <TextField id="outlined-basic" label="검색" variant="outlined"
                       sx={{
                           "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                               borderColor: "lightgrey",
                           },
                           "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                               borderColor: "lightgrey",
                           },
                           "&.Mui-focused .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                               borderColor: "lightgrey",
                           },
                           color: 'lightgrey'
                       }} />
        </>
    );
}

export default PostsTextField;
