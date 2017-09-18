var getSum = function(a:number, b:number):number{
    return a + b;
}

document.write(getSum(2,3).toString() + "<br />");

var GetDiff = function(num1:number, num2:number = 2, num3?:number){
    if (typeof num3 !== 'undefined'){
        return num1 - num2 - num3;
    }

    return num1 - num2;
};

document.write(GetDiff(2,3).toString() + "<br />");

var sumAll = function(...nums: number[]): void{
    var sum = nums.reduce((a,b) => a + b, 0);

    document.write(sum + "<br />");
};

sumAll(1,2,3,4,5);