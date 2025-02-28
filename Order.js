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
            cuban = true;
            aReturn.push(`Going foward with the Cuban Sandwich is a good idea`);
            //this.stateCur = this.OrderState.FINALIZING; 
          }
          else if (sInput.toLowerCase().includes(`panini`) && this.sandwich == true){
            this.panini = true;
            aReturn.push(`Going foward with the Panini Sandwich is a good idea`);

          } else if (sInput.toLowerCase().includes(`mystery`) && this.soup == true){ 
            this.mystery = true;
            aReturn.push(`Mystery soup is a wonderful choice`);
          }
          else if (sInput.toLowerCase().includes(`onion`) && this.soup == true){
            this.onion = true;
            aReturn.push(`Onion soup is a wonderful choice`);
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

          aReturn.push(`would you like an additional grilled cheese for $3.99`);
          if (sInput.toLowerCase().includes(`y`)){
            aReturn.push(`A grilled cheese will be added to your total`);     
            this.cheese = true;      
          }else if (sInput.toLowerCase().includes(`n`)){

          }


          /*
          if (sInput.toLowerCase().includes(`cuban`)&& this.cuban == true && this.sandwich == true){
          
          }else if (sInput.toLowerCase().includes(`panini`)&& this.panini == true && this.sandwich == true){

          }else if (sInput.toLowerCase().includes(`mystery`)&& this.mystery == true && this.soup == true){

          }else if (sInput.toLowerCase().includes(`onion`)&& this.onion == true && this.soup == true){

          }else{
            aReturn.push(`Sorry, didn't catch that`);
            aReturn.push(`You might have to restart your order, sorry!`);
          } */
          this.stateCur = this.OrderState.FINALIZING; 
          return aReturn;
        },
        FINALIZING: (sInput) =>{
        let aReturn = [];
        this.isDone = true;
        if (sInput == `ies` ){

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