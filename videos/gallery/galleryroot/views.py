from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.utils import timezone
from django.views import generic
#  from django.views.generic.edit import FormView
from django.contrib import auth
from django.contrib.auth.models import User
from searchengine.models import Video
from searchengine.forms import VideoModelForm

# class IndexView(generic.ListView):
#     context_object_name = 'latest_video_list'
#     template_name = 'searchengine/index_page.html'
#     def get_queryset(self):
#         return Video.objects.all().filter(video_pub_date__lte=timezone.now()).order_by('-video_pub_date')


def index_view(request):
    print("YOLO")
    if request.POST:
        print(request.POST['term'])
        return HttpResponseRedirect("/")
    else:
        context = {}
        return render(request, 'galleryroot/index_page.html', context)


def search(request):
    if request.POST:
        print(request.POST['term'])
        return HttpResponseRedirect("/search/")
    else:
        context = {"latest_video_list": Video.objects.all().filter(video_pub_date__lte=timezone.now()).order_by('-video_pub_date')}
        return render(request, 'galleryroot/search.html', context)


def dashboard(request):
    if request.POST:
        print(request.POST['term'])
        return HttpResponseRedirect("/dashboard/")
    else:
        context = {}
        return render(request, 'galleryroot/dashboard.html', context)


class VideoFormView(generic.ListView):
    template_name = 'videoform'
    form_class = VideoModelForm

    def form_valid(self, form):
        return super(VideoFormView, self).form_valid(form)


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
        return render(request, 'galleryroot/index_page.html', {'profile': user, 'latest_video_list': Video.objects.all().filter(video_pub_date__lte=timezone.now()).order_by('-video_pub_date')})
    else:
        # Show an error page
        return render(request, 'galleryroot/index_page.html', {'profile': 'failed', 'latest_video_list': Video.objects.all().filter(video_pub_date__lte=timezone.now()).order_by('-video_pub_date')})


def logout_view(request):
    auth.logout(request)
    # Redirect to a success page.
    return render(request, 'galleryroot/index_page.html', {'profile': 'logout', 'latest_video_list': Video.objects.all().filter(video_pub_date__lte=timezone.now()).order_by('-video_pub_date')})


def register_view(request):
    if request.method == "POST":
        incoming_username = request.POST.get('username', '')
        incoming_password = request.POST.get('password', '')
        print("REGISTER")
        user = User.objects.create_user(username=incoming_username, password=incoming_password)
        user.save()
        return render(request, 'galleryroot/index_page.html', {'profile': 'registered', 'latest_video_list': Video.objects.all().filter(video_pub_date__lte=timezone.now()).order_by('-video_pub_date')})
    else:
        return render(request, 'galleryroot/register.html', {'profile': 'registering', 'latest_video_list': Video.objects.all().filter(video_pub_date__lte=timezone.now()).order_by('-video_pub_date')})
