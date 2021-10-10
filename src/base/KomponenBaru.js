import React, { useState, useEffect } from 'react'

 function KomponenBaru() {
    const [data, setData] = useState('test useState')
    useEffect(function () {
        console.log('KomponenBaru')
    })
    return (
        <>
            <input
                type="text"
                onChange={(e) => setData(e.target.value)}
            />
            <strong>{data}</strong>
        </>
    )
}

export default React.memo(KomponenBaru)