using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BuisnessLogic1
{
   public  class WorkoutCollection
    {
        public List<workout_collection> ListAllCollection()
        {
            try
            {

                WorkoutspaEntities db = new WorkoutspaEntities();

                return db.workout_collection.ToList();

            }
            catch (Exception)
            {

                throw;
            }
        }

        public void AddCollection(workout_collection item)
        {
            try
            {
                WorkoutspaEntities db = new WorkoutspaEntities();
                db.workout_collection.Add(item);
                db.SaveChanges();
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }

        public void DeleteCollection(int id)
        {
            Console.WriteLine("enter the collection id to delete");
            int Id = int.Parse(Console.ReadLine());
            try
            {
                WorkoutspaEntities db = new WorkoutspaEntities();
                var ObjCollection = (from obj in db.workout_collection
                                     where obj.workout_id == Id
                                     select obj).First();
                db.workout_collection.Remove(ObjCollection);
                db.SaveChanges();


            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


        public void EditCategory(workout_collection item)
        {

            try
            {
                WorkoutspaEntities db = new WorkoutspaEntities();
                var ObjCategory = (from obj in db.workout_collection
                                   where obj.workout_id == item.workout_id
                                   select obj).First();

                ObjCategory.workout_title = item.workout_title;
                ObjCategory.workout_note = item.workout_note;
                ObjCategory.calories_burn_per_min = item.calories_burn_per_min;
                ObjCategory.category_id = item.category_id;


                db.SaveChanges();




            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public workout_collection Get(int id)
        {
            workout_collection objWork = null;

            try
            {
                WorkoutspaEntities db = new WorkoutspaEntities();
                objWork = (from obj in db.workout_collection
                           where obj.workout_id == id
                           select obj).First();
            }
            catch (Exception ex)
            {
                throw ex;
            }

            return objWork;

        }
    }
}
