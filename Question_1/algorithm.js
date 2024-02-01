export class Algorithm {

    constructor() {

    }

    //To test, copy function and paste on web dev console and run. 
    //then paste example sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])
    sockMerchant(count=null, socks) {
        //count, length of array is not needed, hence ignored.
        let singleSocks = [];
        let sockPairs = [];
        socks.forEach(sock => {
            //Assume each sock is a pair and add to singleSocks array
            singleSocks.push(sock);
            //single socks must occur once. if a pair is found, 
            //remove sock pair from singleSock array and add to sockPairs array
            if (singleSocks.filter(s => s == sock).length == 2) {
                sockPairs.push(sock);
                singleSocks = singleSocks.filter(s => s != sock);
            }
        });
        //return count of sock pairs that was found.
        return sockPairs.length;
    }
}