class GaragePage {
    addCarButton = '.btn.btn-primary'
    selectCarBrand = 'select#addCarBrand'
    selectCarModel = 'select#addCarModel'
    addCarMileage = 'input#addCarMileage'
    addButton = '.modal-footer > .btn.btn-primary'

    addFuelexpenseButton = 'li:nth-of-type(1) > app-car .btn.btn-success.car_add-expense'
    addExpenseCar = 'select#addExpenseCar'
    addExpenseMileage = 'input#addExpenseMileage'
    addExpenseLiters = 'input#addExpenseLiters'
    addExpenseTotalCost = 'input#addExpenseTotalCost'
    addExpenseButton = '.modal-footer > .btn.btn-primary'

    getaddCarButton() {
        return cy.get(this.addCarButton)
    }
    
    getselectCarBrand() {
        return cy.get(this.selectCarBrand)
    }

    getselectCarModel() {
        return cy.get(this.selectCarModel)
    }

    getaddCarMileage() {
        return cy.get(this.addCarMileage)
    }

    getaddButton() {
        return cy.get(this.addButton)
    }

    getaddFuelexpenseButton() {
        return cy.get(this.addFuelexpenseButton)
    }

    getaddExpenseCar() {
        return cy.get(this.addExpenseCar)
    }

    getaddExpenseMileage() {
        return cy.get(this.addExpenseMileage)
    }

    getaddExpenseLiters() {
        return cy.get(this.addExpenseLiters)
    }

    getaddExpenseTotalCost() {
        return cy.get(this.addExpenseTotalCost)
    }

    getaddExpenseButton() {
        return cy.get(this.addExpenseButton)
    }

}

const garagePage = new GaragePage()
export default garagePage;