function countApplesAndOranges(s, t, a, b, apples, oranges) {
    numofApple = 0;
    numoforanges = 0;

    for(let i = 0; i < apples.length; i++){
        if(a + apples[i] >= s && a + apples[i] <= t){
            numofApple++;
        }
    }

    for(let j = 0; j < oranges.length; j++){
        if(b + oranges[j] >= s && b + oranges[j] <= t){
            numoforanges++;
        }
    }

    console.log(numofApple);
    console.log(oranges);
};

