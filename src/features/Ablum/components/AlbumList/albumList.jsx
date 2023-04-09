import React from 'react'
import Album from '../Album/Album'
import "./style.scss"

function albumList({ albumList }) {
    return (
        <div>
            <ul>
                {albumList.map(album => (
                    <li key={album.id}>
                        <Album album={album} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default albumList
