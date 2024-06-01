import React from 'react';
import {useLocation} from "react-router-dom";

function Review() {
    const location = useLocation();

    const { title, price, content } = location.state || {};

    return (
        <>
            {title && (
                <>
                    <div style={{ marginLeft: 50, marginRight: 50 }}>
                        <div style={{ marginTop: 50, marginBottom: 50, display: 'flex', fontSize: 30 }}>{title}</div>
                        <div style={{ marginTop: 20, marginBottom: 20, display: 'flex' }}>가격 : {price}원</div>
                        <hr />
                        <div style={{ marginTop: 20, display: 'flex' }}>{content}</div>
                    </div>
                </>
            )}
        </>
    );
}

export default Review;
