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

describe('Req 2(contr): Cria um endpoint para listar os produtos', () => {
  const payloadProduct = {
    name: 'product_name',
    quantity: 20
  };

  describe('Quando a lista de produtos é gerada com sucesso', () => {
    const req = {};
    const res = {};

    before(() => {
      req.body = payloadProduct;

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      
      const execute = [
        {
          id: 1,
          name: 'produto A',
          quantity: 10
        },
        {
          id: 2,
          name: 'produto B',
          quantity: 20
        }
      ];

      sinon.stub(productsService, 'readProducts').resolves(execute);
    });

    after(() => {
      productsService.readProducts.restore();
    });
    
    it('É chamado o status com o código 200', async () => {
      await productsController.readProducts(req, res);

      expect(res.status.calledWith(200)).to.be.equal(true);
    });
  });
});

describe('Req 3(contr): Cria um endpoint para atualizar um produto', () => {
  const payloadProduct = {
    id: 3,
    name: 'product_name',
    quantity: 30
  };

  describe('Quando o produto é atualizado com sucesso', () => {
    const req = {};
    const res = {};

    before(() => {
      req.body = payloadProduct;
      req.params = 3;

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      
      const execute = { id: 2, name: 'product_name', quantity: 10 };
      sinon.stub(productsService, 'update').resolves(execute);
    });

    after(() => {
      productsService.update.restore();
    });
    
    it('É chamado o status com o código 200', async () => {
      await productsController.update(req, res);

      expect(res.status.calledWith(200)).to.be.equal(true);
    });
  });
});

describe('Req 4(contr): Cria um endpoint para deletar um produto', () => {
  const payloadProduct = {
    id: 4,
    name: 'product_name',
    quantity: 30
  };

  describe('Quando o produto é deletado com sucesso', () => {
    const req = {};
    const res = {};

    before(() => {
      req.params = 4;

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      
      const execute = { id: 4, name: 'product_name', quantity: 10 };
      sinon.stub(productsService, 'remove').resolves(execute);
    });

    after(() => {
      productsService.remove.restore();
    });
    
    it('É chamado o status com o código 200', async () => {
      await productsController.remove(req, res);

      expect(res.status.calledWith(200)).to.be.equal(true);
    });
  });
});