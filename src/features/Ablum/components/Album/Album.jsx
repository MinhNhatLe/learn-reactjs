import React from 'react'
import "./album.scss"

function Album({ album }) {
    return (
        <div>
            <div>
                <div className='item__album'>
                    <img src={album.thumbnailUrl} alt={album.name} />
                    <p>{album.name}</p>
                </div>
            </div>
        </div>
    )
}

export default Album
