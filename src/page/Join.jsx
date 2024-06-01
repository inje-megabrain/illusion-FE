import React, {useState} from 'react';
import {Button, FormControl, OutlinedInput} from "@mui/material";

function MyFormHelperText() {
    return null;
}

function Join() {
    return (
        <>
            <div style={{ marginTop: 150, display: 'flex', justifyContent: 'center', fontSize: 30, color: 'lightblue' }}>Illusion</div>
            <div style={{ marginTop: 20, display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'grey' }}>
                닉네임 입력
                <form noValidate autoComplete="off">
                    <FormControl sx={{ width: '25ch', marginLeft: 2 }}>
                        <OutlinedInput />
                        <MyFormHelperText />
                    </FormControl>
                </form>
            </div>
            <div style={{ marginTop: 20, display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'grey' }}>
                아이디 입력
                <form noValidate autoComplete="off">
                    <FormControl sx={{ width: '25ch', marginLeft: 2 }}>
                        <OutlinedInput />
                        <MyFormHelperText />
                    </FormControl>
                </form>
            </div>
            <div style={{ marginTop: 20, display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'grey' }}>
                비밀번호 입력
                <form noValidate autoComplete="off">
                    <FormControl sx={{ width: '25ch', marginLeft: 2 }}>
                        <OutlinedInput />
                        <MyFormHelperText />
                    </FormControl>
                </form>
            </div>
            <div style={{ marginTop: 20, display: 'flex', justifyContent: 'center' }}>
                <Button variant="outlined"
                        sx={{ height: 56, width: 180, color: "grey", fontSize: 15, border: '1px solid grey' }}>
                    회 원 가 입
                </Button>
            </div>
        </>
    );
}

export default Join;
