
const friends = [
    "Abdul Gofur Sharid",
    "Md Nakibul Islam",
    "Nazmul Hasan Ovi",
    "Md Shahriar Sojib",
    "Riyad hasan"
]

function findBestFriend(friends) {
    let bestFriend = friends[0];
    for (let friend of friends) {
        if (friend.length > bestFriend.length) {
            bestFriend = friend;
        }
    }
    return bestFriend;
}

const result = findBestFriend(friends)
console.log('Your best friend is:', result);