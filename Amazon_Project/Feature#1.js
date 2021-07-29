//Suggest items for delivery
//Solution: Hashing

function suggestTwoProducts(itemPrices, amount) {
    var buffDict = {};
    var result = [];
    for (var i = 0; i < itemPrices.length; i++) {
        var price = itemPrices[i];
        var remaining = amount - price;
        if (remaining in buffDict) {
            result = [buffDict[remaining], i];
        }
        else {
            buffDict[price] = i;
        }
    }
    return result;
}


var itemPrices = [2, 30, 56, 34, 55, 10, 11, 20, 15, 60, 45, 39, 51];
var amount = 61;
console.log(suggestTwoProducts(itemPrices, amount));

//Time and Space Complexity: O(N)