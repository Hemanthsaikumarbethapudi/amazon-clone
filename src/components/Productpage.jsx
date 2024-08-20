// import React from 'react'
import { useParams } from "react-router-dom"

const Productpage = () => {
    const { id } = useParams();
    return (
        <div>Productpage {id} </div>
    )
}

export default Productpage