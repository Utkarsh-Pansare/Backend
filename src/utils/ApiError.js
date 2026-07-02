class ApiError extends Error {
    constructor(statusCode, message="Something went wrong",errors=[],stack="") {
        super(message);
        this.statusCode = statusCode;// Add a statusCode property to hold the HTTP status code
        this.errors = errors;// Add an errors property to hold an array of error messages
       
        this.data=null; // Add a data property to hold additional information
        this.message = message; // Add a message property to hold the error message
        this.success = false; // Add a success property to indicate the success status

        if(stack){
            this.stack = stack;// If a stack trace is provided, set the stack property to the provided value
        }
        else{
            Error.captureStackTrace(this, this.constructor);// Capture the stack trace for the error
        }
    }
}
export {ApiError}; 