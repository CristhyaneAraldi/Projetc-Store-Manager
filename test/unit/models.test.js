const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../models/connection');
const productsModel = require('../../models/productsModel');

describe('Req 1(model): Cria um endpoint para o cadastro de produtos', () => {
  const payloadProduct = {
    name: 'product_name',
    quantity: 'product_quantity'
  }

  before(async () => {
    const execute = [{ id: 1, name: 'product_name', quantity: 10 }];
    sinon.stub(connection, 'execute').resolves(execute);
  });

  after(async () => {
    connection.execute.restore();
  });

  describe('Quando o produto é inserido com sucesso', () => {
    it('Retorna um objeto"', async () => {
      const response = await productsModel.create(payloadProduct);
      expect(response).to.be.a('object')
    });

    it('O atributo "name" está presente no body da requisição', async () => {
      const response = await productsModel.create(payloadProduct);
      expect(response).to.have.a.property('name')
    });

    it('O atributo "quantity" está presente no body da requisição', async () => {
      const response = await productsModel.create(payloadProduct);
      expect(response).to.have.a.property('quantity')
    });
  });
});

describe('Req 2(model): Cria um endpoint para listar os produtos', () => )

