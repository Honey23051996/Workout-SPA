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
        



    }
}
              
            
           
        
       
            
      
    
