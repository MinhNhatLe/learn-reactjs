import React from 'react'
import AlbumList from './AlbumList/albumList'

function index(props) {
    const albumList = [
        {
            id: 1,
            name: 'Nhat',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/2/4/5/3/24538985249cd4d3b324b4a4a09ad288.jpg',

        },
        {
            id: 2,
            name: 'Dan',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/7/4/5/a/745aa0acacfeb268d4d2e2c466b7788a.jpg',

        },
        {
            id: 3,
            name: 'Vinh',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/0/f/7/d/0f7dc93355b1b3d9417609ac9e652463.jpg',

        },
        {
            id: 4,
            name: 'Meo',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/6/6/4/1/66411a12a29ff42569038ac203dc544e.jpg',

        },
        {
            id: 5,
            name: 'Long',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/images/a/1/e/0/a1e02cdf50690af710b77af59db01d60.jpg',

        },
        {
            id: 6,
            name: 'Dan',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/b/d/8/f/bd8f47abd69c1bb6d291344e4550203c.jpg',

        },
    ]
    return (
        <div>
            <h2>Co the ban se thich nghe day</h2>
            <AlbumList albumList={albumList} />
        </div>
    )
}

export default index
