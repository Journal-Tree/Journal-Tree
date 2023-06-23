import React from 'react';

const balancedTag = () => {
    return (
        <div style={{width: '100%', height: '100%', position: 'relative'}}>
            <div style={{width: 341, height: 83, left: 0, top: 0, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                <div style={{width: 341, height: 83, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                    <div style={{width: 341, height: 83, background: '#69A297', boxShadow: '0px 5px 14px rgba(8.24, 15.25, 52.06, 0.04)', borderRadius: 20, borderLeft: '0.50px #EFF0F6 solid', borderTop: '0.50px #EFF0F6 solid', borderRight: '0.50px #EFF0F6 solid', borderBottom: '0.50px #EFF0F6 solid'}} />
                </div>
            </div>
            <div style={{left: 96, top: 31, position: 'absolute', textAlign: 'center', color: '#FFFBFB', fontSize: 30, fontFamily: 'Inter', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word'}}>#Balanced</div>
        </div>
    );
}

export default balancedTag;
