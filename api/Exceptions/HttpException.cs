namespace api.Exceptions
{
    public class HttpException : Exception
    {
        public int HttpCode;
        public string Message;

        public HttpException(int Code, string Message)
        {
            HttpCode = Code;
            this.Message = Message;
        }

    }
}
