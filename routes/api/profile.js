const express = require('express');
const router = express.Router();
const auth = require("../../middleware/auth")
const { check, validationResult } = require('express-validator');
const Profile = require("../../models/Profile")


// @route GET api/profile/me
// @desc Get Profle of Curent User
// @acess Private route

//register user
// @route    POST api/auth
// @desc     Authenticate user & get token
// @access   Public




  
router.post(
    '/',
    check('name', 'Name is required').notEmpty(),
    check('age', 'age is required').notEmpty(),
    check('city', 'city is required').notEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('qualification', 'qualification is required').notEmpty(),
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      const { name, age,city,email, qualification } = req.body;
  
      try {
    
  
     
          profile = new Profile({
            name,
            age,
            city,
            email,
            qualification
          });
    
  
  
        await profile.save();
  
        res.json({ msg: "Profile Created",});
  
         
  
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
      }
    }
  );
  
  
  router.get('/', auth, async (req, res) => {
    try {
      const profile = await Profile.find({});
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

module.exports = router;