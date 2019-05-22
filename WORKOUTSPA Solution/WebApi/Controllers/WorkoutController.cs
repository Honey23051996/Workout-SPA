using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BuisnessLogic1;

namespace WebApi.Controllers
{
    public class WorkoutController : ApiController
    {
        WorkoutspaEntities db = new WorkoutspaEntities();

        public IHttpActionResult Get()
        {
            var ObjRepository = new WorkoutCollection();
            return Ok(ObjRepository.ListAllCollection());
        }
        public IHttpActionResult Post(workout_collection item)
        {

            db.workout_collection.Add(item);
            int NoOfRowsAffected = db.SaveChanges();
            if (NoOfRowsAffected > 0)
            {
                return StatusCode(HttpStatusCode.Created);
            }
            {
                return BadRequest("Failed To add workout");
            }

        }
        public IHttpActionResult Delete(int id)
        {
            var Obj = db.workout_collection.Find(id);
            if (Obj == null)
            {
                return NotFound();
            }
            db.workout_collection.Remove(Obj);
            var NoOfRowsAffected = db.SaveChanges();
            if (NoOfRowsAffected > 0)
            {
                return StatusCode(HttpStatusCode.NoContent);
            }
            else
            {
                return BadRequest("Failed to Delete workout");
            }
        }
        public IHttpActionResult Put(workout_collection obj)
        {
            db.workout_collection.Attach(obj);
            db.Entry(obj).State = System.Data.Entity.EntityState.Modified;

            var NoOfRowsAffected = db.SaveChanges();
            if (NoOfRowsAffected > 0)
            {
                return StatusCode(HttpStatusCode.Accepted);
            }
            else
            {
                return BadRequest("Failed To Modify supplier");
            }

        }
    }
}
