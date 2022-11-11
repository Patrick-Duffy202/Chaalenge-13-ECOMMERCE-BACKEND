const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
//get all categories
router.get('/', (req, res) => {
  Category.findAll({
   attributes: [
    'id',
    'category_name',
   ],
   include: [
    {
      model: Product,
    }
   ]
  })
    .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  // be sure to include its associated Products
});

//get individual category
router.get('/:id', (req, res) => {
  Category.findOne({
    attributes: [
      'id',
      'category_name',
    ],
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Product,
      },
    ]
  })
  .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//Add Category
router.post('/', (req, res) => {
  Category.create({
    category_name: req.body.category_name,
  })
  .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
  });

// update a category by its `id` value
router.put('/:id', (req, res) => {
  Category.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id
    }
  })
    .then(dbCategoryData => {
      if (!dbCategoryData[0]) {
        res.status(404).json({ message: 'No category found with this id' });
        return;
      }
      res.json(dbCategoryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


//delete category by id
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbCategoryData => {
      if (!dbCategoryData) {
        res.status(404).json({ message: 'No category found with this id!' });
        return;
      }
      res.json(dbCategoryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
