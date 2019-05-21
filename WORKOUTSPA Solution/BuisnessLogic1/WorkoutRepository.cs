using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BuisnessLogic1
{
    public class WorkoutRepository
    {

      public List<workout_category> ListAllCategory()
        {
            try
            {

                WorkoutspaEntities1 db = new WorkoutspaEntities1();
               
                return db.workout_category.ToList();

            }
            catch (Exception)
            {

                throw;
            }
        }

        public void AddCategory(workout_category item)
        {
            try
            {
                WorkoutspaEntities1 db = new WorkoutspaEntities1();
                db.workout_category.Add(item);
                db.SaveChanges();
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }
        public void DeleteCategory(int id)
        {
            Console.WriteLine("enter the category id to delete");
            int Id = int.Parse(Console.ReadLine());
            try
            {
                WorkoutspaEntities1 db = new WorkoutspaEntities1();
                var ObjCategory = (from obj in db.workout_category
                                   where obj.category_id == Id
                                   select obj).First();
                db.workout_category.Remove(ObjCategory);
                db.SaveChanges();


            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void EditCategory(workout_category item)
        {

            try
            {
                WorkoutspaEntities1 db = new WorkoutspaEntities1();
                var ObjCategory = (from obj in db.workout_category
                                   where obj.category_id == item.category_id
                                   select obj).First();

                ObjCategory.category_name= item.category_name;
               
                db.SaveChanges();




            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public workout_category Get(int id)
        {
            workout_category objWork = null;

            try
            {
                WorkoutspaEntities1 db = new WorkoutspaEntities1();
                objWork = (from obj in db.workout_category
                          where obj.category_id == id
                          select obj).First();
            }
            catch (Exception ex)
            {
                throw ex;
            }

            return objWork;

        }


        public List<workout_collection> ListAllCollection()
        {
            try
            {

                WorkoutspaEntities1 db = new WorkoutspaEntities1();

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
                WorkoutspaEntities1 db = new WorkoutspaEntities1();
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
                WorkoutspaEntities1 db = new WorkoutspaEntities1();
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

        public void EditCollection(workout_collection item)
        {

            try
            {
                WorkoutspaEntities1 db = new WorkoutspaEntities1();
                var ObjCollection = (from obj in db.workout_collection
                                   where obj.workout_id == item.workout_id
                                     select obj).First();

                ObjCollection.workout_title = item.workout_title;
                ObjCollection.workout_note =  item.workout_note;
                ObjCollection.calories_burn_per_min = item.calories_burn_per_min;
                ObjCollection.category_id = item.category_id;
                db.SaveChanges();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public workout_collection Find(int id)
        {
            workout_collection objWork = null;

            try
            {
                WorkoutspaEntities1 db = new WorkoutspaEntities1();
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
              
            
           
        
       
            
      
    
