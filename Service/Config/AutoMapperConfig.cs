using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Service.Config
{
    public class AutoMapperConfig
    {
        public static void InitialAutoMapper()
        {
            // ทุกคน ให้ย้าย CreateMap ไปสร้างไว้เป็น Class Profile ไว้ต่อจาก Model Class ที่เกี่ยวข้อง โปรแกรมจะค้นหา Class ที่
            // Inherite จาก Profile clas แล้ว Register ให้เอง 
            Mapper.Initialize(cfg =>
            {
                // we will use profile to configure
                // Please write create map in profile next to the model class
                var profiles = typeof(AutoMapperConfig).Assembly.GetTypes().Where(x => typeof(Profile).IsAssignableFrom(x));
                foreach (var profile in profiles)
                {
                    cfg.AddProfile(Activator.CreateInstance(profile) as Profile);
                }
            });
        }
    }
}
