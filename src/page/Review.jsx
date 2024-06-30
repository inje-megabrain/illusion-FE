import React from 'react';
import {useLocation} from "react-router-dom";

function Review() {
    const location = useLocation();

    const { title, price, content } = location.state || {};

    return (
        <>
            {title && (
                <>
                    <div style={{ marginLeft: 250, marginRight: 250 }}>
                        <div style={{ marginTop: 50, marginBottom: 30, display: 'flex', fontSize: 30 }}>{title}</div>
                        <hr style={{ height: '3px', backgroundColor: 'grey' }} />
                        <div style={{ marginTop: 20, marginBottom: 20, display: 'flex' }}>가격 : {price}원</div>
                        <hr />
                        <div style={{ marginTop: 20, marginBottom: 300, display: 'flex' }}>{content}</div>
                        <hr />
                    </div>
                </>
            )}
        </>
    );
}

export default Review;
