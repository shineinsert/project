using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using Toolbelt.ComponentModel.DataAnnotations.Schema;

namespace Database.Entities
{
    public class EntityWithUpdatedTracking
    {
        [Display(Name = "วันที่ปรับปรุงข้อมูล")]
        [Column(TypeName = "datetime")]
        [Index()]
        public DateTime UpdatedDate { get; set; }

    }
}
