import React, { useEffect } from 'react'
import { useState } from 'react';

function PropsTest() {
    const [srcType, setSrcType] = useState('posts')
    useEffect(() => {
        console.log('render')
    },[])
    return (
        <div>
            <button onClick={() => setSrcType('posts')}>posts</button>
            <button onClick={() => setSrcType('user')}>users</button>
            <button onClick={() => setSrcType('comments')}>comments</button>
            <br />
            <span>{srcType}</span>
        </div>
    )
}

export default PropsTest
