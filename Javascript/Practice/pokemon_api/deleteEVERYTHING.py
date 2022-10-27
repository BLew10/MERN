import os

basepath = (r'C:\Users\Brand\Coding Dojo')

def find_and_delete():
    for root, dirs, files in os.walk(basepath):
        for name in dirs:
            # os.remove(os.path.join(root, name))
            if name == '.git':
                os.remove(os.path.join(root, name))
find_and_delete()
