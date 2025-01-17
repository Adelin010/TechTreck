from os import path, makedirs
from pathlib import Path

# Util oriented class to work with the disk
# allows creation of directories and files, storing and deleting
# !! each created file must be found in a directory
class DiskStorage:
    
    def __init__(self, directory_name):
        self.storage_directory = directory_name

    def get_directory_path(self):
        return Path(self.storage_directory)

    def create_directory(self):
        if (not path.exists(self.get_directory_path())):
            makedirs(self.storage_directory)

    def insert_file(self, file_name, content):
        file = open(self.get_directory_path() / file_name, 'w')
        file.write(content)
        file.close()


log_storage = DiskStorage('logs')

log_storage.insert_file('test.txt', 'Test')