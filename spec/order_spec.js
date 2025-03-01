import { Order } from '../Order.js';

describe("Tests all stages of an order", function() {
    it("test welcome", function() {
        const oOrder = new Order("999-999-9999");
        const aResults = oOrder.handleInput("hello ");
        expect(aResults[0]).toBe("Welcome to Evry-Bye");
    });
    it("test sandwich", function() { // choose for sandwich
        const oOrder = new Order("999-999-9999");
        oOrder.handleInput("hello");
        const aResults = oOrder.handleInput("sandwich");
        expect(aResults[0]).toBe("A sandwich is a great idea! Today we have the Cuban for $10.99 or the Panini for $11.99");
    });
    it("test sandwich type", function() {
        const oOrder = new Order("999-999-9999");
        oOrder.handleInput("hello");
        const aResults = oOrder.handleInput("sandwich");
        const aResults1 = oOrder.handleInput("cuban");
        expect(aResults1[0]).toBe("Going foward with the Cuban Sandwich is a good idea");
    });
    it("test add -on", function() {
        const oOrder = new Order("999-999-9999");
        oOrder.handleInput("hello");
        const aResults = oOrder.handleInput("sandwich");
        const aResults1 = oOrder.handleInput("cuban");
        const aResults2 = oOrder.handleInput("y");
        expect(aResults2[0]).toBe("A grilled cheese (1) will be added to your total!");
    });
    it("test add -on", function() {
        const oOrder = new Order("999-999-9999");
        //var this.cuban = true;
        //var this.cheese = true;
        this.cuban == true; 
        this.cheese == true;
        oOrder.handleInput("hello");
        const aResults = oOrder.handleInput("sandwich");
        const aResults1 = oOrder.handleInput("cuban");
        const aResults2 = oOrder.handleInput("y");
        const aResults3 = oOrder.handleInput("yeah!");
        expect(aResults3[0]).toBe("Your order has a Cuban sandwich and grilled cheese!");
    });
    it("test add -on", function() {
        const oOrder = new Order("999-999-9999");
        //var this.cuban = true;
        //var this.cheese = true;
        this.cuban == true; 
        this.cheese == true;
        oOrder.handleInput("hello");
        const aResults = oOrder.handleInput("sandwich");
        const aResults1 = oOrder.handleInput("cuban");
        const aResults2 = oOrder.handleInput("y");
        const aResults3 = oOrder.handleInput("yeah!");
        const aResults4 = oOrder.handleInput("confirm");
        expect(aResults4[0]).toBe("Thank you for ordering, your delivery is on the way to the location linked");
    });
  });
  
  