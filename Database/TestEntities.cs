using Database.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Reflection;
using System.Text;

namespace Database
{
    public class TestEntities : DbContext
    {
        private static string ConnectionString = "Data Source=localhost;Initial Catalog=Database;Integrated Security=true;";
        public static string DefaultConnectionName = "TestEntities";

        public static void Boostrap(string connectionString)
        {
            ConnectionString = connectionString;
        }

        public TestEntities()
        {

        }

        public TestEntities(DbContextOptions<TestEntities> options)
            : base(options)
        {

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseLazyLoadingProxies().UseSqlServer(ConnectionString, builder =>
            {
                builder.EnableRetryOnFailure(5, TimeSpan.FromSeconds(10), null);
                builder.UseNetTopologySuite();
            });
            base.OnConfiguring(optionsBuilder);
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {


            //Composite Key
            base.OnModelCreating(modelBuilder);
        }

        public static Func<string> UsernameGetterFunction { get; set; }
        private void OnBeforeSaving()
        {
            DateTime now = DateTime.Now;
            foreach (var entry in this.ChangeTracker.Entries().Where(e => e.State == EntityState.Added
                                                                     || e.State == EntityState.Modified).ToList())
            {
                var preBeforeSavedMethod = entry.Entity.GetType().GetMethod("PreBeforeSaved");

                if (preBeforeSavedMethod != null)
                {
                    preBeforeSavedMethod.Invoke(entry.Entity, new Object[] { });
                }
            }

            foreach (var entry in this.ChangeTracker.Entries().Where(e => e.State == EntityState.Added
                                                                 || e.State == EntityState.Modified).ToList())
            {
                var createdDateProp = entry.Entity.GetType().GetProperty("CreatedDate");
                var createdByProp = entry.Entity.GetType().GetProperty("CreatedBy");
                var updatedDateProp = entry.Entity.GetType().GetProperty("UpdatedDate");
                var updatedByProp = entry.Entity.GetType().GetProperty("UpdatedBy");
                var beforeSavedMethod = entry.Entity.GetType().GetMethod("BeforeSaved");

                if (entry.State == EntityState.Added)
                {
                    if (createdDateProp != null)
                    {
                        DateTime old_created_date = Convert.ToDateTime(createdDateProp.GetValue(entry.Entity));
                        if (old_created_date == DateTime.MinValue)
                        {
                            createdDateProp.SetValue(entry.Entity, now);
                        }
                    }
                    if (createdByProp != null)
                    {
                        createdByProp.SetValue(entry.Entity, UsernameGetterFunction());
                    }
                }
                if (updatedDateProp != null && updatedByProp != null)
                {
                    if (updatedDateProp != null)
                        updatedDateProp.SetValue(entry.Entity, now);
                    if (updatedByProp != null)
                        updatedByProp.SetValue(entry.Entity, UsernameGetterFunction());
                }
                if (beforeSavedMethod != null)
                {
                    beforeSavedMethod.Invoke(entry.Entity, new Object[] { });
                }

                // fix date time by convert to local time before saving to database
                foreach (var field in entry.Entity.GetType().GetProperties())
                {
                    if (field.PropertyType == typeof(DateTime) || field.PropertyType == typeof(DateTime?))
                    {
                        DateTime? d = field.GetValue(entry.Entity) as DateTime?;
                        if (d.HasValue && d.Value.Kind == DateTimeKind.Utc)
                        {
                            d = d.Value.ToLocalTime();
                            field.SetValue(entry.Entity, d.Value);
                        }
                    }
                }

            }
        }

        public override int SaveChanges(bool acceptAllChangesOnSuccess)
        {
            OnBeforeSaving();
            return base.SaveChanges(acceptAllChangesOnSuccess);
        }
    }
        public static class DataAnnotationsExtension
        {
            public static DisplayAttribute GetDisplayAttributesFrom(this Enum enumValue, Type enumType)
            {
                return enumType.GetMember(enumValue.ToString())
                               .Where(a => a.MemberType == MemberTypes.Field)
                               .First()
                               .GetCustomAttribute<DisplayAttribute>();
            }
        }

    }

