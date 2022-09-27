import React from 'react'
import {UserContext,ChannelContext} from '../App'
function ComponentF() {
    return (
        <div>
        <UserContext.Consumer>
            {
                user => {
                    return (<ChannelContext.Consumer>{channel => {
                        return <div>User Context Value <h2>{user}</h2>, Channel Context Value <h2>{channel}</h2></div>
                    }}</ChannelContext.Consumer>)

                }
            }
        </UserContext.Consumer>
        </div>
    )
}

export default ComponentF
