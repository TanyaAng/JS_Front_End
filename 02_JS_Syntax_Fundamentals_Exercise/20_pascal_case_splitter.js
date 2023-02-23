function pascalCaseSplitter(text){
    console.log(text.split(/(?=[A-Z])/).join(', '));
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');