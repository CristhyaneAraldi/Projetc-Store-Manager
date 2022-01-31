const { expect } = require('chai');
const sinon = require('sinon');
// const connection = require('../../models/connection');
const productsModel = require('../../models/productsModel');

describe('Req 1(serv): Cria um endpoint para o cadastro de produtos', () => {
  const payloadProduct = {
    name: 'product_name',
    quantity: 20
  };

  describe('Quando o produto é inserido com sucesso', () => {

    before(async () => {
      const execute = { id: 1, name: 'product_name', quantity: 10 };
      sinon.stub(productsModel, 'create').resolves(execute);
    });
  
    after(async () => {
      productsModel.create.restore();
    });

    it('Retorna um objeto', async () => {
      const response = await productsModel.create(payloadProduct);
      expect(response).to.be.a('object')
    });

    it('O objeto possui as chaves id, name e quantity', async () => {
      const response = await productsModel.create(payloadProduct);
      expect(response).to.include.all.keys('id', 'name', 'quantity')
    });
  });
});