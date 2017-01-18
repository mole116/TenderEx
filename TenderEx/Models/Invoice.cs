using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TenderEx.Models
{
    public class Invoice
    {
        public int id { set; get; }
        public string companyName { set; get; }
        public DateTime date { set; get; }
        public int total { set; get; }
        public decimal totalWithVat { set; get; }
        public List<Job> jobs { set; get; }
    }
}