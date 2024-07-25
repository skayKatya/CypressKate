import garagePageSteps from "../../support/steps/GaragePage";
import requestBody from "../../fixtures/requestBody";
import createNewPost  from "../../fixtures/createNewPost";
import updatePost  from "../../fixtures/updatePost";



const login = Cypress.env('login')
const password = Cypress.env('password')

describe ('Intercept response for creating a car', ()=> {
    beforeEach(() => {
        cy.visit('/')
        cy.get('.btn.btn-outline-white.header_signin').click()
        cy.get('#signinEmail').type(login)
        cy.get('#signinPassword').type(password, { sensitive: true })
        cy.get('.btn.btn-primary').contains('Login').click()
        })  

    it('user can add a car into a garage', ()=> {

        const carBrandId = 4
        const carModelId = 18
        const initialMileage = 1000

       
        cy.intercept('POST', '/api/cars').as('createCar')
           
        garagePageSteps.addCar({
            carBrandId,
            carModelId,
            initialMileage,
          });

          cy.wait('@createCar')
          .then(({request: req}) => {
           console.log(req.body);

            expect(req.body.carBrandId).to.eq(carBrandId);
            expect(req.body.carModelId).to.eq(carModelId);
            expect(req.body.mileage).to.eq(initialMileage);
          })
        });
      });
   
        


describe ('API testing', ()=> {
   
    it('User can get post by id', ()=> {
        
       const id = 1
    //     const requestBody = {
    //     userId: 1,
    //     id: 1,
    //     title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    //     body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
    //   };

       cy.api({
        url: `https://jsonplaceholder.typicode.com/posts/${id}`,
        method: "GET"
       }).as('postbyId')

       cy.get('@postbyId').should((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.id).to.eq(id)
        expect(response.body).to.have.keys(['userId', 'title', 'body', 'id'])
        expect(response.body).to.deep.equal(requestBody)
       })
    });

    it('User can get posts list', ()=> {

        const totalPostsCount = 100
 
        cy.api({
         url: `https://jsonplaceholder.typicode.com/posts`,
         method: "GET"
        }).as('posts')
 
        cy.get('@posts').should((response) => {
         expect(response.status).to.eq(200)
         expect(response.body).to.be.an('array');
         expect(response.body.length).to.eq(totalPostsCount)

      response.body.forEach((post) => {
        expect(post).to.have.keys(['userId', 'title', 'body', 'id']);
            })
        })
    })

    it('User can create new post', ()=> {
        // const requestBody = {
        //     title: 'Kate test',
        //     body: 'This is a test',
        //     userId: 1,
        //   }
      
          cy.api({
            url: 'https://jsonplaceholder.typicode.com/posts/',
            method: "POST",
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
            body: createNewPost
          }).as('createPost')
      
          cy.get('@createPost').should((response) => {
            expect(response.status).to.eq(201)
            expect(response.body).to.have.keys(['userId', 'title', 'body', 'id'])
            expect(response.body).to.deep.equal({...createNewPost, id: 101})
            expect(response.body.userId).to.eq(createNewPost.userId)
            expect(response.body.title).to.eq(createNewPost.title)
            expect(response.body.body).to.eq(createNewPost.body)
          })
     });

    it('User can update post by id', ()=> {

        const id = 1
        // const requestBody = {
        //     title: 'Kate test2',
        //     body: 'This is a test2',
        //     userId: 1,
        //   }
      
          cy.api({
            url: `https://jsonplaceholder.typicode.com/posts/${id}`,
            method: "PUT",
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
            body: updatePost
          }).as('updatePost')
      
          cy.get('@updatePost').should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.keys(['userId', 'title', 'body', 'id'])
            expect(response.body.id).to.eq(id)
            expect(response.body.userId).to.eq(updatePost.userId)
            expect(response.body.title).to.eq(updatePost.title)
            expect(response.body.body).to.eq(updatePost.body)
          })
    });

    it('User can delete post by id', ()=> {
        const id = 1
    cy.api({
      url: `https://jsonplaceholder.typicode.com/posts/${id}`,
      method: "DELETE"
    }).as('deletePost')

    cy.get('@deletePost').should((response) => {
      expect(response.status).to.eq(200)
    })
  });
 })
