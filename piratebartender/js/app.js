$(function() {


    //ingredients constructor
    var Ingredients = function(options) {
        this.options = options;
    };

    var sweet = new Ingredients(['bunny ears', 'muddled peacock feathers', 'whipped cream']);


    var salty = new Ingredients(['bacon', 'finely ground spider legs rim', 'olives']);


    var spicy = new Ingredients(['essence of dart frog', 'Carolina Reaper peppers', 'dried remnants of a salsa jar']);


    var sour = new Ingredients(['eyeballs', 'rotten apples', 'lizard tongues']);


    var strong = new Ingredients(['bathtub gin', 'gasoline', 'liquid elephant tranquilizer']);


    //pantry constructor: items to be added in case the thumbs down selected
    var Pantry = function(stock) {
        this.stock = stock;
    }


    var newPantry = new Pantry(['formaldehyde', 'arsenic', 'tiny colorful paper umbrella', 'dish water', 'wolfsbane', 'lemonade']);


    //questions constructor
    var Questions = function(types) {
        this.types = types;
    };

    var sweetQuestion = new Questions("Something sweet?");

    var saltyQuestion = new Questions("Maybe something salty?");

    var spicyQuestion = new Questions("Something with some spice?");

    var sourQuestion = new Questions("How about a bite of sour?");

    var strongQuestion = new Questions("Had a long journey? Let's make that extra strong for you.")


    var Questionsarray = [sweetQuestion.types, saltyQuestion.types, spicyQuestion.types, sourQuestion.types, strongQuestion.types]
        

   

    //append questions to DOM
    $(".questionwrapper").append("<br><div class='yessweetquestion'>" + Questionsarray[0] + "<br><i class='fa fa-thumbs-o-up' id='Sweet'></i>   <i class='fa fa-thumbs-o-down' id='sweetno'></i></div>");
    $(".questionwrapper").append("<br><div class='yessaltyquestion'>" + Questionsarray[1] + "<br><i class='fa fa-thumbs-o-up' id='Salty'></i>   <i class='fa fa-thumbs-o-down' id='saltyno'></i></div>");
    $(".questionwrapper").append("<br><div class='yesspicyquestion'>" + Questionsarray[2] + "<br><i class='fa fa-thumbs-o-up' id='Spicy'></i>   <i class='fa fa-thumbs-o-down' id='spicyno'></i></div>");
    $(".questionwrapper").append("<br><div class='yessourquestion'>" + Questionsarray[3] +  "<br><i class='fa fa-thumbs-o-up' id='Sour'></i>    <i class='fa fa-thumbs-o-down' id='sourno'></i></div>");
    $(".questionwrapper").append("<br><div class='yesstrongquestion'>" + Questionsarray[4] + "<br><i class='fa fa-thumbs-o-up' id='Strong'></i> <i class='fa fa-thumbs-o-down' id='strongno'></i></div>");

     //creating array for preferences to be pushed into
    var includedItems = []

    //click functions on both up and down arrows to push either a desired item or a 'filler' item into preferences
    $('#Sweet').click(function() {
        $(this).parent("div").hide()
        var randomIndex = Math.floor(Math.random() * (3 - 1 + (1)));
        includedItems.push(sweet.options[randomIndex]);
        console.log(includedItems);
    })

    $('#sweetno').click(function() {
        var randomIndex = Math.floor(Math.random() * (6 - 1 + (1)));
        includedItems.push(newPantry.stock[randomIndex])
        $(this).parent("div").hide();
        console.log(includedItems);
    })


    $('#Salty').click(function() {
        $(this).parent("div").hide()
        var randomIndex = Math.floor(Math.random() * (3 - 1 + (1)));
        includedItems.push(salty.options[randomIndex]);
        console.log(includedItems);
    })

    $('#Spicy').click(function() {
        $(this).parent("div").hide()
        var randomIndex = Math.floor(Math.random() * (3 - 1 + (1)));
        includedItems.push(spicy.options[randomIndex]);
        console.log(includedItems);

    })

    $('#saltyno').click(function() {
        var randomIndex = Math.floor(Math.random() * (6 - 1 + (1)));
        includedItems.push(newPantry.stock[randomIndex])
        $(this).parent("div").hide();
        console.log(includedItems);
    })

    $('#spicyno').click(function() {
        var randomIndex = Math.floor(Math.random() * (6 - 1 + (1)));
        includedItems.push(newPantry.stock[randomIndex])
        $(this).parent("div").hide();
        console.log(includedItems);
    })

    $('#Sour').click(function() {
        $(this).parent("div").hide()
        var randomIndex = Math.floor(Math.random() * (3 - 1 + (1)));
        includedItems.push(sour.options[randomIndex]);
        console.log(includedItems);
    })

  
    $('#sourno').click(function() {
        var randomIndex = Math.floor(Math.random() * (6 - 1 + (1)));
        includedItems.push(newPantry.stock[randomIndex])
        $(this).parent("div").hide();
        console.log(includedItems);
    })

    //last question, answer will trigger function
     $('#Strong').click(function() {
        $(this).parent("div").hide()
        var randomIndex = Math.floor(Math.random() * (3 - 1 + (1)));
        includedItems.push(strong.options[randomIndex]);
        console.log(includedItems);
        makeDrink();
    })

    $('#strongno').click(function() {
        var randomIndex = Math.floor(Math.random() * (6 - 1 + (1)));
        includedItems.push(newPantry.stock[randomIndex])
        $(this).parent("div").hide();
        console.log(includedItems);
        makeDrink();
    })

    //drink naming arrays
    var drinkNouns = ['Witch', 'Bastard', 'Thief', 'Murderess', 'Phantom', 'Raven', 'Cryptkeeper', 'Scream', 'Mystery', 'Demon'];
    var drinkAdjectives = ['Doomed', 'Gloomy', 'Melancholic', 'Dark', 'Funereal', 'Gruesome', 'Blood-curdling', 'Ghoulish', 'Revolting', 'Sinister']


    //function to make the drink, including the name
    var makeDrink = function(ingredients) {
        $(".serve").append("<h3> Please, enjoy your special beverage, made with:</h3>")
        for (i = 0; i < includedItems.length; i++) {

            $(".serve").append("<p>" + includedItems[i] + "</p>")

        }

        var randomIndex = Math.floor(Math.random() * (9 - 1 + (1)));
        $(".serve").append("<h3>We call it The " + drinkAdjectives[randomIndex] + ' ' + drinkNouns[randomIndex] + "</h3>");
    }


});