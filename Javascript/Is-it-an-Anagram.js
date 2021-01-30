function isAnagram(test, original) {
    for (let i = 0; i < test.length; i++){
        let regex = `/[^${test[i].toLowerCase()}]/g`;
        if (test.toLowerCase().replace(regex, "").length === original.toLowerCase().replace(regex, "").length){
            return true;
        } else {
            return false;
        }
    }
}

console.log(isAnagram("foefet", "toffee")); // true
console.log(isAnagram("Buckethead", "DeathCubeK")); // true
console.log(isAnagram("Twoo", "WooT")); // true
console.log(isAnagram("dumble", "bumble")); // false
console.log(isAnagram("ound", "round")); // false
console.log(isAnagram("apple", "pale")); // false
