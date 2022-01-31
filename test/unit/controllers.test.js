const { expect } = require('chai');
const sinon = require('sinon');
const productsService = require('../../services/productsService');
const productsController = require('../../controllers/productsController');

describe('Req 1(contr): Cria um endpoint para o cadastro de produtos', () => {
  const payloadProduct = {
    name: 'product_name',
    quantity: 20
  };

  describe('Quando o produto é inserido com sucesso', () => {
    const req = {};
    const res = {};

    before(() => {
      req.body = payloadProduct;

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      
      const execute = { id: 1, name: 'product_name', quantity: 10 };
      sinon.stub(productsService, 'create').resolves(execute);
    });

    after(() => {
      productsService.create.restore();
    });
    
    it('É chamado o status com o código 201', async () => {
      await productsController.create(req, res);

      expect(res.status.calledWith(201)).to.be.equal(true);
    });
  });
});