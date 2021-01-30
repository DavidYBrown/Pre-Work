// Function to check if two strings contain the same charachters
function isAnagram(test, original) {
    for (let i = 0; i < test.length; i++){
        let regex = `/[^${test[i].toLowerCase()}]/g`;
        if (test.toLowerCase().replace(regex, "").length !== original.toLowerCase().replace(regex, "").length){
            return false;
        }
    }
    return true;
}

console.log(isAnagram("foefet", "toffee")); // true
console.log(isAnagram("Buckethead", "DeathCubeK")); // true
console.log(isAnagram("Twoo", "WooT")); // true
console.log(isAnagram("dumble", "bumble")); // false
console.log(isAnagram("ound", "round")); // false
console.log(isAnagram("apple", "pale")); // false
