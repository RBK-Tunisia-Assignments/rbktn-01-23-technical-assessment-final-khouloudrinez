const {recepies} =require ('../model/recipiesModel')

const getrecepie = (req, res) => {
  recepies.getAll(function(err,result){
    if(err) {
      res.status(500).send("error")
    } else {
      res.json(result)
    }
      
  })
};

module.exports = {
  getrecepie,
};


