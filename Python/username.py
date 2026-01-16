import uuid

username = str(uuid.uuid4()).split("-")[-1]
print(username)