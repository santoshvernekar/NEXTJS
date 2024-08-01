export const errorHandler=(res,statusCode=500,message="Internal server Error")=>{
     return res.status(statusCode).json({
        success:false,
        message
     })
};