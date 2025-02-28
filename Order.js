export class Order {
    constructor(sFrom) {
      this.OrderState = {
        WELCOMING: () => {
         
          let aReturn = [];
          this.isDone = false;
          this.stateCur = this.OrderState.RESERVING;
          aReturn.push("Welcome to Evry-Bye");
          aReturn.push("What would you like to order?");
          aReturn.push("The menu today is a daily soup and special sandwich");
          return aReturn;
        },
        //option btw soup + grill cheese / sandwich + chips / salad + more salad
        RESERVING: (sInput) => {
          let aReturn = [];
          this.isDone = false;
          this.stateCur = this.OrderState.ORDERING;
            if (sInput.toLowerCase().includes('sandwich')) { //Sandwich menu item
              this.sandwich = true;
              aReturn.push(`A sandwich is a great idea! Today we have the Cuban for $10.99 or the Panini for $11.99`);
              //this.stateCur = this.OrderState.ORDERING;
              //return aReturn;
            } else if (sInput.toLowerCase().includes(`soup`)) { // soup menu item
              this.soup = true;
              aReturn.push(`Soup is a great idea! Today we have daily mystery soup for $8.99 or the onion soup for $9.99`);
              //this.stateCur = this.OrderState.ORDERING;  
            }
            else {
              aReturn.push("Thanks for trying our reservation system");
              aReturn.push("Maybe next time");
            }
          return aReturn;
        },
        ORDERING: (sInput) => {
          let aReturn = [];
          this.isDone = false;
          this.stateCur = this.OrderState.TAILORING; 

          if (sInput.toLowerCase().includes(`cuban`) && this.sandwich == true){ // Cuban 
            this.cuban = true;
            aReturn.push(`Going foward with the Cuban Sandwich is a good idea`);
            aReturn.push(`Would you like an additional grilled cheese for $3.99`);
            //this.stateCur = this.OrderState.FINALIZING; 
          }
          else if (sInput.toLowerCase().includes(`panini`) && this.sandwich == true){
            this.panini = true;
            aReturn.push(`Going foward with the Panini Sandwich is a good idea`);
            aReturn.push(`Would you like an additional grilled cheese for $3.99`);

          } else if (sInput.toLowerCase().includes(`mystery`) && this.soup == true){ 
            this.mystery = true;
            aReturn.push(`Mystery soup is a wonderful choice`);
            aReturn.push(`Would you like an additional grilled cheese for $3.99`);
          }
          else if (sInput.toLowerCase().includes(`onion`) && this.soup == true){
            this.onion = true;
            aReturn.push(`Onion soup is a wonderful choice`);
            aReturn.push(`Would you like an additional grilled cheese for $3.99, it goes great with the soup`);
            //this.stateCur = this.OrderState.FINALIZING; 
          }
          else {
            aReturn.push(`Sorry, didn't catch that`);
            aReturn.push(`You might have to restart your order, sorry!`);
          }
          return aReturn;
        },
        TAILORING: (sInput) =>{ //SIZE MAKING AND 
          let aReturn = [];
          this.isDone = false;
          this.stateCur = this.OrderState.FINALIZING; 

          if (sInput.toLowerCase().includes(`y`)){
            aReturn.push(`A grilled cheese (1) will be added to your total!`);
            aReturn.push(`Proceed to check out now, please reply to continue`);     
            this.cheese = true;      
          }else if (sInput.toLowerCase().includes(`n`)){
            aReturn.push(`No grilled cheese add to order!`);
            aReturn.push(`Proceed to check out now, please reply to continue`);       
            this.cheese = false; 
          }
          /*
          if (sInput.toLowerCase().includes(`cuban`)&& this.cuban == true && this.sandwich == true){
          }else if (sInput.toLowerCase().includes(`panini`)&& this.panini == true && this.sandwich == true){
          }else if (sInput.toLowerCase().includes(`mystery`)&& this.mystery == true && this.soup == true){
          }else if (sInput.toLowerCase().includes(`onion`)&& this.onion == true && this.soup == true){
          }else{aReturn.push(`Sorry, didn't catch that`);aReturn.push(`You might have to restart your order, sorry!`);
          } */
          this.stateCur = this.OrderState.FINALIZING; 
          return aReturn;
        },
        FINALIZING: (sInput) =>{
        let aReturn = [];
        this.isDone = false;
        
        this.stateCur = this.OrderState.CONFIRMING;
        if (sInput.toLowerCase().includes(`y`) && this.cuban == true && this.cheese == true){
          //cuban + side
          aReturn.push("Your order has a Cuban sandwich and grilled cheese!");
          aReturn.push("Cost: $3.99 + $10.99 = $14.98");
          aReturn.push("Please press any button to confirm order");
        }else if (sInput.toLowerCase().includes(`y`) && this.panini == true && this.cheese == true){
          // panini + side
          aReturn.push("Your order has a Panini sandwich and a grilled cheese");
          aReturn.push("Cost: $3.99 + $11.99 = $15.98");
          aReturn.push("Please press any button to confirm order");
        }else if (sInput.toLowerCase().includes(`y`) && this.mystery== true && this.cheese == true){
          // mystery soup + side
          aReturn.push("Your order has a Daily Mystery soup and a grilled cheese");
          aReturn.push("Cost: $3.99 + $8.99 = $12.98");
          aReturn.push("Please press any button to confirm order");
        }else if (sInput.toLowerCase().includes(`y`) && this.onion== true && this.cheese == true){
          // onion soup + side
          aReturn.push("Your order has a Onion soup and a grilled cheese");
          aReturn.push("Cost: $3.99 + $9.99 = $13.98");
          aReturn.push("Please press any button to confirm order");
        }else if (sInput.toLowerCase().includes(`y`) && this.cuban== true && this.cheese == false){
          aReturn.push("Your order has a Cuban sandwich ");
          aReturn.push("Cost = $10.99");
          aReturn.push("Please press any button to confirm order");
        }else if (sInput.toLowerCase().includes(`y`) && this.panini== true && this.cheese == false){
          aReturn.push("Your order has a Panini sandwich");
          aReturn.push("Cost = $12.99");
          aReturn.push("Please press any button to confirm order");
        }else if (sInput.toLowerCase().includes(`y`) && this.mystery== true && this.cheese == false){
          aReturn.push("Your order has a Daily mystery soup");
          aReturn.push("Cost = $8.99");
          aReturn.push("Please press any button to confirm order");
          // mystery soup; no cheese
        }else if (sInput.toLowerCase().includes(`y`) && this.onion== true && this.cheese == false){
          aReturn.push("Your order has a 🧅Onion soup");
          aReturn.push("Cost = $9.99");
          aReturn.push("Please press any button to confirm order");
          // onion soup; no cheese
        }else if (sInput.toLowerCase().includes(`n`)){
          aReturn.push("Sorry looks like you do not have anything in your order, please try again");

        }else{
          aReturn.push("Sorry we were not able to catch that");
        }
        this.stateCur = this.OrderState.CONFIRMING;
        return aReturn;
        
        },
        
        CONFIRMING: (sInput) =>{
        let aReturn = [];
        this.isDone = true;
        
        if (sInput()){
          aReturn.push("Thank you for ordering, your delivery is on the way to the location linked");
          aReturn.push("Thank you for using Evry-Byte!");
        }
        return aReturn;
        },
        
        
      };
        
  
      this.stateCur = this.OrderState.WELCOMING;
      this.isDone = false;
      this.sFrom = sFrom;

      this.sandwich = false;
      this.cuban = false;
      this.panini = false;
      this.soup = false;
      this.mystery = false;
      this.onion = false;
      this.cheese = false;
    }
    handleInput(sInput) {
      return this.stateCur(sInput);
    }
    isDone() {
      return this.isDone;
    }
  }