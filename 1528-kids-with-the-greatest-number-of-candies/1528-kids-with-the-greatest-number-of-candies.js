/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let n = extraCandies;
    let tmp = [];
    var arrSorted = candies.toSorted((a,b) => b-a);
    const maxn = arrSorted[0];
    for(var x of candies){
        if(x+n>=maxn) tmp.push(true);
        else tmp.push(false)
    }
    return tmp
};