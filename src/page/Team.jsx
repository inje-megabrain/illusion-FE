import React from 'react';
import {useLocation} from "react-router-dom";

function Team() {
    const location = useLocation();

    const { title, recruitment, content } = location.state || {};

    return (
        <>
            {title && (
                <>
                    <div style={{ marginLeft: 50, marginRight: 50 }}>
                        <div style={{ marginTop: 50, marginBottom: 50, display: 'flex', fontSize: 30 }}>{title}</div>
                        <div style={{ marginTop: 20, marginBottom: 20, display: 'flex' }}>모집여부 : {recruitment}</div>
                        <hr />
                        <div style={{ marginTop: 20, display: 'flex' }}>{content}</div>
                    </div>
                </>
            )}
        </>
    );
}

export default Team;
