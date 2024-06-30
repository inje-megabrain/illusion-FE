import React from 'react';
import {FormControl, MenuItem, Select} from "@mui/material";

function PostCategory() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <>
            <div>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <Select
                        value={age}
                        onChange={handleChange}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        sx={{color: 'grey'}}
                    >
                        <MenuItem value="">
                            <em>용도</em>
                        </MenuItem>
                        <MenuItem value={10}>상업용</MenuItem>
                        <MenuItem value={20}>소장용</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </>
    );
}

export default PostCategory;
