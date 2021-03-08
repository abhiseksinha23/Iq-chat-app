const users = []

// addUser, removeUser, getUser, getUsersInRoom

const addUser = ({id, username, room}) => {

    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    if(!username || !room) {
        return {
            error: "Username and room are required"
        }
    }
    //Check for existing user
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })

    //Validate User
    if(existingUser) {
        return {
            error: "Username is in use!"
        }
    }

    const user = {id, username, room}
    users.push(user)
    return { user }

}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)

    if (index !== -1) {
        return users.splice(index, 1)[0]
    }
}

const getUser = (id) => {
    return users.find((user) => user.id === id)

}

const getUsersInRoom = (room) => {
    room = room.trim().toLowerCase()
    return users.filter((user) => user.room === room)
}


const getActiveRooms = () => {
    const rooms = []
    users.forEach(user => {
        const exist = rooms.findIndex(room => room.room == user.room)
        if (exist == -1) {
            rooms.push(user)
        }
    })
    return rooms
}

module.exports = {
    addUser, 
    removeUser, 
    getUser,
    getUsersInRoom,
    getActiveRooms
}