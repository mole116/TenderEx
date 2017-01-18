using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TenderEx.Models;

namespace TenderEx.Controllers
{

    public class InvoiceController : ApiController
    {
        static Dictionary<int, Invoice> invoicesDictionary = new Dictionary<int, Invoice>();
        // GET api/<controller>
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}

        // GET api/<controller>/5
        public IHttpActionResult Get(int id)
        {
            Invoice invoice;
            if (invoicesDictionary.TryGetValue(id, out invoice))
            {
                return Ok(invoice);
            }
            return NotFound();
        }

        // POST api/<controller>
        [HttpPost]
        public HttpResponseMessage Post(Invoice invoice)
        {

            if (ModelState.IsValid)
            {
                if (!invoicesDictionary.ContainsKey(invoice.id))
                {
                    invoicesDictionary.Add(invoice.id, invoice);
                    var response = Request.CreateResponse(HttpStatusCode.OK, "Invoice " + invoice.id + "was added to the system");
                    return response;
                }
                else
                {
                    var response = Request.CreateResponse(HttpStatusCode.Conflict, "Invoice " + invoice.id + " is already exist in the system");
                    return response;
                }

            }
            else
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);

        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}