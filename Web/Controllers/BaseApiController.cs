using Database;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Web.Extensions;

namespace Web.Controllers
{
    [Authorize]
    [ApiController]
    [ExceptionFilter]
    public class BaseApiController : ControllerBase
    {
        public BaseApiController ()
        {
            TestEntities.UsernameGetterFunction = () =>
            {

                var username = HttpContext.User.Claims.SingleOrDefault(c => c.Type == ClaimTypes.Name);
                return username != null ? username.Value : "";
            };
        }
    }
}
