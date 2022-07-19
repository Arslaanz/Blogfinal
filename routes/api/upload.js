let express = require('express'),
  multer = require('multer'),
  uuidv4 = require('uuid/v4'),
  router = express.Router();
let uploads = require('../../models/Uploads');
const auth = require('../../middleware/auth');
let path = require('path');
const Users = require('../../models/Users');
const { check, validationResult } = require('express-validator');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, '../../public/'));
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(' ').join('-');
    cb(null, uuidv4() + '-' + fileName);
  },
});

var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == 'image/png' ||
      file.mimetype == 'image/gif' ||
      file.mimetype == 'image/jpeg'
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only .GIF, .PNG and .JPEG format allowed!'));
    }
  },
});

// uploads
router.post('/', auth, upload.single('image'), async (req, res, next) => {
  
  

  const userupload = new uploads({
    user: req.user.id,
    Name: req.body.Name,
    image: 'https://foodblogfinal.herokuapp.com' + '/public/' + req.file.filename,
    Text:req.body.Text,
  });

  userupload
    .save()
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        error: err,
      });
    });
});

//get all Uploads
router.get('/', async (req, res, next) => {
  try {
    const Uploads = await uploads.find().sort({ date: -1 });
    res.json(Uploads);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//edit uplodad
router.post(
  '/edit',
  [[check('Text', 'Text is required').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      Text,
      Name,
      id
    } = req.body;

    const uploadsFields = {};
    uploadsFields.id = id;
    if (Name) uploadsFields.Name = Name;
    if (Text) uploadsFields.Text = Text;
  
   
    

    try {
      let Uploads = await uploads.findById(id);
     
      //update
      if (Uploads) {
        let Upload = await uploads.findOneAndUpdate(
          { _id: id },
          { $set: uploadsFields },
          { new: true }
        );
        return res.json(uploads);
      }

      
      await Upload.save();
      
      res.json(Upload);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('server Error');
    }
  }
);

// @route    DELETE api/posts/:id
// @desc     Delete a post
// @access   Private
router.delete('/:id', async (req, res) => {
  try {
    const post = await uploads.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    }

    await post.remove();

    res.json({ msg: 'Post removed' });
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});


//get user uploads
router.get('/:id', async (req, res) => {
  try {
    const Uploads = await uploads.find({ user: req.params.id}).sort({ date: -1 });;
    if (!Uploads) {
      return res.status(404).json({
        msg: 'Uploads not found',
      });
    }
    res.json(Uploads);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({
        msg: 'Uploads not found',
      });
    }
    res.status(500).send('Server Error');
  }
});

//get user uploads
router.get('/single/:id', async (req, res) => {
  try {
    const Uploads = await uploads.findById(req.params.id).sort({ date: -1 });;
    if (!Uploads) {
      return res.status(404).json({
        msg: 'Uploads not found',
      });
    }
    res.json(Uploads);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({
        msg: 'Uploads not found',
      });
    }
    res.status(500).send('Server Error');
  }
});


//get user uploads for landing page
router.get('/last/five/uploads', async (req, res) => {
  try {
    const Uploads = await uploads.find().sort({ date: -1 }).limit(6);
    res.json(Uploads);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});






module.exports = router;
