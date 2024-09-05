class ErrorResponse {
    constructor(data, error) {
      this.code = data.code ?? error.code
      this.status = data.status ?? error.status;
      this.message = data.message ?? error.message;
    } 
}
export default ErrorResponse