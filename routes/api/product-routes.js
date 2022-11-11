const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// get all products
router.get('/', (req, res) => {
  Product.findAll({
    attributes: [
     'id',
     'product_name',
    ],
    include: [
     {
       model: Category,
       attributes: ['category_name'],
     },
     {
       model: Tag,
       attributes: ['tag_name'],
     }
    ]
   })
     .then(dbProductData => res.json(dbProductData))
     .catch(err => {
       console.log(err);
       res.status(500).json(err);
     });
  // be sure to include its associated Category and Tag data
});

// get one product
router.get('/:id', (req, res) => {
  Product.findOne({
    attributes: [
      "id",
      'product_name',
      'category_id',
    ],
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Category,
        attributes: ['category_name'],
      },
      {
        model: Tag,
      }
    ]
  })
  .then(dbProductData => res.json(dbProductData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// create new product
router.post('/', (req, res) => {
  Product.create({
    product_name: req.body.product_name,
    price: req.body.price,
    stock: req.body.stock,
    category_id: req.body.category_id
  })
    .then((dbProduct) => res.status(200).json(dbProduct))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// update product
router.put('/:id', (req, res) => {
  // update product data
  Product.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((dbProduct) => res.json(dbProduct))
    .catch((err) => {
      // console.log(err);
      res.status(400).json(err);
    });
});

router.delete('/:id', (req, res) => {
  // delete one product by its `id` value
  Product.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbProductData => {
      if (!dbProductData) {
        res.status(404).json({ message: 'No product found with this id!' });
        return;
      }
      res.json(dbProductData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
