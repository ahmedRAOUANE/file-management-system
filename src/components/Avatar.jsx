import React from 'react'
import Icon from './Icon'

const Avatar = ({ src }) => {
    return (
        <div className='icon'>
            {src ? (
                <img src={src} alt="user image" />
            ) : (
                <Icon name={"user"} />
            )}
        </div>
    )
}

export default Avatar