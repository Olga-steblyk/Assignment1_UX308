export class Order {
    constructor(sFrom) {
      this.OrderState = {
        WELCOMING: () => {
          let aReturn = [];
          this.stateCur = this.OrderState.RESERVING;
          aReturn.push("Welcome to Evry-Bye");
          aReturn.push("What would you like to order?");
          return aReturn;
        },
        //option btw soup + grill cheese / sandwich + chips / salad + more salad
        RESERVING: (sInput) => {
          let aReturn = [];
          this.isDone = true;
          let sandwich = false;
          let cuban = false;
          let panini = false;
          let soup = false;
          let mystery = false;
          let onion = false;
          var cost = 0;
          this.stateCur = this.OrderState.ORDERING;
          
            if (sInput.toLowerCase().includes('menu')) {
              aReturn.push(`The menu today is a daily soup and special sandwich`);
              
            } else if (sInput.toLowerCase().includes('sandwich')) { //Sandwich menu item
              aReturn.push(`A sandwich is a great idea! Today we have the Cuban for $10.99 or the Panini for $11.99`);
              sandwich = true;
              
              if (sInput.toLowerCase().includes(`cuban`)){
                cuban = true;
                aReturn.push(``);
              }
              else if (sInput.toLowerCase().includes(`panini`)){
                panini = true;

              }
              else {
                aReturn.push(`Sorry, didn't catch that`);
              }
              //return aReturn;
            } else if (sInput.toLowerCase().includes(`soup`)) { // soup menu item
              aReturn.push(`Soup is a great idea! Today we have daily mystery soup for $8.99 or the onion soup for $9.99`);
              soup = true;
              if (sInput.toLowerCase().includes(`mystery`)){ 
                mystery = true;
              }
              //return aReturn;
              else if (sInput.toLowerCase().includes(`onion`)){
                onion = true;
              }
            }
            else {
              aReturn.push("Thanks for trying our reservation system");
              aReturn.push("Maybe next time");
            }
          
          
          return aReturn;
        },
        ORDERING: (sInput) => {
          let aReturn = [];
          this.isDone = true;
          if (sInput.toLowerCase().includes('menu')) {
            aReturn.push(`The menu today is a daily soup and special sandwich`);
            //let d = new Date();
            //d.setMinutes(d.getMinutes() + 120);
            //aReturn.push(`Please pick it up at 123 Tidy St., Acton before ${d.toTimeString()}`);
          } else if (sInput.toLowerCase().includes('menu')) {
            
          } else {
            aReturn.push("Thanks for trying our reservation system");
            aReturn.push("Maybe next time");
          }
          return aReturn;
        }
      };
        
  
      this.stateCur = this.OrderState.WELCOMING;
      this.isDone = false;
      this.sFrom = sFrom;
    }
    handleInput(sInput) {
      return this.stateCur(sInput);
    }
    isDone() {
      return this.isDone;
    }
  }