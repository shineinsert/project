using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;

namespace Web.Extensions
{
    public class ExceptionFilter : ExceptionFilterAttribute
    {
        public ExceptionFilter()
        {

        }

        public override void OnException(ExceptionContext context)
        {
            //Logger.Main.LogError("InternalServerError", context.Exception);


            HttpStatusCode status = HttpStatusCode.InternalServerError;
            var exceptionType = context.Exception.GetType();
            var message = context.Exception.Message;

            context.ExceptionHandled = true;
            HttpResponse response = context.HttpContext.Response;
            response.StatusCode = (int)status;
            response.ContentType = "application/json";
            context.Result = new ObjectResult(new { Message = message });

            //var result = new ViewResult { ViewName = "CustomError" };
            //result.ViewData = new ViewDataDictionary(_modelMetadataProvider, context.ModelState);
            //result.ViewData.Add("Exception", context.Exception);

            //context.Result = result;
        }

    }
}