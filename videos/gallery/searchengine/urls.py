from django.conf.urls import url
from searchengine import views

app_name = 'searchengine'

urlpatterns = [
    # url(r'^$', views.IndexView.as_view(), name='index'),
    url(r'^$', views.index_view, name='index'),
    url(r'^search/$', views.search, name="search"),
    url(r'^dashboard/$', views.dashboard, name='dashboard'),
    url(r'^login/$', views.login_view, name='login'),
    url(r'^logout/$', views.logout_view, name='logout'),
    url(r'^register/$', views.register_view, name='register'),
    url(r'^tag/(?P<name>.*)/$', views.tag_view, name='tag'),
    url(r'^do_search/$', views.do_search, name="do_search"),
    url(r'^make_tag/$', views.make_tag, name='make_tag'),
]
