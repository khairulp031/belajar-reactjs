import React, { useEffect, useState } from 'react'
import { useContext } from './hooks/context'
import Table from './Table'

function DisplayMessage() {
    const [state] = useContext()
    const [data, setData] = useState()
    useEffect(function () {
        console.log('Komponen', state.errorMsg)
    }, [state.errorMsg])
    
    useEffect(function () {
        fetch('https://api.spacexdata.com/v4/starlink')
            .then(function (response) {
                if (response.ok) {
                    response.json().then(d => {
                        setData(d)
                    })
                }
            })
    }, [])

    const updateData = (function (i) {
        const temp = [...data]
        temp[i].time = new Date().getTime()
        setData(temp)
    })

    return (
        <>
            <strong>{state.errorMsg}</strong>
            {
                data && data.length &&
                data.sort((a, b) => { return new Date(a.spaceTrack.LAUNCH_DATE) - new Date(b.spaceTrack.LAUNCH_DATE) })
                    .map(function (item, i) {
                        return (
                            <Table key={'divspaceTrack' + i} item={item} i={i} updateData={updateData} />
                        )
                    })
            }
        </>
    )
}

export default React.memo(DisplayMessage)