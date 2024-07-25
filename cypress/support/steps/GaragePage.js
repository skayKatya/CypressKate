import garagePage from "../pages/GaragePage"

const garagePageSteps = {
    addCar(){
        garagePage.getaddCarButton()
            .contains('Add car').click()
        garagePage.getselectCarBrand()
            .select(3)
        garagePage.getselectCarModel()
            .select(2)
        garagePage.getaddCarMileage()
           .type('1000')
        garagePage.getaddButton()
            .contains('Add').click()
    },

    addFuelExpense() {
        garagePage.getaddFuelexpenseButton()
            .contains('Add fuel expense')
            .click()
        garagePage.getaddExpenseCar()
            .select(0)
        garagePage.getaddExpenseMileage()
        .type("{upArrow}{upArrow}")
        garagePage.getaddExpenseLiters()
            .type('50')
        garagePage.getaddExpenseTotalCost()
            .type('3000')
        garagePage.getaddExpenseButton()
            .contains('Add')
            .click()
    }



    
}

export default garagePageSteps;