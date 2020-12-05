using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApi.Models;

namespace WebApi.Controllers
{
    public class UsersController : ApiController
    {
         public HttpResponseMessage Get()
        {
            string query = @"
                select UserId,UserFirstName,UserLastName,UserLogin,UserPassword from dbo.Users
            ";

            DataTable table = new DataTable();

            using(var con = new SqlConnection(ConfigurationManager.
                ConnectionStrings["UsersAppDB"].ConnectionString))
                using(var cmd = new SqlCommand(query,con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }

            return Request.CreateResponse(HttpStatusCode.OK, table);
        }


        public string Post(Users users)
        {
            try
            {
                string query = @"
            insert into dbo.Users values
            (
               '" + users.UserFirstName + @"'
               ,'" + users.UserLastName + @"'
               ,'" + users.UserLogin + @"'
               ,'" + users.UserPassword + @"'
)";

                DataTable table = new DataTable();

                using (var con = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["UsersAppDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }

                return "Added Successfully!";
            }
            catch(Exception)
            {
                return "Failed to Add!!";
            }
        }


        public string Put(Users users)
        {
            try
            {
            string query = @"
                update dbo.Users set
                UserFirstName= '" + users.UserFirstName + @"'
                ,UserLastName= '" + users.UserLastName  + @"'
                ,UserLogin=    '"  + users.UserLogin + @"'
                ,UserPassword= '"  + users.UserPassword + @"'
                where UserId = " + users.UserId+ @"
            ";  

                DataTable table = new DataTable();

                using (var con = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["UsersAppDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }

                return "Updated Successfully!";
            }
            catch (Exception)
            {
                return "Failed to Update!!";
            }
        }


        public string Delete(int id)
        {
            try
            {
                string query = @"
            delete from dbo.Users 
            where UserId = " + id + @"
            ";

                DataTable table = new DataTable();

                using (var con = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["UsersAppDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }

                return "Deleted Successfully!";
            }
            catch (Exception)
            {
                return "Failed to Delete!!";
            }
        }


    }
}
