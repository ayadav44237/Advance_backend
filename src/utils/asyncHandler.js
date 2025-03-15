// exection using Promise(extended better less boilercode)

const asyncHandler=(requestHandler)=>{
 return   (req,res,next)=>{
    Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
    }
}
// const asyncHandler=()=>{}
export {asyncHandler}

// below is how we executing is using try catch
// const asyncHandler=()=>{};
// const asyncHandler=(fun)=>{()=>{}}
// const asyncHandler=(fun)=>()=>{}

//below funtion is higher order function which is similar to above explanation


/*
const asyncHandler =(fn)=> async( req,res,next)=>{
   try {
    await fn(req,res,next);
    
   } catch (error) {
    //  console.log("Error ",error) or
    res.status(error.code|| 500).json({
        success:false,
        message:error.message
    })
   }
}*/