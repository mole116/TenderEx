using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TenderEx.Models
{
    public class Job
    {
        public string jobName { set; get; }
        public int hours { set; get; }
        public int pricePerHour { set; get; }
        public int totalPerJob { set; get; }
        public string remark { set; get; }
    }
}