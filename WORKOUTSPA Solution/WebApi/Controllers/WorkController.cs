using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BuisnessLogic1;

namespace WebApi.Controllers
{
    public class WorkController : ApiController
    {
       
       
        public IHttpActionResult Get()
        {
            var ObjRepository = new WorkoutRepository();
            return Ok(ObjRepository.ListAllCategory());
        }
    }
}
