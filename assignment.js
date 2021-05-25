// https://github.com/tanvirsp/assignment


//kilometerToMeter
function kilometerToMeter(kilometer){
    if(kilometer < 0 ){
        return "Please Submit Valid Number"
    }
    else {
        var meter = kilometer * 1000;
        return meter;
    }
}





//watch price 50,   phone price 100,  laptop price 500
function budgetCalculator(watch, phone, laptop){
    //check nagetive value for watch
    if (watch < 0 ){
        return "Nagetive Watch Number is not allow"
    } 
    else {
        var watchPrice = watch * 50;    
    }

    //check nagetive value for Phone
    if(phone < 0){
        return "Nagetive Phone Number is not allow"
    }
    else {
        var phonePrice = phone * 100;    
    }
    //check nagetive value for Laptop
    if(laptop < 0){
        return "Nagetive Laptop Number is not allow"
    }
    else {
        var laptopPrice = laptop * 500;
    }
    var total = watchPrice + phonePrice + laptopPrice;
    return total;
}





// 1-10 day = 100,   11-20 day = 80,  21 or above day = 50
function hotelCost(days){
    var totalCost = 0;

    if (days < 0){
        return "Please put Valid Number"
    }
    else if( days <= 10){
        var firstSession = days * 100;
        totalCost = firstSession;
    }
    else if(days <=20){
        var firstSession = 10 * 100;
        var remainingDays = days - 10
        var secondSession = remainingDays * 80;
        totalCost = firstSession + secondSession;
    }
    else {
        var remainingDays = days - 20;
        var thirdSession = remainingDays * 50;
        var firstSession = 10 * 100;
        var secondSession = 10 * 80;
        
        totalCost = firstSession + secondSession + thirdSession
    }
    return totalCost;
}






//find megaFriend
function megaFriend(friends){
    var megaName  = friends[0];

    //check empty friends arry
    if(friends.length == 0 || friends[0] == ""){
        return "Enpty Array List is not allow"
    }
    else {
        var megaName  = friends[0];
        for(var i = 0; i < friends.length; i++ ){
            var element = friends[i];
            if(element.length > megaName.length){
                megaName = element;
            }
    }
    return megaName;
    }
}


