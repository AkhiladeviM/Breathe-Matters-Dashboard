import React from 'react';
import "../Styles.css"

const Divider = (props) => {
    return (
        // <div style="width: 100%; height: 100%; border: 3px #D9D9D9 solid"></div>
        <div className={props.class} style={{ width: "100%", height: "100%", border: "3px #D9D9D9 solid" }}></div>
    )
}

export default Divider