from django.conf.urls import url
from .import views

app_name = 'galleryroot'

urlpatterns = [
    url(r'^$', views.index_view, name='index'),
    url(r'^search/$', views.search, name="search"),
    url(r'^dashboard/$', views.dashboard, name='dashboard'),
    url(r'^login/$', views.login_view, name='login'),
    url(r'^logout/$', views.logout_view, name='logout'),
    url(r'^register/$', views.register_view, name='register'),
]
