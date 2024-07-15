///<reference types="Cypress"/>
describe('Crypto_API', () => {
    const baseurl = "https://crypto-wallet-server.mock.beeceptor.com";
    it('Register a user', () => {
        cy.request({
            method:"POST",
            url:baseurl+"/api/v1/register",
            headers:{
                "Content-Type":"application/json"
            }
        }).then((Response)=> {
            expect(Response.status).to.eq(200);
            cy.log(JSON.stringify(Response.body))

        })
    });
    it('Login', () => {
        cy.request({
            method:"POST",
            url:baseurl+"/api/v1/login",
            headers:{
                "Content-Type":"application/json"
            }
        }).then((Response)=> {
            expect(Response.status).to.eq(200);
            cy.log(JSON.stringify(Response.body))

        })
    });
    it('Wallet balance', () => {
        cy.request({
            method:"GET",
            url:baseurl+"/api/v1/balance",
        
        }).then((Response)=> {
            expect(Response.status).to.eq(200);
            cy.log(JSON.stringify(Response.body))

        })
    });
    it('Transaction', () => {
        cy.request({
            method:"GET",
            url:baseurl+"/api/v1/transactions",
        
        }).then((Response)=> {
            expect(Response.status).to.eq(200);
            cy.log(JSON.stringify(Response.body))

        })
    });
    it('Transfer', () => {
        cy.request({
            method:"POST",
            url:baseurl+"/api/v1/transactions",
            headers:{
                "Content-Type":"application/json"
            }
        }).then((Response)=> {
            expect(Response.status).to.eq(200);
            cy.log(JSON.stringify(Response.body))

        })
    });
    it('Calculate transaction fees', () => {
        cy.request({
            method:"POST",
            url:baseurl+"/api/v1/transaction_fee",
            headers:{
                "Content-Type":"application/json"
            }
        }).then((Response)=> {
            expect(Response.status).to.eq(200);
            cy.log(JSON.stringify(Response.body))

        })
    });
    it('Currency exchange rate', () => {
        cy.request({
            method:"GET",
            url:baseurl+"/api/v1/exchange_rates",
        
        }).then((Response)=> {
            expect(Response.status).to.eq(200);
            cy.log(JSON.stringify(Response.body))

        })
    });
});