using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Extensions
{
    public static class UploadFileExtension
    {
        public static bool IsValidFileExtensions(string fileName, string allowedExtensions)
        {
            var _allowedExtensions = allowedExtensions?.Split(',').Select(p => p.Trim()).ToList();
            fileName = Path.GetFileName(fileName);
            var fileExtension = Path.GetExtension(fileName);

            return _allowedExtensions == null || _allowedExtensions.Any(i => i.Equals(fileExtension, StringComparison.InvariantCultureIgnoreCase));
        }

        public static string GetUniqueFileName(string fileName)
        {
            fileName = Path.GetFileName(fileName);
            var name = !string.IsNullOrWhiteSpace(fileName) ? fileName : "NoName";
            name = name.Trim('"').Replace("&", "and");
            return Path.GetFileNameWithoutExtension(fileName)
                      + "_"
                      + DateTime.Now.ToString("ddMMyyyhhmmss")
                      + Path.GetExtension(fileName);
        }
    }
}
