import { Products } from '../Models/ProductsModel.js';

const create = async (request, response) => {
  const { title, description, price, category } = request.body;

  try {
    const product = await Products.create({
      title,
      description,
      price,
      category
    });

    return response.status(201).json(product);
  } catch (error) {
    return response.status(500).json(error);
  }
};

const findAll = async (request, response) => {
  try {
    const products = await Products.find();

    return response.status(200).json(products);
  } catch (error) {
    return response.status(500).json(error);
  }
};

const findSome = async (request, response) => {
  const { title, category } = request.headers;

  try {
    const productsByTitle = await Products.find({ title });
    const productsByCategory = await Products.find({ category });

    return response.status(200).json({ productsByTitle, productsByCategory });
  } catch (error) {
    return response.status(500).json(error);
  }
};

const update = async (request, response) => {
  const { id } = request.params;

  const productExists = await Products.findById({ _id: id });

  if (!productExists) {
    return response.status(404).json({ message: 'Product does not exist!' });
  }

  try {
    const product = await Products.findByIdAndUpdate(
      { _id: id },
      request.body,
      { new: true }
    );

    return response.status(200).json({ product });
  } catch (error) {
    return response.status(500).json(error);
  }
};

const remove = async (request, response) => {
  const { id } = request.params;

  try {
    const productExist = await Products.findById({ _id: id });

    if (!productExist) {
      return response.status(404).json({ message: 'Product does not exist!' });
    }

    await Products.findByIdAndDelete({ _id: id });

    return response.status(204).json();
  } catch (error) {
    return response.status(500).json(error);
  }
};

export default { create, findAll, findSome, update, remove };
