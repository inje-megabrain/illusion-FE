import React, {useState} from 'react';
import {Button, Checkbox, TextField} from "@mui/material";
import {useNavigate} from "react-router-dom";

function CreateTeam() {
    const navigate = useNavigate();
    const [teamTitle, setTeamTitle] = useState("");
    const [teamContent, setTeamContent] = useState("");
    const [teamRecruitment, setTeamRecruitment] = useState("X");
    const goTeams = () => {
        const teamData = {
            title: teamTitle,
            content: teamContent,
            recruitment: teamRecruitment,
        };
        navigate("/teams", { state: teamData });
    };
    const handleChange = (event) => {
        setTeamRecruitment(event.target.checked ? "O" : "X");
    };
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginLeft: 200, marginRight: 200, marginTop: 50 }}>
                <TextField
                    id="standard-basic"
                    label="제목"
                    variant="standard"
                    sx={{ width: 600, marginBottom: 5 }}
                    value={teamTitle}
                    onChange={(event) => {
                        setTeamTitle(event.target.value);
                    }}/>
                <TextField
                    id="standard-multiline-static"
                    label="여기에 내용을 입력하세요."
                    multiline
                    rows={20}
                    variant="standard"
                    sx = {{ width: 600, marginBottom: 5 }}
                    value={teamContent}
                    onChange={(event) => {
                        setTeamContent(event.target.value);
                    }}
                />
                <div style={{ marginBottom: 20 }}>모집여부
                    <Checkbox
                        checked={teamRecruitment === "O"}
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                </div>
                <Button
                    onClick={goTeams}
                    variant="outlined"
                    sx={{ height: 40, width: 100, color: "grey", fontSize: 15, border: '1px solid grey' }}>
                    발행
                </Button>
            </div>
        </>
    );
}

export default CreateTeam;
