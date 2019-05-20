using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


using NUnit.Framework;
using BuisnessLogic1;

namespace BuisnessLogic.Test
{ 
    [TestFixture]
    public class WorkoutRepoTest
    {
        [Test]
        public static void ListAllCategory()
        {
            var Obj = new WorkoutRepository();
            var expected = 0;
            var actual = Obj.ListAllCategory().Count();
            Assert.AreEqual(expected, actual);

        }

        
    }
}
