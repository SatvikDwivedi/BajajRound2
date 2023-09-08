const express= require('express') ; 

const app = express() ; 
const PORT  = 8080; 

app.use(express.json()) ; 

app.get('/',(req,res)=>{
       res.status(200).send({
            operation_code: 1 
       })
});

app.post('/bfhl', (req,res)=>{
      
      const {id} = req.params ; 
      const {data} = req.body ;
      function isNumber(str) {
        return !isNaN(parseFloat(str)) && isFinite(str);
      }
      function isAlphabetCharacter(str) {
        return /^[a-zA-Z]$/.test(str);
      }
      const alphabetArray = data.filter((str) => isAlphabetCharacter(str));
      // Find numbers in the array
      const numbersArray = data.filter((str) => isNumber(str));

      const highestAlphabet = data.reduce((max, current) => {
        return current > max ? current : max;
      }, 'a');

      if(!data) res.send("No data is there !! ") ; 
      else { 
      res.status(200).send(
        {
            is_success: `true`,
            user_id: `Satvik_Dwivedi_RA2011003010140`,
            email : `sd0815@srmist.edu.in`,
            roll_number: `RA2011003010140`,
            numbers: numbersArray, 
            alphabets: alphabetArray,
            highest_alphabet: highestAlphabet 
            
        });
    }

}) ; 

app.listen(PORT, ()=>{
   console.log(`App running on port: ${PORT} ` ) ; 

})  ;