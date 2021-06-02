using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EcommerceApi.Common
{
    public class CommonExceptions
    {
    }

    [Serializable]
    class DataBaseEntityNotFoundException : Exception
    {
        public DataBaseEntityNotFoundException()
        {

        }

        public DataBaseEntityNotFoundException(int Id)
            : base(String.Format("No Record Found Against ID: {0}", Id))
        {

        }

    }
    public class DataValidationException<TEntityType> : Exception
    {
        private const string MultiFieldException = "<multiple fields>";

        public DataValidationException(
            string fieldName,
            string reason,
            Exception innerException = null,
            string identifier = null
        )
            : base($"Field '{fieldName}' in '{typeof(TEntityType).Name}' is invalid. Reason: {reason}", innerException)
        {
            FieldName = fieldName;
            Reason = reason;
            Identifier = identifier;
            Data.Add(fieldName, Reason);
        }
        public string FieldName { get; }
        public string Reason { get; }
        public string Identifier { get; }
    }
}
