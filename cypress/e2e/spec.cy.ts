interface ReqRes {
  requestUrl: string;
  body: string;
}
describe('dump responses', () => {
  it('passes', () => {
    // save all responses
    type Response = {
      method: string;
      body: string;
    };

    let responses: Record<string, Response> = {};

    cy.intercept({ url: '/occ/v2/**' }, (req) => {
      req.on('response', (res) => {
        let url = new URL(req.url);
        let key = url.pathname + url.search;
        responses[key] = { method: req.method, body: res.body };
      });
    });

    let images: any = [];

    cy.intercept(
      {
        url: '//medias/**',
      },
      (req) => {
        req.on('response', (res) => {
          images.push(res);
          // TODO save images
        });
      }
    );

    cy.visit('http://localhost:4200/electronics-spa/en/USD/');
    cy.contains('Brands').click();
    cy.get('cx-product-list-item a').first().click();
    cy.wait(2000);
    cy.get('cx-add-to-cart button[type="submit"]').first().click();
    cy.contains('view cart').click();
    cy.contains('Proceed to Checkout').click();
    cy.writeFile('mock-server/responses.json', responses);
    cy.writeFile('mock-server/media.json', images);
  });
});
