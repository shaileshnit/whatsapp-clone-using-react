import React, { useEffect, useState } from 'react'
import './Sidebar.css'

// to make icons clickable we have to use IconButton
import { Avatar, IconButton } from '@material-ui/core'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SearchOutlined from '@material-ui/icons/SearchOutlined'

import SidebarChat from './SidebarChat'
import db from '../firebase'
import { useStateValue } from './StateProvider'

function Sidebar() {
  const [rooms, setRooms] = useState([])
  const [{ user }, dispatch] = useStateValue()

  useEffect(() => {
    const unsubscribe = db.collection('rooms').onSnapshot((snapshot) => {
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    })
    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <div className='sidebar'>
      {/* Sidebar__header */}
      <div className='sidebar__header'>
        <IconButton>
          <Avatar src={user?.photoURL} />
        </IconButton>
        <div className='sidebar__headerRight'>
          <IconButton>
            <DonutLargeIcon />
          </IconButton>

          <IconButton>
            <ChatIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      {/* Sidebar__search */}
      <div className='sidebar__search'>
        <div className='sidebar__searchContainer'>
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <input placeholder='Search or start new chat' type='text' />
        </div>
      </div>

      {/* Sidebar__list */}
      <div className='sidebar__chats'>
        <SidebarChat addNewChat />

        {/* map every room with sidebar chat */}
        {rooms.map((room) => (
          <SidebarChat key={room.id} id={room.id} name={room.data.name} />
        ))}
      </div>
    </div>
  )
}

export default Sidebar
