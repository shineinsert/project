using System;
using System.Collections.Generic;
using System.Text;

namespace Service.Model
{
    public class PaginationParams
    {
        public string Sorting { get; set; }
        public int Page { get; set; }
        public int ItemPerPage { get; set; }
        public string SearchText { get; set; }
        public PaginationParams()
        {
            Sorting = "";
            Page = 1;
            ItemPerPage = 999999;
            SearchText = "";
        }
    }

    public class PaginationResult<T>
    {
        public PaginationResult()
        {
            Page = 1;
            ItemPerPage = 10;
            Total = 0;
            Results = new List<T>();
        }

        public int Page { get; set; }
        public int Total { get; set; }
        public int ItemPerPage { get; set; }
        public IList<T> Results { get; set; }
    }

    public class ListParams<T>
    {
        public ListParams()
        {
            List = new List<T>();
        }

        public int Count { get; set; }
        public List<T> List { get; set; }
    }

    public class PaginationPostParams<T>
    {
        public string Sorting { get; set; }
        public int Page { get; set; }
        public int ItemPerPage { get; set; }
        public T Search { get; set; }

        public PaginationPostParams()
        {
            Sorting = "";
            Page = 0;
            ItemPerPage = 2;
        }
    }

    public class PaginationPostResult<T> where T : new()
    {
        public PaginationPostResult()
        {
            Page = 1;
            ItemPerPage = 2;
            Total_1 = 0;
            Total_2 = 0;
            Results = new T();
        }

        public int Page { get; set; }
        public int Total_1 { get; set; }
        public int Total_2 { get; set; }
        public int ItemPerPage { get; set; }
        public T Results { get; set; }
    }
}
