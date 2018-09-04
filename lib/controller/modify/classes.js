const classes = require('../../orm').class;
const jwt = require('jsonwebtoken');
module.exports = {
    getClassesServices: function(req,res){
        let detokenize;
        let id;
        let email;
        if(req.params.token){
            try{
              detokenize = jwt.verify(req.params.token,'q^nKm@T8t>');
              id = detokenize['id'];
              email = detokenize['email'];
            }
            catch{
                res.status(401).json('unable to authenticate');
            }
            if(id && email){
                classes.getClasses(id,function(err,data){
                    if(err) res.status(404).json('no class found');
                    let Services = [];
                    console.log(data[0]);
                    if(data){
                        let index = 0;
                        data[0].map((element,i)=>{
                                
                                
                                if(i === 0){
                                    Services.push({name:element['service'],
                                                        classes:[]});
                                    Services[i].classes.push({class:element['class_name'],id:element['id']});
                                    
                                }
                                else if(Services[index].name.toLowerCase() === element['service'].toLowerCase()){
                                    Services[index].classes.push({class:element['class_name'],id:element['id']});
                                }
                                else{
                                    Services.push({name:element['service'],
                                                        classes:[]});
                                    index++;
                                    Services[index].classes.push({class:element['class_name'],id:element['id']});
                                    
                                }
                        })
                        res.status(200).json(Services);
                    }
                   
                    
                })
            }
     }
    },
    getClasses:function (req,res){
        let detokenize;
        let id;
        let email;
        if(req.params.token){
            try{
              detokenize = jwt.verify(req.params.token,'q^nKm@T8t>');
              id = detokenize['id'];
              email = detokenize['email'];
            }
            catch{
                res.status(401).json('unable to authenticate');
            }
            if(id && email){
                classes.getClasses(id,function(err,data){
                    if(err){ res.status(404).json('no class found');}
                    else {
                        res.status(200);
                        res.json(data[0]);
                    }
                    
                });
            }
        }
    },
    getClassDates: function(req,res){
        console.log(req.params.token);
        let detokenize;
        let id;
        let email;
        let classId = req.params.class_id;
        if(req.params.token){
            try{
                detokenize = jwt.verify(req.params.token,'q^nKm@T8t>');
                id = detokenize['id'];
                email = detokenize['email'];
              }
              catch{
                  res.status(401).json('unable to authenticate');
              }
              if(id && email){
                  classes.getClassDates(classId,function(err,result){
                      if(err) {res.status(404);}
                      else{ 
                          console.log(result);
                          res.status(200);
                          res.json({dates:result[0]});
                        }
                  })
              }
        }
        

    }
}
