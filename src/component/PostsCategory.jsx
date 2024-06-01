import React from 'react';
import {FormControl, MenuItem, Select} from "@mui/material";

function PostsCategory() {
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
                            <em>정렬순</em>
                        </MenuItem>
                        <MenuItem value={10}>인기순</MenuItem>
                        <MenuItem value={20}>최신순</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </>
    );
}

export default PostsCategory;
