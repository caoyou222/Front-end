from django.shortcuts import render, get_object_or_404
from django.http import HttpResponseRedirect
from django.utils import timezone
from django.views import generic
from django.views.generic.edit import FormView
from django.contrib.postgres.search import SearchQuery, SearchRank, SearchVector
from django.views.generic import ListView
from django.contrib import auth
from django.contrib.auth.models import User
from .models import Video, GlobalTag
from .forms import VideoModelForm



# class IndexView(generic.ListView):
#     context_object_name = 'latest_video_list'
#     template_name = 'searchengine/index_page.html'
#     def get_queryset(self):
#         return Video.objects.all().filter(video_pub_date__lte=timezone.now()).order_by('-video_pub_date')

# class IndexView(generic.ListView):
#     context_object_name = 'obj_list'
#     template_name = 'searchengine/index_page.html'

#     #  context_object_name = 'latest_video_list'
#     #  if request.user.is_authenticated():
#     #      template_name = 'searchengine/index_page.html'
#     #  else:
#     #      template_name = 'authentication/login.html'

#     def get_queryset(self):
#         tag_names = []
#         # for tag in GlobalTag.objects.all():
#         #     tag_names.append(tag.tag_name)
#         # return Video.objects.all().filter(video_pub_date__lte=timezone.now()).order_by('-video_pub_date')
#         return {"tag_names": GlobalTag.objects.all(),
#                 "latest_video_list": Video.objects.all().filter(video_pub_date__lte=timezone.now()).order_by('-video_pub_date')}
    

# def tag_view(request):
#     return HttpResponseRedirect("/")
def tag_view(request,name):
    tag = get_object_or_404(GlobalTag, tag_name=name)
    video = Video.objects.filter(global_tag=tag)
    tag_names = []
    for t in GlobalTag.objects.all():
        tag_names.append(t.tag_name)
    context = {'tag': tag, 'video_list': video,'tag_names':tag_names}
    print(context)
    return render(request,'searchengine/tag_page.html', context)

def index_view(request):
    if request.POST:
        print(request.POST['term'])
        return HttpResponseRedirect("/")
    else:
        context = {}
        return render(request, 'searchengine/index_page.html', context)

def search(request):
    if request.POST:
        print(request.POST['term'])
        return HttpResponseRedirect("/search/")
    else:
        tag_names = []
        for tag in GlobalTag.objects.all():
            tag_names.append(tag.tag_name)
        print(tag_names)
        context = {"tag_names": tag_names,"latest_video_list": Video.objects.all().filter(video_pub_date__lte=timezone.now()).order_by('-video_pub_date')}
        return render(request, 'searchengine/search.html', context)

def do_search(request):
    keywords = request.GET.get('q')
    print(keywords)

    if not keywords:
        error_msg = 'Search Again!'
        return render(request, 'searchengine/search.html', {'error_msg': error_msg})

    video_list = Video.objects.all().filter(video_name__icontains=keywords)
    tag_names = []
    for tag in GlobalTag.objects.all():
        tag_names.append(tag.tag_name)
    context = {"tag_names": tag_names,"latest_video_list": video_list.order_by('-video_pub_date')}
    return render(request, 'searchengine/search.html', context)

def dashboard(request):
    if request.POST:
        print(request.POST['term'])
        return HttpResponseRedirect("/dashboard/")
    else:
        context = {}
        return render(request, 'searchengine/dashboard.html', context)

class VideoFormView(generic.ListView):
    template_name = 'videoform'
    form_class = VideoModelForm

    def form_valid(self, form):
        return super(VideoFormView, self).form_valid(form)

def make_tag(request):
    if request.method == "POST":
        incoming_tag = request.POST.get('tag', '')
        tag = GlobalTag.objects.create(tag_name=incoming_tag)
        tag.save()
        video_list = Video.objects.all().filter(video_pub_date__lte=timezone.now()).order_by('-video_pub_date')
        tag_names = []
        for tag in GlobalTag.objects.all():
            tag_names.append(tag.tag_name)
        context = {"tag_names": tag_names,"latest_video_list": video_list.order_by('-video_pub_date')}
        return render(request, 'searchengine/search.html', context)
    else:
        return render(request, 'searchengine/search.html', context)

def login_view(request):
    username = request.POST.get('username', '')
    password = request.POST.get('password', '')
    print(username, password)
    user = auth.authenticate(username=username, password=password)
    print(user)
    if user is not None and user.is_active:
        # Correct password, and the user is marked "active"
        auth.login(request, user)
        # Redirect to a success page.
        return render(request, 'searchengine/index_page.html', {'profile': user, 'latest_video_list': Video.objects.all().filter(video_pub_date__lte=timezone.now()).order_by('-video_pub_date')})
    else:
        # Show an error page
        return render(request, 'searchengine/index_page.html', {'profile': 'failed', 'latest_video_list': Video.objects.all().filter(video_pub_date__lte=timezone.now()).order_by('-video_pub_date')})

def logout_view(request):
    auth.logout(request)
    # Redirect to a success page.
    return render(request, 'searchengine/index_page.html', {'profile': 'logout', 'latest_video_list': Video.objects.all().filter(video_pub_date__lte=timezone.now()).order_by('-video_pub_date')})

def register_view(request):
    if request.method == "POST":
        incoming_username = request.POST.get('username', '')
        incoming_password = request.POST.get('password', '')
        print("REGISTER")
        user = User.objects.create_user(username=incoming_username, password=incoming_password)
        user.save()
        return render(request, 'searchengine/index_page.html', {'profile': 'registered', 'latest_video_list': Video.objects.all().filter(video_pub_date__lte=timezone.now()).order_by('-video_pub_date')})
    else:
        return render(request, 'searchengine/register.html', {'profile': 'registering', 'latest_video_list': Video.objects.all().filter(video_pub_date__lte=timezone.now()).order_by('-video_pub_date')})
