jQuery("#loginform").validate({
    rules:{
        mail1:{
            required:true,
            email:true,
            minlength:10,
            
        },
        pass1:{
            required:true,
            minlength:6,
            maxlength:15
        }
    }
})

        

    
