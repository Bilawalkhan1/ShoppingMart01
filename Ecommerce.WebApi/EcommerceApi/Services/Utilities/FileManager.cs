using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace EcommerceApi.Services.Utilities
{
    public class FileManager
    {

        private static string _pathToStorageFolder = null;
        public static void SetStoragePath(string pathToStorageFolder)
        {
            _pathToStorageFolder = pathToStorageFolder;
        }
        public static void SaveFile(string fileName, byte[] fileBytes)
        {
            string pathToFile = Path.Combine(_pathToStorageFolder, fileName);

            WriteFileBytesToDisk(fileBytes: fileBytes, pathToFile: pathToFile);
        }
        public static void WriteFileBytesToDisk(byte[] fileBytes, string pathToFile)
        {
            using(FileStream fileStream = new FileStream(
                pathToFile,
                FileMode.OpenOrCreate,
                FileAccess.ReadWrite,
                FileShare.ReadWrite))
            {
                fileStream.Write(fileBytes);
                fileStream.Close();
            }
        }
    }
}
