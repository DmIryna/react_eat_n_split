import Friend from "./Friend"

const FriendsList = ({ friends, onSetSelectedFriend, selectedFriend }) => {
  return (
    <ul>
      {friends.map((friend) => {
        return (
          <Friend
            friend={friend}
            key={friend.id}
            onSetSelectedFriend={onSetSelectedFriend}
            selectedFriend={selectedFriend}
          />
        )
      })}
    </ul>
  )
}

export default FriendsList
