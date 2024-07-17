const findEvenLengthFriends = (friends) => {
    const evenLengthFriends = [];
    for (const friend of friends) {
        if (friend.length % 2 === 0) {
            evenLengthFriends.push(friend)
        }
    }
    return evenLengthFriends;
}

const friends = ['Sharid', 'Sazzad', 'Nakib', 'Ovi', 'Al-amin', 'sojib', 'Riyadh']
console.log(findEvenLengthFriends(friends));