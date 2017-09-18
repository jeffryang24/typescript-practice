var getSum = function (a, b) {
    return a + b;
};
document.write(getSum(2, 3).toString() + "<br />");
var GetDiff = function (num1, num2, num3) {
    if (num2 === void 0) { num2 = 2; }
    if (typeof num3 !== 'undefined') {
        return num1 - num2 - num3;
    }
    return num1 - num2;
};
document.write(GetDiff(2, 3).toString() + "<br />");
