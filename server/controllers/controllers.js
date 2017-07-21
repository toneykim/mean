const mongoose = require('mongoose');

let User = mongoose.model("User");
module.exports = {
  // enter controller methods here
  /*
  getcars: ( req, res ) => {
    Car.find({}, ( err, listofcars) => {
      if(err){
        let errors = [];
        for(let x in err.errors){
          errors.push(err.errors[x].message);
        }
        res.status(400).send(errors);
      } else {
        return res.json(listofcars)
      }
    })
  
  },

  addcar: (req, res) => {
    let car = new Car(req.body)
    car.save( ( err, newcar) => {
      if(err){
        let errors = [];
        for(let x in car.errors){
          errors.push(car.errors[x].message);
        }
        return res.status(500).send(errors);
      } else{
        return res.json(newcar)
      }
    })
  },

*/

  session: (req,res) => {
    if (req.session.name === undefined ) {
      console.log("Anonymous");
      //console.log(res.json("Anonymous"));
      //return res.json("Anonymous");
      return res.json("Anon");
    } else {
      console.log("002 session name :"+ req.session.name)

    return req.session.name;
  }

  },



  checkuser: (req, res) => {
    console.log("001 : " + req.body.email2);


    User.find({email: req.body.email2}, (err, listofUsers) => {
      console.log("list of users check : "+ Object.keys(listofUsers).length ) ;
 


      if(Object.keys(listofUsers).length == 0 ){
              return res.json("no user found");
              console.log("no user found")
           } else {


            //res.redirect('/access');
            console.log("found");
            //redirect('/access'); 


            console.log("session listofUsers.name :"+listofUsers[0].name);
            req.session.name = listofUsers[0].name;
            console.log("session.name :"+ req.session.name);           
            return res.json("Found");

           
           }
      })      
  


  },  


access: (req,res)=>{



},



           // let user = new User(req.body)
           // user.save( ( err, newUser) => {
             // if(err){
               // let errors = [];
               // for(let x in user.errors){
                //  errors.push(user.errors[x].message);
              //  }
               // return res.status(400).send(errors);
               //       } else{
                 //       return res.json(newUser)
                 //     }
           //}
   //  })

      //}



    //})
 


 // },


  getusers: ( req, res ) => {
    User.find({}, ( err, listOfUsers) => {
      if(err){
        let errors = [];
        for(let x in err.errors){
          errors.push(err.errors[x].message);
        }
        res.status(400).send(errors);
      } else {
        return res.json(listOfUsers)
      }
    })
  
  },

  adduser: (req, res) => {

    console.log("email check : "+ req.body.email)

    User.find({email: req.body.email}, ( err, listOfUsers) => {
      console.log("listOfUsers :"+listOfUsers )

      if(listOfUsers == ""){


            let user = new User(req.body)
            user.save( ( err, newUser) => {
              if(err){
                let errors = [];
                for(let x in user.errors){
                  errors.push(user.errors[x].message);
                }
                return res.status(400).send(errors);
                      } else{
                        return res.json(newUser)
                      }
            })

      }
      else
      {

        console.log("error in adding user")
        return res.json("error")

      }


    })        
  }





}