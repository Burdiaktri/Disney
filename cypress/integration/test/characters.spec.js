describe("Characters API testing", () => {

    it("GET", () => {
        cy.request({
            method: "GET",
            url: "http://localhost:8080/characters",

        }).then((response) => {

            expect(response.status).equal(200)
            expect(response.body).not.to.be.null
         
        })
    })

    it("POST - No token provided", () => {

        const character = {
            image: "test", 
            name: "test",
            age: 1234, 
            story: "test"
        }

        cy.request({
            method: "POST",
            url: "http://localhost:8080/characters",
            body: character,
            failOnStatusCode: false

        }).then((response) => {

            expect(response.status).equal(500)

        })
    
})

})
