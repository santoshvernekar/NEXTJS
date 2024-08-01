const requestHandler = async (req, res) => { 
   console.log("hi")
    return  res.json({
        success: true,
      });
}
export default requestHandler