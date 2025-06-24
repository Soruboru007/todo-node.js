function greet(name)
{
    console.log(name);
}

function add(a,b)
{
    return a * b;
}

function ageLimit(age)
{
    if(age < 20 && age > 0)
    {
        console.log("未成年");
    }
    else if(age < 0)
        console.log("負の数を入力している可能性がございます。値を確認して、もう一度入力してください。");
    else
    console.log("大人");
}
console.log(add(2,3));
greet("taro");

ageLimit(-1);
