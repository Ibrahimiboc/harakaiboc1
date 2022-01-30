from django.contrib import admin
from .models import Book, BookAdmin, User
admin.site.register(Book,BookAdmin)
admin.site.register(User)



