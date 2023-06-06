import React, { useState } from 'react'
import ShowModal from '../Modals/ShowModal';


function ShowCard({ show, index }) {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    console.log(show)
    return (
        <div className='showCard' >
            <label onClick={toggle}>
                <h3>{show.name}</h3>
                <h6>{show.language}</h6>
                <p>Genre: {show.genres.map((genre) => <>{genre} </>)}</p>
                <p>Premiered on {show.premiered}</p>
            </label>
            <img onClick={toggle} src={show.image['original']} alt={show.name}></img>
            <ShowModal modal={modal} toggle={toggle} show={show} index={index} ></ShowModal>

        </div>
    )
}

export default ShowCard